var glob = require('glob'),
    path = require('path'),
    join = path.join;

module.exports = function (grunt) {
    var banner = (function() {/*
     ___     __            _          ___  _         _
     / __\ /\ \ \ ___    __| |  ___   / __\| | _   _ | |__
     / /   /  \/ // _ \  / _` | / _ \ / /   | || | | || '_ \
     / /___/ /\  /| (_) || (_| ||  __// /___ | || |_| || |_) |
     \____/\_\ \/  \___/  \__,_| \___|\____/ |_| \__,_||_.__/
     */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];


    var config = {
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!' + banner + '\n' +
        '* <%= pkg.name %> - v<%= pkg.version %> -\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> */\n'
    };
    // 根据 /src/views/config.json的配置不同模块的版本号 自动生成 替换的配置文件 replace.js
    var filePath = "./tasks/options/replace.js";
    var configJson = grunt.file.readJSON('./src/views/config.json');
    grunt.file.defaultEncoding = 'utf8';
    var arrTemp = ["module.exports = exports = {"];
    var lessTemp = ["module.exports = exports = {"];
    var replaceTaskArry = [];
    var lessTaskArry = [];
    console.log(configJson);
    for(var item in configJson){
        arrTemp.push(item+":{overwrite: true,src:['m/"+item+"/*.html','m/templates/"+item+"/*.js','m/templates/"+item+"/**/*.js','m/js/"+item+"/*.js','m/js/"+item+"/**/*.js'],replacements: [{from:'___versionStr__', to:'"+configJson[item].version+"'}]},");
        lessTemp.push(item+": {\
        options: {\
            cleancss: true,\
            ieCompat:true\
        },\
        files: [{\
            expand: true,\
            cwd: 'src/less/"+configJson[item].lessfolder+"',\
            src: ['*.less','**/*.less'],\
            dest: 'm/css/"+configJson[item].lessfolder+"',\
            ext: '_"+configJson[item].version+".css'\
        }]\
    },");
        replaceTaskArry.push("replace:"+item);
        lessTaskArry.push("less:"+item)
    }
    arrTemp.push("seajs:{overwrite: true,src:['m/js/*.js'],replacements: [{from:'___versionStr__', to:'"+config.pkg.version+"'}]}");
    replaceTaskArry.push("replace:seajs");
    //去掉最后一个，
    arrTemp.push("}");
    lessTemp.push("}");
    grunt.file.write(filePath, arrTemp.join(""));
    grunt.file.write("./tasks/options/less.js", lessTemp.join(""));
    var tasklist = [
        "clean:build",
        'tmod',
        'copy',
        'copy:htmlcopy',
    ];
    if(config.pkg.debug){
        tasklist.push("copy:jscopy");
    }else{
        tasklist.push('uglify:buildall');
    }
    tasklist= tasklist.concat(replaceTaskArry);
    tasklist= tasklist.concat(lessTaskArry);
    tasklist= tasklist.concat([
        'imagemin:dynamic',
        'connect']);
    if (config.pkg.debug) {
        tasklist= tasklist.concat(['watch:debug'])
    }else{
        tasklist= tasklist.concat(['watch:app'])
    }

    //自动生成 watch的配置文件
    var watchTemp = ["module.exports = exports = {"]
    watchTemp.push("app:{files: [\
        'src/js/**/*.js',\
        'src/less/*.less',\
        'src/less/**/*.less',\
        'src/jade/**',\
        'src/sea-modules/**',\
        'src/**/*.html',\
        'src/templates/**/*.html',\
        'src/views/**/*.html',\
        'src/views/config.json',\
        'package.json',\
    ], tasks: ['"+tasklist.join("','")+"']},");
    watchTemp.push("debug:{files: [\
        'src/js/**/*.js',\
        'src/less/*.less',\
        'src/less/**/*.less',\
        'src/jade/**',\
        'src/sea-modules/**',\
        'src/**/*.html',\
        'src/templates/**/*.html',\
        'src/views/**/*.html',\
        'src/views/config.json',\
        'tasks/options/*.js',\
        'package.json',\
    ], tasks: ['"+tasklist.join("','")+"']}");
    watchTemp.push("}");
    //
    grunt.file.write("./tasks/options/watch.js", watchTemp.join(""));
    grunt.util._.extend(config, loadConfig('./tasks/options/'));
    grunt.initConfig(config);

    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);
    // load all grunt custom tasks
    grunt.loadTasks('tasks');
    console.log(tasklist);
    grunt.registerTask('default',tasklist);
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-tmodjs');

};

function loadConfig(configPath) {
    var config = {};
    glob.sync('*', {cwd: configPath})
        .forEach(function (configFile) {
            var prop = configFile.replace(/\.js$/, '');
            config[prop] = require(join(__dirname, configPath, configFile));
        });

    return config;
}