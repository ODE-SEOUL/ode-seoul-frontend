import { atom } from "recoil";

interface UserInfo {
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
