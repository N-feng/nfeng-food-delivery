import { Stack } from "expo-router";
import "../global.css";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

const _layout = () => {
  return (
    // <Provider store={store}>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    // </Provider>
  );
};

export default _layout;
