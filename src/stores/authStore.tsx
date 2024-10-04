import create from 'zustand';

type UserRole = 'Alumno' | 'Maestro' | 'Administrador';

interface User {
    name: string;
    photo: string;
    email: string;
    career: string;
    semester: number;
    role: UserRole;
}

interface AuthStore {
    user: User | null;
    role: UserRole | null;
    isAuthenticated: boolean;
    token: string;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    role: null,
    isAuthenticated: false,
    token: '',
    login: async (username, password) => {
        // Verificar credenciales directamente
        if (username === 'admin@example.com' && password === '1234') {
            const user: User = {
                name: 'Administrador',
                photo: '',
                email: username,
                career: 'Administración',
                semester: 0,
                role: 'Administrador'
            };

            set({ user, role: 'Administrador', isAuthenticated: true, token: 'admin_token' });
            return true;
        } else if (username === 'student@example.com' && password === '1234') {
            const user: User = {
                name: 'Estudiante',
                photo: 'student_photo_url', // Coloca la URL de la imagen del estudiante
                email: username,
                career: 'Ingeniería',
                semester: 4,
                role: 'Alumno'
            };

            set({ user, role: 'Alumno', isAuthenticated: true, token: 'student_token' });
            return true;
        } else {
            // Si las credenciales no coinciden
            return false;
        }
    },
    logout: () => {
        // Limpiar el estado de autenticación y remover token
        set({ user: null, role: null, isAuthenticated: false, token: '' });
    }
}));
