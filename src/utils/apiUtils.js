import { backendUrl } from '../config/settings';
import uuid from 'react-uuid';

const handleHttpErrors = (res) => {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
};

const getSessionId = () => {
  let sessionId = sessionStorage.getItem('sessionId');
  if (sessionId === null) {
    sessionId = uuid();
    sessionStorage.setItem('sessionId', sessionId);
  }
  return sessionId;
};

const makeOptions = (method, body = null, token = true) => {
  let sessionId = getSessionId();
  const opts = {
    method: method,
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    }
  };
  if (token) {
    opts.headers['x-access-token'] = localStorage.getItem('jwtToken');
  }
  if (body) {
    body.sessionId = sessionId;
    opts.body = JSON.stringify(body);
  } else if (method === 'POST') {
    opts.body = { sessionId: sessionId };
  }
  return opts;
};

const fetchData = async (url, opts) => {
  const res = await fetch(`${backendUrl}${url}`, opts);
  return handleHttpErrors(res);
};

export const apiUtils = {
  fetchData,
  handleHttpErrors,
  makeOptions
};
