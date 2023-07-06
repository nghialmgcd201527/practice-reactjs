import PropTypes from "prop-types";
import React from "react";
// import { Box, Typography, makeStyles } from "@material-ui/core";
import { Box, Typography } from "@mui/material";
import { useHistory } from "react-router";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants/common";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const history = useHistory();
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  const handleClick = () => {
    //Navigate to detail page
    history.push(`/products/${product.id}`);
  };

  return (
    <div>
      <Box padding={1} onClick={handleClick}>
        <Box padding={1} minHeight="215px">
          <img alt={product.name} src={thumbnailUrl} width="100%" />
        </Box>

        <Typography variant="body2">{product.name}</Typography>
        <Typography variant="body2">
          <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.salePrice)}
          </Box>
          {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ""}
        </Typography>
      </Box>
    </div>
  );
}

export default Product;
