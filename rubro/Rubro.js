import React {useState} from 'react';|
import {View, Text, Button, TextInput, Picker, Switch} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const estilos = StyleSheet.create({
    contenedor: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor:'#3eb3b1'
    width:'100%',
    },
     titulo: {
     color: '#FF0000',
     backgroundColor: '#F3F3F3',
     fontWeight: 'bold',
     fontSize: 30,
     width: '100%',
     },
});

const Rubro = () => {

const [flag,setFlag] = useState(false);

return(

    <View>
      <Text>Rubro</Text>
      <Text>Nombre</Text>
      <TextInput />
      <Text>Orden en el catalogo</Text>
      <Picker>
          <Picker.Item Label="#1" value="1"/>
          <Picker.Item Label="#2" value="2"/>
          </Picker>
       <Text>Destacar</Text>
      <Switch
          value={flag}
          onValueChange={ () => setFlag(!flag)}
          />
      <Button title="Guardar" />
    </View>
  );
};

export default Rubro;
