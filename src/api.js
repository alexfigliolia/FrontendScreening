import { proxy } from '../package.json';

export const url =
  process.env.NODE_ENV !== 'production'
    ? proxy
    : 'https://www.carta.healthcare/api';
