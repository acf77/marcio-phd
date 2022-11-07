import React, { useContext } from "react";
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

  const renderSymptoms = (animal) => {
    switch (animal) {
      case "Abelhas":
        return (
          <Stack direction="row" alignItems="center">
            <Checkbox />
            <Typography>Morte/ Mortalidade</Typography>
          </Stack>
        );
      case "Jumentos, Asnos ou Burros (Asininos)":
        return (
          <>
            <Stack direction="row" alignItems="center">
              <Checkbox />
              <Typography>Agressividade</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Checkbox />
              <Typography>Andar em círculos</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Checkbox />
              <Typography>Anorexia/Perda de apetite</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Checkbox />
              <Typography>Apatia/Cansaco</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Checkbox />
              <Typography>Cegueira</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Checkbox />
              <Typography>Claudicação/Manqueira</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Checkbox />
              <Typography>Conjuntivite</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Checkbox />
              <Typography>Convulsão</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Checkbox />
              <Typography>Diarreia</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Checkbox />
              <Typography>Dispneia/ Dificuldade respiratória</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Checkbox />
              <Typography>Hipertermia/Febre</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Checkbox />
              <Typography>Morte/ Mortalidade</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Checkbox />
              <Typography>Movimento de pedalagem</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Checkbox />
              <Typography>Paralisia</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Checkbox />
              <Typography>Prurido/Coceira</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Checkbox />
              <Typography>Sialorreia/Salivação</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Checkbox />
              <Typography>Tremores</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Checkbox />
              <Typography>Vesículas</Typography>
            </Stack>
          </>
        );
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
