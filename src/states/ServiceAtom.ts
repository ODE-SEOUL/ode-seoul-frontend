import { atom } from "recoil";

export const searchAtom = atom<boolean>({
    key: "searchAtom",
    default: false,
  });

  export const filterAtom=atom<boolean>({
    key:"filterAtom",
    default:false,
  })

  export const searchValueAtom=atom<string>({
    key:"searchValueAtom",
    default:"",
  })

  export const searchParamAtom=atom<string>({
    key:"searchParamAtom",
    default:"",
  })