import { FC, useState } from 'react';
import { mockUsers } from '../mocks/mockUsers';
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
        fotoPerfil: string;
        nombre: string;
        rol: string;
        correo: string;
        semestre: number;
    }>[] = [
            {
                header: 'Foto de Perfil',
                render: (row) => <img src={row.fotoPerfil} alt={row.nombre} style={{ width: '50px', borderRadius: '50%' }} />,
            },
            {
                header: 'Nombre',
                accessor: 'nombre',
                sortable: true,
            },
            {
                header: 'Rol',
                accessor: 'rol',
                sortable: true,
            },
            {
                header: 'Correo',
                accessor: 'correo',
                sortable: true,
            },
            {
                header: 'Semestre',
                accessor: 'semestre',
                sortable: true,
            },
            {
                header: 'Acciones',
                render: (row) => (
                    <div className='d-flex flex-row'>
                        <button className="btn btn-info">
                            <FaEye />
                        </button>
                        <button className="btn btn-warning" style={{ margin: '0 10px' }}>
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
            <DataTable columns={columns} data={mockUsers} />

            {/* Modal */}
            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Detalles de Usuario</h2>
                        <p>{modalContent}</p>
                        <button onClick={handleCloseModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LoanHistoryTable;