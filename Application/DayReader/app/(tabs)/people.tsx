import { View, Text } from 'react-native';
import { peopleStyles as styles } from '../../styles/peopleStyles';

export default function PeopleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite People</Text>

      <View style={styles.card}>
        <Text>Mom</Text>
        <Text>Best Friend</Text>
        <Text>Work Contact</Text>
      </View>
    </View>
  );
}