import { env } from '../config';
import { Host } from './host';

const host = Host[env];

export default {
  sign: `${host}/api/sign` // 登录接口
};
