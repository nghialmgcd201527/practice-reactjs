import React from "react";
import {
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom";
import ListPage from "./pages/ListPage";
import { Box } from "@mui/material";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  console.log("hello");
  return (
    <Box padding={1}>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
      </Switch>
    </Box>
  );
}

export default ProductFeature;
