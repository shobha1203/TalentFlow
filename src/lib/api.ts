import { 
  Job, 
  Candidate, 
  Assessment, 
  JobFormData, 
  CandidateFormData, 
  PaginatedResponse,
  JobFilters,
  CandidateFilters 
} from '../types';

const API_BASE_URL = '/api';

// Generic fetch wrapper with error handling
async function apiRequest<T>(
  endpoint: string, 
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    // Handle 204 No Content responses
    if (response.status === 204) {
      return {} as T;
    }

    return await response.json();
  } catch (error) {
    console.error(`API request failed: ${endpoint}`, error);
    throw error;
  }
}

// Jobs API
export const jobsApi = {
  // Get paginated jobs with filters
  getJobs: async (
    page: number = 1,
    pageSize: number = 10,
    filters: JobFilters = {}
  ): Promise<PaginatedResponse<Job>> => {
    const params = new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
    });

    if (filters.search) {
      params.append('search', filters.search);
    }

    if (filters.status && filters.status !== 'all') {
      params.append('status', filters.status);
    }

    return apiRequest<PaginatedResponse<Job>>(`/jobs?${params.toString()}`);
  },

  // Get single job by ID
  getJob: async (id: string): Promise<Job> => {
    return apiRequest<Job>(`/jobs/${id}`);
  },

  // Create new job
  createJob: async (jobData: JobFormData): Promise<Job> => {
    return apiRequest<Job>('/jobs', {
      method: 'POST',
      body: JSON.stringify(jobData),
    });
  },

  // Update existing job
  updateJob: async (id: string, jobData: Partial<JobFormData>): Promise<Job> => {
    return apiRequest<Job>(`/jobs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(jobData),
    });
  },

  // Delete job
  deleteJob: async (id: string): Promise<void> => {
    return apiRequest<void>(`/jobs/${id}`, {
      method: 'DELETE',
    });
  },

  // Archive job
  archiveJob: async (id: string): Promise<Job> => {
    return apiRequest<Job>(`/jobs/${id}/archive`, {
      method: 'PATCH',
    });
  },

  // Unarchive job
  unarchiveJob: async (id: string): Promise<Job> => {
    return apiRequest<Job>(`/jobs/${id}/unarchive`, {
      method: 'PATCH',
    });
  },

  // Reorder jobs
  reorderJobs: async (jobUpdates: { id: string; order: number }[]): Promise<void> => {
    return apiRequest<void>('/jobs/reorder', {
      method: 'PATCH',
      body: JSON.stringify({ jobUpdates }),
    });
  },
};

// Candidates API
export const candidatesApi = {
  // Get candidates with optional filters
  getCandidates: async (filters: CandidateFilters = {}): Promise<{ data: Candidate[] }> => {
    const params = new URLSearchParams();

    if (filters.jobId) {
      params.append('jobId', filters.jobId);
    }

    if (filters.stage && filters.stage !== 'all') {
      params.append('stage', filters.stage);
    }

    if (filters.search) {
      params.append('search', filters.search);
    }

    const queryString = params.toString();
    const endpoint = queryString ? `/candidates?${queryString}` : '/candidates';
    
    return apiRequest<{ data: Candidate[] }>(endpoint);
  },

  // Get single candidate by ID
  getCandidate: async (id: string): Promise<Candidate> => {
    return apiRequest<Candidate>(`/candidates/${id}`);
  },

  // Create new candidate
  createCandidate: async (candidateData: CandidateFormData & { jobId: string }): Promise<Candidate> => {
    return apiRequest<Candidate>('/candidates', {
      method: 'POST',
      body: JSON.stringify(candidateData),
    });
  },

  // Update existing candidate
  updateCandidate: async (id: string, candidateData: Partial<Candidate>): Promise<Candidate> => {
    return apiRequest<Candidate>(`/candidates/${id}`, {
      method: 'PUT',
      body: JSON.stringify(candidateData),
    });
  },

  // Delete candidate
  deleteCandidate: async (id: string): Promise<void> => {
    return apiRequest<void>(`/candidates/${id}`, {
      method: 'DELETE',
    });
  },

  // Update candidate stage
  updateCandidateStage: async (id: string, stage: Candidate['stage']): Promise<Candidate> => {
    return apiRequest<Candidate>(`/candidates/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ stage }),
    });
  },
};

// Assessments API
export const assessmentsApi = {
  // Get assessments with optional job filter
  getAssessments: async (jobId?: string): Promise<{ data: Assessment[] }> => {
    const params = jobId ? `?jobId=${jobId}` : '';
    return apiRequest<{ data: Assessment[] }>(`/assessments${params}`);
  },

  // Get single assessment by ID
  getAssessment: async (id: string): Promise<Assessment> => {
    return apiRequest<Assessment>(`/assessments/${id}`);
  },

  // Create new assessment
  createAssessment: async (assessmentData: Omit<Assessment, 'id' | 'createdAt'>): Promise<Assessment> => {
    return apiRequest<Assessment>('/assessments', {
      method: 'POST',
      body: JSON.stringify(assessmentData),
    });
  },

  // Update existing assessment
  updateAssessment: async (id: string, assessmentData: Partial<Assessment>): Promise<Assessment> => {
    return apiRequest<Assessment>(`/assessments/${id}`, {
      method: 'PUT',
      body: JSON.stringify(assessmentData),
    });
  },

  // Delete assessment
  deleteAssessment: async (id: string): Promise<void> => {
    return apiRequest<void>(`/assessments/${id}`, {
      method: 'DELETE',
    });
  },
};

// Export all APIs
export const api = {
  jobs: jobsApi,
  candidates: candidatesApi,
  assessments: assessmentsApi,
};