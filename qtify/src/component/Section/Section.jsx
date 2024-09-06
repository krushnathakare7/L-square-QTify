import React, { useEffect, useState } from "react";
import Styles from "./Section.module.css";
import axios from "axios";
import SongCard from "../SongCard/SongCard";

export default function Section() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const onLoad = async () => {
            const songsData = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`);
            setData(songsData.data);
        };
        onLoad();
    }, []);


    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const chunkedData = chunkArray(data, 7);

    return (
        // <div className={Styles.main}>
        //     <div className={Styles.second}>
        //         <span className={Styles.spn}>Top Album</span>
        //         <button className={Styles.btn}>Collapse</button>
        //     </div>

        //     {chunkedData.map((chunk, index) => (
        //         <div className={Styles.songContainer} key={index}>
        //             {chunk.map((ele) => (
        //                 <SongCard
        //                     image={ele.image}
        //                     title={ele.title}
        //                     follow={ele.follows}
        //                     key={ele.id}
        //                 />
        //             ))}
        //         </div>
        //     ))}
        // </div>

        <div className={Styles.main}>
            <div className={Styles.second}>
                <span className={Styles.spn}>Top Album</span>
                <button className={Styles.btn}>Collapse</button>
            </div>


            <div className={Styles.songContainer}>
                   {
                    data.map((ele)=> <SongCard image={ele.image} title={ele.title} follow={ele.follows} key={ele.id}/>)
                   }
            </div>

        </div>


           

    );
}

// this is the concept that is used in the above component 
// split a one d array into 2 d array as we need 7 item per row 
// so first decide how much rows we need i.e. Math.ceil(arr.length/7)
// now we need 3 rows as length is 16 and we need 7 item each row 
// create a new array and push 7 7 items in that new array as a 3 diff array 
// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

// const chunk = (array, size)=>{
//       const ans = []
//       for(let i =0; i<arr.length ; i+= size){
//         ans.push(array.slice(i,size + i))
//       }
//       return ans
// }

// console.log(chunk(arr, 7))