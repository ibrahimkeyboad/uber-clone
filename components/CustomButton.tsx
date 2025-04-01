import { View, Text, TouchableOpacity } from 'react-native';

import { ButtonProps } from '~/type/type';

const getBGVariantStyle = (variant: ButtonProps['bgVariant']) => {
  switch (variant) {
    case 'secondary':
      return 'bg-gray-500';
    case 'danger':
      return 'bg-red-500';
    case 'success':
      return 'bg-green-500';
    case 'outline':
      return 'bg-transparent border border-neutral-300 border-[0.5px]';
    default:
      return 'bg-[#0286ff]';
  }
};
const getTeextVariantStyle = (variant: ButtonProps['textVariant']) => {
  switch (variant) {
    case 'primary':
      return 'text-black';
    case 'danger':
      return 'text-red-100';
    case 'success':
      return 'text-green-100';
    case 'secondary':
      return 'text-gray-100';
    default:
      return 'text-white';
  }
};

export default function CustomButton({
  onPress,
  title,
  bgVariant = 'primary',
  textVariant = 'default',
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`shadow-neutral-400/7 w-full flex-row items-center justify-center rounded-full p-3 shadow-md 
        ${getBGVariantStyle(bgVariant)} ${className}`}
      {...props}>
      {IconLeft && <IconLeft />}
      <Text
        className={`text-lg font-bold 
        ${getTeextVariantStyle(textVariant)}`}>
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
}
