import React from "react";
import { Container, Acao } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

interface IEventos {
  id: string;
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
  like: number;
  dislike: number;
}

export function Table() {
  const [eventos, setEventos] = useState<IEventos[]>([]);

  async function loadData() {
    const dados = await api.get(`/events`).then((res) => res.data);
    setEventos(dados);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function deleteEvent(id: string) {
    await api.delete(`/events/${id}`);

    loadData();
  }

  const addLike = async (id: string) => {
    await api.post(`/events/like/${id}`);
    api.get("/events").then((res) => setEventos(res.data));
  };

  const addDislike = async (id: string) => {
    await api.post(`/events/dislike/${id}`);
    api.get("/events").then((res) => setEventos(res.data));
  };

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Evento</th>
            <th>Local</th>
            <th>Dia da Semana</th>
            <th>Horário</th>
          </tr>
        </thead>

        <tbody>
          {eventos.map((e: IEventos) => {
            return (
              <tr key={e.id}>
                <td>{` ${e.nomeevento}`}</td>
                <td>{` ${e.local}`}</td>
                <td>{` ${e.diasemana}`}</td>
                <td>{` ${e.horario}`}</td>

                <Acao className="acoes">
                  <button
                    className="apagar"
                    onClick={() => {
                      deleteEvent(e.id);
                    }}
                  >
                    Apagar
                  </button>

                  <a href="" className="buttonLike">
                    <FaThumbsUp color="#8257E4" onClick={() => addLike(e.id)} />
                    <Acao>{`${e.like}`}</Acao>
                  </a>

                  <a href="" className="buttonDislike">
                    <FaThumbsDown
                      color="#8257E4"
                      onClick={() => addDislike(e.id)}
                    />
                    <Acao>{`${e.dislike}`}</Acao>
                  </a>
                </Acao>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
