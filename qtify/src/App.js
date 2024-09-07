import logo from './logo.svg';


import Navbar from './component/Navbar/Navbar';
import Hero from "./component/Hero/Hero"
import Section from './component/Section/Section';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./App.css"


function App() {

  const [topAlbum, setTopAlbum] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);
  const [allSongs, setAllSongs] = useState([]);


  useEffect(()=>{

    const onLoad = async () => {
      try{
        const topAlbumData = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`);
        setTopAlbum(topAlbumData.data);
        const newAlbumData = await axios.get(`https://qtify-backend-labs.crio.do/albums/new`);
        setNewAlbum(newAlbumData.data);
        const allSongsData = await axios.get(`https://qtify-backend-labs.crio.do/songs`);
        setAllSongs(allSongsData.data);
      }catch(e){
        console.error(e)
      }
      
  };
  onLoad();

  },[])


  return (
    <div>
      <Navbar searchData = "" />
      <Hero />
      <div style={{padding:"20px", background:"var(--color-black)" }}>
          <Section title="Top Albums" data={topAlbum} />
          <Section title="New Albums" data={newAlbum} />
          <Section title="Songs" data={allSongs} showTabs border/>
      </div> 
    </div>
  );
}

export default App;
