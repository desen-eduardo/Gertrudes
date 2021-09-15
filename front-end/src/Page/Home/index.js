import React, { useEffect,useState} from 'react';
import useApi from '../../helpers/gertrudesAPI';
import {Main,Title} from './styled'; 

const Home = () => {
    const api = useApi();
    const [listProducts,setListProducts] = useState([]);

    const handleAddProduct = () => {
        
    }

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
                {listProducts.map((item) => {
                    return (
                        <div className="box-area" key={item.id}>
                            <Title>{item.name_product}</Title>
                            <img src="./ilustrativa.jpg" alt="image ilustrativa" />
                            <div className="area-price">
                                R$ {item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                            </div>
                            <div className="area-add">
                                <button onClick={handleAddProduct}>Adicionar</button>
                            </div>    
                        </div> 
                    )
                })}
            </div>
        </Main>
    );
} 

export default Home;