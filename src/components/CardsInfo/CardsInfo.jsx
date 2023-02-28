import * as React from "react";
import './CardsInfo.scss'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const card1 = (
  <React.Fragment>
   <CardContent>
     <CircularProgressbar
     className="Card-Progressbar"
       value={80} 
       text={"80%"} 
       styles={{ 
         path: { 
           stroke: `rgba(62, 152, 199)`, 
           strokeLinecap: 'round', 
           transition: 'stroke-dashoffset 0.5s ease 0s', 
         } 
       }} 
     />
    </CardContent>
  </React.Fragment>
);
const card2 = (
  <React.Fragment>
  <CardContent>
    <CircularProgressbar
    className="Card-Progressbar" 
      value={30} 
      text={"30%"} 
      styles={{ 
        path: { 
          stroke: ` rgb(255, 0, 0)`, 
          strokeLinecap: 'round', 
          transition: 'stroke-dashoffset 0.5s ease 0s', 
        } 
      }} 
    />
   </CardContent>
 </React.Fragment>
);
const card3 = (
  <React.Fragment>
  <CardContent>
    <CircularProgressbar
    className="Card-Progressbar" 
      value={45} 
      text={"45%"} 
      styles={{ 
        path: { 
          stroke: `#ffd60a`, 
          strokeLinecap: 'round', 
          transition: 'stroke-dashoffset 0.5s ease 0s', 
        } 
      }} 
    />
   </CardContent>
 </React.Fragment>
);
const card4 = (
  <React.Fragment>
  <CardContent>
    <CircularProgressbar
    className="Card-Progressbar" 
      value={60} 
      text={"60%"} 
      styles={{ 
        path: { 
          stroke: `#52b788`, 
          strokeLinecap: 'round', 
          transition: 'stroke-dashoffset 0.5s ease 0s', 
        } 
      }} 
    />
   </CardContent>
 </React.Fragment>
);

export default function CardsInfo() {
  return (
    <div className="Cards">
      <Box className="Cards-Box">
        <Card className="Cards-Box-Card" variant="outlined">{card1}</Card>
        <Card className="Cards-Box-Card" variant="outlined">{card2}</Card>
        <Card className="Cards-Box-Card" variant="outlined">{card3}</Card>
        <Card className="Cards-Box-Card" variant="outlined">{card4}</Card>
      </Box>
    </div>
  );
}
