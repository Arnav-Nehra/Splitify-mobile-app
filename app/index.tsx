import { View, Text,Image,ScrollView, StatusBar} from 'react-native';
import "../global.css";
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { router } from 'expo-router';
import Terms from '@/components/Terms';
const images = {
    path: require('../assets/images/path.png'),
    applelight:require('../assets/images/apple-light.png'),
    logo2:require('../assets/images/logo2.png'),
    appledark:require("../assets/images/apple.png"),
    emaildark:require("../assets/images/emaildark.png")
}
export default function Welcome(){
   
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView
            contentContainerStyle={{
                    height:"100%"
                }}
            >
            <View className='w-full flex justify-start items-center h-full'>
                <Image 
                source = {images.logo2} 
                className='w-[350px] h-[350px]'
                resizeMode='contain'
                />

            <View className='relative mt-1 mb-5'>
                <Text className='text-3xl text-white font-bold text-center tracking-wider'>
                Fair and Faster Splits
                </Text> 

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-4 -right-8"
              resizeMode="contain"
            />
            </View>

            <CustomButton
            title='Continue with Email'
            handlePress={()=>router.push("/sign-in")}
            containerStyles="w-3/4 mt-16"
            svg={images.emaildark}
            />
            <CustomButton
            title='Continue with Apple'
            handlePress={()=>router.push("/sign-in")}
            containerStyles="w-3/4 mt-6"
            svg={images.appledark}
            />
            <Terms></Terms>
            </View>
            </ScrollView>
            <StatusBar backgroundColor="#161622" barStyle="light-content"/>
        </SafeAreaView>
    )
}
