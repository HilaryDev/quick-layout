/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2021 Max Perdomo
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';
import { Link } from 'react-router-dom';

import { Heading, SubHeading, Paragraph, Button } from '../../Styling';
import { LayoutInner, Layout, Container } from '../../Components/Layout';
import { FlexLeft } from '../../Components/FlexSplit';
import Navbar from '../../Components/Navbar';


const ErrorPage = () => (
    <Layout>
        <LayoutInner>
            <Navbar />
            <Container>
                <FlexLeft>
                    <Heading>404 :(</Heading>

                    <SubHeading>oops!</SubHeading>

                    <Paragraph>
                        We cannot seem to be able to find the page you are
                        looking for!&nbsp;
                    </Paragraph>


                    <Link to='/'>
                        <Button>Go back</Button>
                    </Link>
                </FlexLeft>
            </Container>
        </LayoutInner>
    </Layout>
);

export default ErrorPage;
