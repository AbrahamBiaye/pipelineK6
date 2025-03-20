import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 10, // 10 utilisateurs simultanés
    duration: '30s', // Test de charge pendant 30 secondes
};

export default function () {
    let res = http.get('https://test-api.com/endpoint');
    
    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time < 500ms': (r) => r.timings.duration < 500,
    });

    sleep(1);
}
