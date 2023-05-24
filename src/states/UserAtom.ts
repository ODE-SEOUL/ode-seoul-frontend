import { atom } from "recoil";

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
});
