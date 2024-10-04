import create from 'zustand';
import { Material } from '../interface/Material';

interface MaterialStore {
    materials: Material[];
    requestTray: { [key: number]: number }; // Llave: ID del material, Valor: Cantidad solicitada
    addToRequestTray: (material: Material) => void;
    incrementMaterial: (id: number) => void;
    decrementMaterial: (id: number) => void;
    removeFromRequestTray: (id: number) => void; // Nueva función

    fetchMaterials: () => void; // Simulación de fetch de materiales
}

export const useMaterialStore = create<MaterialStore>((set) => ({
    materials: [],
    requestTray: {},
    fetchMaterials: () => {
        // Simulación de carga de materiales
        const materials = [
            {
                id: 1,
                name: 'Osciloscopio',
                description: 'Instrumento de medida que visualiza señales eléctricas',
                availableAmount: 5,
                image: 'https://www.finaltest.com.mx/v/vspfiles/photos/TBS1202C-2.jpg?v-cache=1724075973'
            },
            {
                id: 2,
                name: 'Multímetro Digital',
                description: 'Instrumento de medida para corriente, voltaje y resistencia',
                availableAmount: 10,
                image: 'https://m.media-amazon.com/images/I/71m6RuEWT-L._AC_SX679_.jpg'
            },
            {
                id: 3,
                name: 'Fuente de poder regulable',
                description: 'Suministra voltaje y corriente ajustables para pruebas eléctricas',
                availableAmount: 4,
                image: 'https://m.media-amazon.com/images/I/611zX1Mp45L.__AC_SX300_SY300_QL70_ML2_.jpg'
            },
            {
                id: 4,
                name: 'Protoboard',
                description: 'Placa para realizar prototipos de circuitos electrónicos',
                availableAmount: 20,
                image: 'https://comeind.com.mx/wp-content/uploads/2022/01/500-0050.jpg'
            },
            {
                id: 5,
                name: 'Relay',
                description: 'Relay con bobina de 12v, capaz de conmutar cargas de hasta 10A',
                availableAmount: 15,
                image: 'https://www.teslaelectronic.com.pe/wp-content/uploads/2018/12/Relay12v.1.jpg'
            },
            {
                id: 6,
                name: 'Programador USB',
                description: 'Herramienta para cargar programas en microcontroladores',
                availableAmount: 8,
                image: 'https://www.geekfactory.mx/wp-content/uploads/2017/01/Programador-USBasp-para-AVR-USB-ASP-ISP.jpg'
            },
            {
                id: 7,
                name: 'Multímetro Analógico',
                description: 'Herramienta para medir voltaje, corriente y resistencia con precisión',
                availableAmount: 10,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uT-iS-r3j6EJIBn0JkJkmfO3AHQDEJrMhQ&s'
            },
            {
                id: 8,
                name: 'Pinzas de cocodrilo',
                description: 'Accesorios para conectar componentes de forma temporal',
                availableAmount: 50,
                image: 'https://m.media-amazon.com/images/I/61qWhKkiw2L.jpg'
            },
            {
                id: 9,
                name: 'Sensor de temperatura',
                description: 'Dispositivo para medir la temperatura en circuitos',
                availableAmount: 12,
                image: 'https://uelectronics.com/wp-content/uploads/2018/12/AR0860-Sensor-de-temperatura-TMP36-V3.jpg'
            },
            {
                id: 10,
                name: 'LED RGB',
                description: 'Diodo emisor de luz con tres colores en un solo dispositivo',
                availableAmount: 30,
                image: 'https://aelectronics.com.mx/metepec/5730-thickbox_default/led-rgb-5mm-catodo-comun.jpg'
            },
            {
                id: 11,
                name: 'Arduino Uno',
                description: 'Microcontrolador para proyectos electrónicos',
                availableAmount: 6,
                image: 'https://m.media-amazon.com/images/I/61AvdQOxFzL._AC_UF894,1000_QL80_.jpg'
            },
            {
                id: 12,
                name: 'Potenciómetro',
                description: 'Potenciómetro electrónico lineal de 20kohm',
                availableAmount: 50,
                image: 'https://geekbotelectronics.com/wp-content/uploads/2021/06/Potenciometro.jpg'
            },
        ];
        set({ materials });
    },

    // Agregar material a la bandeja de solicitud
    addToRequestTray: (material: Material) =>
        set((state) => ({
            requestTray: {
                ...state.requestTray,
                [material.id]: 1, // Comienza con 1 si no estaba en la bandeja
            },
        })),

    // Incrementar cantidad de material en la bandeja
    incrementMaterial: (id: number) =>
        set((state) => {
            const currentAmount = state.requestTray[id] || 0;
            const material = state.materials.find((m) => m.id === id);
            if (material && currentAmount < material.availableAmount) {
                return {
                    requestTray: {
                        ...state.requestTray,
                        [id]: currentAmount + 1,
                    },
                };
            }
            return state;
        }),

    // Decrementar cantidad de material en la bandeja
    decrementMaterial: (id: number) =>
        set((state) => {
            const currentAmount = state.requestTray[id] || 0;
            if (currentAmount > 1) {
                return {
                    requestTray: {
                        ...state.requestTray,
                        [id]: currentAmount - 1,
                    },
                };
            } else {
                // Si la cantidad llega a 0, lo eliminamos de la bandeja
                const { [id]: _, ...rest } = state.requestTray;
                return {
                    requestTray: rest,
                };
            }
        }),
    removeFromRequestTray: (id: number) =>
        set((state) => {
            const { [id]: _, ...rest } = state.requestTray;
            return {
                requestTray: rest,
            };
        }),
}));
