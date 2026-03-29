import { View, Text, TouchableOpacity } from 'react-native';
import { homeStyles as styles } from '../../styles/homeStyles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Day Reader</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+ Add Entry</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text>Today’s Activity</Text>
        <Text>Unlocks: 12</Text>
        <Text>Notifications: 34</Text>
      </View>
    </View>
  );
}