import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { api } from '../../services/api';

import closeImg from '../../assets/close.svg';
import outcomeImg from '../../assets/outcome.svg';
import incomeimg from '../../assets/income.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';


interface ModalNewTransactionProps {
    isNewTransactionModalOpen: boolean,
    handleCloseNewTransactionModal: () => void,
}

export function ModalNewTransaction({isNewTransactionModalOpen, handleCloseNewTransactionModal}: ModalNewTransactionProps) {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState(0);
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
      event.preventDefault();
      
      const data = {title, value, category, type}

      api.post('/transactions', data)
    }

    return (
        <Modal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
          <button type="button" onClick={handleCloseNewTransactionModal} className="react-modal-close">
            <img src={closeImg} alt="Fechar modal" />
          </button>
          <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação</h2>
            <input
              type="text"
              placeholder="Título"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <input
              type="number"
              placeholder="Valor"
              value={value}
              onChange={event => setValue(Number(event.target.value))}
            />
            <TransactionTypeContainer>
              <RadioBox
                type="button"
                isActive={type === 'deposit'}
                activeColor="green"
                onClick={() => setType('deposit')}
              >
                <img src={incomeimg} alt="Entrada" />
                <span>Entrada</span>
              </RadioBox>
              <RadioBox
                type="button"
                isActive={type === 'withdraw'}
                activeColor="red"
                onClick={() => setType('withdraw')}
              >
                <img src={outcomeImg} alt="Saída" />
                <span>Saída</span>
              </RadioBox>
            </TransactionTypeContainer>
            <input
              type="text"
              placeholder="Categoria"
              value={category}
              onChange={event => setCategory(event.target.value)}
            />
            <button type="submit">Cadastrar</button>
          </Container>
        </Modal>
      );
}