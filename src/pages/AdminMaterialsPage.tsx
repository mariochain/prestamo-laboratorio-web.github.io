import { FC } from 'react';
import MaterialsTable from '../components/MaterialsTable';

const AdminMaterialsPage: FC = () => {
    return (
        <div className='d-flex justify-content-center mt-5 vh-100 w-100'>
            <div className="col-10 text-center">
                <h2>Administrar Materiales</h2>
                <MaterialsTable />
            </div>
        </div>
    );
};

export default AdminMaterialsPage;
