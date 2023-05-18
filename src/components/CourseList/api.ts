const BASE_URL=process.env.API_URL;

export interface BasicDto{
    code:number;
    message:string;
    result:any[]
}
export interface ICourseData{
    id:number;
    name:string;
    level:number;
    distance:number;
    time:number;
    description:string;
    categories:string[];
    gugunSummary:string;
    routeSummary:string;
    nearSubway:string;
    accessWay:string;
    region:string;
    image:string;
    distanceFromSearchLocation:number;
    routes:any;
}

export async function couresRecommendation(){
    return fetch(`${BASE_URL}/courses`).then(response=>response.json());
}