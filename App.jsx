import { View, Text ,StyleSheet} from 'react-native';
function App() {
  console.log('app is running');
  return (
    <>
      <View className="bg-amber-400" style={styles.container}>
        <Text>Step One</Text>
        <Text>
          Edit{' '}
          <Text className="text-3xl font-semibold text-red-500">App.tsx</Text>{' '}
          to change this screen and then come back to see your edits.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
