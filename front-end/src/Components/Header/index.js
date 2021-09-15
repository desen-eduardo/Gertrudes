import React from 'react';
import {HeaderPage} from './styled';
import { Link } from 'react-router-dom';
import { isLogged,doLogout } from '../../helpers/authHandler';

const Header = () => {
    let logged = isLogged();

    const handleLogout = () => {
        doLogout();
        window.location.href = '/login';
    }
    
    return(
        <HeaderPage>
            <div className="container">
                <h1>System Remedy</h1>
                <div className="menu">
                    <ul>
                        {logged &&
                            <>
                            <li><Link to="/">Produtos</Link></li>
                            <li><button className="unlink">Última venda</button></li>
                            <li><button className="unlink" onClick={handleLogout}>Sair</button></li>
                            </>
                        }
                        {!logged &&
                            <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/registrar">Registrar</Link></li>
                            </>
                        }
                    </ul>
                </div>    
            </div>    
        </HeaderPage>
    );
}

export default Header;