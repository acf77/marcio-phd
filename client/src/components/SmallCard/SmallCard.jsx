import { Typography } from "@mui/material";

import { SmallCard } from "./styles";

export const SmallCardComponent = ({ title, icon, handleClick, isChecked }) => {
  return (
    <SmallCard isChecked={isChecked} onClick={handleClick}>
      <Typography fontSize={18} textAlign="center" padding={5}>
        {title}
      </Typography>
      <img style={{ marginLeft: "27%" }} src={icon} />
    </SmallCard>
  );
};
