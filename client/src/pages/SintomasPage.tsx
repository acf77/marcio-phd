import React, { useContext, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Context } from "../context/Context";

export const SintomasPage = () => {
  const { state, setState } = useContext(Context);

  console.log(state);

  useEffect(() => {
    localStorage.getItem("animaisNotif") &&
      // @ts-ignore
      setState((prevState) => ({
        ...prevState,
        animaisNotif: JSON.parse(localStorage.getItem("animaisNotif")),
      }));
  }, []);

  const jumentoSymptoms = [
    "Agressividade",
    "Andar em círculos",
    "Anorexia/Perda de apetite",
    "Apatia/Cansaco",
    "Cegueira",
    "Claudicação/Manqueira",
    "Conjuntivite",
    "Convulsão",
    "Diarreia",
    "Dispneia/ Dificuldade respiratória",
    "Hipertermia/Febre",
    "Morte/ Mortalidade",
    "Movimento de pedalagem",
    "Paralisia",
    "Prurido/Coceira",
    "Sialorreia/Salivação",
    "Tremores",
    "Vesículas",
  ];

  const bovinoSymptoms = [
    "Agressividade",
    "Andar em círculos",
    "Anorexia/Perda de apetite",
    "Apatia/Cansaco",
    "Cegueira",
    "Claudicação/Manqueira",
    "Convulsão",
    "Diarreia",
    "Dispneia/ Dificuldade respiratória",
    "Distúrbios reprodutivos",
    "Fraqueza",
    "Hemorragia",
    "Lesão cicatrizada em boca/focinho",
    "Lesão cicatrizada em membros",
    "Lesão cicatrizada em teto/úbere",
    "Lesões detectadas no abate",
    "Lesões na boca",
    "Hipertermia/Febre",
    "Morte/ Mortalidade",
    "Movimento de pedalagem",
    "Paralisia",
    "Prurido/Coceira",
    "Sialorreia/Salivação",
    "Torcicolo",
    "Tosse",
    "Tremores",
    "Vesículas",
    "Vesículas em patas",
    "Vesículas em teto/úbere",
    "Vesículas na boca/focinho",
  ];

  const renderSymptoms = (animal) => {
    switch (animal) {
      case "Abelhas":
        return (
          <Stack direction="row" alignItems="center">
            <Checkbox />
            <Typography>Morte/Mortalidade</Typography>
          </Stack>
        );
      case "Jumentos, Asnos ou Burros (Asininos)":
        return jumentoSymptoms.map((symptom) => (
          <Stack direction="row" alignItems="center">
            <Checkbox />
            <Typography>{symptom}</Typography>
          </Stack>
        ));
      case "Bois ou Vacas (Bovinos)":
        return bovinoSymptoms.map((symptom) => (
          <Stack direction="row" alignItems="center">
            <Checkbox />
            <Typography>{symptom}</Typography>
          </Stack>
        ));
      default:
        break;
    }
  };

  return (
    <Grid container direction="column" padding={5}>
      <Typography variant="h1" fontSize={22} textAlign="center" padding="10px">
        Quais os sintomas dos animais?
      </Typography>

      {state?.animaisNotif.map((animal) => (
        <Accordion>
          <AccordionSummary expandIcon={"+"}>
            <Typography variant="h1" fontSize={18}>
              {animal}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>{renderSymptoms(animal)}</AccordionDetails>
        </Accordion>
      ))}
    </Grid>
  );
};
