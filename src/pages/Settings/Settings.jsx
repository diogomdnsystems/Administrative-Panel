import React from "react";
import "./Settings.scss";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Banner from '../../assets/image/Banner.png'
import Logo from '../../assets/image/Logo.png'

const Settings = () => {
  const [name, setName] = React.useState("");
  const [whatsapp, setWatsapp] = React.useState("");
  const [banner, setBanner] = React.useState("");
  const [logo, setLogo] = React.useState("");

  console.log(whatsapp)

  const AlertMessageUpload = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Configurações salvas com Sucesso!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleBannerChange = (event) => {
    setBanner(event.target.files[0])
  };
  const handleLogoChange = (event) => {
    setLogo(event.target.files[0])
  };

  return (
    <div className="Settings">
      <Card className="Settings-Card">
        <div className="Setting-Upload">
          <Typography
            sx={{ fontSize: 18, fontFamily: "Poppins" }}
            color="text.secondary"
            gutterBottom
          >
            Configurações do estabelecimento.
          </Typography>
          <Divider />
          <Typography
            sx={{ fontSize: 14, fontFamily: "Poppins", marginTop: 2 }}
            color="text.secondary"
            gutterBottom
          >
            Nome
          </Typography>
          <Card sx={{ maxWidth: 500, padding: 2 }}>
            <input
              className="input-text"
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Digite o nome do estabelecimento"
              onChange={e => setName(e.target.value)}
            />
          </Card>
          <Typography
            sx={{ fontSize: 14, fontFamily: "Poppins", marginTop: 2 }}
            color="text.secondary"
            gutterBottom
          >
            Whatsapp
          </Typography>
          <Card sx={{ maxWidth: 500, padding: 2 }}>
            <input
              className="input-text"
              type="text"
              name="whatsapp"
              id="whatsapp"
              value={whatsapp}
              placeholder=" (00) 00000-0000"
              onChange={e => setWatsapp(e.target.value)}
            />
          </Card>
          <Typography
            sx={{ fontSize: 14, fontFamily: "Poppins", marginTop: 2 }}
            color="text.secondary"
            gutterBottom
          >
            Banner
          </Typography>
          <Card sx={{ maxWidth: 500, padding: 2 }}>
            <input
              type="file"
              name="banner"
              id="banner"
              onChange={handleBannerChange}
            />
          </Card>
          <Typography
            sx={{ fontSize: 14, fontFamily: "Poppins", marginTop: 2 }}
            color="text.secondary"
            gutterBottom
          >
            Logo
          </Typography>
          <Card sx={{ maxWidth: 500, padding: 2 }}>
            <input type="file" name="logo" id="logo" onChange={handleLogoChange}/>
          </Card>
          <Stack direction="row">
            <Button
              variant="contained"
              className="Settings-Button"
              onClick={AlertMessageUpload}
            >
              ENVIAR
            </Button>
          </Stack>
        </div>
        <div className="Settings-Preview">
          <div className="iphone">
            <div className="notch">
              <div className="camera"></div>
              <div className="speaker"></div>
            </div>
            <div className="screen">
              <div className="banner">
                <img
                  src={banner
                     ? URL.createObjectURL(banner)
                      : Banner
                    }
                    alt="Banner"
                />
                <div className="logo">
                  <img src={logo 
                    ? URL.createObjectURL(logo) 
                    : Logo
                    } 
                    alt="Logo" />
                    <span className="span-logo">{name}</span>
                </div>
              </div>
              <div className="whatsapp">
                <link rel="stylesheet" href={`https://wa.me/55${whatsapp}`} />
                <WhatsAppIcon />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
