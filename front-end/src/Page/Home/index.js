import React, { useEffect,useState} from 'react';
import useApi from '../../helpers/gertrudesAPI';
import {Main,Title} from './styled'; 

const Home = () => {
    const api = useApi();
    const [listProducts,setListProducts] = useState([]);
    const [products,setProducts] = useState([]);

    const handleAddProduct = (id,name,price) => {

        const items = {
            id:id,
            name_product:name,
            price:price,
            amount:1
        };

        const item = [...products,items];
        
        setProducts(item);
        localStorage.setItem('products',JSON.stringify(products));
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
                                <button onClick={()=>handleAddProduct(item.id,item.name_product,item.price)}>Adicionar</button>
                            </div>    
                        </div> 
                    )
                })}
            </div>
        </Main>
    );
} 

export default Home;