import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = () => navigate("/");

  return (
    <Grid>
      <AppBar sx={{ backgroundColor: "#217c19" }} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Notificação de Doenças - MAPA
          </Typography>
          <Button onClick={handleNavigation} color="inherit">
            Página Inicial
          </Button>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
