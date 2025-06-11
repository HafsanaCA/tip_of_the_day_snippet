# -*- coding: utf-8 -*-
{
    'name': 'Tip of the Day Snippet',
    'version': '1.0',
    'category': 'Website',
    'summary': 'A dynamic website snippet to show Tip of the Day',
    'depends': ['base','website'],
    'data': [
        'views/tip_snippet_views.xml',
        'security/ir.model.access.csv',
    ],
    # 'assets': {
    #     'web.assets_frontend': [
    #         'tip_of_the_day_snippet/static/src/js/tip_snippet.js',
    #         'tip_of_the_day_snippet/static/src/scss/tip_snippet.scss',
    #     ],
    # },
    'installable': True,
    'application': False,
}
