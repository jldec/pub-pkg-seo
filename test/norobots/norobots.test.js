/*eslint no-console: "off"*/

var test = require('tape');

test('noRobots', function(t) {

  var opts = require('pub-resolve-opts')(__dirname);

  var generator = require('pub-generator')(opts);

  var actual;

  // intercept output writer to grab files instead of sending them to disk
  var osrc = opts.outputs[0].src;
  osrc.put = function(files, cb) {
    actual = files;
    console.log(files);
    cb && cb();
  };

  var expected =
  [ { path: '/index.html',
    text:
     '<div data-render-html="/"><h1 id="hello-world">hello world</h1>\n</div>' },
  { path: '/page1.html',
    text:
     '<div data-render-html="/page1"><h1 id="page-1">page 1</h1>\n</div>' },
  { path: '/robots.txt', text: 'user-agent: *\ndisallow: /\n' },
  { path: '/sitemap.xml',
    text:
     '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n<url><loc>https://example.com/</loc></url>\n<url><loc>https://example.com/page1</loc></url>\n</urlset>\n' } ];

  generator.load(function(err) {
    t.error(err);
    generator.outputPages(function(err) {
      t.error(err);
      t.deepEqual(actual, expected);
      generator.unload();
      t.end();
    });
  });
});
