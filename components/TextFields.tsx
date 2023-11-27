import React from 'react';
import { View, TextInput, StyleSheet, Keyboard } from 'react-native';

interface TextFieldProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
}

interface TextViewProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
}

export const TextField: React.FC<TextFieldProps> = ({ value, onChangeText, placeholder }) => (
    <View style={textFieldStyle.card}>
        <TextInput 
            style={textFieldStyle.input}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#808080"
            onSubmitEditing={Keyboard.dismiss}
        />
    </View>
);

export const TextView: React.FC<TextViewProps> = ({ value, onChangeText, placeholder }) => (
    <View style={textViewStyle.card}>
        <TextInput style={textViewStyle.input}
            multiline={true}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#808080"
            onSubmitEditing={Keyboard.dismiss}
        />
    </View>
);

const textFieldStyle = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        marginLeft: 24,
        marginRight: 24,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 16,
    },
    input: {
    },
});

const textViewStyle = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 24,
        marginLeft: 24,
        marginRight: 24,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 16,
    },
    input: {
        height: 240,
        padding: 8,
    },
  });
