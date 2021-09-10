import React from 'react'; 
import {StyleSheet, Text, View} from 'react-native';

export default function Result(props) { 
    const {name, salary, netSalary, errorMessage} = props;
    return(
        <View style={styles.content}>
            {netSalary && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESUMEN</Text>
                    <DataResult title="Nombre:" value={`${name}`} />
                    <DataResult title="Salario base:" value={`${salary}$`} />
                    <DataResult title="Deducciones:" value={`-${netSalary.montlhyDeductions}$`} />
                      <View style={styles.indent}>
                        <DataResult title="Descuento ISSS:" value={`-${netSalary.descuentoISSS}$`} />
                        <DataResult title="Descuento AFP:" value={`-${netSalary.descuentoAFP}$`} />
                        <DataResult title="Descuento Renta:" value={`-${netSalary.descuentoRenta}$`} />
                      </View>
                    <DataResult 
                    title="Salario neto:"
                    value={`${netSalary.montlhyTotal}€`}
                    />
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}

function DataResult(props) { 
    const {title, value} = props; 
   
    return ( 
      <View style={styles.value}> 
        <Text>{title}</Text> 
        <Text>{value}</Text> 
      </View> 
    ); 
  }
  const styles = StyleSheet.create({ 
    content: { 
      marginHorizontal: 40, 
    }, 
    boxResult: { 
      padding: 30, 
    }, 
    title: { 
      fontSize: 25, 
      textAlign: 'center', 
      fontWeight: 'bold', 
      marginBottom: 20, 
    }, 
    value: { 
      flexDirection: 'row',
      justifyContent: 'space-between', 
    marginBottom: 20, 
  }, 
  error: { 
    textAlign: 'center', 
    color: '#f00', 
    fontWeight: 'bold', 
    fontSize: 20, 
  },
  indent:{
    marginLeft:30,
  }, 
}); 