import React ,{useState} from 'react';
import useApi from '../../helpers/gertrudesAPI';
import { doLogin } from '../../helpers/authHandler';
import { Main,Box } from './styled';

const Login = ()=> {
    const api = useApi();

    const [showError,setShowError] = useState(false);
    const [message,setMessage] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [disabled,setDisabled] = useState(false);

    const handleSubmit = async (e)=> {
        e.preventDefault();
        setDisabled(true);

        const json = await api.login(email,password);

        if (json.error) {
            setMessage(json.error);
            setShowError(true);
        } else {
            doLogin(json.token);
            window.location.href = '/';
        }

        setDisabled(false);
    }

    return(
        <Main>
            <Box>
                {showError &&
                    <div className="alert alert-danger">
                        <p>{message}</p>
                    </div>    
                }
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="e-mail" 
                            id="email" 
                            placeholder="paulo@exemplo.com.br"
                            required
                            disabled={disabled}
                            onChange={({target})=>{
                                setEmail(target.value)
                            }} value={email} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" 
                            id="senha"
                            required
                            disabled={disabled}
                            onChange={({target})=>{
                                setPassword(target.value)
                            }} value={password}
                        />
                    </div>
                    <div className="main-button">
                        <button className="btn btn-success" type="submit" disabled={disabled}>Entrar</button>
                    </div>
                </form>
            </Box>
        </Main>
    );
} 

export default Login;