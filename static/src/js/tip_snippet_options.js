/** @odoo-module **/

import options from 'web_editor.snippets.options';
import { renderTipSnippet } from './tip_snippet.js';

options.registry.TipSnippetOptions = options.Class.extend({
    onBuilt() {
        console.log("💡 Snippet dropped into editor!");
        renderTipSnippet(this.$target);
    },
});
