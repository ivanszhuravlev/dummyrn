import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
// import {readBlob} from './utils/reader';

export const MainScreen = () => {
  const onLoad = async () => {
		const imageBlob = await fetch(
			'https://image.cnbcfm.com/api/v1/image/102628798-Untitled-4.jpg',
		);

		// const imageBlob = await fetch(
		// 	'https://image.cnbcfm.com/api/v1/image/102628798-Untitled-4.jpg?v=1430254868&w=678&h=381',
		// );

		// const buffer = imageBlob;
    // console.log(await buffer.);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <View>
      <Text>HEy</Text>
    </View>
  );
};
