import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },

  header: {
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },

  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 15,
  },

  sectionTitle: {
    color: '#94a3b8',
    marginBottom: 10,
    fontSize: 16,
  },

  notePreview: {
    color: 'white',
    fontSize: 15,
  },

  input: {
    color: 'white',
    minHeight: 120,
    fontSize: 16,
    textAlignVertical: 'top',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  button: {
    padding: 12,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },

  saveButton: {
    backgroundColor: '#3b82f6',
  },

  clearButton: {
    backgroundColor: '#ef4444',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});