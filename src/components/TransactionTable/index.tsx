import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface Transactions {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string
}

export function TransactionTable() {
    const [transactions, setTransactions] = useState<Transactions[]>([])

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions));
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map(t => (
                            <tr key={String(t.id)}>
                                <td>{t.title}</td>
                                <td className={t.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(Number(t.amount))}
                                </td>
                                <td>{t.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(new Date(t.createdAt))}    
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}