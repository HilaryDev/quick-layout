/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2021 Max Perdomo
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from 'react';

import './Switch.css';


const Switch = () => {
  return (
    <>
      <input
        className="react-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
      />


      <label
        className="react-switch-label"
        htmlFor="react-switch-new"
      >
        <span className="react-switch-button" />
      </label>
    </>
  );
};


export default Switch;
