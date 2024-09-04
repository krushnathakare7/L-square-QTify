import React from "react";
import styles from "./SongCard.module.css"

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Chip from '@mui/material/Chip';

import exampleImg from "../../assets/exampleCard.png";

export default function SongCard({image,title,follow}) {
  return (
   
    <Card sx={{background: "black", borderRadius:"0px", padding:"0px"}} className={styles.card} >
     <div className={styles.div}>
     <CardMedia
   
   component="img"
   height="170px"
   image={image}
   alt="Paella dish"
 />
  <Chip sx={{color:"white", background:"black", height:"23px", width:"71px", margin:"5px 0px 0px 5px", fontSize:"6px"}} className={styles.chip} label={follow + " Follows"} />
     </div>
       <CardContent sx={{padding: "6px 0px 0px 0px !important", fontSize:"14px"}} className= {styles.cardContent}>{title}</CardContent>
    </Card>
  );
}
