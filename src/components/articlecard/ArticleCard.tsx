import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import data from "../../data/articles";

import styles from "./ArticleCard.module.scss";

//function to generate a number between 0 and the last object in data

const random = Math.floor(Math.random() * data.length);

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data[random].image}
          alt="travel images"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data[random].title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data[random].readingTime} min read
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data[random].summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
