// REACT / REACT NATIVE
import React from 'react';
import { StyleSheet, ScrollView, Pressable, Image, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
// UI COMPONENTS
import { Text, View, FlatList, ActivityIndicator } from '../../../components/Themed';
import { HeaderText } from '../../../components/StyledText';
import { SimpleTable, SingleSelectTable } from '../../../components/Tables'; // Importa el componente
import { BottomButton } from '../../../components/Buttons';
import { TextView } from '../../../components/TextFields';
// API

export default function MotivoScreen () {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
                <Stack.Screen options={{ title: "Motivo"}} />
                <HeaderText>¿En qué te podemos ayudar?</HeaderText>
                <TextView placeholder="Escribe aquí" />
                <Link href={{
                    pathname: "/ordenes/consultas/caja",
                    }} asChild>
                    <Pressable>
                        <BottomButton title="Siguiente" />
                    </Pressable>
                </Link>
            </View>
        </TouchableWithoutFeedback>
    );
}