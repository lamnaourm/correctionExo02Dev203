import React from 'react';
import styles from './header.module.css'

const Header = (props) => {
    return (
        <div className={styles.header}>
            <h1>ISMO SHOP</h1>

            <div className={styles.panier}>
                <h2>Panier : Nombre article : {props.nbarticles} - montant : {props.montant}</h2>
            </div>
        </div>
    );
}

export default Header;
