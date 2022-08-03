import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyButton from './src/components/MyButton/MyButton';

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [phoneChoice, setPhoneChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choice = ['Rock', 'Paper', 'Scissors'];

  const handlePress = value => {
    setUserChoice(value);
    handlePhoneChoice();
  };

  const handlePhoneChoice = () => {
    const randomChoice = choice[Math.floor(Math.random() * choice.length)];
    setPhoneChoice(randomChoice);
  };

  useEffect(() => {
    getResult();
  }, [userChoice, phoneChoice]);

  function getResult() {
    setResult('Result');

    if (
      phoneChoice + userChoice === 'RockRock' ||
      phoneChoice + userChoice === 'PaperPaper' ||
      phoneChoice + userChoice === 'ScissorsScissors'
    ) {
      setResult('ITS A DRAW');
    }
    if (phoneChoice === 'Rock' && userChoice === 'Paper') {
      setResult('YOU WIN');
    }
    if (phoneChoice === 'Rock' && userChoice === 'Scissors') {
      setResult('YOU LOST');
    }
    if (phoneChoice === 'Paper' && userChoice === 'Scissors') {
      setResult('YOU WIN');
    }
    if (phoneChoice === 'Paper' && userChoice === 'Rock') {
      setResult('YOU LOST');
    }
    if (phoneChoice === 'Scissors' && userChoice === 'Rock') {
      setResult('YOU WIN');
    }
    if (phoneChoice === 'Scissors' && userChoice === 'Paper') {
      setResult('YOU LOST');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.choice_container}>
          <Text style={styles.title}>Phone Choice: </Text>
          <Text style={styles.choice_result}>{phoneChoice}</Text>
        </View>
        <View style={styles.choice_container}>
          <Text style={styles.title}>Your Choice: </Text>
          <Text style={styles.choice_result}>{userChoice}</Text>
        </View>
        <View style={styles.result_container}>
          <Text style={styles.result_title}>{result}</Text>
        </View>
      </View>
      <View style={styles.button_container}>
        <MyButton
          onPress={() => handlePress('Rock')}
          icon={'hand-rock-o'}
          title={'Rock'}
        />
        <MyButton
          onPress={() => handlePress('Paper')}
          icon={'hand-paper-o'}
          title={'Paper'}
        />
        <MyButton
          onPress={() => handlePress('Scissors')}
          icon={'hand-scissors-o'}
          title={'Scissors'}
        />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: 'black',
  },
  inner_container: {},
  choice_container: {
    marginVertical: 10,
    marginHorizontal: 25,
    flexDirection: 'row',
  },
  choice_result: {
    fontSize: 30,
    color: 'black',
    fontWeight: '600',
  },
  result_container: {
    marginVertical: 25,
    marginHorizontal: 75,
    alignItems: 'center',
    borderColor: '#6a1b9a',
    borderWidth: 4,
    borderRadius: 25,
    justifyContent: 'center',
    height: 100,
  },
  result_title: {
    color: '#6a1b9a',
    fontSize: 35,
    fontWeight: '700',
  },
  button_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 25,
    marginHorizontal: 5,
  },
});
