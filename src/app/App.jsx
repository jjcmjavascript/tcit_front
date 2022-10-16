import React from 'react';
import Post from './modules/posts/Posts';
import { store } from './providers/store'
import { Provider } from 'react-redux';

function App() {
  return <>
    <Provider store={store}>
      <Post />
    </Provider>
  </>;
}

export default App;
