import { useAuthStore } from '../stores/authStore';
import { FC } from 'react';
import Avatar from '../assets/avatar.jpg';

const ProfilePage: FC = () => {
    const { user } = useAuthStore();
    let avatar = Avatar;

    if (user?.photo) avatar = user.photo;

    return (
        <div className='d-flex justify-content-center mt-5 vh-100 w-100'>
            <div className="col-4 text-center">
                <h2>Mi Perfil</h2>
                <div className="card mx-auto">
                    <div className="card-body d-flex flex-column justify-content-center">
                        <div>
                            <img src={avatar} alt="Avatar" className="img-thumbnail" style={{ width: 'auto', height: '200px', maxWidth: '200px' }} />
                        </div>
                        <div className='text-start'>
                            <h5>{user?.name}</h5>
                            <p>Correo: {user?.email}</p>
                            <p>Carrera: {user?.career}</p>
                            <p>Semestre: {user?.semester}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
