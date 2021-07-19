import React,{useEffect, useState} from 'react'

import style from '../App.module.css';

import Tarjeta from '../components/tarjeta';

const Character = () => {

    const obtenerCharacter = async () => {
        try {
    
          const responsive = await fetch("https://rickandmortyapi.com/api/character/");
          const data = await responsive.json();
          setPersonajes([...data.results]);
        } catch (e) {
          console.log(e);
        }
    }

    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        obtenerCharacter()
      }, [])
      
    return (
        <div>
            <div className={style.cards}>
                {personajes.lenght !== 0 && personajes.map((personaje) => {
                return (<Tarjeta key={personaje.id} id={personaje.id} name={personaje.name} status={personaje.status} species={personaje.species}
                origin={personaje.origin.name} image={personaje.image} />)
        })}
      </div>
        </div>
    )
}

export default Character
