//import "./App.css";
import { useEffect } from "react";
import {
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import productApi from "./api/productApi";
import AlbumFeature from "./features/Album";
import CounterFeature from "./features/Counter";
import TodoFeature from "./features/Todo";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";

const Title = styled.h1`
  text-align: center;
  font-weight: bold;

  color: ${(props) => props.color || "green"};
`;

function App() {
  useEffect(() => {
    const fetchProductList = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    fetchProductList();
  }, []);

  return (
    <div className="app">
      <Header />

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
