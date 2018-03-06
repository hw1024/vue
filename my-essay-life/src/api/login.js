import fetch from 'utils/fetch';

export function loginData() {
  return fetch({
    url: '/login/login_data',
    method: 'get'
  });
}
export function loginByUser(mobile, password) {
	const data = {
	    mobile,
	    password
	};
	return fetch({
	    url: '/login/loginbyuser',
	    method: 'post',
	    data
	});
}
export function logout() {
  return fetch({
    url: '/login/logout',
    method: 'post'
  });
}
export function getInfo(token) {
  	return fetch({
   		url: '/user/info',
    	method: 'get',
    	params: { token }
	});
}

