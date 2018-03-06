import Mock from 'mockjs';
import loginAPI from './login';
import registerAPI from './register';
import articleAPI from './article';
import article_tableAPI from './article_table';

// 登录相关
Mock.mock(/\/login\/loginbyuser/, 'post', loginAPI.loginByUser);
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout);
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getInfo);
Mock.mock(/\/login\/login_data/, 'get', loginAPI.loginData);

// 注册相关
Mock.mock(/\/passport\/reg_data/, 'get', registerAPI.regData);
Mock.mock(/\/passport\/reg_sure/, 'post', registerAPI.regSure);

// 文章相关
Mock.mock(/\/article\/list/, 'get', articleAPI.getList);

// // table example相关
Mock.mock(/\/article_table\/list/, 'get', article_tableAPI.getList);
Mock.mock(/\/article_table\/p/, 'get', article_tableAPI.getPv);

export default Mock;
