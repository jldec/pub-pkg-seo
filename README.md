# pub-pkg-seo
![CI](https://github.com/jldec/pub-pkg-seo/workflows/CI/badge.svg)

This [pub-server](https://github.com/jldec/pub-server) package
provides a convenient way to generate sitemap.xml and robots.txt.

### installation

- `npm install --save pub-pkg-seo`
-  add `pub-pkg-seo` to your pub-config `pkgs`

### usage

The generated **/robots.txt** file will allow all pages unless `noRobots:true` is set in pub-config.

Layout templates should embed {{{metaSeo}}} in the HTML header.
This will also inject a `<meta name="robots" content="noindex, nofollow">` unless `noRobots:true`

The generated **/sitemap.xml** will include fully qualified links to all generated pages
except those with metadata values `nocrawl:true` or `nopublish:true`.

sitemap links will be qualified with the opts.appUrl prefix (also settable via the APP environment variable.)
