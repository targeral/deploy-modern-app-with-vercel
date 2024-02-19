import type { CacheOption } from '@modern-js/runtime/server';

export const cacheOption: CacheOption = {
  maxAge: 500, // ms
  staleWhileRevalidate: 1000, // ms
};
