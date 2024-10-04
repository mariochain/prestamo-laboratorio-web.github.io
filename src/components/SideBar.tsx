import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { FaUser, FaHistory, FaMicrochip, FaUsers, FaClipboardList } from 'react-icons/fa';


interface SidebarProps {
    isVisible: boolean;
}

const SideBar: FC<SidebarProps> = ({ isVisible }) => {
    const { role } = useAuthStore();

    const linkStyle = 'text-white';
    const iconStyle = 'm-2 col-1';
    const textStyle = 'col-11';

    return (
        <div className={`sidebar ${isVisible ? '' : 'sidebar-collapsed'}`}>
            <ul className="list-unstyled m-4">
                {(role === 'Alumno' || role === 'Maestro') && (
                    <>
                        <li><Link to="/profile" className={linkStyle}>
                            <FaUser className={iconStyle} />
                            <span className={textStyle}>Mi Perfil</span>
                        </Link></li>
                        <li><Link to="/loan-history" className={linkStyle}>
                            <FaHistory className={iconStyle} />
                            <span className={textStyle}>Historial de Préstamos</span>
                        </Link></li>
                        <li><Link to="/request-material" className={linkStyle}>
                            <FaClipboardList className={iconStyle} />
                            <span className={textStyle}>Solicitar Material</span>
                        </Link></li>
                    </>
                )}

                {/* Rutas específicas del Administrador */}
                {role === 'Administrador' && (
                    <>
                        <li><Link to="/profile" className={linkStyle}>
                            <FaUser className={iconStyle} />
                            <span className={textStyle}>Mi Perfil</span>
                        </Link></li>
                        <li><Link to="/admin-loans" className={linkStyle}>
                            <FaHistory className={iconStyle} />
                            <span className={textStyle}>Administrar Préstamos</span>
                        </Link></li>
                        <li><Link to="/admin-users" className={linkStyle}>
                            <FaUsers className={iconStyle} />
                            <span className={textStyle}>Administrar Usuarios</span>
                        </Link></li>
                        <li><Link to="/admin-materials" className={linkStyle}>
                            <FaMicrochip className={iconStyle} />
                            <span className={textStyle}>Administrar Materiales</span>
                        </Link></li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default SideBar;
