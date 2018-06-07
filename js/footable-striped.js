/*
 * This file is part of the Fxp package.
 *
 * (c) François Pluchino <francois.pluchino@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {stripingTable} from "./utils/events";
import $ from "jquery";
import 'footable/js/footable';

/**
 * Footable Striped class.
 */
export default class FootableStriped
{
    /**
     * Constructor.
     */
    constructor() {
        this.name = "Fxp Footable Striped";
    }

    /**
     *
     * @param {footable} ft
     */
    init(ft) {
        if (!ft.options.striped.enabled) {
            return;
        }

        let eventType = 'footable_initialized.striped footable_row_removed.striped footable_redrawn.striped footable_sorted.striped footable_filtered.striped';

        $(ft.table).on(eventType, stripingTable);
    }
}

window.footable.plugins.register(FootableStriped, {
    striped: {
        enabled: true
    },
    classes: {
        striping: {
            odd:  'footable-odd',
            even: 'footable-even'
        }
    }
});
