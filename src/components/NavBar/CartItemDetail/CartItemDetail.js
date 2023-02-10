import './CartItemDetail.css'

export function CartItemDetail({ prd }){
    return(
        <div className="cartCard">
            <div className='img'>
                <img src={prd.img} alt="Foto producto"/>
            </div>
            <div className="cartBottomCart">
                <div className='cartMiddleCard'>
                    <p className='prdName'>{prd.name}</p>
                    <p className='prdPrice'>${prd.price}</p>
                </div>
                <div className='cartRightCard'>
                    <p className='total'>$ {prd.qty * prd.price}</p>
                    <p className='un'>{prd.qty} unidades</p>
                </div>
            </div>
        </div>
    )
}