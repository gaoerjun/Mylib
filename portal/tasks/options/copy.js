module.exports = exports = {
  main: {
    expand:true,
    cwd: 'src',
    src: ["sea-modules/**","images/**"],
    dest: 'm/'
  },
  htmlcopy:{
    expand:true,
    cwd: 'src/views/',
    src: ["**"],
    dest: 'm/'
  },
  jscopy:{
    expand:true,
    cwd: 'src/js/',
    src: ["**"],
    dest: 'm/js'
  }
};