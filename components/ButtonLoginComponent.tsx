import React from "react";
import { Text, TouchableOpacity } from "react-native";

export const ButtonLoginComponent = () => {
    return(
        <TouchableOpacity 
            className="h-[50px] w-[40%] bg-[#ed195c] flex justify-center rounded-3xl mt-[15px] mb-[5px]"
        >
            <Text className="text-white font-bold text-center">Login</Text>
        </TouchableOpacity>
    );
};
