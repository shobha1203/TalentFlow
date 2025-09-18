// Core data models for TalentFlow application

export interface Job {
  id: string;
  title: string;
  slug: string;
  status: 'active' | 'archived';
  tags: string[];
  order: number;
  description?: string;
  requirements?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  jobId: string;
  stage: 'applied' | 'screen' | 'tech' | 'offer' | 'hired' | 'rejected';
  appliedAt: Date;
  notes: Note[];
  resume?: string;
}

export interface Note {
  id: string;
  content: string;
  mentions: string[];
  authorId: string;
  createdAt: Date;
}

export interface Assessment {
  id: string;
  jobId: string;
  title: string;
  sections: AssessmentSection[];
  createdAt: Date;
}

export interface AssessmentSection {
  id: string;
  title: string;
  questions: Question[];
}

export interface Question {
  id: string;
  type: 'single-choice' | 'multi-choice' | 'short-text' | 'long-text' | 'numeric' | 'file-upload';
  title: string;
  required: boolean;
  options?: string[]; // for choice questions
  validation?: {
    min?: number;
    max?: number;
    maxLength?: number;
  };
  conditionalLogic?: {
    dependsOn: string;
    showIf: any;
  };
}

export interface AssessmentResponse {
  id: string;
  assessmentId: string;
  candidateId: string;
  responses: QuestionResponse[];
  submittedAt: Date;
  completedAt?: Date;
}

export interface QuestionResponse {
  questionId: string;
  value: any;
  skipped?: boolean;
}

// API Response types
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiError {
  error: string;
  message?: string;
  details?: any;
}

// Database types (for Dexie)
export interface JobDB extends Omit<Job, 'createdAt' | 'updatedAt'> {
  createdAt: number;
  updatedAt: number;
}

export interface CandidateDB extends Omit<Candidate, 'appliedAt' | 'notes'> {
  appliedAt: number;
  notes: (Omit<Note, 'createdAt'> & { createdAt: number })[];
}

export interface AssessmentDB extends Omit<Assessment, 'createdAt'> {
  createdAt: number;
}

export interface AssessmentResponseDB extends Omit<AssessmentResponse, 'submittedAt' | 'completedAt'> {
  submittedAt: number;
  completedAt?: number;
}

// UI State types
export interface JobFilters {
  search?: string;
  status?: 'all' | 'active' | 'archived';
  tags?: string[];
}

export interface CandidateFilters {
  search?: string;
  stage?: Candidate['stage'] | 'all';
  jobId?: string;
}

// Form types
export interface JobFormData {
  title: string;
  description?: string;
  requirements?: string[];
  tags: string[];
}

export interface CandidateFormData {
  name: string;
  email: string;
  resume?: string;
}

export interface NoteFormData {
  content: string;
  mentions: string[];
}