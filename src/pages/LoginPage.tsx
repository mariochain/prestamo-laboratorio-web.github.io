import { FC, useState } from 'react';
import { useAuthStore } from '../stores/authStore';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/LOGO_ITMexicali.jpg'

const LoginPage: FC = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const { login } = useAuthStore();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const success = await login(credentials.username, credentials.password);
        if (success) navigate('/');
    };

    return (
        <div className='d-flex flex-row justify-content-center align-items-center vh-100'>
            <img src={Logo} alt="No hay Logo" />
            <div className="container col-6 p-4 rounded-5 text-white" style={{ backgroundColor: '#0c255e' }}>
                <h2 className='text-center'>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Nombre de Usuario</label>
                        <input type="text" className="form-control" id="username" name="username" value={credentials.username} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={handleChange} required />
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default LoginPage;
