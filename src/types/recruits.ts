import { ResponseDto } from "./common";

export interface IRecruitData{

    courseId: number,
    category: string,
    title: string,
    content: string,
    image: string,
    maxPeople: number,
    scheduledAt: string,
}

export type PostRecruitDatatDto=ResponseDto<IRecruitData[]>;