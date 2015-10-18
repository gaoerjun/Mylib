module.exports = exports = {
  options: {
    separator: ';',
    banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
  },
  dist: {
    src: ['src/**/*.js'],
    dest: 'm/js/<%= pkg.name %>.js'
  }
};