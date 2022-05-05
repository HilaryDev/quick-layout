/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2021 HilaryDev
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { createStore, combineReducers } from 'redux';

import colorsReducer from '../reducers/colors';
import preferencesReducer from '../reducers/preferences';


export default () => {
    // Create global store
    const store = createStore(
        combineReducers({
            colors: colorsReducer,
            preferences: preferencesReducer
        }),
    );

    return store;
};
