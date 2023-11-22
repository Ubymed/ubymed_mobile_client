import React, { useState, useEffect, useCallback } from 'react';
import { Stack } from 'expo-router';
import { Pressable, SectionList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Link } from "expo-router";
import { Text, View, FlatList, ActivityIndicator  } from '../../components/Themed';
import { obtenerUbymedAPI } from '../../api/ubymed';
import { CatalogoConsultaMedica } from "../../types/servicios";
import { ServicioCard } from '../../components/Cards';
import { SectionHeader } from '../../components/SectionHeader';

export default function ServiciosScreen() {
  const params = useLocalSearchParams();
  const { nombre, descripcion, url } = params;
  const [catalogoConsultas, setCatalogo] = useState<CatalogoConsultaMedica[] | null>(null);

  const loadData = useCallback(() => {
    obtenerUbymedAPI(url)
      .then((data) => {
        const serviciosActivos = data
          .filter((servicio: CatalogoConsultaMedica) => servicio.active)
          .sort((a: CatalogoConsultaMedica, b: CatalogoConsultaMedica) => a.sort_index - b.sort_index);
        setCatalogo(serviciosActivos);
      })
      .catch((error) => {
        console.error('Error al obtener los servicios:', error);
      });
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: nombre.toString() }} />
      {catalogoConsultas ? (
        <SectionList
        sections={[
          { title: 'Consultas Disponibles', data: catalogoConsultas },
        ]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={{
            pathname: "servicios/nueva",
            params: { nombre: item.nombre, descripcion: item.descripcion },
          }} asChild>
            <Pressable>
              <ServicioCard nombre={item.nombre} descripcion={item.descripcion} />
            </Pressable>
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader title={title} />
        )}
      />
      ) : (
        <ActivityIndicator/>
      )}
    </View>
  );
}

