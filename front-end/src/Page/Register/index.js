import React ,{useState} from 'react';
import useApi from '../../helpers/gertrudesAPI';
import { doLogin } from '../../helpers/authHandler';
import { Main,Box } from './styled';

const Register = () => {
    const api = useApi();

    const [showError,setShowError] = useState(false);
    const [message,setMessage] = useState('');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [address_complement,setAddressComplement] = useState('');
    const [password,setPassword] = useState('');
    const [disabled,setDisabled] = useState(false);

    const handleSubmit = async (e)=> {
        e.preventDefault();
        setDisabled(true);
        setMessage('');
        setShowError(false);

        const json = await api.register(
            name,email,phone,address_complement,password
        );

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
                        <label htmlFor="nome">Nome</label>
                        <input type="text" 
                            id="nome" 
                            placeholder="xemplo da silva"
                            required
                            disabled={disabled}
                            onChange={({target})=>{
                                setName(target.value);
                            }}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="e-mail" 
                            id="email" 
                            placeholder="paulo@exemplo.com.br"
                            required
                            disabled={disabled}
                            onChange={({target})=>{
                                setEmail(target.value);
                            }}
                            value={email} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Telefone</label>
                        <input type="tel" 
                            id="phone" 
                            placeholder="(xx) xxxxx-xxxx"
                            required
                            disabled={disabled}
                            onChange={({target})=>{
                                setPhone(target.value);
                            }}
                            value={phone} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endereco">Endereço</label>
                        <input type="text" 
                            id="endereco"
                            required
                            disabled={disabled}
                            onChange={({target})=>{
                                setAddressComplement(target.value);
                            }}
                            value={address_complement}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" 
                            id="senha"
                            required
                            disabled={disabled}
                            onChange={({target})=>{
                                setPassword(target.value);
                            }}
                            value={password}
                        />
                    </div>
                    <div className="main-button">
                        <button className="btn btn-success" type="submit">Cadastrar</button>
                    </div>
                </form>
            </Box>
        </Main>
    );
} 

export default Register;