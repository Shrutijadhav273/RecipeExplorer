import { View, Text, StyleSheet , TouchableOpacity } from 'react-native';

export default function HomeScreen() {

  const handleLogin = () => {
    console.log('Go to Login Screen');
  };

  const handleRegister = () => {
    console.log('Go to Register Screen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Recipe Explorer App
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },


  button: {
    backgroundColor: 'grey',
    width: '60%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});