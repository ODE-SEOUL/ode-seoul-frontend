import { atom } from "recoil"
import { CourseCategoryArray } from "../components/common/Carousel/CourseCategoryArray";

export const selectCategoryAtom=atom<string>({
    key:"selectCategory",
    default:CourseCategoryArray[0].code,
});