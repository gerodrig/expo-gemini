import { Layout, Text } from '@ui-kitten/components';
import React from 'react';

const NoImages = () => {
  return (
    <Layout
      style={{
        alignItems: 'center',
        flexGrow: 0,
        height: 200,
        marginBottom: 50,
      }}
    >
      <Layout
        style={{
          alignItems: 'center',
          backgroundColor: '#E4E9F2',
          borderRadius: 16,
          flexGrow: 0,
          height: 200,
          marginTop: 15,
          justifyContent: 'center',
          width: 250,
        }}
      >
        <Text category="h5">No Images available</Text>
        <Text
          style={{
            marginTop: 15,
            textAlign: 'center',
            width: '100%',
          }}
          category="p2"
        >
          Submit prompt to start with image generation
        </Text>
      </Layout>
    </Layout>
  );
};

export default NoImages;
