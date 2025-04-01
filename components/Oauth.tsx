import { View, Text, Image } from 'react-native';

import CustomButton from './CustomButton';

import { icons } from '~/constants';

export default function Oauth() {
  async function handleGoogleSignIn() {}

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-center gap-x-3">
        <View className="bg-general-100 h-[1px] flex-1" />
        <Text className="text-lg">Or</Text>
        <View className="bg-general-100 h-[1px] flex-1" />
      </View>
      <CustomButton
        title="Log In with Google"
        className="mt-5 w-full shadow-none"
        IconLeft={() => <Image source={icons.google} className="mr-5 size-5" />}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
}
