import React from 'react';
import { WebView } from 'react-native-webview';

function App(): React.JSX.Element {


  return (
    <WebView
      source={{uri: 'https://ottwatch.ca'}}
      style={{marginTop: 20}}
    />
  );
}

export default App;
