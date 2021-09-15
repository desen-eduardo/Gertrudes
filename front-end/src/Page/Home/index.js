import React, { useEffect, useState } from 'react';
import useApi from '../../helpers/gertrudesAPI';
import {Main,Title} from './styled'; 

const Home = () => {
    const api = useApi();
    const [listProducts,setListProducts] = useState([]);
    const [amount,setAmount] = useState(1);

    const handlePlus = () => {
        if (amount > 0) {
            setAmount(amount+1);
        }
    }

    const handleMinime = () => {
        if (amount === 1) {
            setAmount(1)
        } else {
            setAmount(amount - 1)
        }
    }

    useEffect(() => {
        const getProducts = async () => {
            const list = await api.getListProducts();
            setListProducts(list);
        }

        getProducts();
    },[]);

    console.log(listProducts)
    return(
        <Main>
            <div className="area-container">
                <div className="box-area">
                    <Title>Medicamento</Title>
                    <img src="./ilustrativa.jpg" alt="image ilustrativa" />
                    <div className="area-amount">
                        <button onClick={handlePlus}>+</button>
                        <input type="text" value={amount}/>
                        <button onClick={handleMinime}>-</button>
                    </div>
                    <div className="area-add">
                        <button>Adicionar</button>
                    </div>    
                </div>   
            </div>
        </Main>
    );
} 

export default Home;