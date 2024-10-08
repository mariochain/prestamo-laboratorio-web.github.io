import { FC } from 'react';
import UsersTable from '../components/UsersTable';

const AdminUsersPage: FC = () => {
    return (
        <div className='d-flex justify-content-center mt-5 vh-100 w-100'>
            <div className="col-10 text-center">
                <h2>Administrar Usuarios</h2>
                <UsersTable />
            </div>
        </div>
    );
};

export default AdminUsersPage;
