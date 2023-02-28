import React from "react";
import "./Products.scss";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Divider } from "@mui/material";

const Products = () => {
  return (
    <div className="Products">
      <Card className="Products-Card">
        <Typography
          sx={{ fontSize: 18, fontFamily: "Poppins" }}
          color="text.secondary"
          gutterBottom
        >
          Configurações dos Produtos.
        </Typography>
        <Divider />
        <div className="Products-Upload">
          <div className="input">
            <Typography
              sx={{ fontSize: 14, fontFamily: "Poppins", marginTop: 5 }}
              color="text.secondary"
              gutterBottom
            >
              Imagem do Produto
            </Typography>
            <Card sx={{ maxWidth: 500, padding: 2 }}>
              <input type="file" name="imagemProduto" id="imagemProduto" />
            </Card>
          </div>

          <div className="input">
            <Typography
              sx={{ fontSize: 14, fontFamily: "Poppins", marginTop: 5 }}
              color="text.secondary"
              gutterBottom
            >
              Categoria do Produto
            </Typography>
            <Card sx={{ maxWidth: 500, padding: 2 }}>
              <input
                className="input-text"
                type="text"
                name="categoria"
                id="categoria"
                value=""
                placeholder="Digite a Categoria do Produto"
              />
            </Card>
          </div>

          <div className="input">
            <Typography
              sx={{ fontSize: 14, fontFamily: "Poppins", marginTop: 2 }}
              color="text.secondary"
              gutterBottom
            >
              Nome do Produto
            </Typography>
            <Card sx={{ maxWidth: 500, padding: 2 }}>
              <input
                className="input-text"
                type="text"
                name="name"
                id="name"
                value=""
                placeholder="Digite o nome do produto"
              />
            </Card>
          </div>

          <div className="input">
            <Typography
              sx={{ fontSize: 14, fontFamily: "Poppins", marginTop: 2 }}
              color="text.secondary"
              gutterBottom
            >
              Preço
            </Typography>
            <Card sx={{ maxWidth: 500, padding: 2 }}>
              <input
                className="input-text"
                type="text"
                name="preco"
                id="preco"
                value=""
                placeholder="R$: 00,00"
              />
            </Card>
          </div>

          <div className="input-description">
            <Typography
              sx={{ fontSize: 14, fontFamily: "Poppins", marginTop: 2 }}
              color="text.secondary"
              gutterBottom
            >
              Descrição do Produto
            </Typography>
            <Card sx={{ padding: 2, minHeight: 100 }}>
              <TextareaAutosize
                name="descricao"
                id="descricao"
                aria-label="empty textarea"
                className="textarea"
                placeholder=" Escreva a descrição do produto"
              />
            </Card>
          </div>
        </div>

        <Typography
          sx={{ fontSize: 18, fontFamily: "Poppins",  marginTop: 5  }}
          color="text.secondary"
          gutterBottom
        >
          Configurações dos Adcionais.
        </Typography>
          <Divider />
        <div className="Product-Upload-Adc">
          <div className="input">
            <Typography
              sx={{ fontSize: 14, fontFamily: "Poppins", marginTop: 2 }}
              color="text.secondary"
              gutterBottom
            >
              Nome do Adcional
            </Typography>
            <Card sx={{ maxWidth: 500, padding: 2 }}>
              <input
                className="input-text"
                type="text"
                name="adcional"
                id="adcional"
                value=""
                placeholder="Produto adcional"
              />
            </Card>
          </div>
          <div className="input">
            <Typography
              sx={{ fontSize: 14, fontFamily: "Poppins", marginTop: 2 }}
              color="text.secondary"
              gutterBottom
            >
              Preço
            </Typography>
            <Card sx={{ maxWidth: 500, padding: 2 }}>
              <input
                className="input-text"
                type="text"
                name="preco"
                id="preco"
                value=""
                placeholder="R$: 00,00"
              />
            </Card>
          </div>
          <Stack direction="row" sx={{marginTop: '53px'}} title="Novo Adcional">
          <Button variant="contained" className="Products-Button-Adc">
            +
          </Button>
        </Stack>
        </div>
        <Stack direction="row">
          <Button variant="contained" className="Products-Button">
            CADASTRAR PRODUTO
          </Button>
        </Stack>
      </Card>
    </div>
  );
};

export default Products;
