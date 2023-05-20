
interface ICourseCategory{
    id:number;
    level?:number;
    code?:string;
    name:string;
    color:string;
    click:boolean,
}

export const CourseCategoryArray:ICourseCategory[]=[
    
    {   id:1,
        code:"SCENERY",
        name:"# 볼 거리가 많은",
        color:"#DB771B",
        click:false,
    },{
        id:2,
        code:"DATE",
        name:"# 데이트 코스",
        color:"#FC21D9",
        click:false,
    },
    {   id:3,
        code:"NATURE",
        name:"# 자연을 즐기는",
        color:"#426319;",
        click:false,
    },
    {   id:4,
        code:"RUN",
        name:"# 러닝",
        color:"#19895A",
        click:false,
    },
    {
        id:5,
        code:"WALK",
        name:"# 간단한 산책",
        color:"#687531",
        click:false,
    },
    {
        id:6,
        code:"CARE",
        name:"# 마음을 정리하고 싶을 때",
        color:"#11498B",
        click:false,
    },
    {
        id:7,
        code:"RELAX",
        name:"# 커피 마시면서 여유롭게",
        color:"#754B25",
        click:false,
    },
    {
        id:8,
        level:1,
        name:"# 초급 코스",
        color:"#1F5B86",
        click:false,
    },
    {
        id:9,
        level:2,
        name:"# 중급 코스",
        color:"#E77D30",
        click:false,
    },
    {
        id:10,
        level:3,
        name:"# 상급 코스",
        color:"#EA5252",
        click:false,
    }
];