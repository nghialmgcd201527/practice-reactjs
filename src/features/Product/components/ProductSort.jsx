import React from "react";
import PropTypes from "prop-types";
import { number } from "yup";
import { Tab, Tabs } from "@mui/material";

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <Tabs
      value={currentSort}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleSortChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Gia tri tu thap den cao" value="salePrice:ASC"></Tab>
      <Tab label="Gia tri tu cao den thap" value="salePrice:DESC"></Tab>
    </Tabs>
  );
}

export default ProductSort;
