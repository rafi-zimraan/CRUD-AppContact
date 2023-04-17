import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {AbuTua, Black, Blue, Green, White} from '../utils/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Componentkeypad = () => {
  const [text, setText] = useState<string>('');
  const [data, setData] = useState<Data[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [edit, setEdit] = useState<boolean>(false);

  const create = (text: string) => {
    const newData = [...data, {item: text}];
    setData(newData);
    console.log('item', newData);
    saveData(newData);
  };

  const saveData = async (data: Data[]) => {
    try {
      await AsyncStorage.setItem('key', JSON.stringify(data));
    } catch (eror) {
      console.log('saveData eror', eror);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('key');
      if (value !== null) {
        const parseValue = JSON.parse(value);
        setData(parseValue);
        console.log(parseValue);
      } else {
        null;
      }
    } catch (eror) {
      console.log('getData eror', eror);
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
    setEdit(false);
    saveData(newData2);
  };

  const deleteData = () => {
    const newData3 = [...data];
    newData3.splice(index, 1);
    setData(newData3);
    setEdit(false);
    saveData(newData3);
  };
  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <Text style={styles.text}>Contact</Text>
      </View>
      {data.map((Value, index) => (
        <TouchableOpacity
          onPress={() => {
            setText(Value.item);
            setIndex(index);
            setEdit(true);
          }}
          key={index}
          style={styles.content}>
          <Image
            source={require('../assets/image/user.png')}
            style={styles.Image}
          />
          <Text style={styles.txt2}>{Value.item}</Text>
          <TouchableOpacity
            style={styles.dbtn}
            onPress={() => {
              setIndex(index);
              deleteData();
            }}>
            <View style={styles.Icon}>
              <Icon name="trash-can-outline" size={26} color={White} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="phone-incoming-outline"
              size={26}
              color={White}
              style={styles.Icon2}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
      <View style={styles.ContentButton}>
        <TextInput
          style={styles.textInput}
          placeholder="+62"
          returnKeyLabel="Enter"
          keyboardType="phone-pad"
          value={text}
          onChangeText={setText}
        />
        {edit ? (
          <TouchableOpacity
            onPress={() => (edit ? editData() : create(text))}
            style={styles.buttonEdit}>
            <Text style={styles.txt}>Edit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => (edit ? editData() : create(text))}
            style={styles.button}>
            <Text style={styles.txt}>Input</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Componentkeypad;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Black,
  },
  header: {
    width: wp('90%'),
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    fontSize: 20,
    color: White,
    alignSelf: 'center',
    marginVertical: 10,
  },
  ContentButton: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    width: wp('100%'),
  },
  textInput: {
    flex: 1,
    backgroundColor: White,
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
    backgroundColor: Blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    bottom: 10,
    width: wp('20%'),
  },
  buttonEdit: {
    width: wp('20%'),
    bottom: 11,
    backgroundColor: Green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  txt: {
    color: White,
    fontSize: 20,
  },
  Image: {
    height: hp('7%'),
    width: wp('13%'),
  },
  content: {
    backgroundColor: AbuTua,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 5,
    width: wp('95%'),
  },
  Icon: {
    flexDirection: 'row',
  },
  Icon2: {
    top: 15,
  },
  txt2: {
    flex: 1,
    color: White,
    marginTop: 14,
    marginLeft: 9,
    fontSize: 18,
    paddingLeft: 5,
  },
  dbtn: {
    marginRight: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
