import { Stack } from "expo-router";
import "../global.css";
import { Provider } from "react-redux";
import { store } from "./store";

const _layout = () => {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
};

export default _layout;
