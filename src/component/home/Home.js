import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Hero from '../hero/Hero';
import HeroList from '../heroList/HeroList';
const Drawer = createDrawerNavigator();
function Home(props) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HeroApp" component={Hero} />
      <Drawer.Screen name="Heros" component={HeroList} />
    </Drawer.Navigator>
  );
}
export default Home;
