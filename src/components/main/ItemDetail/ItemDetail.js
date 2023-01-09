import './ItemDetail.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { prds } from '../../../data';

function ItemDetail() {
    const [prd, setPrd] = useState({});
    const { idPrd } = useParams();
    
    useEffect(() => {
        const getPrds = () => {
          return new Promise((resolve, reject) => {
              setTimeout(() => {
                 resolve(prds); 
              }, 500);
            });
        }
        
        getPrds()
        .then( productos =>{
            const item = productos.find( prd => prd.id === parseInt(idPrd));
            setPrd(item)
        })
        .catch( err => console.log(err));
      }, [idPrd]);
    
    return (
        <div className='itemDetailCard'>
            <div className='itemImg'>
                <img src={prd.img} alt='Foto producto'/>
            </div>
            <div className='itemDetailText'>
                <p className='itemName'>{prd.name}</p>
                <p className='itemDet'>{prd.description}</p>
                <div className='qtyButtons'>
                    <div className='but'>+</div>
                    <div className='butQty'>0</div>
                    <div className='but'>-</div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;