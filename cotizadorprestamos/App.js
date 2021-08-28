/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState,useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';
export default function App(){
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total,setTotal] = useState(null);
  const [errorMessage,setErrorMessage] = useState("");

  useEffect(() =>{
    if (capital && interest && months) {
      calculate();
    }
    else{
      reset();
    }},[capital,interest,months]);

    const calculate = () => {
      reset();
      if (!capital) {
        setErrorMessage('Añade la cantidad que quieres solicitar');
      }else if(!interest){
        setErrorMessage('Añade el interes del prestamo');
      }else if(!months){
        setErrorMessage('Selecciona los meses a pagar');
      }else{
        const i = interest/100;
        const fee = capital /((1 - Math.pow(i+1,-months))/ i);
        setTotal({
          monthlyFee:fee.toFixed(2).replace('.','.'),
          totalPayable:(fee*months).toFixed(2).replace('.',','),
        });
      }
    };

    const reset = () =>{
      setErrorMessage('');
      setTotal(null);
    };

  return(
    <>
    <StatusBar barStyle="light-content"/>
    <SafeAreaView style={styles.Header}>
      <Text style={styles.HeadApp}>Cotizador de Préstamos</Text>
      <Form 
        setCapital = {setCapital}
        setInterest = {setInterest}
        setMonths = {setMonths}
      />
    </SafeAreaView>
    <Result 
    capital={capital}
    interest={interest}
    months={months}
    total={total}
    errorMessage={errorMessage}
    />
    <Footer></Footer>
    </>
  );
}
const styles = StyleSheet.create({
  Header:{
    backgroundColor:colors.PRIMARY_COLOR,
    height:200,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:'center'
  },
  HeadApp:{
    fontSize:25,
    fontWeight:'bold',
    color:'#fff',
    marginTop:15,
  }
})
/*import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
*/
