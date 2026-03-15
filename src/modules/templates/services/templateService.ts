import { apiClient } from '../../../services/apiClient';
import type { FormTemplate } from '../../../types';

export const templateService = {
  getTemplates: async () => {
    const response = await apiClient.get<FormTemplate[]>('/templates');
    return response.data;
  },

  uploadTemplate: async (data: Partial<FormTemplate>, file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('data', JSON.stringify(data));
    const response = await apiClient.post<FormTemplate>('/templates/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  deleteTemplate: async (id: string) => {
    const response = await apiClient.delete<{ success: boolean }>(`/templates/${id}`);
    return response.data;
  },
};
