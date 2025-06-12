# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request

class TipSnippetController(http.Controller):
    @http.route('/get_latest_tip', type='json', auth='public', website=True, csrf=False)
    def get_latest_tip(self):
        tip = request.env['tip.snippet'].sudo().search([], order='date desc', limit=1)
        if tip:
            return {
                'tip': {
                    'name': tip.name,
                    'tip_text': tip.tip_text,
                    'description': tip.description,
                    'category': tip.category,
                    'date': str(tip.date),
                    'background_image': f"data:image/png;base64,{tip.background_image.decode()}" if tip.background_image else '',
                }
            }
        return {'tip': {}}

