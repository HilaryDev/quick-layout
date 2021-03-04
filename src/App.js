/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2021 Max Perdomo
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';
import { Link } from 'react-router-dom';

import { Heading, SubHeading, Paragraph, Button } from './Styling';
import { LayoutInner, Layout, Container } from './Components/Layout';
import { FlexLeft, FlexRight, Image } from './Components/FlexSplit';
import FeatureCards from './Components/FeatureCards';
import DevRow from './Components/DevRow';
import landingBuilder from './images/landing/landing-builder.jpg';
import Navbar from './Components/Navbar';
import Shapes from './Components/BackgroundShapes';
import RightBar from './Components/RightBar';
import Footer from './Components/Footer';


const App = () => (
    <Layout>
        <LayoutInner>
            <Navbar />
            <Shapes />
            <Container>
                <FlexLeft>
                    <Heading style={{ maxWidth: '400px' }}>
                        Speed up the start of your site&apos;s development&nbsp;
                    </Heading>
                    <Paragraph>
                        A layout builder for developers with deadlines
                    </Paragraph>
                    <Link to="/theme">
                        <Button>Get started</Button>
                    </Link>
                </FlexLeft>
                <FlexRight>
                    <Image src={landingBuilder} alt="landing builder" />
                </FlexRight>
            </Container>
            <RightBar />
        </LayoutInner>


        <LayoutInner>
            <Container style={{ height: 'unset' }}>
                <FlexLeft />
                <FlexRight>
                    <SubHeading>Skip The Boilerplate</SubHeading>
                    <Paragraph style={{ maxWidth: '400px' }}>
                        Start developing right away. With this layout builder
                        you can speed up taking care of visual boilerplate
                        so you can focus on building any complex business logic sooner
                    </Paragraph>
                </FlexRight>
            </Container>
            <FeatureCards
                src1="color"
                src2="layout"
                h1="Tailored Colors"
                h2="Assemble a Layout"
                p1="Adjust your layout's font and colors"
                p2="Build the layout you wish by dragging and dropping items"
            />
            <FeatureCards
                src1="template"
                src2="download"
                h1="Templates"
                h2="Available Download"
                p1="Pick any template you want to get started quickly"
                p2="Download your starter files, zipped"
            />
        </LayoutInner>
        <DevRow />
        <Footer />
    </Layout>
);

export default App;
