import { FC } from 'react';
import LoanHistoryTable from '../components/LoanHistoryTable';

const AdminLoansPage: FC = () => {
    return (
        <div className='d-flex justify-content-center mt-5 vh-100 w-100'>
            <div className="col-10 text-center">
                <h2>Administrar Préstamos</h2>
                <LoanHistoryTable />
            </div>
        </div>
    );
};

export default AdminLoansPage;
