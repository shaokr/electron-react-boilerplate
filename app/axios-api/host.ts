import { Env } from '../config/env';

// eslint-disable-next-line import/prefer-default-export
export enum Host {
  'https://www.baidu.com' = Env.production,
  'http://www.baidu.com' = Env.development
}
