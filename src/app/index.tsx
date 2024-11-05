import { Text, View, ScrollView } from "react-native";
import { Header } from '../components/Header'; 

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1 }} 
      className='bg-slate-100'
      showVerticalScrollIndicator={false}
    >
      <View>
        <Header />
      </View>
    </ScrollView>
  );
}
