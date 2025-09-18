import Dexie, { Table } from 'dexie';
import { JobDB, CandidateDB, AssessmentDB, AssessmentResponseDB } from '../types';

export class TalentFlowDatabase extends Dexie {
  jobs!: Table<JobDB>;
  candidates!: Table<CandidateDB>;
  assessments!: Table<AssessmentDB>;
  responses!: Table<AssessmentResponseDB>;

  constructor() {
    super('TalentFlowDatabase');
    
    this.version(1).stores({
      jobs: '++id, title, status, order, createdAt, updatedAt',
      candidates: '++id, name, email, jobId, stage, appliedAt',
      assessments: '++id, jobId, title, createdAt',
      responses: '++id, assessmentId, candidateId, submittedAt'
    });

    // Add hooks for automatic timestamp management
    this.jobs.hook('creating', function (primKey, obj, trans) {
      const now = Date.now();
      obj.createdAt = now;
      obj.updatedAt = now;
    });

    this.jobs.hook('updating', function (modifications: any, primKey, obj, trans) {
      modifications.updatedAt = Date.now();
    });

    this.candidates.hook('creating', function (primKey, obj, trans) {
      obj.appliedAt = obj.appliedAt || Date.now();
    });

    this.assessments.hook('creating', function (primKey, obj, trans) {
      obj.createdAt = obj.createdAt || Date.now();
    });

    this.responses.hook('creating', function (primKey, obj, trans) {
      obj.submittedAt = obj.submittedAt || Date.now();
    });
  }

  // Helper methods for common operations
  async getJobsWithPagination(
    page: number = 1,
    pageSize: number = 10,
    filters: { search?: string; status?: string } = {}
  ) {
    let query = this.jobs.orderBy('order');

    // Apply filters
    if (filters.status && filters.status !== 'all') {
      query = query.filter(job => job.status === filters.status);
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      query = query.filter(job => 
        job.title.toLowerCase().includes(searchTerm) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    const total = await query.count();
    const offset = (page - 1) * pageSize;
    const jobs = await query.offset(offset).limit(pageSize).toArray();

    return {
      data: jobs,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize)
      }
    };
  }

  async getCandidatesByJob(jobId: string) {
    const candidates = await this.candidates
      .where('jobId')
      .equals(jobId)
      .toArray();
    return candidates.sort((a, b) => b.appliedAt - a.appliedAt);
  }

  async getCandidatesByStage(stage: string, jobId?: string) {
    let query = this.candidates.where('stage').equals(stage);
    
    if (jobId) {
      const candidates = await query.toArray();
      return candidates.filter(candidate => candidate.jobId === jobId);
    }
    
    return query.toArray();
  }

  async getAssessmentsByJob(jobId: string) {
    const assessments = await this.assessments
      .where('jobId')
      .equals(jobId)
      .toArray();
    return assessments.sort((a, b) => b.createdAt - a.createdAt);
  }

  async getResponsesByAssessment(assessmentId: string) {
    const responses = await this.responses
      .where('assessmentId')
      .equals(assessmentId)
      .toArray();
    return responses.sort((a, b) => b.submittedAt - a.submittedAt);
  }

  async getResponsesByCandidate(candidateId: string) {
    const responses = await this.responses
      .where('candidateId')
      .equals(candidateId)
      .toArray();
    return responses.sort((a, b) => b.submittedAt - a.submittedAt);
  }

  // Bulk operations
  async bulkUpdateJobOrder(jobUpdates: { id: string; order: number }[]) {
    return this.transaction('rw', this.jobs, async () => {
      for (const update of jobUpdates) {
        await this.jobs.update(update.id, { order: update.order });
      }
    });
  }

  async archiveJob(jobId: string) {
    return this.jobs.update(jobId, { status: 'archived' });
  }

  async unarchiveJob(jobId: string) {
    return this.jobs.update(jobId, { status: 'active' });
  }

  // Seed data for development
  async seedData() {
    const jobCount = await this.jobs.count();
    
    if (jobCount === 0) {
      const sampleJobs: Omit<JobDB, 'id' | 'createdAt' | 'updatedAt'>[] = [
        {
          title: 'Senior Frontend Developer',
          slug: 'senior-frontend-developer',
          status: 'active',
          tags: ['React', 'TypeScript', 'CSS'],
          order: 1,
          description: 'We are looking for a senior frontend developer with React expertise.',
          requirements: ['5+ years React experience', 'TypeScript proficiency', 'CSS/SCSS skills']
        },
        {
          title: 'Backend Engineer',
          slug: 'backend-engineer',
          status: 'active',
          tags: ['Node.js', 'PostgreSQL', 'API'],
          order: 2,
          description: 'Backend engineer to work on our core API services.',
          requirements: ['Node.js experience', 'Database design', 'RESTful APIs']
        },
        {
          title: 'UX Designer',
          slug: 'ux-designer',
          status: 'archived',
          tags: ['Figma', 'User Research', 'Prototyping'],
          order: 3,
          description: 'UX Designer to improve our user experience.',
          requirements: ['Figma proficiency', 'User research experience', 'Portfolio required']
        }
      ];

      await this.jobs.bulkAdd(sampleJobs as JobDB[]);

      // Add sample candidates
      const jobs = await this.jobs.toArray();
      const sampleCandidates: Omit<CandidateDB, 'id'>[] = [
        {
          name: 'John Doe',
          email: 'john.doe@example.com',
          jobId: jobs[0].id,
          stage: 'applied',
          appliedAt: Date.now() - 86400000, // 1 day ago
          notes: []
        },
        {
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          jobId: jobs[0].id,
          stage: 'screen',
          appliedAt: Date.now() - 172800000, // 2 days ago
          notes: []
        },
        {
          name: 'Bob Johnson',
          email: 'bob.johnson@example.com',
          jobId: jobs[1].id,
          stage: 'tech',
          appliedAt: Date.now() - 259200000, // 3 days ago
          notes: []
        }
      ];

      await this.candidates.bulkAdd(sampleCandidates as CandidateDB[]);
    }
  }
}

export const db = new TalentFlowDatabase();

// Initialize seed data in development
if (process.env.NODE_ENV === 'development') {
  db.open().then(() => {
    db.seedData();
  });
}