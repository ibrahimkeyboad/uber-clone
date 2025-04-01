import { Link } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import CustomButton from '~/components/CustomButton';

import InputField from '~/components/InputField';
import Oauth from '~/components/Oauth';
import { icons, images } from '~/constants';

export default function SignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  async function onSignUpPress() {}

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1">
        <View className="relative h-[250px] w-full">
          <Image source={images.signUpCar} className="z-0 h-[250px] w-full" />
          <Text className="font-JakartaSemiBold absolute bottom-5 left-5 text-2xl text-black">
            Create Your Account
          </Text>
        </View>
        <View className="px-6">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            keyboardType="email-address"
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your Password"
            icon={icons.lock}
            value={form.password}
            secureTextEntry
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton title="Sign Up" onPress={onSignUpPress} className="mt-6" />

          <Oauth />

          <Link href="/sign-in" className="text-general-200 mt-10 text-center text-lg">
            <Text>Already have an account? </Text>
            <Text className="text-primary-500">Sign In</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
