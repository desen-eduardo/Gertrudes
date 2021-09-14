import { Box } from './styled';

const Register= ()=> {
    return(
        <Box>
            <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" placeholder="xemplo da silva" />
            </div>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="e-mail" id="email" placeholder="paulo@exemplo.com.br" />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Telefone</label>
                <input type="tel" id="phone" placeholder="(xx) xxxxx-xxxx" />
            </div>
            <div className="form-group">
                <label htmlFor="endereco">Endereço</label>
                <input type="text" id="endereco"  />
            </div>
            <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" />
            </div>
            <div className="main-button">
                <button className="btn btn-success">Cadastrar</button>
            </div>
        </Box>
    );
} 

export default Register;