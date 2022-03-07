import sys
import os

PLUGINS_DIR = os.path.dirname(__file__)
sys.path.append(os.path.join(PLUGINS_DIR, 'webmention_static_kappa', 'webmention_static_kappa'))

from webmention_static_kappa import register
