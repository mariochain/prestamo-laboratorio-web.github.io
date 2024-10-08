import { FC } from 'react';
import { Material } from '../interface/MaterialInterface';
import { useMaterialStore } from '../stores/materialStore';

interface MaterialCardProps {
    material: Material;
}

const MaterialCard: FC<MaterialCardProps> = ({ material }) => {
    const { requestTray, addToRequestTray, incrementMaterial, decrementMaterial } = useMaterialStore();
    const requestedAmount = requestTray[material.id] || 0; // Cantidad solicitada de este material

    return (
        <div className="card text-center shadow">
            <img src={material.image} className="card-img-top d-block mx-auto m-3" alt={material.name} style={{ width: 'auto', height: '100px', maxWidth: '100px' }} />
            <div className="card-body">
                <h6 className="card-title">{material.name}</h6>
                <p className="card-text"><span style={{ fontSize: '0.8rem' }}>{material.description}</span></p>
                <p className="card-text"><strong>Cantidad disponible:</strong> {material.availableAmount}</p>
                {requestedAmount > 0 ? (
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-outline-secondary" onClick={() => decrementMaterial(material.id)}>-</button>
                        <span className="mx-3">{requestedAmount}</span>
                        <button className="btn btn-outline-secondary" onClick={() => incrementMaterial(material.id)} disabled={requestedAmount >= material.availableAmount}>+</button>
                    </div>
                ) : (
                    <button className="btn btn-primary" onClick={() => addToRequestTray(material)}>Agregar</button>
                )}
            </div>
        </div>
    );
};

export default MaterialCard;
