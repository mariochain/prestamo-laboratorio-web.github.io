import { FC } from 'react';
import { useMaterialStore } from '../stores/materialStore';
import { Material } from '../interface/Material';
import { FaTrash } from 'react-icons/fa'; // Puedes usar cualquier ícono que desees

const CheckoutPage: FC = () => {
    const { requestTray, materials, removeFromRequestTray } = useMaterialStore();

    const requestedMaterials = materials.filter(material => requestTray[material.id]);

    return (
        <div className="container mt-5">
            <h2>Listado de Material</h2>
            {requestedMaterials.length === 0 ? (
                <p>No hay materiales en la bandeja de solicitud.</p>
            ) : (
                <div className="list-group">
                    {requestedMaterials.map((material: Material) => (
                        <div key={material.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center col-11">
                                <div className='col-4 text-center'>
                                    <img src={material.image} alt={material.name} style={{ width: 'auto', maxHeight: '100px', marginRight: '10px' }} />

                                </div>
                                <div className='col-4 text-center'>
                                    <span className='fs-5'>{material.name}</span>
                                </div>
                                <div className='col-4 text-center'>
                                    <span className="badge bg-secondary fs-5">{requestTray[material.id]}</span>
                                </div>
                            </div>

                            <div className='d-flex align-items-center col-1 '>
                                <button
                                    className="btn btn-outline-danger"
                                    onClick={() => removeFromRequestTray(material.id)}
                                >
                                    <FaTrash />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            )}
            <div className='text-center'>
                <button className="btn btn-primary mt-3">Enviar Solicitud</button>
            </div>
        </div>
    );
};

export default CheckoutPage;
