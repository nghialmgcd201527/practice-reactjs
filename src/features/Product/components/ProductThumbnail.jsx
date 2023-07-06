import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants/common";

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  return (
    <Box>
      <img alt={product.name} src={thumbnailUrl} width="100%" />
    </Box>
  );
}

export default ProductThumbnail;
