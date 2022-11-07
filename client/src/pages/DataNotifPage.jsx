import { Container, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { Context } from "../context/Context";
import { MainCard } from "../components/MainCard";
import { NotifCalendar } from "../components/Calendar";

import "react-calendar/dist/Calendar.css";

export const DataNotifPage = () => {
  const date = new Date();
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:920px)");

  const { state, setState } = useContext(Context);

  const handleDate = (e) => {
    setState({ ...state, dataNotif: JSON.stringify(e) });
    handleNavigate();
    console.log(state);
  };

  const handleNavigate = () => navigate("/animais-notificacao");

  return (
    <>
      {matches ? (
        <Container>
          <Typography variant="h1" fontSize={22} textAlign="center" padding={5}>
            Quando o problema começou?
          </Typography>
          <MainCard sx={{ width: "75%", padding: "20px" }}>
            <NotifCalendar onChange={(e) => handleDate(e)} value={date} />
            {/* <GreenButton onClick={handleNavigate}>Próximo</GreenButton> */}
          </MainCard>
        </Container>
      ) : (
        <Container>
          <Typography fontSize={22} textAlign="center" padding={5}>
            Quando o problema começou?
          </Typography>
          <MainCard sx={{ padding: "20px" }}>
            <NotifCalendar onChange={(e) => handleDate(e)} value={date} />
            {/* <GreenButton onClick={handleNavigate}>Próximo</GreenButton> */}
          </MainCard>
        </Container>
      )}
    </>
  );
};
