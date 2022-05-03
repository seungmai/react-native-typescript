// // SearchDetail.tsx
// import React, {useState} from 'react';
// import {View, Text, FlatList, RefreshControl} from 'react-native';

// const SearchDetail = () => {
//   const [isRefresing, setIsRefresing] = useState<boolean>(false);

//   const onRefresh = () => {
//     setIsRefresing(true);

//     setTimeout(() => {
//       setIsRefresing(false);
//     }, 700);
//   };

//   const onEndReached = () => {
//     console.log('나야나');
//   };

//   return (
//     <FlatList
//       refreshControl={
//         <RefreshControl refreshing={isRefresing} onRefresh={onRefresh} />
//       }
//       // 키 값 설정
//       keyExtractor={(item, index) => index.toString()}
//       onEndReached={onEndReached}
//       onEndReachedThreshold={1}
//     />
//   );
// };

// export default SearchDetail;
