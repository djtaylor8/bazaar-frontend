import React from "react";
import { Grid, Typography, Divider, Button, Box } from "@material-ui/core";
import { useParams } from "react-router-dom";

type Props = {
  product: {
    id: number;
    listing_type: string;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  user: {
    isAuth: boolean;
  };
  addToCart: (e: string | null) => void;
};

const ProductInfo: React.FC<Props> = ({ product, addToCart, user }) => {
  const { productId } = useParams<{ productId?: string }>();

  return (
    <Grid
      container
      direction="column"
      style={{ height: "100%", backdropFilter: "blur(400px)" }}
    >
      <Typography variant="subtitle1">{product?.listing_type}</Typography>
      <Divider />
      <Box mt={2} style={{ margin: "2rem" }}>
        <Typography variant="h4">{product?.name}</Typography>
        <Typography variant="subtitle1" style={{ margin: "2rem" }}>
          {product?.description}
        </Typography>
        <Typography align="center" variant="h5">
          ${product?.price}
        </Typography>
      </Box>
      {user.isAuth ? (
        <Button
          data-id={productId}
          onClick={(e) => addToCart(e.currentTarget.getAttribute("data-id"))}
          variant="contained"
          color="primary"
          style={{ marginTop: "auto" }}
        >
          Add To Cart
        </Button>
      ) : (
        <Typography align="center" variant="subtitle2">
          Please login to add item to cart
        </Typography>
      )}
    </Grid>
  );
};

export default ProductInfo;
