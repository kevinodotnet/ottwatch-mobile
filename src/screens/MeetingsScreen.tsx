import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function MeetingsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Municipal Meetings</Text>
        <Text style={styles.description}>
          City council and committee meetings with agendas and documents.
        </Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Meetings</Text>
          <Text style={styles.placeholder}>Loading meeting schedule...</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Agendas</Text>
          <Text style={styles.placeholder}>Loading recent agendas...</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    color: '#666',
    lineHeight: 22,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  placeholder: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
  },
});