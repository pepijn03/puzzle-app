import http from 'k6/http';

export const options = {
    scenarios: {
        get_all: {
          exec: 'get_all_endpoint',
          executor: 'constant-arrival-rate',
          duration: '1m',
          preAllocatedVUs: 10,
          rate: 100, // 100 requests per second
        },
        get_by_id: {
          exec: 'get_one_endpoint',
          executor: 'constant-arrival-rate',
          duration: '1m',
          preAllocatedVUs: 10,
          rate: 100, // 100 requests per second
        },
        get_by_date: {
            exec: 'get_by_date_endpoint',
            executor: 'constant-arrival-rate',
            duration: '1m',
            preAllocatedVUs: 10,
            rate: 100, // 100 requests per second
        }
    }
};


export function get_all_endpoint() {
    // function will be called for the initial 60 seconds
    http.get('http://localhost:3003/');
}
  
export function get_one_endpoint() {
    // function will be called after 30 seconds for 30 seconds
    http.get('http://localhost:3003/67253fb8d484805aba8f197e');
}

export function get_by_date_endpoint() {
    // function will be called after 30 seconds for 30 seconds
    http.get('http://localhost:3003/date/2024-10-08');
}

