import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FirebaseContext } from './Store/firebase';
import { db, auth ,storage } from './Firebase/config';
import Context from './Store/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <FirebaseContext.Provider value={{ db, auth ,storage }}>
        <App />
      </FirebaseContext.Provider>
    </Context>
  </React.StrictMode>
);

