import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface Transactions {
    id: number,
    title: string,
    value: number,
    type: string,
    category: string,
    createdAt: Date
}

export function TransactionTable() {
    const [transactions, setTransactions] = useState<Transactions[]>([])

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data));
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
                                <td className={t.type}>R${t.value}</td>
                                <td>{t.category}</td>
                                <td>{t.createdAt}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}