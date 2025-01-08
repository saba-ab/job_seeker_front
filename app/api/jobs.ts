import { AxiosResponse } from 'axios';
import { apiClient, BASE_URL, createHeaders } from './api-client';

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string | null;
  platform: string;
  category_id: number;
  posted_at: string;
  valid_until: string;
}

export interface PaginatedJobsResponse {
  jobs: Job[];
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export async function fetchPaginatedJobs(
  page: number,
  limit: number,
  search: string = '',
  category: string | null = null,
  authToken?: string
): Promise<any> {
  try {
    const response: AxiosResponse = await apiClient.get('/jobs', {
      params: { page, limit, search, category },
      headers: createHeaders(authToken)
    });
    return response.data;
  } catch (error: any) {
    console.log('error: ', error);

    return { jobs: [], total: 0 };
  }
}

// Create a job
export async function createJob(
  jobData: Omit<Job, 'id'>,
  authToken?: string
): Promise<Job> {
  try {
    const response: AxiosResponse = await apiClient.post('/jobs', jobData, {
      headers: createHeaders(authToken)
    });
    return response.data;
  } catch (error) {
    console.error('Failed to create job:', error);
    throw error;
  }
}
