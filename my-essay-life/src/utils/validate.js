/**
 * 表单验证方法
 * Create by hw on 2017/7/1
*/

/* 手机号码格式验证 */
export function isMobile(str) {
  const patrn = /^(0|86|17951)?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
  return patrn.test(str);
}


/* 验证码格式验证 */
export function isSMSCode(str) {
  const patrn = /^\d{6}$/;
  return patrn.test(str);
}

/* 密码格式验证 */
export function isPwd(str) {
  const patrn = /^(?=.*\d)(?=.*[a-zA-Z]).{8,20}$/;
  return patrn.test(str);
}

/* 昵称格式验证 */
export function isNick(str) {
  const patrn = /^[\u4e00-\u9fff\w]{6,12}$/;
  return patrn.test(str);
}

/* 邮箱格式验证 */
export function isEmail(str) {
  const patrn = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
  return patrn.test(str);
}

/* qq格式验证 */
export function isQq(str) {
  const patrn = /^[1-9]\d{4,8}$/;
  return patrn.test(str);
}

