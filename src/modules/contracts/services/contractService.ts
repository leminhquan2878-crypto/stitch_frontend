import { apiClient } from '../../../services/apiClient';
import type { Contract } from '../../../types';

export const contractService = {
  getContracts: async () => {
    const response = await apiClient.get<Contract[]>('/contracts');
    return response.data;
  },
  
  getContractById: async (id: string) => {
    const response = await apiClient.get<Contract>(`/contracts/${id}`);
    return response.data;
  },

  createContract: async (data: Partial<Contract>) => {
    const response = await apiClient.post<Contract>('/contracts', data);
    return response.data;
  },

  uploadSignedContract: async (id: string, file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await apiClient.post<{ url: string }>(`/contracts/${id}/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },
};
