import React from "react";
import { useRouter } from "next/dist/client/router";
import Navbar from '../common/Nav/Nav';
export default function CourseListDetail(){
    const router=useRouter();
    const {name,distance,time,description,subway,accessway,image}=router.query;
    return(
        <>
            <Navbar/>
            <h1>{name}</h1> 
        </>

    );
}