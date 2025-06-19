import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import TabBar from "../../components/TabBar";

export default function TabsNavigation() {
  return (
    <>
      <Tabs tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favorites",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="heart" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="restaurant"
          options={{
            title: "Restaurant",
          }}
        />
        {/* <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
          }}
        /> */}
      </Tabs>
    </>
  );
}
