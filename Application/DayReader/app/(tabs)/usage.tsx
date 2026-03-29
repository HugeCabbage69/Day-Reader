import { View, Text } from 'react-native';
import { usageStyles as styles } from '../../styles/usageStyles';

export default function UsageScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usage Stats</Text>

      <View style={styles.card}>
        <Text>Screen Time: 3h 20m</Text>
        <Text>App Opens: 45</Text>
        <Text>Most Used: Instagram</Text>
      </View>
    </View>
  );
}