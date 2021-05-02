import React from 'react';

import * as eva from '@eva-design/eva';
import { StyleSheet, View } from 'react-native';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

const App = () => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category='h1'>HOME</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    margin: 2,
  },
});


export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <App />
  </ApplicationProvider>
);
