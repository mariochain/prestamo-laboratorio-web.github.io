import LoanHistoryTable from '../components/LoanHistoryTable';
import { FC } from 'react';

const LoanHistoryPage: FC = () => {

    return (
        <div className='d-flex justify-content-center mt-5 vh-100 w-100'>
            <div className="col-10 text-center">
                <h2>Mis Préstamos</h2>
                <LoanHistoryTable />
            </div>
        </div>
    );
};

export default LoanHistoryPage;
