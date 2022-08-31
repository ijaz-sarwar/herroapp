import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/component/home/Home';
import AddHero from './src/component/addHero/AddHero';
import Detail from './src/pages/detailHero/Detail';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          headerShown: false,
        }} name="Home" component={Home} />
        <Stack.Screen name="AddHero" component={AddHero} />
        <Stack.Screen name="DetailHero" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
