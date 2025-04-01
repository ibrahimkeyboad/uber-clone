import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Platform,
  Keyboard,
} from 'react-native';

import { InputFieldProps } from '~/type/type';

export default function InputField({
  label,
  labelStyle,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  icon,
  ...props
}: InputFieldProps) {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="m-2 w-full">
          <Text className={`font-JakartaSemiBold mb-3 text-lg ${labelStyle}`}>{label}</Text>
          <View
            className={`focus:border-primary-500  relative flex-row items-center justify-start rounded-full border border-neutral-100 bg-neutral-100 ${containerStyle}`}>
            {icon && <Image source={icon} className={`ml-4 size-5 ${iconStyle}`} />}
            <TextInput
              className={`font-JakartaSemiBold flex-1 rounded-full p-4 text-[15px] ${inputStyle} text-left`}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
