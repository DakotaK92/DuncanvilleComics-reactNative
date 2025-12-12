import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Stack } from "expo-router";
import "../global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

const queryClient = new QueryClient();

export default function RootLayout() {

const [fontsLoaded] = useFonts({
  "Gotham-Black": require("../assets/fonts/GothamBlack.ttf"),
  "Gotham-Bold": require("../assets/fonts/GothamBold.ttf"),
  "Gotham-Medium": require("../assets/fonts/GothamMedium.ttf")
});

  if (!fontsLoaded) return null;

  return (
    <ClerkProvider tokenCache={tokenCache}>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
        </Stack>
        <StatusBar style="dark" />
      </QueryClientProvider>
    </ClerkProvider>
  );
}
