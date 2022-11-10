import {NavigationContainer} from "@react-navigation/native";
import Login from './Perfil/Login'
import {Splash} from './Perfil/Splash';
import Navigation from './Navigation';
import{createNativeStackNavigator} from "@react-navigation/native-stack";


const StackLoginTabs = createNativeStackNavigator();

   //<StackLoginTabs.Screen name="Splash" component={Splash}/>
export function NavigationLoginTabs(){
  return(

<StackLoginTabs.Navigator screenOptions={{ headerShown:false}}> 
    
    <StackLoginTabs.Screen name="Splash" component={Splash}/>
    <StackLoginTabs.Screen name="Login" component={Login}/>
    <StackLoginTabs.Screen name="Navigation" component={Navigation}
options={{gestureEnabled:false}}    
    />

</StackLoginTabs.Navigator>

  );
}

