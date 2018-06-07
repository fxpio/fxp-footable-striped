/*
 * This file is part of the Fxp package.
 *
 * (c) François Pluchino <francois.pluchino@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import $ from 'jquery';

/**
 * Stripping table.
 *
 * @param {Event} event
 */
export function stripingTable(event) {
    let ft = event.ft,
        rowIndex = 0;

    $(ft.table).find('> tbody > tr:not(.footable-row-detail)').each(function () {
        let $row = $(this);

        // clean off old classes
        $row
            .removeClass(ft.options.classes.striping.even)
            .removeClass(ft.options.classes.striping.odd);

        if (rowIndex % 2 === 0) {
            $row.addClass(ft.options.classes.striping.even);

        } else {
            $row.addClass(ft.options.classes.striping.odd);
        }

        rowIndex += 1;
    });
}
