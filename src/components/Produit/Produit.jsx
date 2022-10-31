import React from 'react';
import styles from './produit.module.css'


const Produit = (props) => {
    return (
        <div className={styles.produit}>
            <img src={props.produit.images[0]} alt={props.produit.title}/>
            <h1>{props.produit.title}</h1>
            <p>{props.produit.description}</p>
            <h3>Prix : {props.produit.price} DH</h3>
            <button onClick={props.onclickpanier}>Ajouter au panier</button>
        </div>
    );
}

export default Produit;
