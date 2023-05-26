import { atom } from "recoil"
import { CourseCategoryArray } from "../components/common/Carousel/CourseCategoryArray";
import { ICourseData, ICourseDetail } from "../types/courseList";
export const selectCategoryAtom=atom<string>({
    key:"selectCategory",
    default:CourseCategoryArray[0].code,
});

export const courseDetailAtom=atom<ICourseDetail>({
    "key":"courseDetailAtom",
    default:null,
})