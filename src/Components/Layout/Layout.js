/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2021 Max Perdomo
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import styled from 'styled-components/macro';

import { QUERIES } from '../../Styling';


export const Layout = styled.div`
    width: 100%;
    max-width: 2000px;
    margin: 0 auto;
`;

export const LayoutInner = styled.div`
    width: 100% - 30px;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto 80px auto;
    position: relative;
    justify-content: center;
    padding: 20px;
`;

export const FullWidthContainer = styled.div``;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 2;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media (${QUERIES.medium}) {
        flex-wrap: nowrap;
        padding: 0;
    }
`;
