import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Confeitaria from './src/pages/Confeitaria';
import { useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_600SemiBold

} from '@expo-google-fonts/poppins';

export default function App() {
  const [fonteCarregada] = useFonts ({
    "Poppins300" : Poppins_300Light,
    "Poppins400" : Poppins_400Regular,
    "Poppins600": Poppins_600SemiBold

  })

  if (!fonteCarregada) {
    return null;
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Confeitaria/>
    </SafeAreaView>
  );

}
