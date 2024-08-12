import React from 'react';
import { View, Text } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';

const DynamicDrawer = ({ item, styles ,index}) => {
  return (
    <View >
        <DrawerItem
          key={index}
          label={() => (
            <Text style={styles.item}>{item.label}</Text>
          )}
          labelStyle={styles.item}
          onPress={item.onPress}
          icon={() => <View style={styles.iconBack}>{item.icon}</View>}
        />
    </View>
  );
};

export default DynamicDrawer;
