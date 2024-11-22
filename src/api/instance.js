import axios from 'axios';
import { applyInterceptors } from './interceptor';

//.env로 숨긴 url 주소 (backend 주소 <-> front 주소)

// eslint-disable-next-line no-undef
const BASE_URL = process.env.REACT_APP_BACKEND_SERVER_URL;
console.log('✅ BASE_URL:', BASE_URL);
const defaultInstance = axios.create({
  baseURL: BASE_URL,
});
applyInterceptors(defaultInstance);

// company ------
const companyInstance = axios.create(defaultInstance.defaults);
companyInstance.defaults.baseURL += '/companies';
// applyInterceptors(companyInstance);

// member ------
const memberInstance = axios.create(defaultInstance.defaults);
memberInstance.defaults.baseURL += '/members';
// applyInterceptors(memberInstance);

// plan ------
const planInstance = axios.create(defaultInstance.defaults);
planInstance.defaults.baseURL += '/plans';

const planBannerInstance = axios.create(planInstance.defaults);
planBannerInstance.defaults.baseURL += '/banner';

const planDetailInstance = axios.create(planInstance.defaults);
planDetailInstance.defaults.baseURL += '/detail';

const planMainInstance = axios.create(planInstance.defaults);
planMainInstance.defaults.baseURL += '/main';

const planSearchInstance = axios.create(planInstance.defaults);
planSearchInstance.defaults.baseURL += '/main';

export {
  defaultInstance,
  companyInstance,
  memberInstance,
  planDetailInstance,
  planInstance,
  planBannerInstance,
  planMainInstance,
  planSearchInstance,
};
