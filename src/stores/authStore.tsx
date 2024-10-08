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
                photo: 'https://scontent.felp1-1.fna.fbcdn.net/v/t39.30808-6/376621230_6500932346620429_6338072394074559642_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=iuNq9-5MdXQQ7kNvgF-Zc2A&_nc_ht=scontent.felp1-1.fna&_nc_gid=AkDs8LdOKGPz0Gz4pYPkEaH&oh=00_AYAGxqAgf7ACwjbpOBtem7dTwGYCXVcOFCyVEuntDgd8Kw&oe=670524BC', // Coloca la URL de la imagen del estudiante
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
