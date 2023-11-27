// REACT / REACT NATIVE
import React, { useState, useEffect, useCallback } from 'react';
import { Pressable, SectionList } from "react-native";
import { Stack, Link, useLocalSearchParams } from 'expo-router';
// UI COMPONENTS
import { Text, View, FlatList, ActivityIndicator  } from '../../../components/Themed';
import { CatalogoConsultaMedica } from "../../../types/servicios";
import { CategoryCard } from '../../../components/Cards';
import { SectionHeader } from '../../../components/SectionHeader';
import { BottomButton } from '../../../components/Buttons';
// API
import { obtenerUbymedAPI } from '../../../api/ubymed';

export default function CajaScreen() {
    const data = [
        { id: 1, nombre: "Mario", descripcion: "Paciente" },
        { id: 2, nombre: "Diego", descripcion: "Paciente" },
        { id: 3, nombre: "Majo", descripcion: "Paciente" },
      ];
    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen options={{ title: "Caja" }} />
            <SectionList
                sections={[
                    { title: 'Detalles', data: data },
                    { title: 'Paciente', data: data },
                    { title: 'Lugar', data: data },
                    { title: 'Motivo', data: data },
                    { title: 'Factura', data: data },
                    { title: 'Método de Pago', data: data },
                ]}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                <Link href={{
                    pathname: "/",
                    params: {},
                }} asChild>
                    <Pressable>
                    <CategoryCard nombre={item.nombre} descripcion={item.descripcion} />
                    </Pressable>
                </Link>
                )}
                renderSectionHeader={({ section: { title } }) => (
                <SectionHeader title={title} />
                )}
            />
            <Link href={{
                pathname: "/ordenes/consultas/detalle",
                }} asChild>
                <Pressable>
                    <BottomButton title="Siguiente" />
                </Pressable>
            </Link>
        </View>
    );

}