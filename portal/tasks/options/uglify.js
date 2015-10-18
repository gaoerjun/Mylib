var banner = "";
module.exports = exports = {
  options: {
    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
  },
  buildmain: {//任务一：压缩a.js，不混淆变量名，保留注释，添加banner和footer
    options: {
      mangle: false, //不混淆变量名
      preserveComments: 'all', //不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
      footer:'\n/*! <%= pkg.name %> 最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'//添加footer
    },
    files: {
      'output/js/a.min.js': ['js/main.js']
    }
  },
  buildall: {//任务三：按原文件结构压缩js文件夹内所有JS文件
    options: {
      banner: '/*!' + banner + '\n' +
      '* <%= pkg.name %> - v<%= pkg.version %> -\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright © 2008-2014 鹏博士电信传媒集团 */\n',
      mangle: {except: ['require','exports','module','$']}
    },
    files: [{
      expand:true,
      cwd:"src/js", //源文件路径
      src:['*.js', '**/*.js', '!**/*-min.js'],   //所有js文件
      dest:'m/js'//输出到此目录下
    }]
  },
  release: {//任务四：合并压缩a.js和b.js
    files: {
      'output/js/index.min.js': ['js/main.js', 'js/main/b.js']
    }
  }
};