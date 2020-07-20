// actions
import {RECEIVE_LOGIN_INFO,RECEIVE_USER_INFO} from './mutation-types';
import {reqLogin, reqUserInfo} from "../assets/api/request";

export default {
 // 登陆
 async loginIn({commit,state}) {
   let res = await reqLogin(state.form);
   const loginInfo = res;
   commit(RECEIVE_LOGIN_INFO, {loginInfo})//与mutation中的loginInfo名称一致
  },
   //获取用户信息
   getUserInfo({commit}) {
    reqUserInfo(sessionStorage.getItem('id')).then(res=>{
      const userInfo = res && res[0];
      console.log('获取用户信息',res)
      commit(RECEIVE_USER_INFO,{userInfo})
    })


  }
}