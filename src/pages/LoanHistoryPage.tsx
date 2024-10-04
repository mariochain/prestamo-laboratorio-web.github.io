import { useLoanStore } from '../stores/loanStore';
import LoanHistoryTable from '../components/LoanHistoryTable';
import { FC } from 'react';

const LoanHistoryPage: FC = () => {
    const { loans } = useLoanStore();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <h2>Mis Préstamos</h2>
                    <LoanHistoryTable loans={loans} />
                </div>
            </div>
        </div>
    );
};

export default LoanHistoryPage;
