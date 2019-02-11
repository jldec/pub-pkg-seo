/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "u", "argsIgnorePattern": "frame", }]*/

module.exports = function(generator) {
  var u = generator.util;
  var opts = generator.opts;
  var log = opts.log;
  var hb = generator.handlebars;

  if (!opts.appUrl || /\/\/localhost/.test(opts.appUrl)) {
    log('WARNING: pub-pkg-seo sitemap using appUrl "%s"', opts.appUrl);
  }

  hb.registerHelper('metaSeo', function(frame) {
    if (opts.noRobots) {
      return '<meta name="robots" content="noindex, nofollow">';
    }
  });

};
