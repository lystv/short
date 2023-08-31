// List of domains bind to your WorkersProxy.
const domain_list = ['https://cdn.reverse-proxy.live/', 'https://google.xasiimov.workers.dev/']

// Website you intended to retrieve for users.
const upstream = 'https://www.google.com/'

// Website you intended to retrieve for users using mobile devices.
const upstream_mobile = 'https://www.google.com/'

// Countries and regions where you wish to suspend your service.
const blocked_region = ['KP', 'SY', 'PK', 'CU']

// IP addresses which you wish to block from using your service.
const blocked_ip_address = ['0.0.0.0', '127.0.0.1']

addEventListener('fetch', event => {
    event.respondWith(fetchAndApply(event.request));
})

async function fetchAndApply(request) {

    const region = request.headers.get('cf-ipcountry').toUpperCase();
    const ip_address = request.headers.get('cf-connecting-ip');
    const user_agent = request.headers.get('user-agent');
    let response = null;
    let url = request.url;

    if (await device_status(user_agent)){
        upstream_domain = upstream
    } else {
        upstream_domain = upstream_mobile
    }

    for(let domain of domain_list) {
        url = url.replace(domain, upstream_domain)
    };

    if (blocked_region.includes(region)) {
        response = new Response('Access denied: WorkersProxy is not available in your region yet.', {
            status: 403
        });
    } else if(blocked_ip_address.includes(ip_address)){
        response = new Response('Access denied: Your IP address is blocked by WorkersProxy.', {
            status: 403
        });
    } else{
        let method = request.method;
        let request_headers = request.headers;
        let new_request_headers = new Headers(request_headers)

        new_request_headers.set('origin', upstream_domain)
        new_request_headers.set('referer', upstream_domain)

        origin_response = await fetch(url, {
            method: method,
            headers: new_request_headers
        })
        
        let response_body = origin_response.body
        let response_headers = origin_response.headers
        let new_response_headers = new Headers(response_headers)
        let status = origin_response.status
        
        new_response_headers.set('access-control-allow-origin', '*')
        new_response_headers.set('access-control-allow-credentials', true)
        new_response_headers.delete('content-security-policy')
        new_response_headers.delete('content-security-policy-report-only')
        new_response_headers.delete('clear-site-data')

        response = new Response(response_body, {
            status,
            headers: response_headers
        })
        response = origin_response
    }
    return response;
}

async function device_status (userAgentInfo) {
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}