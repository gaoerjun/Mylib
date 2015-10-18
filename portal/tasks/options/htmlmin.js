module.exports = exports = {
  dev: {//任务三：按原文件结构压缩js文件夹内所有JS文件
    files: [{
      expand: true,
      cwd: 'src/views/**',
      src: '{,*/}*.html',
      dest: 'm/views'
    }]
  }
};