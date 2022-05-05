/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2021 HilaryDev
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    COLORS,
    FONTS,
    SmallHeading,
    Button,
    Paragraph
} from '../../Styling/Styling';
import {
    ChooseTheme,
    ChooseThemeLayout,
    ThemeWrapper,
    Theme,
    CardHeading,
    ShortHero
} from './styles';


const ThemeChooser = () => {
    const [chosenTheme, setChosenTheme] = useState('second');

    // Set the selected theme when a user clicks one
    const handleTheme = themeName => {
        localStorage.setItem('theme', themeName);
        setChosenTheme(themeName);
    };

    return (
        <ChooseTheme>
            <ShortHero background='#5442F8'>
                <SmallHeading fontColor='#FFFFFF' fontFamily={FONTS.secondary}>
                    Pick A Template
                </SmallHeading>
            </ShortHero>
            <ChooseThemeLayout>
                <ThemeWrapper>
                    <Theme
                        onClick={() => handleTheme('first')}
                        className={chosenTheme === 'first' ? 'selected' : null}
                    >
                        <CardHeading>Blog Template</CardHeading>
                        <Paragraph className='features'>
                            <span>Components: </span> <br /> navbar <br />
                            heading <br />
                            article <br />
                            footer
                        </Paragraph>
                    </Theme>


                    <Theme
                        onClick={() => handleTheme('second')}
                        className={chosenTheme === 'second' ? 'selected' : null}
                    >
                        {' '}
                        <CardHeading>Landing Page</CardHeading>
                        <Paragraph className='features'>
                            <span>Components: </span> <br /> navbar <br />
                            heading <br />
                            flex divs <br />
                            footer
                        </Paragraph>
                    </Theme>


                    <Theme
                        onClick={() => handleTheme('third')}
                        className={chosenTheme === 'third' ? 'selected' : null}
                    >
                        <CardHeading>Landing Page Alternate</CardHeading>

                        <Paragraph className='features'>
                            <span>Components: </span> <br /> navbar <br />
                            Image Header <br />
                            Table Grid <br />
                            footer
                        </Paragraph>
                    </Theme>
                </ThemeWrapper>


                <Link to={`/edit/${chosenTheme}`}>
                    <Button
                        background={COLORS.lightBlue}
                        color={COLORS.darkBlue}
                        fontFamily={FONTS.primary}
                        hoverBackground={COLORS.darkBlue}
                        hoverColor={COLORS.lightBlue}
                    >
                        Continue
                    </Button>
                </Link>
                <p>
                    or start from a&nbsp;
                    <Link to='/colors'>
                        <span>blank template</span>
                    </Link>
                </p>
            </ChooseThemeLayout>
        </ChooseTheme>
    );
};

export default ThemeChooser;
