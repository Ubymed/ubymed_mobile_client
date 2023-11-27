// REACT / REACT NATIVE
import React from 'react';
import { StyleSheet, ScrollView, Pressable, Image, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';
// UI COMPONENTS
import { Text, View, FlatList, ActivityIndicator } from '../../../components/Themed';
import { HeaderText } from '../../../components/StyledText';
import { SimpleTable, SingleSelectTable } from '../../../components/Tables'; // Importa el componente
import { BottomButton } from '../../../components/Buttons';
import { TextField } from '../../../components/TextFields';
// API
export default function LugarScreen () {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <Stack.Screen options={{ title: "Lugar"}} />
                    <MapView style={{ flex: 1 }}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}/>
                    <HeaderText>¿A dónde nos dirigimos?</HeaderText>
                    <TextField placeholder="Dirección" />
                    <Link href={{
                        pathname: "/ordenes/consultas/motivo",
                        }} asChild>
                        <Pressable>
                            <BottomButton title="Siguiente" />
                        </Pressable>
                    </Link>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}