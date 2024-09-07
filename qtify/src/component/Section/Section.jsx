import React, { useEffect, useState } from "react";
import Styles from "./Section.module.css";
import SongCard from "../SongCard/SongCard";
import Carousel from "../Carousel/Carousel";
import axios from "axios";
import { Box, Tab, Tabs } from "@mui/material";
import { TabPanel, TabsContext, TabsList } from "@mui/base";

export default function Section({title,data, showTabs, border}) {
 
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState("All");
    const [tabLabel, setTabLabel] = useState([]);
    const [newData, setNewData] = useState([]);


console.log(newData,'newData')


        const handleChange = (event, newValue) => {
            // genre.label
            setValue(newValue);

        };



        useEffect(() => {
          const onLoadData = async () => {
            try {
              const data = await axios.get(
                `https://qtify-backend-labs.crio.do/genres`
              );
              setTabLabel(data.data.data);
            
            } catch (e) {
              console.error(e);
            }
          };
          
          onLoadData();

          const arr = data.filter((ele)=> ele.genre.label === value)
          setNewData(arr)


        }, [value]);

    return (
      <div className={!border ? Styles.main : Styles.border}>
        <div className={Styles.second}>
          <span className={Styles.spn}>{title}</span>
          {!showTabs ? (
            <button
              onClick={() => {
                setToggle(!toggle);
              }}
              className={Styles.btn}
            >
              {toggle ? "Collapse" : "Show All"}
            </button>
          ) : null}
        </div>

        {

            showTabs ? 
            
            <div className={Styles.tabs} style={{color:"white"}}>
                <Tabs  value={value} 
                        textColor="inherit"
                       onChange={handleChange}
                       style={{marginBottom:"23px"}} 
                       sx={{
                            '& .MuiTabs-indicator': {
                            backgroundColor: 'green',
                            },
                        }}>
                        <Tab sx={{color:"inherit", textTransform:"none"}} label="All" value="All"/>
                        {tabLabel.map((ele)=> {
                        return (<Tab sx={{color:"inherit", textTransform:"none"}} label={ele.label} value={ele.label} key={ele.key}/>)})}    
                                        
                </Tabs>


           

                <Carousel data={ newData.length === 0 ? data : newData} />



{/* 
                <Box id="Box">
                    <TabsContext value={value}>
                        <Box>
                            <TabsList>
                                <Tab sx={{color:"inherit", textTransform:"none"}} label="All" value="All"/>
                                {tabLabel.map((ele)=>  <Tab sx={{color:"inherit", textTransform:"none"}} label={ele.label} value={ele.label} key={ele.key}/>)}
                            </TabsList>
                        </Box>

                        <TabPanel > Panel one </TabPanel>



                    </TabsContext>
                </Box> */}



                           
            </div>


             
          
            
            
            
            :

      



    <div>
        {toggle ? (
          <div className={Styles.songContainer}>
            {data.map((ele) => (   
              <SongCard
                image={ele.image}
                title={ele.title}
                follow={ele.follows}
                likes={ele.likes}
                key={ele.id}
              />
            ))}
          </div>
        ) : (
          <Carousel data={data} />
        )}
        </div>

    }


      </div>
    );
}
 
