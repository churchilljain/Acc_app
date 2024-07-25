import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { firebase } from './firebaseConfig.js';
// import auth from '@react-native-firebase/auth';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmResult, setConfirmResult] = useState(null);
  console.log("entered");
  const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');
  
  const signInWithPhoneNumber = async () => {
    try {
    //   const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    //   setConfirmResult(confirmation);
    //   setMessage('Code has been sent to your phone');
      firebase.auth();
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const confirmCode = async () => {
    try {
        
    //   await confirmResult.confirm(verificationCode);
    //   setMessage('Phone authentication successful!');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      {!confirmResult ? (
        <>
          <TextInput
            placeholder="Phone Number"
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            style={{ height: 40, borderColor: 'gray', borderWidth: 1,
marginBottom: 10 }}
          />
          <Button title="Send Code" onPress={signInWithPhoneNumber} />
        </>
      ) : (
        <>
          <TextInput
            placeholder="Verification Code"
            onChangeText={setVerificationCode}
            keyboardType="numeric"
            style={{ height: 40, borderColor: 'gray', borderWidth: 1,
marginBottom: 10 }}
          />
          <Button title="Confirm Code" onPress={confirmCode} />
        </>
      )}
      {message ? <Text>{message}</Text> : null}
    </View>
  );
};

export default App;