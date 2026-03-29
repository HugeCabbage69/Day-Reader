import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  Keyboard,
} from 'react-native';

import { useState, useEffect } from 'react';
import { homeStyles as styles } from '../../styles/homeStyles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Calendar } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const today = new Date().toISOString().split('T')[0];

  const [selectedDate, setSelectedDate] = useState<string>(today);
  const [notes, setNotes] = useState<string>('');
  const [savedNote, setSavedNote] = useState<string>('');
  const [savedDates, setSavedDates] = useState<string[]>([]);
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  // Load all saved dates
  const loadAllDates = async () => {
    try {
      const keys: string[] = await AsyncStorage.getAllKeys();
      setSavedDates(keys);
    } catch (e) {
      console.log('Error loading keys:', e);
    }
  };

  // Load notes for a specific date
  const loadNotes = async (date: string) => {
    try {
      const data = await AsyncStorage.getItem(date);

      if (data !== null) {
        setNotes(data);
        setSavedNote(data);
      } else {
        setNotes('');
        setSavedNote('');
      }
    } catch (e) {
      console.log('Error loading:', e);
    }
  };

  // Initial load with today's date
  useEffect(() => {
    loadNotes(today);
    loadAllDates();
  }, []);

  // Handle date selection
  const handleDatePress = (day: any) => {
    const date = day.dateString;
    setSelectedDate(date);
    loadNotes(date);
  };

  // Save notes
  const handleSave = async () => {
    try {
      await AsyncStorage.setItem(selectedDate, notes);
      setSavedNote(notes);
      loadAllDates();
      setIsNotesOpen(false);
      Keyboard.dismiss();
    } catch (e) {
      console.log('Error saving:', e);
    }
  };

  // Clear notes
  const handleClear = async () => {
    try {
      await AsyncStorage.removeItem(selectedDate);
      setNotes('');
      setSavedNote('');
      loadAllDates();
    } catch (e) {
      console.log('Error clearing:', e);
    }
  };

  // Generate marked dates for calendar
  const getMarkedDates = () => {
    const marked: any = {};

    savedDates.forEach((date) => {
      marked[date] = {
        customStyles: {
          container: {
            borderWidth: 2,
            borderColor: '#3b82f6',
            borderRadius: 20,
          },
          text: {
            color: '#3b82f6',
          },
        },
      };
    });

    marked[selectedDate] = {
      selected: true,
      selectedColor: '#3b82f6',
    };

    return marked;
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Main content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Planner</Text>
        </View>

        {/* Saved preview */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Saved for {selectedDate}
          </Text>
          <Text style={styles.notePreview}>
            {savedNote || 'No data for this date'}
          </Text>
        </View>

        {/* Calendar */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Select a Date</Text>

          <Calendar
            onDayPress={handleDatePress}
            markedDates={getMarkedDates()}
            markingType={'custom'}
            theme={{
              calendarBackground: '#1e293b',
              dayTextColor: 'white',
              monthTextColor: 'white',
              textSectionTitleColor: '#94a3b8',
              todayTextColor: '#3b82f6',
            }}
          />
        </View>

      </ScrollView>

      {/* Floating action button */}
      <TouchableOpacity
        onPress={() => setIsNotesOpen(true)}
        style={{
          position: 'absolute',
          right: 20,
          bottom: 30,
          backgroundColor: '#3b82f6',
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
        }}
      >
        <Ionicons name="create-outline" size={28} color="white" />
      </TouchableOpacity>

      {/* Notes modal */}
      <Modal visible={isNotesOpen} animationType="slide" transparent>
        
        <Pressable
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'flex-end',
          }}
          onPress={() => setIsNotesOpen(false)}
        >
          {/* Bottom sheet */}
          <Pressable
            style={{
              backgroundColor: '#1e293b',
              padding: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              minHeight: '45%',
              maxHeight: '80%',
              paddingBottom: 30,
            }}
            onPress={(e) => e.stopPropagation()}
          >
            <Text style={styles.sectionTitle}>Notes</Text>

            <TextInput
              style={styles.input}
              multiline
              scrollEnabled
              placeholder="Write your plans..."
              placeholderTextColor="#64748b"
              value={notes}
              onChangeText={setNotes}
              autoFocus
            />

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.saveButton]}
                onPress={handleSave}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.clearButton]}
                onPress={handleClear}
              >
                <Text style={styles.buttonText}>Clear</Text>
              </TouchableOpacity>
            </View>
          </Pressable>

        </Pressable>

      </Modal>

    </SafeAreaView>
  );
}