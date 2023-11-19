import React from 'react';
import { Text, View } from './Themed';

export const SectionHeader = ({ title }: { title: string }) => {
    return (
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{title}</Text>
      </View>
    );
  };