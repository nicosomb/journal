AUTHOR = 'Nicolas Lœuillet'
SITENAME = 'Nicolas Lœuillet'
SITEURL = ''

PATH = 'content'
ROOT_POSTS = 'billets'

TIMEZONE = 'Europe/Paris'
DEFAULT_DATE_FORMAT = '%a %d %B %Y'
DEFAULT_DATE = 'fs'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/{slug}.atom.xml'
TRANSLATION_FEED_ATOM = ''
AUTHOR_FEED_ATOM = ''
AUTHOR_FEED_RSS = ''

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

THEME = 'themes/Papyrus'
DEFAULT_PAGINATION = 10000

PLUGIN_PATHS = ['plugins']
PLUGINS = ['pelican.plugins.search', 'pelican.plugins.readtime', 'pelican.plugins.toc', 'neighbors', 'sitemap', 'pelican.plugins.webassets']

ARTICLE_URL = ROOT_POSTS + '/{date:%Y}/{date:%m}/{date:%d}/{slug}/'
ARTICLE_SAVE_AS = ROOT_POSTS + '/{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'
YEAR_ARCHIVE_SAVE_AS = ROOT_POSTS + '/{date:%Y}/index.html'
MONTH_ARCHIVE_SAVE_AS = ROOT_POSTS + '/{date:%Y}/{date:%m}/index.html'
AUTHORS_SAVE_AS = ''
AUTHOR_SAVE_AS = ''
CATEGORY_SAVE_AS = ''
TAG_SAVE_AS = ''
TAGS_SAVE_AS = ''
CATEGORIES_SAVE_AS = ''

STATIC_PATHS = [
    'static',
]

SITEMAP = {
    'format': 'xml',
}

TYPOGRIFY = True

DIRECT_TEMPLATES = ['index', 'archives']
