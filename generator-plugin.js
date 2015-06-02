module.exports = function(generator) {
  var u = generator.util;
  var opts = generator.opts;
  var log = opts.log;
  var hb = generator.handlebars;

  if (/\/\/localhost/.test(opts.appUrl)) {
    log('WARNING: pub-pkg-seo sitemap using appUrl %s', opts.appUrl);
  }

  hb.registerHelper('metaSeo', function(frame) {
    if (opts.noRobots) {
      return '<meta name="robots" content="noindex, nofollow">';
    }
  });

}
