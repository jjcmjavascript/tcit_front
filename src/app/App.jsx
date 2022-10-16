import React from 'react';
import Post from './Posts';
import { store } from './store'
import { Provider } from 'react-redux';

function App() {
  return <>
    <Provider store={store}>
      <Post />
    </Provider>
  </>;
}

export default App;
