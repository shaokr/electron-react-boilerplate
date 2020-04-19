export enum Env {
  production, // 正式环境
  development // 开发环境
}
// eslint-disable-next-line import/no-mutable-exports
let env: Env = Env.production;
if (process.env.NODE_ENV === 'development') {
  env = Env.development;
}
export default env;
