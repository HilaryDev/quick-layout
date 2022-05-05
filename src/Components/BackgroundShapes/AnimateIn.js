/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2021 HilaryDev
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { keyframes } from 'styled-components/macro';


const AnimateIn = keyframes`
0%{
    opacity: 0;
    transform: translate(0, 10px) scale(0) rotate(0deg);
}

70%{
    opacity: 1;
    transform: translate(0, 0) scale(1.9) rotate(180deg);
}

100%{
    opacity: 1;
    transform: translate(0, 0) scale(1.7) rotate(200deg);
}
`;


export default AnimateIn;
