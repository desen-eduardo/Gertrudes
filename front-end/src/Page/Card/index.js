import React, { useEffect, useState } from "react";

import { Main } from "./styled";

const Card = () => {
    const [card,setCard] = useState(false);
    const payment = [{payment:'dinheiro'},{payment:'cartao'},{payment:'debito'}];
    const [products,setProducts] = useState([]); 
    useEffect(()=>{
        const lists = localStorage.getItem('products');
        const listing = JSON.parse(lists);
        setProducts(listing);
        console.log(products);
    },[])

    const handleFinished = () => {

    }

    return(
        <Main>
            <div className="area-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nome do Produto</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>SubTotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item)=>{
                            return(
                                <tr key={item}>
                                    <td>{item.name_product}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.price}</td>
                                    <td>{item.price * item.amount}</td>
                                </tr>
                            );
                        })

                        }

                    </tbody> 
                    <tfoot>
                        <tr>
                            <th colSpan={2}>Total</th>
                            <th></th>
                        </tr>
                    </tfoot> 
                </table>

                <button>Pagamento</button>
                <div className="payment">
                    <form onSubmit={handleFinished}>
                        <select>
                            <option></option>
                            {payment.map(item => <option key={item.payment}>{item.payment.toUpperCase()}</option> )}
                        </select>
                        <button type="submit">Finalizar Venda</button>
                    </form>
                </div>
                <div className="delivery">
                    
                </div>
            </div>
        </Main>
    );
}

export default Card;
