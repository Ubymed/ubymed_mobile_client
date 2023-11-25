import React, { forwardRef } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from "expo-router";

interface CategoryCardProps {
  nombre: string;
  descripcion: string;
}

export const CategoryCard = forwardRef<View, CardProps>((props, ref) => {
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
    padding: 24,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
});