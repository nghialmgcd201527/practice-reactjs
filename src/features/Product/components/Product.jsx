import React from "react";
import PropTypes from "prop-types";
// import { Box, Typography, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { Box, Typography } from "@mui/material";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants/common";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;
  return (
    <div>
      <Box padding={1}>
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
