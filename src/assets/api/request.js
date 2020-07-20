import ajax from './ajax';

export const reqLogin =(params)=> ajax('/login',params,'post');

export const reqUserInfo = (id) => ajax(`/user/${id}`)