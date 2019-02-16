var FxpFootableStriped = (function (exports, $) {
  'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /*
   * This file is part of the Fxp package.
   *
   * (c) François Pluchino <francois.pluchino@gmail.com>
   *
   * For the full copyright and license information, please view the LICENSE
   * file that was distributed with this source code.
   */
  /**
   * Stripping table.
   *
   * @param {Event} event
   */

  function stripingTable(event) {
    var ft = event.ft,
        rowIndex = 0;
    $(ft.table).find('> tbody > tr:not(.footable-row-detail)').each(function () {
      var $row = $(this); // clean off old classes

      $row.removeClass(ft.options.classes.striping.even).removeClass(ft.options.classes.striping.odd);

      if (rowIndex % 2 === 0) {
        $row.addClass(ft.options.classes.striping.even);
      } else {
        $row.addClass(ft.options.classes.striping.odd);
      }

      rowIndex += 1;
    });
  }

  /**
   * Footable Striped class.
   */

  var FootableStriped =
  /*#__PURE__*/
  function () {
    /**
     * Constructor.
     */
    function FootableStriped() {
      _classCallCheck(this, FootableStriped);

      this.name = "Fxp Footable Striped";
    }
    /**
     *
     * @param {footable} ft
     */


    _createClass(FootableStriped, [{
      key: "init",
      value: function init(ft) {
        if (!ft.options.striped.enabled) {
          return;
        }

        var eventType = 'footable_initialized.striped footable_row_removed.striped footable_redrawn.striped footable_sorted.striped footable_filtered.striped';
        $(ft.table).on(eventType, stripingTable);
      }
    }]);

    return FootableStriped;
  }();
  window.footable.plugins.register(FootableStriped, {
    striped: {
      enabled: true
    },
    classes: {
      striping: {
        odd: 'footable-odd',
        even: 'footable-even'
      }
    }
  });

  exports.default = FootableStriped;

  return exports;

}({}, jQuery));
