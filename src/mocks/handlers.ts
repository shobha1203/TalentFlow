/* eslint-disable @typescript-eslint/no-explicit-any */
import { http, HttpResponse } from 'msw';
import { db } from '../lib/db';
import type { JobDB, CandidateDB, AssessmentDB, PaginatedResponse, JobFilters, CandidateFilters } from '../types';

// Simulate network latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simulate random failures for testing
const shouldFail = () => Math.random() < 0.1; // 10% failure rate

export const handlers = [
  // Jobs API
  http.get('/api/jobs', async ({ request }) => {
    await delay(300);
    
    if (shouldFail()) {
      return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const search = url.searchParams.get('search') || '';
    const status = url.searchParams.get('status') || 'all';
    const tags = url.searchParams.get('tags')?.split(',').filter(Boolean) || [];

    let jobs = await db.jobs.orderBy('order').toArray();

    // Apply search filter
    if (search) {
      jobs = jobs.filter(job => 
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.description?.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply status filter
    if (status && status !== 'all') {
      jobs = jobs.filter(job => job.status === status);
    }

    // Apply tags filter
    if (tags.length > 0) {
      jobs = jobs.filter(job => 
        tags.some(tag => job.tags.includes(tag))
      );
    }

    const total = jobs.length;
    const startIndex = (page - 1) * limit;
    const paginatedJobs = jobs.slice(startIndex, startIndex + limit);

    const response: PaginatedResponse<JobDB> = {
      data: paginatedJobs,
      pagination: {
        page,
        pageSize: limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    };

    return HttpResponse.json(response);
  }),

  http.get('/api/jobs/:id', async ({ params }) => {
    await delay(200);
    
    if (shouldFail()) {
      return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    const { id } = params;
    const job = await db.jobs.get(id as string);
    
    if (!job) {
      return HttpResponse.json({ error: 'Job not found' }, { status: 404 });
    }

    return HttpResponse.json(job);
  }),

  http.post('/api/jobs', async ({ request }) => {
    await delay(500);
    
    if (shouldFail()) {
      return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    const jobData = await request.json() as any;

    // Validate required fields
    if (!jobData.title) {
      return HttpResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const newJob = {
      title: jobData.title,
      slug: jobData.title.toLowerCase().replace(/\s+/g, '-'),
      status: jobData.status || 'active',
      tags: jobData.tags || [],
      order: (await db.jobs.count()) + 1,
      description: jobData.description,
      requirements: jobData.requirements
    } as unknown as JobDB;

    const id = await db.jobs.add(newJob);
    const createdJob = await db.jobs.get(id);

    return HttpResponse.json(createdJob, { status: 201 });
  }),

  http.put('/api/jobs/:id', async ({ params, request }) => {
    await delay(400);
    
    if (shouldFail()) {
      return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    const { id } = params;
    const jobData = await request.json() as any;

    const existingJob = await db.jobs.get(id as string);
    if (!existingJob) {
      return HttpResponse.json({ error: 'Job not found' }, { status: 404 });
    }

    const updatedJob = {
      ...existingJob,
      ...jobData,
      updatedAt: Date.now()
    };

    await db.jobs.put(updatedJob);
    const job = await db.jobs.get(id as string);

    return HttpResponse.json(job);
  }),

  http.delete('/api/jobs/:id', async ({ params }) => {
    await delay(300);
    
    if (shouldFail()) {
      return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    const { id } = params;
    const job = await db.jobs.get(id as string);
    
    if (!job) {
      return HttpResponse.json({ error: 'Job not found' }, { status: 404 });
    }

    await db.jobs.delete(id as string);
    return HttpResponse.json({ message: 'Job deleted successfully' });
  }),

  // Candidates API
  http.get('/api/candidates', async ({ request }) => {
    await delay(300);
    
    if (shouldFail()) {
      return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const search = url.searchParams.get('search') || '';
    const stage = url.searchParams.get('stage') || 'all';
    const jobId = url.searchParams.get('jobId');

    let candidates = await db.candidates.orderBy('appliedAt').reverse().toArray();

    // Apply search filter
    if (search) {
      candidates = candidates.filter(candidate => 
        candidate.name.toLowerCase().includes(search.toLowerCase()) ||
        candidate.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply stage filter
    if (stage && stage !== 'all') {
      candidates = candidates.filter(candidate => candidate.stage === stage);
    }

    // Apply job filter
    if (jobId) {
      candidates = candidates.filter(candidate => candidate.jobId === jobId);
    }

    const total = candidates.length;
    const startIndex = (page - 1) * limit;
    const paginatedCandidates = candidates.slice(startIndex, startIndex + limit);

    const response: PaginatedResponse<CandidateDB> = {
      data: paginatedCandidates,
      pagination: {
        page,
        pageSize: limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    };

    return HttpResponse.json(response);
  }),

  http.get('/api/candidates/:id', async ({ params }) => {
    await delay(200);
    
    if (shouldFail()) {
      return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    const { id } = params;
    const candidate = await db.candidates.get(id as string);
    
    if (!candidate) {
      return HttpResponse.json({ error: 'Candidate not found' }, { status: 404 });
    }

    return HttpResponse.json(candidate);
  }),

  http.post('/api/candidates', async ({ request }) => {
    await delay(500);
    
    if (shouldFail()) {
      return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    const candidateData = await request.json() as any;

    // Validate required fields
    if (!candidateData.name || !candidateData.email || !candidateData.jobId) {
      return HttpResponse.json({ error: 'Name, email, and jobId are required' }, { status: 400 });
    }

    // Check if job exists
    const job = await db.jobs.get(candidateData.jobId);
    if (!job) {
      return HttpResponse.json({ error: 'Job not found' }, { status: 400 });
    }

    const newCandidate = {
      name: candidateData.name,
      email: candidateData.email,
      jobId: candidateData.jobId,
      stage: candidateData.stage || 'applied',
      appliedAt: Date.now(),
      notes: [],
      resume: candidateData.resume
    } as unknown as CandidateDB;

    const id = await db.candidates.add(newCandidate);
    const createdCandidate = await db.candidates.get(id);

    return HttpResponse.json(createdCandidate, { status: 201 });
  }),

  http.put('/api/candidates/:id', async ({ params, request }) => {
    await delay(400);
    
    if (shouldFail()) {
      return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    const { id } = params;
    const candidateData = await request.json() as any;

    const existingCandidate = await db.candidates.get(id as string);
    if (!existingCandidate) {
      return HttpResponse.json({ error: 'Candidate not found' }, { status: 404 });
    }

    const updatedCandidate = {
      ...existingCandidate,
      ...candidateData
    };

    await db.candidates.put(updatedCandidate);
    const candidate = await db.candidates.get(id as string);

    return HttpResponse.json(candidate);
  }),

  http.delete('/api/candidates/:id', async ({ params }) => {
    await delay(300);
    
    if (shouldFail()) {
      return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    const { id } = params;
    const candidate = await db.candidates.get(id as string);
    
    if (!candidate) {
      return HttpResponse.json({ error: 'Candidate not found' }, { status: 404 });
    }

    await db.candidates.delete(id as string);
    return HttpResponse.json({ message: 'Candidate deleted successfully' });
  }),

  // Assessments API
  http.get('/api/assessments', async ({ request }) => {
    await delay(300);
    
    if (shouldFail()) {
      return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    const url = new URL(request.url);
    const jobId = url.searchParams.get('jobId');

    let assessments = await db.assessments.orderBy('createdAt').reverse().toArray();

    if (jobId) {
      assessments = assessments.filter(assessment => assessment.jobId === jobId);
    }

    return HttpResponse.json(assessments);
  }),

  http.post('/api/assessments', async ({ request }) => {
    await delay(500);
    
    if (shouldFail()) {
      return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    const assessmentData = await request.json() as any;

    const newAssessment = {
      jobId: assessmentData.jobId,
      title: assessmentData.title,
      sections: assessmentData.sections || []
    } as unknown as AssessmentDB;

    const id = await db.assessments.add(newAssessment);
    const createdAssessment = await db.assessments.get(id);

    return HttpResponse.json(createdAssessment, { status: 201 });
  })
];
