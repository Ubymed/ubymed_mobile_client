// LIBRARIES
import React from 'react';
import { StyleSheet, ScrollView, Pressable, Image, Alert } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
// COMPONENTS
import { Text, View, FlatList, ActivityIndicator } from '../../../components/Themed';
import { HeaderText } from '../../../components/StyledText';
import { SimpleTable, SingleSelectTable } from '../../../components/Tables';
import { BottomButton } from '../../../components/Buttons';
// API
import { obtenerUbymedAPI } from '../../api/ubymed';

export default function ClienteScreen () {
    const [selectedRow, setSelectedRow] = React.useState(null);
    // Datos de ejemplo para la tabla
    const data = [
        { id: '1', name: 'Para mi' },
        { id: '2', name: 'Para otra persona' },
        // Agrega más opciones aquí
    ];

    const handleRowSelect = (id: string) => {
        const selectedData = data.find(row => row.id === id);
        setSelectedRow(selectedData);
    };
    
    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen options={{ title: "Cliente"}} />
            <HeaderText>¿Para quién es el servicio?</HeaderText>
            <SingleSelectTable data={data} onRowSelect={handleRowSelect} />
            {selectedRow && <SimpleTable data={[selectedRow]} />}
            <Link href={{
                pathname: "/ordenes/consultas/lugar",
                }} asChild>
                <Pressable>
                    <BottomButton title="Siguiente" />
                </Pressable>
            </Link>
        </View>
    );
}