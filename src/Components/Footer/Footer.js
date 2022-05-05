/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2021 HilaryDev
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container, LayoutInner } from '../Layout';
import { FlexLeft, FlexRight } from '../FlexSplit';
import { SubHeading, Button, Paragraph } from '../../Styling';


const LayoutInnerFooter = styled(LayoutInner)`
    max-width: 1500px;
    padding: 0 40px;
    min-height: 600px;
`;
const FooterContainer = styled(Container)`
    a {
        color: #919093;
        text-decoration: none;
    }
    justify-content: space-between;

    ${FlexLeft} {
        width: 30%;

        ${Paragraph} {
            :nth-child(1) {
                color: white;
                font-weight: 700;
                text-transform: uppercase;
            }
        }
    }

    ${FlexRight} {
        width: 30%;

        ${Paragraph} {
            :nth-child(1) {
                color: white;
                font-weight: 700;
                text-transform: uppercase;
            }
        }
    }

    ${Button} {
        background-color: #ffcc57;
        color: #fff;
        float: right;
        width: 220px;

        :hover {
            cursor: pointer;
        }
    }

    ${SubHeading} {
        max-width: 200px;
        color: white;
    }
`;

const HorizontalLine = styled.hr`
    color: #b2b2b2;
    opacity: 0.3;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
`;

const FooterContainerCol = styled(FooterContainer)`
    flex-direction: column;
    align-items: unset;
    width: 100%;
    margin: 0 auto;

    img {
        height: 100px;
        width: 120px;
        margin-bottom: 20px;
    }
`;

const FooterContainerInner = styled(FooterContainer)`
    justify-content: left;
`;

const Footer = () => (
    <LayoutInnerFooter>
        <FooterContainer>
            <FlexLeft>
                <SubHeading>Begin Developing Now</SubHeading>
            </FlexLeft>


            <FlexRight>
                <Link to="/theme">
                    <Button>Open Builder &#10230;</Button>
                </Link>
            </FlexRight>
        </FooterContainer>


        <FooterContainerCol>
            <HorizontalLine />
        </FooterContainerCol>


        <FooterContainerInner style={{ alignItems: 'baseline' }}>
            <FlexLeft>
                <Paragraph>Help & Support</Paragraph>
                <Paragraph>
                    <a href="https://github.com/HilaryDev/quick-layout/issues">
                        Open an issue on Github
                    </a>
                </Paragraph>
            </FlexLeft>


            <FlexRight>
                <Paragraph>Get in touch</Paragraph>
                <Paragraph>Feel free to reach out to the author of this website</Paragraph>
                <Paragraph>
                    <a href="https://github.com/HilaryDev/">
                        HilaryDev
                    </a>
                </Paragraph>
            </FlexRight>
        </FooterContainerInner>
    </LayoutInnerFooter>
);

export default Footer;
