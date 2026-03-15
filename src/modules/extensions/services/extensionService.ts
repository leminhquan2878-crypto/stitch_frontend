import { apiClient } from '../../../services/apiClient';
import type { Extension } from '../../../types';

export const extensionService = {
  getExtensions: async () => {
    const response = await apiClient.get<Extension[]>('/extensions');
    return response.data;
  },

  approveExtension: async (id: string, notes?: string) => {
    const response = await apiClient.post<{ success: boolean }>(`/extensions/${id}/approve`, { notes });
    return response.data;
  },

  rejectExtension: async (id: string, reason: string) => {
    const response = await apiClient.post<{ success: boolean }>(`/extensions/${id}/reject`, { reason });
    return response.data;
  },
};
