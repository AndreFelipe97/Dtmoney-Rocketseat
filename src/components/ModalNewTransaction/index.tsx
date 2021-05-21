import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';

import { Container } from './styles';

interface ModalNewTransactionProps {
    isNewTransactionModalOpen: boolean,
    handleCloseNewTransactionModal: () => void,
}

export function ModalNewTransaction({isNewTransactionModalOpen, handleCloseNewTransactionModal}: ModalNewTransactionProps) {
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
          <Container>
            <h2>Cadastrar transação</h2>
            <input type="text" placeholder="Título" />
            <input type="number" placeholder="Valor" />
            <input type="text" placeholder="Categoria" />
            <button type="submit">Cadastrar</button>
          </Container>
        </Modal>
      );
}