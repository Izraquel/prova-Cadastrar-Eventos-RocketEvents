import { useState } from "react";
import Modal from 'react-modal';
import { Container } from "./styles";
import closeImg from '../../assets/close.svg'


interface NewModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ModalList({isOpen, onRequestClose }:  NewModal ){
    const [eventos, setEventos] = useState()

    return (
       <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
       >
        
       <button 
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
          >
          <img src={closeImg} alt="Fechar modal" />
        </button>
 
            <Container>
                <h2>Cadastrar Eventos</h2>

                <input type="text" placeholder="Nome do Evento" />
                <input type="text" placeholder="Local" />
                <input type="text" placeholder="Dia da Semana" />
                <input type="text" placeholder="Horário" />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
       </Modal>
    ) 
}