import Item from "../Item/item";
import { prds } from '../../../data'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './itemListContainer.css'

function ItemListContainer({ greeting }) {
  
  const [items, setItems] = useState([]);
  const { idCategory } = useParams();

  console.log(items);
  console.log(idCategory);
  
  useEffect(() => {
    const getPrds = () => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
             resolve(prds); 
          }, 500);
        });
    }
    
    getPrds()
    .then( productos => {
      const filterPrds = productos.filter( prd => prd.category === idCategory);
      setItems(idCategory ? filterPrds : productos);
    })
    .catch( err => console.log(err));
  }, [idCategory]);

  
  return (
    <>
      <p className="title">{greeting}</p>
      <div className="itemListCotainer">
        <Item prd={items}/>
      </div>
    </>
  );
}

export default ItemListContainer;