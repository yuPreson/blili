// mutations
import { RECEIVE_LOGIN_INFO,RECEIVE_USER_INFO } from './mutation-types';


export default {
  // 登陆将账号添加到state中
  addUserInfo(state, payload){
    state.form = payload
  },
  [RECEIVE_LOGIN_INFO](state, { loginInfo }){
    state.loginInfo = loginInfo;
    state.token = loginInfo.token;
    sessionStorage.setItem('id',loginInfo.id);
    sessionStorage.setItem('token',loginInfo.token);
  },
  [RECEIVE_USER_INFO](state,{userInfo}) {
    state.userInfo = userInfo
  }
}