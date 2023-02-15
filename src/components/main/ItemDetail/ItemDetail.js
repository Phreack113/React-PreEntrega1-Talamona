import './ItemDetail.css'
import { useParams } from 'react-router-dom';
import { useContext, useEffect} from 'react';
// import { prds } from '../../../data';

import { contexto } from '../../Context/CustomProvider';

import * as React from 'react';
import IconButton from '@mui/material/IconButton';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

import { getDoc, doc } from "firebase/firestore"
import { productsCollection } from '../../../firebaseConfig';

function ItemDetail() {
    const { prd, setPrd, mas, menos, isInCart, qty } = useContext(contexto);
    const { idPrd } = useParams();

    isInCart(idPrd);

    useEffect(() => {
        const getPrds = () => {
            const referenciaDoc = doc(productsCollection,idPrd)
            const pedido = getDoc(referenciaDoc)

            pedido
                .then((resultado) => {
                    const producto = {...resultado.data(), id: idPrd}
                    setPrd(producto)
                })
                .catch((error) => {
                    console.log(error)
                })
        };
        
        getPrds()
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