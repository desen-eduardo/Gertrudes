import {HeaderPage} from './styled';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <HeaderPage>
            <div className="container">
                <h1>System Remedy</h1>
                <div className="menu">
                    <ul>
                        <li><Link to="/">Produtos</Link></li>
                        <li><button className="unlink">Última venda</button></li>
                        <li><button className="unlink">Sair</button></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/registrar">Registrar</Link></li>
                    </ul>
                </div>    
            </div>    
        </HeaderPage>
    );
}

export default Header;