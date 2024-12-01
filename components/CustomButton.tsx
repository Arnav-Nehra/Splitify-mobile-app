import { ActivityIndicator, Button, TouchableOpacity, View, Text,Image, ImageURISource } from "react-native";
import { isLoading } from "expo-font";

interface CustomButtonprops{
    title: string,
    handlePress: () => void,
    containerStyles:string,
    isLoading?:boolean
    textstyles?:string
    svg?:ImageURISource
}
export default function CustomButton(props: CustomButtonprops){
    return (
        <TouchableOpacity
            onPress={props.handlePress}
            activeOpacity={0.7}
            className={`bg-red-300 rounded-xl min-h-[62px] flex flex-row justify-center items-center ${props.containerStyles} ${
                props.isLoading ? "opacity-50" : ""
              }`}
              disabled={props.isLoading}
        >
            <Text className={`text-primary font-psemibold text-lg  ${props.textstyles}`}>
                {props.title}
            </Text>
            <Image source={props.svg} resizeMode="contain" className="w-[30px] h-[25px] ml-3 mb-1"></Image>
            {props.isLoading && (
                <ActivityIndicator
                    animating={props.isLoading}
                    color={"#fff"}
                    size={"small"}
                    className="ml-2"
                />)}
        </TouchableOpacity>
    )
}