# -*- coding: utf-8 -*-
from odoo import models, fields

class TipOfTheDay(models.Model):
    _name = 'tip.snippet'
    _description = 'Tip of the Day'

    name = fields.Char(string="Title", required=True)
    tip_text = fields.Char(string="Tip", required=True)
    description = fields.Text(string="Short Description")
    category = fields.Selection([
        ('motivation', 'Motivational'),
        ('life', 'Life'),
        ('work', 'Work'),
        ('wellness', 'Wellness'),
        ('creativity', 'Creativity'),
        ('focus', 'Focus')
    ], string="Category", required=True)
    date = fields.Date(string="Date", default=fields.Date.today)
    background_image = fields.Binary(string="Background Image")
