import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface SimpleTableProps {
  data: any[];
}

export const SimpleTable: React.FC<TableProps> = ({ data }) => {
  return (
    <View style={simpleTableStyles.table}>
      {data.map((row, rowIndex) => (
        <View 
          key={rowIndex} 
          style={[
            simpleTableStyles.row, 
            rowIndex < data.length - 1 ? simpleTableStyles.rowWithBorder : {}
          ]}
        >
          {Object.values(row).map((cell, cellIndex) => (
            <Text key={cellIndex} style={cellIndex === 0 ? simpleTableStyles.firstCell : simpleTableStyles.secondCell}>{cell}</Text>
          ))}
        </View>
      ))}
    </View>
  );
}

const Checkbox = ({ isSelected }) => (
  <View style={singleSelectTableStyles.checkbox}>
    {isSelected && <View style={singleSelectTableStyles.checkmark} />}
  </View>
);

export const SingleSelectTable: React.FC<TableProps> = ({ data, onRowSelect }) => {
  const [selectedRow, setSelectedRow] = React.useState<string | null>(null);

  const handleRowPress = (id: string) => {
    setSelectedRow(selectedRow === id ? null : id);
    onRowSelect(id);
  };

  return (
    <View style={singleSelectTableStyles.table}>
      {data.map((row, index) => (
        <Pressable 
          key={row.id} 
          style={[
            singleSelectTableStyles.row, 
            index < data.length - 1 ? singleSelectTableStyles.rowWithBorder : {}
          ]}
          onPress={() => handleRowPress(row.id)}
        >
          <Checkbox isSelected={selectedRow === row.id} />
          <Text style={singleSelectTableStyles.cell}>{row.name}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const simpleTableStyles = StyleSheet.create({
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
    padding: 16, // Padding para la fila
  },
  rowWithBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  firstCell: {
    flex: 1, // Tomar 1/3 del espacio
    textAlign: 'left', // Alinear texto a la izquierda
    fontWeight: 'bold', // Texto en negrita
  },
  secondCell: {
    flex: 2, // Tomar 2/3 del espacio
    textAlign: 'right', // Alinear texto a la derecha
  }
});

const singleSelectTableStyles = StyleSheet.create({
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
    alignItems: 'center',
    padding: 16, // Padding para la fila
  },
  rowWithBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  cell: {
    marginLeft: 10,
    textAlign: 'left', // Alinear texto a la izquierda
  },
  checkbox: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
});