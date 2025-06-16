import { Provider } from "react-redux";
import Navigation from "../components/Navigation";
import "../global.css";
import { store } from "./store";

const _layout = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default _layout;
