/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2021 HilaryDev
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';

import { FlexLeft, FlexRight, FlexCenter, ImageDiv } from '../FlexSplit';
import { SubHeading, Paragraph } from '../../Styling';
import TriContainer from './styles';


const FeatureCards = props => (
    <TriContainer>
        <FlexLeft>
            <ImageDiv>
                <SubHeading>{props.h1}</SubHeading>
                <Paragraph>{props.p1}</Paragraph>
                <img
                    alt={props.src1}
                    src={require(`../../images/landing/${props.src1.toLowerCase()}.jpg`)}
                />
            </ImageDiv>
        </FlexLeft>


        <FlexCenter>
            <ImageDiv>
                <SubHeading>{props.h2}</SubHeading>
                <Paragraph>{props.p2}</Paragraph>
                <img
                    alt={props.src2}
                    src={require(`../../images/landing/${props.src2.toLowerCase()}.jpg`)}
                />
            </ImageDiv>
        </FlexCenter>


        <FlexRight />
    </TriContainer>
);

export default FeatureCards;
