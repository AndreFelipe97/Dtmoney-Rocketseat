import logoImg from '../../assets/logo.svg';
import {Container, Content} from './styles';

interface HeaderProps {
    handleOpenNewTransacionModal: () => void,
}

export function Header({handleOpenNewTransacionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={handleOpenNewTransacionModal}>
                    Nova Transação
                </button>
                
            </Content>
        </Container>
    );
}