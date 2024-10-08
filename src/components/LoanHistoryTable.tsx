import { FC, useState } from 'react';
import { mockLoans } from '../mocks/mockLoan';
import DataTable from './DataTable';
import { Column } from '../interface/DataTableInterface';
import { FaEye } from 'react-icons/fa';



const LoanHistoryTable: FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleOpenModal = (content: string) => {
        setModalContent(content);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setModalContent('');
    };

    const columns: Column<{
        fechaSolicitud: string;
        estado: string;
        cantidadPrestada: number;
        cantidadRegresada: number;
        fechaVencimiento: string;
        detallesPrestamo: string;
    }>[] = [
            {
                header: 'Fecha de Solicitud',
                accessor: 'fechaSolicitud',
                sortable: true,
            },
            {
                header: 'Estado',
                accessor: 'estado',
                sortable: true,
            },
            {
                header: 'Cantidad Prestada',
                accessor: 'cantidadPrestada',
                sortable: true,
            },
            {
                header: 'Cantidad Regresada',
                accessor: 'cantidadRegresada',
                sortable: true,
            },
            {
                header: 'Fecha de Vencimiento',
                accessor: 'fechaVencimiento',
                sortable: true,
            },
            {
                header: 'Detalles de Préstamo',
                render: (row) => (
                    <div className='text-center'>
                        <button className='btn btn-light' onClick={() => handleOpenModal(row.detallesPrestamo)}>
                            <FaEye />
                        </button>
                    </div>

                ),
            },
        ];


    return (
        <div>
            <DataTable columns={columns} data={mockLoans} />

            {/* Modal */}
            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Detalles de Préstamo</h2>
                        <p>{modalContent}</p>
                        <button onClick={handleCloseModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LoanHistoryTable;