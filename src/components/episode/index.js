import React from 'react'

import style from './episode.module.css';

const Episode = ({ name, airDate, episode}) => {
    return (
        <div className={style.container}>
            <h3>{name}</h3>
            <p>{airDate}</p>
            <p>{episode}</p>
        </div>
    )
}

export default Episode
