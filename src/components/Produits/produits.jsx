import React, { useEffect, useState } from "react";
import styles from "./produits.module.css";
import axios from "axios";
import Produit from "../Produit/Produit";
import Header from "../Header/Header";

const Produits = (props) => {
  const [categories, setCategories] = useState([]);
  const [produits, setProduits] = useState([]);
  const [panier, setPanier] = useState([]);
  const [catId, setCatId] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
      return res.data;
    };
    getData().then((cats) => setCategories(cats));
  }, []);

  useEffect(() => {
    const getData = async () => {
      let api = "";

      if (catId == 0) 
        api = "https://api.escuelajs.co/api/v1/products";
      else 
        api = `https://api.escuelajs.co/api/v1/categories/${catId}/products`;

      const res = await axios.get(api);
      return res.data;
    };
    getData().then((prods) => setProduits(prods));
  }, [catId]);

  const somme = () => {
    let som = 0; 
    panier.forEach(item => som += item.price);
    return som;
  }
  return (
    <div className={styles.produits}>

      <Header nbarticles={panier.length} montant={somme()} />

      <select value={catId} onChange={(e) => setCatId(e.target.value)}>
        <option value={0}>Tous les produits</option>
        {categories.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      <div className={styles.list}>
        {produits.length === 0 ? (
          <h1>Liste produits vide</h1>
        ) : (
          produits.map((p) => <Produit key={p.id} produit={p} onclickpanier={() => setPanier([...panier,p])} />)
        )}
      </div>
    </div>
  );
};

export default Produits;
