import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="cliente" />
      <Stack.Screen name="motivo" />
      <Stack.Screen name="lugar" />
      <Stack.Screen name="caja" />
    </Stack>
  );
}
