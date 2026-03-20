import React from "react";
import { TextInput, View } from "react-native";

interface InputComponentProps {
    type: string;
    placeholder: string;
};

export const InputComponent: React.FC<InputComponentProps> = ({ type, placeholder }) => {
    const isPassword = type === 'senha';

    return(
        <View className="w-full p-[10px] mb-2">
            <TextInput 
                placeholder={placeholder}
                placeholderTextColor="#ed195c"
                secureTextEntry = {isPassword}
                className="w-full border border-[#ed195c] rounded-[20px] p-3 text-[#ed195c]"
            />
        </View>      
    );
};