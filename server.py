from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from pyramid.view import view_config
from pyramid.renderers import render_to_response


@view_config(
    route_name='index',
    renderer='templates/index.jinja2'
)
def render_index(request):
    return {'name': 'index'}


@view_config(
    route_name='about',
    renderer='templates/index.jinja2'
)
def render_about(request):
    return {'name': 'about'}


if __name__ == '__main__':
    with Configurator() as config:
        config.include('pyramid_jinja2')
        config.add_route('index', '/')
        config.add_route('about', '/about')
        config.add_static_view('dist', './assets/dist/')
        config.scan()
        app = config.make_wsgi_app()
    server = make_server('0.0.0.0', 5000, app)
    print("Server started at localhost:5000")
    server.serve_forever()
