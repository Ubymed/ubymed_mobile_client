import React, { forwardRef } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from "expo-router";

interface CardProps {
  nombre: string;
  descripcion: string;
}

export const ServicioCard = forwardRef<View, CardProps>((props, ref) => {
  const { nombre, descripcion } = props;

  return (
    <View ref={ref} style={styles.card}>
        <Text style={styles.title}>{nombre}</Text>
        <Text style={styles.description}>{descripcion}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
});