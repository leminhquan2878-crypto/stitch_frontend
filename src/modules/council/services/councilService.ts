import { apiClient } from '../../../services/apiClient';
import type { Council } from '../../../types';

export const councilService = {
  getCouncils: async () => {
    const response = await apiClient.get<Council[]>('/councils');
    return response.data;
  },

  getCouncilById: async (id: string) => {
    const response = await apiClient.get<Council>(`/councils/${id}`);
    return response.data;
  },

  createCouncil: async (data: Partial<Council>) => {
    const response = await apiClient.post<Council>('/councils', data);
    return response.data;
  },

  uploadDecision: async (id: string, file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await apiClient.post<{ url: string }>(`/councils/${id}/upload-decision`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },
};
