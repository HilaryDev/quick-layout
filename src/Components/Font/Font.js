/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2021 HilaryDev
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';
import FontPicker from 'font-picker-react';
import styled from 'styled-components';


const FontPickerCont = styled.div`
    margin-bottom: 80px;

    #font-picker {
        box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
        background-color: white;
        border-radius: 30px;
    }
    div[id^='font-picker'] .dropdown-button {
        background-color: white;
        border-radius: 30px;
    }

    div[id^='font-picker'] .dropdown-button:hover,
    div[id^='font-picker'] .dropdown-button:focus {
        background-color: white;
        border-radius: 30px;
    }
    div[id^='font-picker'] ul li button.active-font {
        background-color: white;
    }

    div[id^='font-picker'] ul {
        background-color: white;
        margin-top: 10px;
        border-radius: 10px;
        box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
    }
`;

export default class Font extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFont: 'Montserrat'
        };
    }

    render() {
        const { activeFont } = this.state;
        return (
            <FontPickerCont>
                <FontPicker
                    apiKey={process.env.REACT_APP_FONT_KEY}
                    activeFontFamily={activeFont}
                    onChange={nextFont =>
                        this.setState({
                            activeFont: nextFont.family
                        })
                    }
                />
            </FontPickerCont>
        );
    }
}
