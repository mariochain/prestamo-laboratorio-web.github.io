import { useEffect } from 'react';
import { useMaterialStore } from '../stores/materialStore';
import MaterialCard from '../components/MaterialCard';
import { FC } from 'react';

const RequestMaterialPage: FC = () => {
    const { materials, fetchMaterials } = useMaterialStore();
    // useEffect para cargar los materiales al montar el componente
    useEffect(() => {
        fetchMaterials(); // Llama a la función para cargar los materiales
    }, [fetchMaterials]);

    return (
        <div className='d-flex justify-content-center mt-5 w-100'>
            <div className="px-2 col-12 text-center">
                <h2 className='text-center'>Solicitar Material</h2>
                <div className="d-flex flex-wrap justify-content-center">
                    {materials.length > 0 ? (
                        materials.map((material) => (
                            <div className="col-3 m-2" key={material.id}>
                                <MaterialCard material={material} />
                            </div>
                        ))
                    ) : (
                        <p>No hay materiales disponibles.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RequestMaterialPage;
