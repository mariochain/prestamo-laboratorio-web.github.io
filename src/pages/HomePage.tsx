import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { FC } from 'react';
import { FaUser, FaHistory, FaMicrochip, FaUsers, FaClipboardList } from 'react-icons/fa';


const HomePage: FC = () => {
    const { user } = useAuthStore();
    const linkStyle = "btn btn-secondary btn-lg d-flex align-items-center justify-content-center col-4 mb-3";
    const iconStyle = 'col-1';
    const textStyle = 'col-11';

    return (
        <div className='d-flex justify-content-center mt-5 vh-100 w-100'>
            <div className="col-md-9 text-center">
                <h2>¡Bienvenido, </h2>
                <h1 className='text-primary'>{user?.name}!</h1>
                <div className="d-flex flex-column justify-content-center align-items-center mt-4">
                    {/* Rutas accesibles por Alumnos, Maestros y Administradores */}
                    {(user?.role === 'Alumno' || user?.role === 'Maestro') && (
                        <>
                            <Link to="/profile" className={linkStyle}>
                                <FaUser className={iconStyle} />
                                <span className={textStyle}>Mi Perfil</span>
                            </Link>
                            <Link to="/loan-history" className={linkStyle}>
                                <FaHistory className={iconStyle} />
                                <span className={textStyle}>Historial de Préstamos</span>
                            </Link>
                            <Link to="/request-material" className={linkStyle}>
                                <FaClipboardList className={iconStyle} />
                                <span className={textStyle}>Solicitar Material</span>
                            </Link>
                        </>
                    )}

                    {/* Rutas específicas del Administrador */}
                    {user?.role === 'Administrador' && (
                        <>
                            <Link to="/profile" className={linkStyle}>
                                <FaUser className={iconStyle} />
                                <span className={textStyle}>Mi Perfil</span>
                            </Link>
                            <Link to="/admin-loans" className={linkStyle}>
                                <FaHistory className={iconStyle} />
                                <span className={textStyle}>Administrar Préstamos</span>
                            </Link>
                            <Link to="/admin-users" className={linkStyle}>
                                <FaUsers className={iconStyle} />
                                <span className={textStyle}>Administrar Usuarios</span>
                            </Link>
                            <Link to="/admin-materials" className={linkStyle}>
                                <FaMicrochip className={iconStyle} />
                                <span className={textStyle}>Administrar Materiales</span>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>

    );
};

export default HomePage;