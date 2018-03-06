import { param2Obj } from 'utils';
const userMap = {
  admin: {
    role: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '13136925555',
    uid: '001'
  },
  editor: {
    role: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '普通编辑xxxx',
    uid: '002'

  },
  developer: {
    role: ['develop'],
    token: 'develop',
    introduction: '我是开发',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '工程师xxxx',
    uid: '003'
  }
}


export default {
  loginData: () => ({
    introduce_depict: "人的一生总是有那么多的不如意，谁也避免不了，开心不开心，烦恼，谁都会有，如果总是拘泥与烦心处，徘徊不前，失落烦恼，无意义的埋怨懊悔，却是最大的错误，应及时调整心态面对，因为你任拥有最大的财富生命，生命就是人生最大的财富。",
  }),
  loginByUser: config => {
    const { mobile } = JSON.parse(config.body);
    return userMap[mobile.split('@')[0]];
  },
  getInfo: config => {
    const { token } = param2Obj(config.url);
    if (userMap[token]) {
      return userMap[token];
    } else {
      return Promise.reject('a');
    }
  },
  logout: () => 'success'
};

