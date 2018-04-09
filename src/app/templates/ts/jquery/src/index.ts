/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

<%- imports %>

// The initialize function must be run each time a new page is loaded
Office.initialize = (reason) => {
  $(document).ready(() => {
    $('#run').click(run);
  });
};

async function run() {
  <%- snippet %>
}
