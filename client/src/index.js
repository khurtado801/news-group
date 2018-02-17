import React from 'react';
import ReactDOM from 'react-dom';

//ROUTER
import {BrowserRouter as Router} from "react-router-dom";

//REDUX
// import {Provider} from "react-redux";
// import store from "./redux";


import App from "./App/App.js";

// Log changes in the store
// store.subscribe(() => {
//     console.log(store.getState());
// })

ReactDOM.render(
    // <Provider store={store}>
        <Router>
            <App/>
        </Router>
    // </Provider>
    ,
    document.getElementById("root")
);