/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2021 Max Perdomo
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const preferencesReducerDefaultState = {
    projectTitle: 'Lorem ipsum',
    projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, etiam non purus euismod.',
    metaTags: true
};

const preferencesReducer = (state = preferencesReducerDefaultState, action) => {
    switch (action.type) {
        case 'CHANGE_PREFERENCE':
            return {
                ...state,
                [action.state]: action.value
            };
        default:
            return state;
    }
};

export default preferencesReducer;
