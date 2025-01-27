AUTHOR = 'Nicolas Lœuillet'
SITENAME = 'Nicolas Lœuillet'
SITEURL = 'http://127.0.0.1:8000'

PATH = 'content'
ROOT_POSTS = 'billets'

TIMEZONE = 'Europe/Paris'
DEFAULT_DATE_FORMAT = '%a %d %B %Y'
DEFAULT_DATE = 'fs'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = ''
TRANSLATION_FEED_ATOM = ''
AUTHOR_FEED_ATOM = ''
AUTHOR_FEED_RSS = ''

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

THEME = 'themes/quaternum'

SUBTITLE = 'Dev web, père et maire'
SUBTEXT = '''<p>Bienvenue sur mon journal personnel, où il arrive parfois que je
publie des <a href="archives.html">choses intéressantes</a>. Ou pas.</p>
<p>Si vous voulez en savoir un peu plus sur moi, <a href="/pages/a-propos.html">j'ai listé ici</a> les sujets qui me passionnent.</p>
<p>N'hésitez pas à <a href="mailto:nicolas@loeuillet.org">m'envoyer un petit mail</a> si vous souhaitez que l'on discute.</p>
'''

PLUGIN_PATHS = ['plugins']
PLUGINS = ['sitemap', 'pelican.plugins.webassets']

DISPLAY_PAGES_ON_MENU = True
DIRECT_TEMPLATES = (('index', 'tags', 'categories', 'archives',))
DEFAULT_PAGINATION = False

ARTICLE_URL = ROOT_POSTS + '/{date:%Y}/{date:%m}/{date:%d}/{slug}/'
ARTICLE_SAVE_AS = ROOT_POSTS + '/{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'
YEAR_ARCHIVE_SAVE_AS = ''
MONTH_ARCHIVE_SAVE_AS = ''
AUTHORS_SAVE_AS = ''
AUTHOR_SAVE_AS = ''
TAG_SAVE_AS = ''

# Social widgets
SOCIAL = (
    ('mastodon', 'https://piaille.fr/@nicosomb'),
    ('photos', 'https://instantanes.loeuillet.org'),
    ('github', 'https://github.com/nicosomb'),
)

STATIC_PATHS = [
    'static',
]

SITEMAP = {
    'format': 'xml',
}

#TYPOGRIFY = True
