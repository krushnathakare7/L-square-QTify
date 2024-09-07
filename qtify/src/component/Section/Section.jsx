import React, { useEffect, useState } from "react";
import Styles from "./Section.module.css";
import SongCard from "../SongCard/SongCard";
import Carousel from "../Carousel/Carousel";
import axios from "axios";
import { Tab, Tabs } from "@mui/material";
import { TabPanel, TabsContext, TabsList } from "@mui/base";

export default function Section({title,data, showTabs, border}) {
 
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState("All");
    const [tabLabel, setTabLabel] = useState([]);
    const [tabData, setTabData] = useState([])
        const handleChange = (event, newValue) => {
            // genre.label
            setValue(newValue);

        };


        useEffect(()=>{
            const onLoadData = async ()=>{

                try{
                    const data = await axios.get(`https://qtify-backend-labs.crio.do/genres`)
                    setTabLabel(data.data.data);
                }catch(e){
                    console.error(e)
                }

            }
            setTabData(data)
            onLoadData()
        },[value])

    return (

        <div  className={ !border ? Styles.main : Styles.border}>
            <div className={Styles.second}>
                <span className={Styles.spn}>{title}</span>
               {!showTabs? <button onClick={()=>{setToggle(!toggle)}} className={Styles.btn}>{toggle  ? "Collapse" : "Show All"}</button>:null}
            </div>


            {showTabs ?<div className={Styles.tabs} style={{color:"white"}}>
                <Tabs  value={value} 
                        textColor="inherit"
                       onChange={handleChange} 
                       sx={{
                            '& .MuiTabs-indicator': {
                            backgroundColor: 'green',
                            },
                        }}>
                        <Tab sx={{color:"inherit", textTransform:"none"}} label="All" value="All"/>
                        {tabLabel.map((ele)=> {
                            return (<Tab sx={{color:"inherit", textTransform:"none"}} label={ele.label} value={ele.label} key={ele.key}/>)})}                        
                </Tabs>
                           
            </div>: null}

             {toggle ? 
                    <div className={ Styles.songContainer}>
                   {tabData.map((ele)=> <SongCard image={ele.image} title={ele.title} follow={ele.follows || ele.likes} key={ele.id}/>)}
                    </div> : 
                    <Carousel data={tabData}/>} 
        </div>


           

    );
}
 
