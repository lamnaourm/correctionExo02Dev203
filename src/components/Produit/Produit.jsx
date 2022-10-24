import React from 'react';
import styles from './produit.module.css'


const Produit = () => {
    return (
        <div className={styles.produit}>
            <img src={props.produit.images[0]} alt={props.produit.title}/>
            <h1>{props.produit.title}</h1>
            <p>{props.produit.description}</p>
            <h2>Prix : {props.produit.price} DH</h2>
            <button>Ajouter au panier</button>
        </div>
    );
}

export default Produit;
