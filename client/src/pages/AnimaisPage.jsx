import { Container, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { GreenButton } from "../components/Button";
import { SmallCardComponent } from "../components/SmallCard/SmallCard";

import { Context } from "../context/Context";

import donkey from "../assets/donkey-icon.png";

export const AnimaisPage = () => {
  const navigate = useNavigate();
  const { state, setState } = useContext(Context);

  useEffect(() => {
    localStorage.getItem("animaisNotif") &&
      setState({
        ...state,
        animais: JSON.parse(localStorage.getItem("animaisNotif")),
      });
  }, []);

  const [isBeesChecked, setIsBeesChecked] = useState(false);
  const [bees, setBees] = useState(null);
  const [isDonkeyChecked, setIsDonkeyChecked] = useState(false);
  const [donkeyData, setDonkeyData] = useState(null);
  const [isCowChecked, setIsCowChecked] = useState(false);
  const [cows, setCows] = useState(null);
  const [isBuffaloChecked, setIsBuffaloChecked] = useState(false);
  const [buffalo, setBuffalo] = useState(null);
  const [isGoatChecked, setIsGoatChecked] = useState(false);
  const [goats, setGoats] = useState(null);
  const [isHorseChecked, setIsHorseChecked] = useState(false);
  const [horses, setHorses] = useState(null);
  const [isChickenChecked, setIsChickenChecked] = useState(false);
  const [chickens, setChickens] = useState(null);
  const [isBatChecked, setIsBatChecked] = useState(false);
  const [bats, setBats] = useState(null);

  const handleSave = () => {
    const data = [
      bees,
      donkeyData,
      buffalo,
      cows,
      goats,
      horses,
      chickens,
      bats,
    ];

    setState({
      ...state,
      animaisNotif: data.filter((animal) => {
        return animal !== null;
      }),
    });

    localStorage.setItem(
      "animaisNotif",
      JSON.stringify(
        data.filter((animal) => {
          return animal !== null;
        })
      )
    );

    navigate("/sintomas-notificacao");
  };

  const saveBees = () => {
    setIsBeesChecked(!isBeesChecked);
    isBeesChecked ? setBees(null) : setBees("Abelhas");
  };
  const saveDonkey = () => {
    setIsDonkeyChecked(!isDonkeyChecked);
    isDonkeyChecked
      ? setDonkeyData(null)
      : setDonkeyData("Jumentos, Asnos ou Burros (Asininos)");
  };
  const saveCow = () => {
    setIsCowChecked(!isCowChecked);
    isCowChecked ? setCows(null) : setCows("Bois ou Vacas (Bovinos)");
  };
  const saveBuffalo = () => {
    setIsBuffaloChecked(!isBuffaloChecked);
    isBuffaloChecked ? setBuffalo(null) : setBuffalo("Búfalos");
  };
  const saveGoats = () => {
    setIsGoatChecked(!isGoatChecked);
    isGoatChecked ? setGoats(null) : setGoats("Cabras ou Bodes (Caprinos)");
  };
  const saveHorses = () => {
    setIsHorseChecked(!isHorseChecked);
    isHorseChecked ? setHorses(null) : setHorses("Cavalos ou Éguas (Equinos)");
  };
  const saveChickens = () => {
    setIsChickenChecked(!isChickenChecked);
    isChickenChecked ? setChickens(null) : setChickens("Galinhas ou Galos");
  };
  const saveBats = () => {
    setIsBatChecked(!isBatChecked);
    isBatChecked
      ? setBats(null)
      : setBats("Morcegos (que não se alimentam de sangue)");
  };

  return (
    <Container>
      <Typography fontSize={22} textAlign="center" padding={5}>
        Quais animais estão doentes?
      </Typography>
      <SmallCardComponent
        title="Abelhas"
        icon="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/honeybee_1f41d.png"
        handleClick={saveBees}
        isChecked={isBeesChecked}
      />
      <SmallCardComponent
        title="Jumentos, Asnos ou Burros (Asininos)"
        icon={donkey}
        handleClick={saveDonkey}
        isChecked={isDonkeyChecked}
      />
      <SmallCardComponent
        title="Bois ou Vacas (Bovinos)"
        icon="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/cow-face_1f42e.png"
        handleClick={saveCow}
        isChecked={isCowChecked}
      />
      <SmallCardComponent
        title="Búfalos"
        icon="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/water-buffalo_1f403.png"
        handleClick={saveBuffalo}
        isChecked={isBuffaloChecked}
      />
      <SmallCardComponent
        title="Cabras ou Bodes (Caprinos)"
        icon="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/goat_1f410.png"
        handleClick={saveGoats}
        isChecked={isGoatChecked}
      />
      <SmallCardComponent
        title="Cavalos ou Éguas (Equinos)"
        icon="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/horse-face_1f434.png"
        handleClick={saveHorses}
        isChecked={isHorseChecked}
      />
      <SmallCardComponent
        title="Galinhas ou Galos"
        icon="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/chicken_1f414.png"
        handleClick={saveChickens}
        isChecked={isChickenChecked}
      />
      <SmallCardComponent
        title="Morcegos (que não se alimentam de sangue)"
        icon="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/bat_1f987.png"
        handleClick={saveBats}
        isChecked={isBatChecked}
      />

      <GreenButton onClick={handleSave}>Próximo</GreenButton>
    </Container>
  );
};
