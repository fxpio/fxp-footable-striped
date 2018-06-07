/*
 * This file is part of the Fxp package.
 *
 * (c) François Pluchino <francois.pluchino@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import 'bootstrap/dist/css/bootstrap.css';
import 'footable/css/footable.core.css';
import '../less/footable-striped.less';
import '../js/footable-striped';

$( '#table-id' ).footable({striped: {enabled: true}});
