import { StateCreator } from 'zustand';
import { UserInfo, userStore as userDetails } from '../types/user-type';
import { fetchUserInfo } from '../service/api/user-info';

 const userStore : StateCreator<
 any,
 [],
 [],
 any>
= set => ({
    userInfo:{
        isLoading:false,
    },
  fetchUser: async () => { 
    set((state:userDetails) => {
    state.userInfo.isLoading = true;
    return state;
  })
  try {
    const result : UserInfo = await  fetchUserInfo()
    set((state:userDetails) => {
        state.userInfo= result
        return state;
      })
      return result;
  } catch (error) {
    set((state:userDetails) => {
        state.userInfo.isLoading = false;
        return state;
      })
  }
}
})


export default userStore;
