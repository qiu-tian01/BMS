const state={
    userName: '',
    level : ''  ,
    isLogin : false
};
const getters={
  getChangeUserName(state){ //承载变化的collects
    return state.userName;
  },
  getLevel(state){
    return state.level;
  },
  getIsLogin(state){
    return state.isLogin;
  }
};
const mutations={
     changeUserName(state,userName){ //如何变化collects,插入items
        state.userName = userName
     },
     changeLevel(state,level){
       state.level = level
     },
     cahngeIsLogin(state,isLogin){
       state.isLogin = isLogin
     }
 };
const actions={
    setUserName({commit,state},userName){ 
        commit('changeUserName',userName)
    },
    setLevel({commit,state},level){ 
      commit('changeLevel',level)
    },
    setIsLogin({commit,state},isLogin){
      commit('cahngeIsLogin',isLogin)
    }
};
export default {
     state,
     getters,
     mutations,
     actions
}