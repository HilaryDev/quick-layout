/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2021 Max Perdomo
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import styled from 'styled-components';

import { COLORS, QUERIES } from '../../Styling';


const NavContainer = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${COLORS.yellow};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;

    img {
        width: 80px;
    }

    @media (${QUERIES.medium}) {
        width: 171px;
        height: 171px;
    }
`;


export default NavContainer;
