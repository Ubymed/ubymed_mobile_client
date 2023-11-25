import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SimpleTableProps {
  data: any[];
}

export const SimpleTable: React.FC<TableProps> = ({ data }) => {
  return (
    <View style={styles.table}>
      {data.map((row, rowIndex) => (
        <View key={rowIndex} style={[styles.row, rowIndex === data.length - 1 && { borderBottomWidth: 0 }]}>
          {Object.values(row).map((cell, cellIndex) => (
            <Text key={cellIndex} style={cellIndex === 0 ? styles.firstCell : styles.secondCell}>{cell}</Text>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
    table: {
      marginLeft: 24,
      marginRight: 24,
      marginTop: 8,
      marginBottom: 8,
      backgroundColor: '#FFFFFF', // Color de fondo blanco
      borderRadius: 24, // Bordes redondeados
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between', // Distribuir elementos uniformemente
      borderBottomWidth: 1, // Borde inferior
      borderBottomColor: '#CCCCCC', // Color del borde
      padding: 16, // Padding para la fila
    },
    firstCell: {
      flex: 1, // Tomar 1/3 del espacio
      textAlign: 'left', // Alinear texto a la izquierda
      fontWeight: 'bold', // Texto en negrita
    },
    secondCell: {
      flex: 2, // Tomar 2/3 del espacio
      textAlign: 'right', // Alinear texto a la derecha
      },
  });