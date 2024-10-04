import { FC } from 'react';
import { Loan } from '../interface/Loan';

interface LoanHistoryTableProps {
    loans: Loan[];
}

const LoanHistoryTable: FC<LoanHistoryTableProps> = ({ loans }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Fecha de Solicitud</th>
                    <th>Estado</th>
                    <th>Cantidad Prestada</th>
                    <th>Cantidad Regresada</th>
                    <th>Fecha de Vencimiento</th>
                    <th>Detalles de Préstamo</th>
                </tr>
            </thead>
            <tbody>
                {loans.map((loan, index) => (
                    <tr key={index}>
                        <td>{loan.requestDate}</td>
                        <td>{loan.status}</td>
                        <td>{loan.quantityBorrowed}</td>
                        <td>{loan.quantityReturned}</td>
                        <td>{loan.dueDate}</td>
                        <td>
                            <button type="button" className="btn btn-info" data-toggle="modal" data-target={`#detailsModal${index}`}>
                                Ver Detalles
                            </button>

                            {/* Modal for loan details */}
                            <div className="modal fade" id={`detailsModal${index}`} tabIndex={-1} role="dialog" aria-labelledby={`detailsModalLabel${index}`} aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id={`detailsModalLabel${index}`}>Detalles del Préstamo</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            {loan.details}
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default LoanHistoryTable;
