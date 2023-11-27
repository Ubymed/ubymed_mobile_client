import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}

export function HeaderText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontSize: 24, fontWeight: 'bold', textAlign: 'center', padding: 24, paddingTop: 40 }]} />;
}