import fp from 'lodash/fp';
import axios from 'axios';

import login from './login';

const apiList = {
  login
};

const instance = axios.create({
  timeout: 30000
});

export default async (
  name: string,
  params: object = {},
  props: object = {}
) => {
  const baseURL = fp.get(name)(apiList);
  if (fp.isString(baseURL)) {
    return instance({
      ...props,
      params,
      baseURL
    });
  }
  return Promise.resolve(false);
};
