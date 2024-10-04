import { FC } from 'react';
import { useAuthStore } from '../stores/authStore';
import { Link } from 'react-router-dom';
import Mostrar from '../assets/mostrar-sidebar.png'
import Ocultar from '../assets/ocultar-sidebar.png'
import { useMaterialStore } from '../stores/materialStore';
import { FaInbox } from 'react-icons/fa';

interface NavbarProps {
    isVisible: boolean;
    toggleSidebar: () => void;
}

const Navbar: FC<NavbarProps> = ({ isVisible, toggleSidebar }) => {
    const { role, logout } = useAuthStore();
    const { requestTray } = useMaterialStore();

    const requestMaterialCount = Object.keys(requestTray).length;

    const handleLogout = () => {
        logout();
        document.location.reload()
    };

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#0c255e', marginLeft: isVisible ? '250px' : '0' }}>
            <div className="container-fluid">
                <button className="btn btn-outline-light m-2" onClick={toggleSidebar} >
                    {isVisible ? (
                        <img src={Ocultar} alt="Cerrar Sidebar" style={{ width: '24px', height: '24px' }} />
                    ) : (
                        <img src={Mostrar} alt="Abrir Sidebar" style={{ width: '24px', height: '24px' }} />
                    )}
                </button>
                <Link className="navbar-brand text-white" to="/">Préstamo en Lab</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">este</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Inicio</Link>
                        </li>
                        {role === 'Alumno' && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/loan-history">Mis Préstamos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/request-material">Solicitar Material</Link>
                                </li>
                            </>
                        )}
                        {role === 'Administrador' && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/admin-loans">Préstamos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/admin-users">Usuarios</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/admin-materials">Materiales</Link>
                                </li>
                            </>
                        )}
                    </ul>
                    <div className="ms-auto d-flex align-items-center gap-2">
                        <Link to="/checkout" className="position-relative me-2">
                            <FaInbox size={24} className="text-white" />
                            {requestMaterialCount > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {requestMaterialCount}
                                </span>
                            )}
                        </Link>
                        <button className="btn btn-outline-light ms-auto" onClick={handleLogout}>
                            <Link className="nav-link" to="/login">Cerrar Sesión</Link>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;
