    module.exports = function( grunt ) {
        grunt.initConfig({
            uglify : {
                options : {
                    mangle : false
                },
                my_target : {
                    files : {
                        'visao/default/js/main.js':[
                                                        'visao/default/assets/_js/jquery_1_9_1.js',
                                                        'visao/default/assets/_js/functions.js',
                                                        'visao/default/assets/_js/gallery.js'
                                                    ]
                    }
                }
            }, // uglify


            cssmin: {
                combine: {
                    files: {
                            'visao/default/css/main.css':[
                                                            'visao/default/assets/_css/pattern.css',
                                                            'visao/default/assets/_css/gallery.css'
                                                        ]
                    }
                }
            }, // cssmin


            htmlmin: {
                dist: {
                    options: {
                        removeComments: true,
                        collapseWhitespace: true
                    },
                    files: {
                        'visao/default/index.html': 'visao/default/assets/_html/index.html',
                        'visao/default/controle.html': 'visao/default/assets/_html/controle.html'
                    }
                }
            }, // htmlmin

            watch : {
                dist : {
                    files : [
                        'visao/default/assets/_js/**/*',
                        'visao/default/assets/_css/**/*',
                        'visao/default/assets/_html/**/*'
                    ],
                    tasks : [ 'uglify', 'htmlmin', 'cssmin']
                }
            }// watch
        });

 
        // Plugins do Grunt
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-htmlmin');
        grunt.loadNpmTasks('grunt-contrib-watch');




        // Tarefas que serão executadas
        grunt.registerTask( 'default', [ 'uglify', 'cssmin', 'htmlmin' ] );



        // Tarefa para Watch
        grunt.registerTask( 'w', [ 'watch' ] );
    };
