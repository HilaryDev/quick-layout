/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2021 HilaryDev
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import Builder from './views/Builder';
import ChooseColors from './views/ChooseColors';
import ChooseTheme from './views/ChooseTheme';
import configureStore from './store/configureStore';
import ErrorPage from './views/ErrorPage';
import * as serviceWorker from './serviceWorker';
// eslint-disable-next-line import/extensions
import GlobalStyles from './reset.css.js';


const store = configureStore();

const routing = (
    <Provider store={store}>
        <BrowserRouter>
        <div>
            <GlobalStyles />
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/theme' component={ChooseTheme} />
                <Route path='/colors' component={ChooseColors} />
                <Route path='/edit/:theme' component={Builder} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
