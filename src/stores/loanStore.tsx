import create from 'zustand';
import { Loan } from '../interface/LoanInterface';

interface LoanStore {
    loans: Loan[];
    fetchLoans: () => void;
}

export const useLoanStore = create<LoanStore>((set) => ({
    loans: [],
    fetchLoans: () => {
        // Simulación de carga de préstamos
        const loans: Loan[] = [
            { requestDate: '2023-09-01', status: 'Pendiente', quantityBorrowed: 2, quantityReturned: 0, dueDate: '2023-09-15', borrower: 'Juan Pérez', details: 'Préstamo de material A' },
            { requestDate: '2023-09-10', status: 'Completado', quantityBorrowed: 1, quantityReturned: 1, dueDate: '2023-09-20', borrower: 'María López', details: 'Préstamo de material B' },
        ];
        set({ loans });
    },
}));