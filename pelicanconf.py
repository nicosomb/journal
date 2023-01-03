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
CATEGORY_FEED_ATOM = 'feeds/{slug}.atom.xml'
TRANSLATION_FEED_ATOM = ''
AUTHOR_FEED_ATOM = ''
AUTHOR_FEED_RSS = ''

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

THEME = 'themes/Papyrus'

SUBTITLE = 'Dev web, père et maire'
SUBTEXT = '''Bienvenue sur mon journal personnel, où il arrive parfois que je publie des choses intéressantes. Ou pas.'''

PLUGIN_PATHS = ['plugins']
PLUGINS = ['search', 'readtime', 'pelican-toc', 'neighbors', 'sitemap', 'pelican.plugins.webassets']

DISPLAY_PAGES_ON_MENU = True
DIRECT_TEMPLATES = (('index', 'search', 'tags', 'categories', 'archives',))
PAGINATED_TEMPLATES = {'index':None,'tag':None,'category':None,'archives':None,}

SEARCH_MODE = "output"
SEARCH_HTML_SELECTOR = "main"
# Table of Content Plugin
TOC = {
    'TOC_HEADERS'       : '^h[1-3]', # What headers should be included in
                                     # the generated toc
                                     # Expected format is a regular expression
    'TOC_RUN'           : 'true',    # Default value for toc generation,
                                     # if it does not evaluate
                                     # to 'true' no toc will be generated
    'TOC_INCLUDE_TITLE': 'false',    # If 'true' include title in toc
}

DEFAULT_PAGINATION = 5

ARTICLE_URL = ROOT_POSTS + '/{date:%Y}/{date:%m}/{date:%d}/{slug}/'
ARTICLE_SAVE_AS = ROOT_POSTS + '/{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'
YEAR_ARCHIVE_SAVE_AS = ROOT_POSTS + '/{date:%Y}/index.html'
MONTH_ARCHIVE_SAVE_AS = ROOT_POSTS + '/{date:%Y}/{date:%m}/index.html'
AUTHORS_SAVE_AS = ''
AUTHOR_SAVE_AS = ''

# Social widgets
SOCIAL = (
    ('github', 'https://github.com/nicosomb'),
)

# Article share widgets
SHARE = (
    ("mastodon", "https://twitter.com/intent/tweet/?text=Features&amp;url="),
    ("linkedin", "https://www.linkedin.com/sharing/share-offsite/?url="),
    ("reddit", "https://reddit.com/submit?url="),
)


STATIC_PATHS = [
    'static',
]

SITEMAP = {
    'format': 'xml',
}

TYPOGRIFY = True
