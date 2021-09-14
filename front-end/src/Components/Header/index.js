import {HeaderPage} from './styled';

const Header = () => {
    return(
        <HeaderPage>
            <div className="container">
                <h1>System Medicament</h1>
                <div className="menu">
                    <ul>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Registrar</a></li>
                    </ul>
                </div>    
            </div>    
        </HeaderPage>
    );
}

export default Header;