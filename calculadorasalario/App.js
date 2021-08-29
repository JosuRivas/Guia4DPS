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
  const [name, setName] = useState(null);
  const [salary, setSalary] = useState(null);
  const [netSalary, setNetSalary] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
//render de todos los componentes de la aplicacion
  useEffect(() =>{
    if (name && salary) {
      calculate();
    }
    else{
      reset();
    }},[name,salary]);

    const calculate = () => {
      reset();
      if (!name) {
        setErrorMessage('Debe incluir su nombre');
      }else if(!salary){
        setErrorMessage('Debe incluir su salario base');
      }else{
        const isss = salary*0.03;
        const afp = salary*0.04;
        const renta = salary*0.05;
        const deductions = isss+afp+renta;
        const total = salary - isss - afp - renta ;
        setNetSalary({
          montlhyTotal:total.toFixed(2).replace('.',','),
          montlhyDeductions:deductions.toFixed(2).replace('.',','),
        });
      }
    };

    const reset = () =>{
      setErrorMessage('');
      setNetSalary(null);
    };

  return(
    <>
    <StatusBar barStyle="light-content"/>
    <SafeAreaView style={styles.Header}>
      <Text style={styles.HeadApp}>Cálculo de salario</Text>
      <Form 
        setName = {setName}
        setSalary = {setSalary}
        
      />
    </SafeAreaView>
    <Result 
    name={name}
    salary={salary}
    netSalary = {netSalary}
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
