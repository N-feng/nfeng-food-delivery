import { Tabs } from "expo-router";
import React from "react";
import TabBar from "../components/TabBar";
// import RestaurantScreen from "./screens/RestaurantScreen";
// import CartScreen from "./screens/CartScreen";
// import OrderPreparingScreen from "./screens/OrderPreparingScreen";
// import DeliveryScreen from "./screens/DeliveryScreen";

const MainLayout = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   console.log("useEffect");
  //   router.replace("/home");
  // }, []);

  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />
    </Tabs>
  );
};

const _layout = () => {
  return <MainLayout />;
};

export default _layout;
