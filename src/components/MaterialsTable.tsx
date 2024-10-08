import { FC, useState } from 'react';
import { mockMaterials } from '../mocks/mockMaterials';
import DataTable from './DataTable';
import { Column } from '../interface/DataTableInterface';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';



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
        image: string;
        name: string;
        availableAmount: number;
    }>[] = [
            {
                header: 'Imagen',
                render: (row) => (
                    <img src={row.image} alt={row.name} style={{ width: 'auto', height: '50px', borderRadius: '8px' }} />
                ),
            },
            {
                header: 'Nombre',
                accessor: 'name',
                sortable: true,
            },
            {
                header: 'Cantidad',
                accessor: 'availableAmount',
                sortable: true,
            },
            {
                header: 'Acciones',
                render: (row) => (
                    <div className='d-flex flex-row justify-content-center'>
                        <button className="btn btn-info">
                            <FaEye />
                        </button>
                        <button className="btn btn-warning" style={{ margin: '0 10px' }} onClick={() => handleOpenModal("Ejemplo")}>
                            <FaEdit />
                        </button>
                        <button className="btn btn-danger">
                            <FaTrash />
                        </button>
                    </div>
                ),
            },
        ];




    return (
        <div>
            <DataTable columns={columns} data={mockMaterials} />

            {/* Modal */}
            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Detalles de Material</h2>
                        <p>{modalContent}</p>
                        <button onClick={handleCloseModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LoanHistoryTable;