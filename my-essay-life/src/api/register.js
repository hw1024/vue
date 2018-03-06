import fetch from 'utils/fetch';

export function regData() {
  return fetch({
    url: '/passport/reg_data',
    method: 'get'
  });
}

export function regSure(mobile, img_code, v_code, nickname, password, re_password, mail, qq) {
  	const data = {
	    mobile,
        img_code,
        v_code,
        nickname,
        password,
        re_password,
        mail,
        qq
	};
	return fetch({
	    url: '/passport/reg_sure',
	    method: 'post',
	    data
	});
}


