/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2021 Max Perdomo
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import styled, { css, keyframes } from 'styled-components/macro';

import { COLORS, QUERIES } from '../../Styling';


export const SlideOut = keyframes`
0%{
    transform: translate(70%,0) rotate(0deg)
}

20%{
    transform: translate(80%,0) matrix(1.00,0.00,0.050,1.00,0,0);
}
100%{
    transform:translate(97%,0)  matrix(1.00,0.00,0.00,1.00,0,0);
}
`;

export const SlideIn = keyframes`
0%{
    transform: translate(100%,0)  matrix(1.00,0.00,0.00,1.00,0,0);
}

20%{
    transform: translate(90%,0) matrix(1.00,0.00,0.050,1.00,0,0);
}
100%{
    transform: translate(70%,0)
}
`;

export const SlideFull = keyframes`
0%{
    transform: translate(92%,0)  matrix(1.00,0.00,0.00,1.00,0,0);
}

70%{
    transform: matrix(1.00,0.00,0.050,1.00,0,0);
}
100%{
    background-color: #3A3A43;
    transform: translate(0,0) matrix(1.00,0.00,0.00,1.00,0,0)
}
`;

export const Block = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${COLORS.deepBlue};
    position: fixed;
    right: 0;
    display: ${props =>
        props.positionAnim === 'full'
            ? css`
                  block;
              `
            : css`
                none;
            `};
    top: 0;
    animation: ${props =>
        props.positionAnim === 'side'
            ? css`
                  none;
              `
            : props.positionAnim === 'full'
            ? css`
                  ${SlideFull} 1.2s forwards ease-out
              `
            : css`
                  ${SlideIn} .8s forwards ease-out
              `};

    @media (${QUERIES.medium}) {
        width: 100%;
        display: block;

        animation: ${props =>
            props.positionAnim === 'side'
                ? css`
                      ${SlideOut} .8s forwards ease-out
                  `
                : props.positionAnim === 'full'
                ? css`
                      ${SlideFull} 1.2s forwards ease-out
                  `
                : css`
                      ${SlideIn} .8s forwards ease-out
                  `};
    }
`;

export const ScrollCont = styled.div`
    transform: rotate(90deg);
    position: absolute;
    left: 15%;
    bottom: 250px;
    height: 30px;
    color: white;
    transition: opacity 0.5s 0.3s;

    p {
        display: inline-block;
        padding: 0;
    }

    @media (${QUERIES.medium}) {
        display: block;
    }
`;

export const Line = styled.div`
    width: 150px;
    height: 1px;
    background-color: white;
    display: inline-block;
    margin: 0 30px 3px 0;
`;
