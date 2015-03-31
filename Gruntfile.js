module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		jshint: {
			options:{
				force: true,
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true,
					$: true,
					console: true
				}
			},
			'<%= pkg.name %>':{
				src: ['*.js']
			}
		},

		jscs: {
			
		},

		concat: {

			dist: {
				src: ['server.js', 'weather.js', 'geotargeting.js'],
				dest: 'build.js'
			},
		},
		
		uglify: {
			options: {
				stripBanners: true,
				banner: '/* <%= pkg.name %> <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},

			build: {
				src: 'build.js',
				dest: 'build.min.js'
			}
		},

		cssmin: {
			with_banner: {
				options: {
					banner: '/* CSS */'
				},

				files: {

				}
			}
		},

		watch: {
			scripts: {
				files: '*.js',
				tasks: ['jshint', 'concat', 'uglify', 'cssmin']
			}
		},

		removelogging: {
			files: {
				'build.min.js':'build.min.js'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-remove-logging');
	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'watch', 'removelogging']);
};