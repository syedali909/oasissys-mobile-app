import { UserInfo } from "../../types/user-type";
import { ApiPath } from "../../utils/const";

export const fetchUserInfo = async (): Promise<UserInfo> => {
  const response = await fetch(`${ApiPath.base}${ApiPath.user}`);
  const userData = await response.json();
  
  const result: UserInfo = {
    ...userData,
    isLoading: false
  };
  
  return result;
}