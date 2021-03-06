from django.conf.urls import patterns, include, url

from gllaunch.views import *
from gldata.views import *

from django.conf import settings
from django.conf.urls.static import static


# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^gllaunch/echo_test/', echo_LTI_vars),
    url(r'^gllaunch/toolLaunch/', tool_launch),
    url(r'^econlaunch/echo_test/', echo_LTI_vars),
    url(r'^econlaunch/toolLaunch/', econ_tool_launch),
    
    # Examples:
    url(r'^$', 'glservice.views.home', name='home'),
    url(r'^mulli$', 'glservice.views.mulli_home', name='mulli_home'),
    
    url(r'^gldata/', include('gldata.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
)

urlpatterns = urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)