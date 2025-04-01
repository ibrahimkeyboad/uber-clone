import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import CustomButton from '~/components/CustomButton';

import { onboarding } from '~/constants';

export default function Welcome() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="h-full items-center justify-between pb-5">
      <TouchableOpacity
        className="w-full items-end justify-end p-5"
        onPress={() => router.replace('/(auth)/sign-up')}>
        <Text className="font-JakartaExtraBold text-base text-black"> Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="mx-1 h-[4px] w-[32px] rounded-full bg-[#e2e8f0]" />}
        activeDot={<View className="mx-1 h-[4px] w-[32px] rounded-full bg-[#0286ff]" />}
        onIndexChanged={(index) => setActiveIndex(index)}>
        {onboarding.map((item, index) => (
          <View key={item.id} className="j items-center justify-center p-5">
            <Image source={item.image} className="h-[300px] w-full" resizeMode="contain" />
            <View className="mt-10 w-full flex-row items-center justify-center">
              <Text className="mx-10 text-center text-3xl font-bold text-black">{item.title}</Text>
            </View>
            <Text className="font-JakartaSemiBold text-[#858585 mx-10 mt-3 text-center text-lg">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? 'Get Started' : 'Next'}
        onPress={() =>
          isLastSlide ? router.replace('/(auth)/sign-up') : swiperRef.current?.scrollBy(1)
        }
        className="mt-10 w-11/12"
      />
    </SafeAreaView>
  );
}
