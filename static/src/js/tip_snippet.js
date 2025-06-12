/** @odoo-module */
import { rpc } from "@web/core/network/rpc";
import publicWidget from "@web/legacy/js/public/public_widget";
import { renderToElement } from "@web/core/utils/render";

publicWidget.registry.tipSnippetDynamic = publicWidget.Widget.extend({
    selector: '.tip-snippet-dynamic',
    async willStart() {
        const result = await rpc('/get_latest_tip', {});
        if (result && result.tip) {
            const html = renderToElement('tip_of_the_day_snippet.tip_dynamic_template', {
                tip: result.tip,
            });
            this.$el.empty().append(html);
        }
    },
});
