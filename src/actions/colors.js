/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2021 HilaryDev
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

export const changeColor = (color, hex) => ({
    type: 'CHANGE_COLOR',
    color,
    hex
});

export const changeAllColors = (colors) => ({
    type: 'CHANGE_ALL_COLORS',
    colors
});
