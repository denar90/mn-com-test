module.exports = {
  'default': [],

  'dev': [
    'clean:dist',
    'connect',
    'notify:watch',
    'watch'
  ],

  'lint': [
    'lintspaces',
    'jshint',
    'jscs'
  ],

  'lint-core': [
    'lintspaces:core',
    'jshint:core',
    'jscs:core'
  ],

  'lint-grunt': [
    'lintspaces:grunt',
    'jshint:grunt',
    'jscs:core'
  ],

  'lint-data': [
    'lintspaces:data'
  ],

  'compile-site': [
    'svgstore',
    'sass:dist',
    'concat',
    'uglify',
    'copy',
    'imagemin',
    'compile-templates',
    'postcss:dist',
    'critical'
  ],

  'compile-templates': [
    'gitty:releaseTag',
    'jade'
  ],

  'compile-docs': [
    'gitty:releaseTag',
    'compileDocs',
    'sass:dist',
    'gitty:checkoutTag'
  ],

  'compile-api': [
    'compileApi',
    'sass:dist'
  ],

  'compile-annotated-src': [
    'gitty:releaseTag',
    'compileAnnotatedSrc',
    'gitty:checkoutTag'
  ],

  'compile-downloads': [
    'compileDownloads'
  ],

  'compile-all': [
    'compile-site',
    'compile-docs',
    'compile-annotated-src',
    'compile-downloads'
  ]
}
