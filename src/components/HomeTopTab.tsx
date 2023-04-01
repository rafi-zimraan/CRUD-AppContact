import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Biru, Hitam, Merah, Putih} from '../utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Item {
  item: string;
}

const HomeTopTab = () => {
  const [text, setText] = useState<string>('');
  const [data, setData] = useState<Item[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [editMode, setEditMode] = useState<boolean>(false);

  const create = (text: string) => {
    setData(prevData => {
      const newData = [...prevData, {item: text}];
      console.log(newData);
      saveData(newData);
      return newData;
    });
  };

  const saveData = async (value: Array<{item: string}>) => {
    try {
      await AsyncStorage.setItem('data', JSON.stringify(value));
    } catch (e) {
      console.log('save data eror', e);
    }
  };

  // membuat data permanets
  const getData = async () => {
    try {
      let value = await AsyncStorage.getItem('data');
      if (value !== null) {
        const parseValue = JSON.parse(value);
        console.log(parseValue);
        setData(parseValue);
      }
    } catch (eror) {
      console.log('save data eror', eror);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
    <View style={styles.Container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      {data.map((value, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setText(value.item);
            setIndex(index);
            setEditMode(true);
          }}>
          <View style={styles.ContentTxtInput}>
            <Text style={styles.txtVal}>
              {index}.{value.item}
            </Text>
            <TouchableOpacity>
              <Icon
                name="delete-empty-outline"
                size={29}
                color={Hitam}
                style={styles.Icon}
                onPress={() => {
                  setIndex(index);
                  deleteData();
                }}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
      <View style={styles.ContentNavbar}>
        <View style={styles.ContentNav}>
          <Text style={styles.txt}>Hasil Input</Text>
        </View>
        <TextInput
          onChangeText={t => setText(t)}
          placeholder={'masukan input'}
          style={styles.ContentInput}
        />
        {editMode ? (
          <TouchableOpacity
            style={styles.ContentTxt}
            onPress={() => (editMode ? editData() : create(text))}>
            <Text style={styles.txt1}>Edit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.ContentTxt}
            onPress={() => (editMode ? editData() : create(text))}>
            <Text style={styles.txt1}>Enter</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HomeTopTab;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#90f1ef',
  },
  txtVal: {
    fontFamily: 'Poppins-BoldItalic',
    fontSize: 15,
    color: Hitam,
    left: 13,
    top: 15,
  },
  ContentTxtInput: {
    justifyContent: 'center',
    backgroundColor: Merah,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 9,
    elevation: 6,
    bottom: 10,
    padding: 2,
    left: 3,
  },
  Icon: {
    backgroundColor: Putih,
    left: 350,
    bottom: 13,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  ContentNav: {
    position: 'absolute',
    marginHorizontal: 160,
    backgroundColor: '#2dc7ff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    width: 130,
    height: 30,
    top: -640,
  },
  txt: {
    color: Hitam,
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  ContentNavbar: {
    flexDirection: 'row',
    padding: 10,
  },
  ContentInput: {
    backgroundColor: Putih,
    borderWidth: 1.7,
    borderRadius: 20,
    padding: 10,
    width: '80%',
  },
  ContentTxt: {
    backgroundColor: Biru,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 10,
    width: '15%',
    left: 20,
    bottom: 2,
  },
  txt1: {
    color: Putih,
    fontSize: 15,
  },
});
