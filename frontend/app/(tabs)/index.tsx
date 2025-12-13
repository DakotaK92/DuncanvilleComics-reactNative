import { Text, View, Image, ImageBackground, FlatList } from "react-native";
import "../../global.css";
import SignOutButton from "../../components/SignOutButton";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';

import { messages, MessageType } from "../../data/home";

export default function Index() {
  return (
    <SafeAreaView className="flex-1" edges={['top']}>
      {/* Header Section */}
      <View className="flex-row justify-between items-center px-4 py-3 border-b border-gray-200">
        <AntDesign name="menu" size={24} color="black" />
        <Image
          source={require("../../assets/icons/logo.png")}
          className="w-24 h-10"
        />
        <SignOutButton />
      </View>

      {/* Body Section */}
      <ImageBackground
        source={require("../../assets/images/imagebackground.png")}
        className="flex-1"
        resizeMode="cover"
      >

        {/* Content Section 
        <View className="flex-1 justify-center px-8 gap-6">
          <View className="flex-row items-center justify-center bg-white h-24 p-8 rounded shadow-md mb-6">
            <AntDesign name="qrcode" size={24} color="red" />
            <Text className="text-3xl ml-3 font-gothamBlack">Scan to Earn</Text>
          </View>

          <View className="flex-row items-center justify-center bg-white h-24 p-8 rounded shadow-md">
            <AntDesign name="star" size={24} color="red" />
            <Text className="text-3xl ml-3 font-gothamBlack">Rewards</Text>
          </View>
        </View>
        */}

         <FlatList
            data={messages}
            keyExtractor={(item) => item.id.toString()}
            className="m-6"
            showsVerticalScrollIndicator={false}
            renderItem={({ item }: { item: MessageType }) => (
              <ImageBackground
                source={item.backgroundImage}
                className="mb-4 rounded-lg overflow-hidden"
                resizeMode="cover"
              >
                <View className=" p-4 flex-column items-center">
                  <View className="flex-1">
                    <Text className="text-white font-gothamMedium text-sm">
                      {item.date}
                    </Text>
                    <Text className="text-white font-gothamMedium text-lg">
                      {item.title}
                    </Text>
                    <Text className="text-white font-gothamMedium text-sm">
                      {item.shipping}
                    </Text>
                    <Image
                      source={item.logo}
                      className="w-16 h-16 mr-4"
                      resizeMode="contain"
                    />
                  </View>
                </View>
              </ImageBackground>
            )}
          />

      </ImageBackground>

    </SafeAreaView>
  );
}
