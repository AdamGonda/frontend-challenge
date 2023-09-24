import { useRouter as originalUseRouter, NextRouter } from 'next/router';

export default function useRouter<T = any>(): NextRouter & { query: T } {
  const router = originalUseRouter();

  return router as NextRouter & { query: T };
}