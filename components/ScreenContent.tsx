import React from 'react';
import { View } from 'react-native';
import { InputComponent } from './InputComponent';
import { ForgotPasswordComponent } from './ForgotPasswordComponent';
import { ButtonLoginComponent } from './ButtonLoginComponent';
import { ImageComponent } from './ImageComponent';

export const ScreenContent = () => {
  return (
    <View className='w-full items-center flex-1 justify-center bg-black'>
      <ImageComponent />
      <InputComponent type='text' placeholder='Digite seu usuário' />
      <InputComponent type='senha' placeholder='Digite sua senha' />
      <ButtonLoginComponent />
      <ForgotPasswordComponent />
    </View>
  );
};
