import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import RequestMaterialPage from '../pages/RequestMaterialPage';
import LoanHistoryPage from '../pages/LoanHistoryPage';
import AdminLoansPage from '../pages/AdminLoansPage';
import AdminUsersPage from '../pages/AdminUsersPage';
import AdminMaterialsPage from '../pages/AdminMaterialsPage';
import CheckoutPage from '../pages/CheckoutPage';
import ProtectedRoute from '../components/ProtectedRoute';
import { FC } from 'react';

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />

            {/* Rutas para todos los roles */}
            <Route path="/profile" element={<ProtectedRoute allowedRoles={['Alumno', 'Maestro', 'Administrador']}><ProfilePage /></ProtectedRoute>} />
            <Route path="/loan-history" element={<ProtectedRoute allowedRoles={['Alumno', 'Maestro']}><LoanHistoryPage /></ProtectedRoute>} />
            <Route path="/request-material" element={<ProtectedRoute allowedRoles={['Alumno', 'Maestro']}><RequestMaterialPage /></ProtectedRoute>} />
            <Route path="/checkout" element={<ProtectedRoute allowedRoles={['Alumno', 'Maestro']}><CheckoutPage /></ProtectedRoute>} />

            {/* Rutas específicas del administrador */}
            <Route path="/admin-loans" element={<ProtectedRoute allowedRoles={['Administrador']}><AdminLoansPage /></ProtectedRoute>} />
            <Route path="/admin-users" element={<ProtectedRoute allowedRoles={['Administrador']}><AdminUsersPage /></ProtectedRoute>} />
            <Route path="/admin-materials" element={<ProtectedRoute allowedRoles={['Administrador']}><AdminMaterialsPage /></ProtectedRoute>} />
        </Routes>
    );
};

export default AppRoutes;
