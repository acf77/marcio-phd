import { Container, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { SmallCard } from "../components/SmallCard/styles";
import { Context } from "../context/Context";

export const AgenteNotifPage = () => {
  const navigate = useNavigate();

  const pageData = [
    {
      title: "Propietário ou responsável pelos animais",
      icon: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/tractor_1f69c.png",
    },
    {
      title: "Funcionário",
      icon: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/man-farmer_1f468-200d-1f33e.png",
    },
    {
      title: "Pessoal de laboratório ou de diagnóstico",
      icon: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/lab-coat_1f97c.png",
    },
    {
      title: "Médico Veterinário de Clínica Privada",
      icon: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/woman-health-worker_1f469-200d-2695-fe0f.png",
    },
    {
      title: "Médico Veterinário habilitado pelo SVO",
      icon: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/man-health-worker_1f468-200d-2695-fe0f.png",
    },
    {
      title: "Médico Veterinário da AGED",
      icon: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/pig-face_1f437.png",
    },
  ];

  const { state, setState } = useContext(Context);

  const handleSave = (card) => {
    setState({ agenteNotif: card.title });
    handleNavigate();
    console.log(state);
  };

  const handleNavigate = () => navigate("/data-notificacao");

  return (
    <Container>
      <Typography fontSize={22} textAlign="center" padding={5}>
        Quem está fazendo notificação?
      </Typography>
      {pageData.map((card) => (
        <SmallCard onClick={() => handleSave(card)}>
          <Typography fontSize={18} textAlign="center" padding={5}>
            {card.title}
          </Typography>
          <img style={{ marginLeft: "27%" }} src={card.icon} />
        </SmallCard>
      ))}
    </Container>
  );
};
