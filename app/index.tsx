import { useAuth } from '@clerk/clerk-expo';
import { Redirect } from 'expo-router';
import { ActivityIndicator } from 'react-native';

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <ActivityIndicator />;
  }

  console.log('isSignedIn', isSignedIn);

  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)/home" />;
  }

  return <Redirect href="/(auth)/welcome" />;
}
