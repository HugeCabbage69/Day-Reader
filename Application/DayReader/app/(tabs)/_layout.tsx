import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        let iconName: any;

        if (route.name === 'index') iconName = 'home';
        else if (route.name === 'usage') iconName = 'stats-chart';
        else if (route.name === 'people') iconName = 'people';
        else if (route.name === 'apps') iconName = 'apps';

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}>
      
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="usage" options={{ title: 'Usage' }} />
      <Tabs.Screen name="people" options={{ title: 'People' }} />
      <Tabs.Screen name="apps" options={{ title: 'Apps' }} />

    </Tabs>
  );
}