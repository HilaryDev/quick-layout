/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2021 HilaryDev
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';

import { LayoutInner, Container } from '../Layout';
import { FlexLeft, FlexRight, Image } from '../FlexSplit';
import { SubHeading, Paragraph, HeadingLight } from '../../Styling';
import code from '../../images/landing/code.jpg';


const DevRow = () => (
    <LayoutInner>
        <Container style={{ height: 'unset' }}>
            <FlexLeft>
                {' '}
                <SubHeading>Built For Developers</SubHeading>
                <Paragraph>
                    Setting up a project can be very time consuming.
                    This site aims to simplify that process for you.
                </Paragraph>


                <Container style={{ height: 'unset', margin: '50px 0' }}>
                    <FlexLeft style={{ width: '50%' }}>
                        <HeadingLight>Clean Code</HeadingLight>

                        <Paragraph style={{ maxWidth: 150 }}>
                            The templates come with cleanly written code that
                            you can build off of.
                        </Paragraph>
                    </FlexLeft>


                    <FlexRight style={{ width: '50%' }}>
                        <HeadingLight>SEO Analytics</HeadingLight>

                        <Paragraph style={{ maxWidth: 150 }}>
                            Meta tags and descriptions can be time consuming, so
                            all of that is taken care of for you.
                        </Paragraph>
                    </FlexRight>
                </Container>


                <Container style={{ height: 'unset' }}>
                    <FlexLeft style={{ width: '50%' }}>
                        <HeadingLight>Color Variables</HeadingLight>

                        <Paragraph style={{ maxWidth: 150 }}>
                            Take advantage of a color palette that you can
                            apply across your site effortlessly
                        </Paragraph>
                    </FlexLeft>


                    <FlexRight style={{ width: '50%' }}>
                        <HeadingLight>Font Setup</HeadingLight>

                        <Paragraph style={{ maxWidth: 150 }}>
                            Assign your font at the start, and Google will be used
                            to apply it for you
                        </Paragraph>
                    </FlexRight>
                </Container>
            </FlexLeft>


            <FlexRight>
                <Image src={code} alt="code" />
            </FlexRight>
        </Container>
    </LayoutInner>
);

export default DevRow;
