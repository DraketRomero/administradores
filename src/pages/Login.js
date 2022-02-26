import "./../App.css";
import React, { useState } from "react";
import { makeStyles  } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  Button,  
  FormControl,  
  MuiThemeProvider,
  Typography,
  withStyles,
} from "@material-ui/core";
import logo from "./../imgs/logoTitle.png";
// import CircularProgress from "@material-ui/core/CircularProgress";
const axios = require('axios');

const Login = () => {
  const useStyles = makeStyles(() => ({
    txtTitle: {
      padding: "0 0 30px 0",
      color: "black",
      fontFamily: "Roboto Mono",
      fontWeight: "bolder",
    },
    txtData: {
      borderRadius: "10px",
    },
    txtPassword: {
      margin: "30px 0 0 0",
      borderRadius: "10px",
    },
    copyright: {
      textAlign: "center",
      padding: "240px 0 0 0",
      fontFamily: "Roboto Mono",
    },
    imgLogo: {
      marginRight: "25px",
      borderRadius: "10px",
      fontFamily: "Roboto Mono",
    },
  }));

  const StyledButton = withStyles(() => ({
    root: {
      background: "rgb(4, 114, 151)",
      margin: "30px 0 0 0",
      fontFamily: "Roboto Mono",
    },
  }))(Button);

  const classes = useStyles();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  // const [progress, setProgress] = useState(0);

  const iniciarSesion = (e) => {
    e.preventDefault();

    axios
      .get("http://localhost/DDMS/src/backend/login.php", {
        user: usuario,
        pass: password
      })
      .then((response) => {
        console.log(response);
      });
    // alert("El usuario es: " + usuario + " y la contraseña es: " + password + "y la pantalla es: ")
    console.log(window.screen.width);
  }
  return (
    <MuiThemeProvider>
      <div className="formulario">
        <Typography variant="h3" className={classes.txtTitle}>
          Iniciar Sesión
        </Typography>
        <img alt="" src={logo} className={classes.imgLogo} />

        <FormControl>
          <TextField
            // autoFocus="true"
            label="Usuario"
            variant="outlined"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            // color="primary"
            className={classes.txtData}
          />
          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            className={classes.txtPassword}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledButton
            type="submit"
            color="primary"
            variant="contained"
            onClick={(e) => iniciarSesion(e)}
          >
            Aceptar
          </StyledButton>
        </FormControl>        
      </div>
      <div className={classes.copyright}>
        @ Creado por Reyes Diego Garrido Romero v1.0        
      </div>      
    </MuiThemeProvider>
  );
};

export default Login;
