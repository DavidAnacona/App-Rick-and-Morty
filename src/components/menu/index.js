import React from 'react';
import {
    Link
} from "react-router-dom";

import styles from './menu.module.css';

const Menu = props => {
    return (
        <nav className={styles.contenedor}>
            <ul className={styles.lista}>
                <Link to="/character"><li className={styles.opciones}>Character</li></Link>  
                <Link to="/location"><li className={styles.opciones}>Location</li></Link>
                <Link to="/episode"><li className={styles.opciones}>Episode</li></Link>
            </ul>
        </nav>
    )
}

export default Menu

