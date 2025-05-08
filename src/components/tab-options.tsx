import { ImageSourcePropType, Image } from "react-native";

export function taboptions(url: ImageSourcePropType) {
  return {
    tabBarIcon: () => (
      <Image
        resizeMode="contain"
        style={{ width: 30, height: 25 }}
        source={url}
      />
    ),
  };
}
