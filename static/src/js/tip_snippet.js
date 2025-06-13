/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";
import { rpc } from "@web/core/network/rpc";
import { renderToElement } from "@web/core/utils/render";

publicWidget.registry.tipSnippetDynamic = publicWidget.Widget.extend({
    selector: '.tip-snippet-dynamic',

    willStart: async function () {
        const result = await rpc('/get_latest_tip', {});
        if (result && result.tip && result.tip.name) {
            this.tip = result.tip;
        }
    },

    start: function () {
        if (this.tip) {
            const html = renderToElement('tip_of_the_day_snippet.tip_dynamic_template', {
                tip: this.tip,
            });
            this.$el.empty().append(html);
        } else {
            this.$el.html("<p>No tips available today.</p>");
        }
        return this._super(...arguments);
    },

    onBuilt: function () {
        this.start();
    },
});

// ✅ Add this export function at the end:
export async function renderTipSnippet($target) {
    const result = await rpc('/get_latest_tip', {});
    if (result && result.tip) {
        const html = renderToElement('tip_of_the_day_snippet.tip_dynamic_template', {
            tip: result.tip,
        });
        $target.empty().append(html);
    } else {
        $target.html("<p>No tips available today.</p>");
    }
}
