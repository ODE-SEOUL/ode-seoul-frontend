import { atom } from "recoil";

export interface RecruitInfo {
  courseId: number;
  category: string;
  title: string;
  content: string;
  image: string;
  // course: string;
  maxPeople: number;
  scheduledAt: string;
}

export const RecruitAtom = atom<RecruitInfo | null>({
  key: "RecruitrAtom",
  default: null,
});
