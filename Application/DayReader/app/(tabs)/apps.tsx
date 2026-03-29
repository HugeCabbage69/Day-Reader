import { View, Text, TouchableOpacity } from 'react-native';
import { appsStyles as styles } from '../../styles/appsStyles';

export default function AppsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Apps</Text>

      <TouchableOpacity style={styles.appButton}>
        <Text>Open Instagram</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.appButton}>
        <Text>Open YouTube</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.appButton}>
        <Text>Open WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
}