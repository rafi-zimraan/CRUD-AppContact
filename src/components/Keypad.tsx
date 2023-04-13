// CRUD OFFLINE
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {AbuAbu, AbuTua, Hitam} from '../utils/Colors';

interface Data {
  item: string;
}

const Crud = () => {
  const [text, setText] = useState<string>('');
  const [data, setData] = useState<Data[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    getData();
  }, []);

  const create = (text: string) => {
    const newData = [...data, {item: text}];
    setData(newData);
    console.log('item: ', newData);
    saveData(newData);
  };

  const saveData = async (data: Data[]) => {
    try {
      await AsyncStorage.setItem('key', JSON.stringify(data));
    } catch (error) {
      console.log('saveData error', error);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('key');
      if (value !== null) {
        const parsedValue = JSON.parse(value);
        setData(parsedValue);
        console.log(parsedValue);
      } else {
        null;
      }
    } catch (error) {
      console.log('getData error', error);
    }
  };

  const editData = () => {
    const newData2 = [...data];
    newData2[index].item = text;

    setData(newData2);
    setText('');
    setEditMode(false);

    saveData(newData2);
  };

  const deleteData = () => {
    const newData3 = [...data];
    newData3.splice(index, 1);

    setData(newData3);
    setEditMode(false);
    saveData(newData3);
  };

  return (
    <View style={{flex: 1, backgroundColor: Hitam}}>
      <View style={styles.header}>
        <Text style={styles.text}>Catatan</Text>
      </View>
      {data.map((item, index) => (
        <TouchableOpacity
          onPress={() => {
            setText(item.item);
            setIndex(index);
            setEditMode(true);
          }}
          key={index}
          style={styles.content}>
          <Text style={styles.txt2}>
            {index}. {item.item}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setIndex(index);
              deleteData();
            }}
            style={styles.dbtn}>
            <Text style={styles.dtxt}>X</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
      <View style={styles.contain}>
        <TextInput
          style={styles.textInput}
          placeholder="Masukan Data"
          value={text}
          onChangeText={setText}
        />
        {editMode ? (
          <TouchableOpacity
            onPress={() => (editMode ? editData() : create(text))}
            style={styles.buttonEdit}>
            <Text style={styles.txt}>Edit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => (editMode ? editData() : create(text))}
            style={styles.button}>
            <Text style={styles.txt}>Input</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Crud;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    width: '90%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
    marginVertical: 10,
  },
  contain: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginHorizontal: 10,
    paddingLeft: 10,
    bottom: 10,
  },
  button: {
    width: '20%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    bottom: 10,
  },
  buttonEdit: {
    width: '20%',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  txt: {
    color: 'white',
    fontSize: 20,
  },
  content: {
    backgroundColor: AbuTua,
    marginVertical: 10,
    padding: 5,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  txt2: {
    color: 'white',
    fontSize: 18,
    paddingLeft: 5,
    flex: 1,
  },
  dbtn: {
    backgroundColor: 'gold',
    width: '7%',
    marginRight: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dtxt: {
    color: 'black',
    fontSize: 11,
  },
});
