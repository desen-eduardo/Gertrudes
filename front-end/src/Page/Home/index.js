import React, { useEffect, useState } from 'react';
import useApi from '../../helpers/gertrudesAPI';
import {Main,Title} from './styled'; 

const Home = () => {
    const api = useApi();
    const [listProducts,setListProducts] = useState([]);
    const [amount,setAmount] = useState(1);


    useEffect(() => {
        const getProducts = async () => {
            const list = await api.getListProducts();
            setListProducts(list);
        }

        getProducts();
    },[]);

    return(
        <Main>
            <div className="area-container">
                {listProducts.map((item,index) => {
                    return (
                        <div className="box-area" key={index}>
                            <Title>{item.name_product}</Title>
                            <img src="./ilustrativa.jpg" alt="image ilustrativa" />
                            <div className="area-price">
                                R$ {item.price}
                            </div>
                            <div className="area-add">
                                <button>Adicionar</button>
                            </div>    
                        </div> 
                    )
                })}
            </div>
        </Main>
    );
} 

export default Home;