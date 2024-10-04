import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

interface ProtectedRouteProps {
    children: JSX.Element;
    allowedRoles: ('Alumno' | 'Maestro' | 'Administrador')[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
    const { isAuthenticated, role } = useAuthStore();

    // Verifica si el usuario está autenticado
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // Verifica si el rol del usuario está permitido
    if (role && !allowedRoles.includes(role)) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;
