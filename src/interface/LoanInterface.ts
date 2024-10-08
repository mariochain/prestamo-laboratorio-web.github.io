export interface Loan {
    requestDate: string; // o Date si prefieres trabajar con objetos Date
    status: 'En Aprobación' | 'Aprobado' | 'Entregado' | 'Cancelado' | 'Pendiente' | 'Completado'; // Añadir nuevos estados
    quantityBorrowed: number;
    quantityReturned: number;
    dueDate: string; // o Date
    borrower?: string; // nombre del usuario que solicita
    details?: string; // detalles del préstamo
}
