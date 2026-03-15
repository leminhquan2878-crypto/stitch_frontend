import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';

// A wrapper for useQuery that makes it easier to standardize behaviors like error handling
export function useApiQuery<TQueryFnData, TError = Error, TData = TQueryFnData>(
  queryKey: string[],
  queryFn: () => Promise<TQueryFnData>,
  options?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey' | 'queryFn'>
) {
  return useQuery<TQueryFnData, TError, TData>({
    queryKey,
    queryFn,
    ...options,
  });
}

// A wrapper for useMutation that automatically invalidates related queries
export function useApiMutation<TData, TError = Error, TVariables = void, TContext = unknown>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: {
    invalidateKeys?: string[][];
  } & Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  return useMutation<TData, TError, TVariables, TContext>({
    mutationFn,
    ...options,
    onSuccess: (...args) => {
      // Auto invalidate specified query keys
      if (options?.invalidateKeys) {
        options.invalidateKeys.forEach((key) => {
          queryClient.invalidateQueries({ queryKey: key });
        });
      }
      if (options?.onSuccess) {
        options.onSuccess(...args);
      }
    },
  });
}
