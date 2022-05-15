import { Typography, Stack } from "@mui/material";
import { MainCard } from "../components/MainCard";
import { GreenButton } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/agente-notificacao");
  };

  return (
    <>
      <MainCard>
        <Typography fontSize={22} textAlign="center" padding={5}>
          Seu animal está doente? Vamos notificar as autoridades para cuidar da
          sua produção!
        </Typography>
        <Stack direction="row" justifyContent="center">
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/cow-face_1f42e.png" />
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/pig-face_1f437.png" />
        </Stack>
        <GreenButton onClick={handleNavigation}>Começar!</GreenButton>
      </MainCard>
    </>
  );
};
