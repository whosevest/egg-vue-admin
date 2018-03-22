
const methodMap = {

  /** 管理登陆接口 **/
  AdminLogin: {url: '/passport/login', method: 'post'},
  /** 用户登陆解锁 **/
  AdminUnlock: {url: '/passport/unlock', method: 'post'},
  /** 后台用户列表 **/
  UserList: {url: '/user/list', method: 'get'},
  /** 添加后台用户 **/
  AdminAddUser: {url: '/user/add', method: 'post'},
  /** 编辑后台用户 **/
  AdminEditUser: {url: '/user/edit', method: 'post'},
  /** 重置后台用户密码 **/
  RestPassword: {url: '/user/rest_password', method: 'post'},

  UserInfo:{ url:'/user/getUserInfo',method:'get'}

};
export default methodMap;
