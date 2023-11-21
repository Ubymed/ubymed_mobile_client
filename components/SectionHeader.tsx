import React from 'react';
import { Text, View } from './Themed';

export const SectionHeader = ({ title }: { title: string }) => {
    return (
      <View style={{ padding: 20, paddingTop: 40 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{title}</Text>
      </View>
    );
  };