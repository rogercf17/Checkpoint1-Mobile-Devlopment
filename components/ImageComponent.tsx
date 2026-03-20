import React from "react";
import { Image } from "react-native";

export const ImageComponent = () => {
    return(
        <Image 
            source={require('../assets/fiap-logo.png')}
            className="h-[120px] w-[120px] rounded-[20px] mb-5"
        />
    );
};
