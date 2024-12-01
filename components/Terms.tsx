import { router } from "expo-router";
import { Text, View } from "react-native";

export default function Terms(){
    return (
        <View className="justify-center items-center flex flex-row mt-4">
            <Text onPress={()=>router.push("/terms")} className="text-sm text-white font-plight underline">Terms</Text>
            <View style={{ width: 1, height: '70%', backgroundColor: 'white', marginHorizontal: 6 }}/>
            <Text onPress={()=>router.push("/terms")} className="text-sm text-white font-plight underline">Privacy Policy</Text>
            <View style={{ width: 1, height: '70%', backgroundColor: 'white', marginHorizontal: 6 }}/>
            <Text onPress={()=>router.push("/terms")} className="text-sm text-white font-plight underline">Contact Us</Text>
        </View>
    )
}