import React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ButtonCard = ({ callAction }) => {
    return (
        <div>
            <Stack direction="row" spacing={1}>
                <IconButton
                    onClick={callAction}
                    color="primary"
                    aria-label="add to shopping cart"
                >
                    <AddShoppingCartIcon />
                </IconButton>
            </Stack>
        </div>
    );
};

export default ButtonCard;
