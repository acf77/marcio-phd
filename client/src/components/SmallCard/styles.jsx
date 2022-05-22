import { Card, styled } from "@mui/material";

export const SmallCard = styled(Card)`
  /* @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap"); */

  border: 4px solid #217c19;
  border-radius: 15px;
  padding: 5px;
  margin: 20px 30px;
  height: 285px;
  width: 299px;
  font-family: "Roboto";
  float: left;
  cursor: pointer;

  ${({ isChecked }) =>
    isChecked &&
    `
    color: #f2f2f2;
    background-color: #217c19;
  `}

  &:hover {
    background-color: #217c19;
    color: #f2f2f2;
  }
`;
