import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist(); 

export interface UserInfo {
  id: number;
  name: string;
  photo: string;
  nickname: string;
  locationCode: string;
  accessToken: string;
  refreshToken: string;
  isLogin: boolean;
  isSignup: boolean;
}


export const userAtom = atom<UserInfo | null>({
  key: "userAtom",
  default: null,
  effects_UNSTABLE: [persistAtom], 
});
