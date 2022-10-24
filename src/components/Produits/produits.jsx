import React, { useEffect, useState } from "react";
import styles from "./produits.module.css";
import axios from "axios";

const Produits = (props) => {
    const [categories, setCategories] = useState([]);
    const [catId, setCatId] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
      return res.data;
    };

    getData().then((cats) => setCategories(cats));
  }, []);
  return (
    <div className={styles.list}>
      <select value={catId} onChange={(e) => setCatId(e.target.value)}>
        <option value={0}>Tous les produits</option>
        {categories.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Produits;
