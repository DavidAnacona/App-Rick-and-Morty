import React from 'react';

import styles from './title.module.css';

const Title = ({ title }) => {
    return (
        <div className={styles.contenedor}>
            <h1>{title}</h1>
        </div>
    )
}


export default Title;
