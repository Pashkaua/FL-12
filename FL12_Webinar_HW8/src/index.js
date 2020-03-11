import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import App from './components/App';
import Form from './components/Form';
import Edit from './components/Edit';

import { createStore } from "redux";
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.subscribe(() => {
//     console.log(store.getState());
// })

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/edit">
                    <Edit />
                </Route>
                <Route path="/add">
                    <Form />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </Router>

    </Provider>, document.getElementById('root'));


