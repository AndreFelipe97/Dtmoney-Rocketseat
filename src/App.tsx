
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { ModalNewTransaction } from './components/ModalNewTransaction';

export function App() {
  const[isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => setNewTransactionModalOpen(true);

  const handleCloseNewTransactionModal = () => setNewTransactionModalOpen(false);

  return (
    <>
      <Header handleOpenNewTransacionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <ModalNewTransaction
        isNewTransactionModalOpen={isNewTransactionModalOpen}
        handleCloseNewTransactionModal={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </>
  );
}
