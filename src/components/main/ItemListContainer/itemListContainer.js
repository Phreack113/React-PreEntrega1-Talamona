import Item from "../Item/item";
// import { prds } from '../../../data'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './itemListContainer.css'

import { productsCollection } from '../../../firebaseConfig';
import { getDocs , query , where } from "firebase/firestore"

function ItemListContainer({ greeting }) {
  
  const [items, setItems] = useState([]);
  const { idCategory } = useParams();

  console.log(items);
  console.log(idCategory);
  
  useEffect(() => {
    const getPrds = () => {
      let filtro 

      if(idCategory){
       filtro = query(productsCollection,where("category","==",idCategory))
      } else {
        filtro = productsCollection
      }

      const pedidoPorCategoria = getDocs(filtro)

      pedidoPorCategoria
          .then((resultado) => {
              const productos = resultado.docs.map((doc) => {
                  return { id : doc.id , ...doc.data() }
              })
              setItems(productos)
          })
          .catch((error) => {
              console.log(error)
          })
    }
    
    getPrds()
    // .then( productos => {
    //   const filterPrds = productos.filter( prd => prd.category === idCategory);
    //   setItems(idCategory ? filterPrds : productos);
    // })
    // .catch( err => console.log(err));
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