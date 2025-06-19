import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../../components/CartIcon";
import DishRow from "../../components/DishRow";
import { selectRestaurant } from "../../slices/restaurantSlice";
import { themeColors } from "../../theme";

export default function RestaurantScreen() {
  // const { params } = useRoute();
  // const params = useLocalSearchParams();
  // console.log(params);
  const params = useSelector(selectRestaurant);
  console.log(params);
  const navigation = useNavigation();
  let item = params;
  const dispatch = useDispatch();
  // console.log('restaurant:', item);
  // useEffect(() => {
  //   if (item && item.id) {
  //     dispatch(setRestaurant({ ...item }));
  //   }
  // }, []);
  return (
    <View>
      <CartIcon />
      <StatusBar style="light" />

      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft stroleWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-l">
              <View className="flex-row items-center space-x-l">
                <Image
                  source={require("../../assets/images/fullStar.png")}
                  className="h-4 w-4"
                />
                <Text className="text-xs">
                  <Text className="text-green-700">{item.stars}</Text>
                  <Text className="text-gray-700">
                    ({item.reviews} review) .{" "}
                    <Text className="font-semibold">{item.category}</Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-700 text-xs">
                  Nearby . {item.address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* dishes */}
          {item.dishes.map((dish, index) => (
            <DishRow item={{ ...dish }} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
