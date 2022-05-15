import { Container, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";

import { MainCard } from "../components/MainCard";
import { Context } from "../context/Context";
import { GreenButton } from "../components/Button";

import "react-calendar/dist/Calendar.css";

export const DataNotifPage = () => {
  const [date, setDate] = useState(new Date());

  // useEffect(() => {
  //   setDate("2022-05-28T03:00:00.000Z");
  // }, []);

  const navigate = useNavigate();

  const handleDate = (e) => {
    console.log(e);
    sessionStorage.setItem("dataNotif", JSON.stringify(e));
  };

  const handleNavigate = () => navigate("/data-notificacao");

  return (
    <Container>
      <Typography fontSize={22} textAlign="center" padding={5}>
        Quando o problema começou?
      </Typography>
      <MainCard>
        <Calendar onChange={(e) => handleDate(e)} value={date} />
        <GreenButton onClick={handleNavigate}>Próximo</GreenButton>
      </MainCard>
    </Container>
  );
};
