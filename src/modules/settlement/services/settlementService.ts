import { apiClient } from '../../../services/apiClient';
import type { Settlement } from '../../../types';

export const settlementService = {
  getSettlements: async () => {
    const response = await apiClient.get<Settlement[]>('/settlements');
    return response.data;
  },

  requestAdditional: async (id: string, notes: string) => {
    const response = await apiClient.post<{ success: boolean }>(`/settlements/${id}/request-additional`, { notes });
    return response.data;
  },

  confirmSettlement: async (id: string) => {
    const response = await apiClient.post<{ success: boolean }>(`/settlements/${id}/confirm`);
    return response.data;
  },
};
