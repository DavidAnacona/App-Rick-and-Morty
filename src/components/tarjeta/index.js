import React from 'react'
import { useHistory } from 'react-router-dom';
import styles from './tarjeta.module.css';


const Tarjeta = ({ id, name, status, species, origin, image }) => {

    const record = useHistory();

    return (
        <div className={styles.card} onClick={()=>{record.push('/detailsCharacter/'+id)}}>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{status}</p>
            <p>{species}</p>
            <p>{origin}</p>
        </div>
    )

}

export default Tarjeta
