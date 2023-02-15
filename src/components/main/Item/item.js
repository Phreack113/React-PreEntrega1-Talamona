import React from "react";
import { Link } from "react-router-dom";
import './item.css'

function Item ({prd}){
    return (
        <>
            {prd.map( prd => {
                return (
                    <Link to={`/React-Talamona/producto/${prd.id}`} className="prdCard" key={prd.id}>
                        <div className="prdImg">
                            <img src={prd.img} alt='foto producto'/>
                        </div>
                        <p className="prdName">{prd.name}</p>
                        <p className="prdPrice">${prd.price}</p>
                    </Link>
            )
            })}
        </>
    )
}

export default Item;