import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


const DetailsCharacter = () => {

    const { id } = useParams();

    const[detailCharacter, setDetailCharacter] = useState([]);

    useEffect(() =>{
        getDetailsCharacter()
    })

    const getDetailsCharacter =  async () => {
        try{
            const responsive = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await responsive.json();
            console.log(data);
            setDetailCharacter(data)
        }catch(e){
            console.log(e);
        }
    }

    const style ={
        color: 'white'
    }

    return (
        <div>
            <h3 style={style}>{detailCharacter.name}</h3>
            <img src={detailCharacter.image} alt={detailCharacter.name} />
        </div>
    )
}

export default DetailsCharacter
