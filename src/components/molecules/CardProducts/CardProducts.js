import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./CardProducts.css";
import ButtonCard from "../../atoms/ButtonCard/ButtonCard";

const CardProducts = ({ title, description, price, image, callAction }) => {
    return (
        <Card sx={{ maxWidth: 345 }} className="card__container">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="160"
                    image={image}
                    alt="product"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <ButtonCard callAction={callAction} />
            </CardActions>
        </Card>
    );
};
export default CardProducts;
