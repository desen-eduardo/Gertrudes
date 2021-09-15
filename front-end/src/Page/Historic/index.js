import React, { useEffect, useState } from "react";
import useApi from '../../helpers/gertrudesAPI';
import { Main } from "./styled";

const Historic = () => {
    const api = useApi();
    const [tableProduct,setTableProduct] = useState([]);
    const [pay,setPay] = useState('');

    useEffect(()=> {
        const lastSale = async() => {
            const listProduct = await api.getLastSale();
                setTableProduct(listProduct);
        }
        
        lastSale();
    },[]);

    useEffect(()=> {
        const paySale = async() => {
            const listProduct = await api.getPaySale();
                setPay(listProduct);
        }
        
        paySale();
    },[]);

    return(
        <Main>
            <div className="area-container">
                <table>
                    <thead>
                        <tr>
                            <th>Remédio Comprado</th>
                            <th>Quantidade</th>
                            <th>Média de Gasto por Pedido</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tableProduct.length > 0 &&
                    <>
                        {tableProduct.map((item) => {
                            return(
                                <tr key={item.id}>
                                    <td>{item.name_product}</td>
                                    <td>{item.amount}</td>
                                    <td>{(item.amount * item.price / item.amount).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</td>
                                </tr>
                            )
                        })}
                    </>
                    }
                    </tbody> 
                    <tfoot>
                        <tr>
                            <th colSpan={2}>Pagamento</th>
                            <th>{pay}</th>
                        </tr>
                    </tfoot> 
                </table>
            </div>
        </Main>
    );
}

export default Historic;