import React from "react";
import {
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom";
import ListPage from "./pages/ListPage";
import { Box } from "@mui/material";
import DetailPage from "./pages/DetailPage";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  console.log("hello");
  return (
    <Box padding={1}>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
        <Route path={`${match.url}/:productId`} component={DetailPage} />
      </Switch>
    </Box>
  );
}

export default ProductFeature;
