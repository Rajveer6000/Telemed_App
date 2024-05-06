import { View, Text } from 'react-native';

function App(): React.JSX.Element {
  return (
    <>
      <View className="px-2 flex justify-center mt-[50%]">
        <Text className="text-2xl text-black dark:text-white">Step One</Text>
        <Text className="text-2xl text-black dark:text-white">
          Edit <Text>App.tsx</Text> to change this screen and then come back to
          see your edits.
        </Text>
      </View>
    </>
  );
}


export default App;
