﻿/*
* Globalize Culture en-US
*
* http://github.com/jquery/globalize
*
* Copyright Software Freedom Conservancy, Inc.
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* This file was generated by the Globalize Culture Generator
* Translation: bugs found in this file need to be fixed in the generator
*/

(function (window, undefined) {

    var Globalize;

    if (typeof require !== "undefined"
	&& typeof exports !== "undefined"
	&& typeof module !== "undefined") {
        // Assume CommonJS
        Globalize = require("globalize");
    } else {
        // Global variable
        Globalize = window.Globalize;
    }

    Globalize.addCultureInfo("en-PR", "default", {
        name: "en-PR",
        englishName: "English (United States)",
        calendars: {
            standard: {
                patterns: {
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt"
                }
            }
        }
    });

}(this));