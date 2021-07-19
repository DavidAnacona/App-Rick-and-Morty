import React, {useEffect, useState} from 'react'

import style from "../App.module.css";

import Episodes from "../components/episode";

const Episode = () => {

    const obtenerEpisode = async () => {
        try{
          const responsive = await fetch("https://rickandmortyapi.com/api/episode");
          const data = await responsive.json();
          setEpisode([...data.results]);
        }catch(e){
          console.log(e);
        }
    }

    const [episodes, setEpisode] = useState([]);


    useEffect(() => {
        obtenerEpisode()
      }, [])

    return (
        <div>
            <div className={style.cards}>
                {episodes.lenght !== 0 && episodes.map((episode) => {
                return(<Episodes key={episode.id} name={episode.name} airDate={episode.air_date} episode={episode.episode} />)
            })}
      </div>
        </div>
    )
}

export default Episode
