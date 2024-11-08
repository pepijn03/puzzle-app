import http from 'k6/http';

export const options = {
  vus: 100,
  duration: '30s',
  thresholds: { http_req_duration: ['avg<200', 'p(95)<300'] },
  iterations: 100000
};

export default function () {
  http.get('http://localhost:3001/');
}

