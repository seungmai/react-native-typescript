// Search.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import styled from 'styled-components/native';

const Search = () => {
  const [location, setLocation] = useState<boolean>(false);
  const [state, setState] = useState<any>('');
  const [isRefresing, setIsRefresing] = useState<boolean>(false);
  const [people, setPeople] = useState<any>([
    {name: 'aaa', key: '1'},
    {name: 'bbb', key: '2'},
    {name: 'ccc', key: '3'},
    {name: 'ddd', key: '4'},
    {name: 'eee', key: '5'},
    {name: 'fff', key: '6'},
    {name: 'ggg', key: '7'},
  ]);

  const submitBtn = () => {
    setState(state);
  };

  return (
    <Container>
      <Wrap>
        <Input
          placeholder="검색창에 입력하시오."
          onChangeText={text => {
            setState(text);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setLocation(!location);
          }}>
          {location ? (
            <Image
              source={require('../../assets/location.png')}
              style={{width: 30, height: 30, marginTop: 70}}
            />
          ) : (
            <Image
              source={require('../../assets/redlocation.png')}
              style={{width: 30, height: 30, marginTop: 70}}
            />
          )}
        </TouchableOpacity>
      </Wrap>
      <Button title="제출" onPress={submitBtn} />
      <Text>{state}</Text>
      <View>
        <ScrollView>
          {people.map(
            (item: {
              key: React.Key | null | undefined;
              name:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            }) => {
              return (
                <View key={item.key}>
                  <Text
                    style={{
                      width: 400,
                      height: 60,
                      color: 'white',
                      backgroundColor: 'gray',
                      margin: 4,
                      textAlign: 'center',
                    }}>
                    {item.name}
                  </Text>
                </View>
              );
            },
          )}
        </ScrollView>
      </View>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const Wrap = styled.View`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 300px;
  height: 40px;
  margin: 70px 20px 0px 0px;
  background-color: gray;
  border-radius: 10px;
  padding: 4px 4px 4px 4px;
  color: white;
  input::placeholder {
    color: blue;
    font-weight: bold;
  }
`;

export default Search;
