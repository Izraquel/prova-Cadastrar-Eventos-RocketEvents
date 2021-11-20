import { useEffect, useState, FormEvent } from "react";
import { api } from "../../service/api";
import Modal from "react-modal";
import { Container } from "./styles";
import closeImg from "../../assets/close.svg";

interface NewModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalList({ isOpen, onRequestClose }: NewModal) {
  const [evento, setEvento] = useState();

  const [nomeEvento, setNomeEvento] = useState("");
  const [local, setLocal] = useState("");
  const [diaSemana, setDiaSemana] = useState("");
  const [horario, setHorario] = useState("");
  const [idS, setIdS] = useState(null);

  async function loadData() {
    const dados = await api.get(`/events`).then((res) => res.data);
    setEvento(dados);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function addEvent(event: FormEvent) {
    event.preventDefault();

    const dado = {
      nomeevento: nomeEvento,
      local: local,
      diasemana: diaSemana,
      horario: horario,
    };

    console.log(dado);

    if (idS) {
      await api.put(`/events/${idS}`, dado);
    } else {
      await api.post("/events", dado);
    }

    setNomeEvento("");
    setLocal("");
    setDiaSemana("");
    setHorario("");
    setIdS(null);
    loadData();
  }

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

      <Container onSubmit={addEvent}>
        <h2>Cadastrar Eventos</h2>

        <input
          type="text"
          name="nomeevento"
          value={nomeEvento}
          placeholder="Nome do Evento"
          onChange={(e) => setNomeEvento(e.target.value)}
        />

        <input
          type="text"
          name="local"
          value={local}
          placeholder="Local do Evento"
          onChange={(e) => setLocal(e.target.value)}
        />

        <input
          type="text"
          name="diasemana"
          value={diaSemana}
          placeholder="Dia da Semana"
          onChange={(e) => setDiaSemana(e.target.value)}
        />

        <input
          type="text"
          name="horario"
          value={horario}
          placeholder="Horário"
          onChange={(e) => setHorario(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
