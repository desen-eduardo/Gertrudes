
import { Box } from './styled';

const Login = ()=> {
    return(
        <Box>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="e-mail" id="email" placeholder="paulo@exemplo.com.br" />
            </div>
            <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" />
            </div>
            <div className="main-button">
                <button className="btn btn-success">Entrar</button>
            </div>
        </Box>
    );
} 

export default Login;