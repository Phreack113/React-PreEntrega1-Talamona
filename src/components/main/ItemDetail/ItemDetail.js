import './ItemDetail.css'
import { useParams } from 'react-router-dom';
import { useContext, useEffect} from 'react';
import { prds } from '../../../data';

import { contexto } from '../../Context/CustomProvider';

import * as React from 'react';
import IconButton from '@mui/material/IconButton';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';


function ItemDetail() {
    const { prd, setPrd, mas, menos, isInCart, qty } = useContext(contexto);
    const { idPrd } = useParams();

    isInCart(idPrd);

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
            const item = productos.find( prd => prd.id === parseInt(idPrd));
            setPrd(item)
        })
        .catch( err => console.log(err));
      }, [idPrd, setPrd]);
    
    return (
        <div className='itemDetailCard'>
            <div className='itemImg'>
                <img src={prd.img} alt='Foto producto'/>
            </div>
            <div className='itemDetailText'>
                <p className='itemName'>{prd.name}</p>
                <p className='itemDet'>{prd.description}</p>
                <p className='itemPrice'>$ {prd.price}</p>
                <div className='qtyButtons'>
                    <IconButton aria-label="add" onClick={mas}>
                        <AddCircleOutlineOutlinedIcon />
                    </IconButton>
                    <div className='butQty'>{ qty }</div>
                    <IconButton aria-label="substract" onClick={menos} >
                        <RemoveCircleOutlineOutlinedIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;