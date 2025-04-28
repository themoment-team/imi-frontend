'use client';

import { LoginProvider } from '@/context';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Provider = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <LoginProvider>{children}</LoginProvider>
      <ToastContainer />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default Provider;
