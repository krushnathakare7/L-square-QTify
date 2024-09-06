import React, { useEffect, useState } from "react";
import Styles from "./Section.module.css";
import SongCard from "../SongCard/SongCard";
import Carousel from "../Carousel/Carousel";

export default function Section({title,data}) {
 
    const [toggle, setToggle] = useState(false);


    return (
        <div className={Styles.main}>
            <div className={Styles.second}>
                <span className={Styles.spn}>{title}</span>
                <button onClick={()=>{setToggle(!toggle)}} className={Styles.btn}>{toggle ? "Collapse" : "Show All"}</button>
            </div>


        {toggle ? <div className={Styles.songContainer}>
                   {
                    data.map((ele)=> <SongCard image={ele.image} title={ele.title} follow={ele.follows} key={ele.id}/>)
                   }
            </div> :    <Carousel data={data}/>}

        </div>


           

    );
}
 