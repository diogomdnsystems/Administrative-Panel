import React from "react";
import "./NotificationCard.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const NotificationCard = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedOrderId, setSelectedOrderId] = React.useState(null);
  const [orderPedido, setOrderPedido] = React.useState([
    {
      id: 1,
      customerName: "Diogo Nascimento",
      telefone: "(21) 99999-9999",
      endereco: "Rua Auristela",
      itemName: "Hambúrguer",
      quantity: 2,
    },
    {
      id: 2,
      customerName: "Enzo Nascimento",
      telefone: "(21) 99999-9999",
      endereco: "Rua Auristela",
      itemName: "Pizza",
      quantity: 1,
    },
    {
      id: 3,
      customerName: "Luana Nascimento",
      telefone: "(21) 99999-9999",
      endereco: "Rua Auristela",
      itemName: "Sanduíche",
      quantity: 3,
    },
    {
      id: 4,
      customerName: "Julia Nascimento",
      telefone: "(21) 99999-9999",
      endereco: "Rua Auristela",
      itemName: "Cachorro quente",
      quantity: 2,
    },
  ]);

  const handleDeleteOrder = (orderId) => {
    setSelectedOrderId(orderId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmDelete = () => {
    const updatedOrders = orderPedido.filter(
      (order) => order.id !== selectedOrderId
    );
    setOrderPedido(updatedOrders);
    setSelectedOrderId(null);
    setOpen(false);
  };

  return (
    <div className="Order">
      {orderPedido.map((order) => (
        <>
          <Card key={order.id} className="Order-Card-Pedidos">
            <CardContent>
              <Typography
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button variant="outlined" disabled>
                  <span style={{ color: "#aaa", marginRight: "10px" }}>
                    Pedido Nº:{" "}
                  </span>
                  <Badge color="secondary" badgeContent={order.id}></Badge>
                </Button>
                <Button onClick={() => handleDeleteOrder(order.id)}>X</Button>
              </Typography>
              <Typography variant="h5" component="h2">
                Você tem um novo pedido de lanche
              </Typography>
              <Typography>Cliente: {order.customerName}</Typography>
              <Typography>Contato: {order.telefone}</Typography>
              <Typography>Endereço: {order.endereco}</Typography>
              <Typography>Lanche: {order.itemName}</Typography>
              <Typography>Quantidade: {order.quantity}</Typography>
            </CardContent>
            <Dialog
              open={open && selectedOrderId === order.id}
              onClose={handleClose}
            >
              <DialogTitle>{`Finalizar Pedido Nº: ${order.id}`}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Tem certeza de que deseja Finalizar o pedido de{" "}
                  {order.customerName}?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleConfirmDelete} color="error">
                  Finalizar Pedido
                </Button>
              </DialogActions>
            </Dialog>
          </Card>
        </>
      ))}
    </div>
  );
};

export default NotificationCard;
