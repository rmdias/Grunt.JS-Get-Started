Grunt.JS    Get-Started
========================

###### O passo a passo de como configurar o Grunt.JS

## Primeiros passos

Pré-requisitos: Você precisa ter instalado? 
 <br>
 <br>
 -> [Git](http://git-scm.com/downloads)
 <br>
 -> [NodeJS](http://nodejs.org/download/)
 <br>

*Caso você não tenha ainda pode instalar!

## Instalando o Grunt

1. É muito fácil, se você já tinha o Grunt instalado, desinstaler pelo Terminal:
  	
		npm uninstall -g grunt


* Se você não tiver permissão para desinstalar, provavelmente vai precisar usar o sudo:
		
		sudo npm uninstall -g grunt


2. Pronto, agora é só instalar o Grunt:

		npm install -g grunt-cli


* Agora você já tem o grunt instalado \o/


## Pronto, mas como eu faço a magia acontecer?

Para o Grunt funcionar, você precisa criar dois arquivos na raiz do seu projeto: <b>package.json</b> e <b>Gruntfile.js</b>. 



### O package.json

O package.json é um arquivo do Node.JS. Nele ficam as informações sobre o projeto e plugins que o Grunt vai usar.

Seu package.json precisa ter essa estrutura:

<pre>
	{
		"name": "nome_do_projeto",
		"version": "1.0.0",
		"title": "Título do Projeto",
		"homepage": "http://www.seuSite.com.br"
	}
</pre>



### O Gruntfile.js

O Gruntfile.js é o arquivo de configuração do Grunt. Nele você diz tudo o que o Grunt deve fazer. 

O seu Gruntfile.js precisa ter essa estrutura:

<pre>
	module.exports = function(grunt){
		grunt.initConfig({
			// Tarefas que o Grunt vai rodar\
		});
	};
</pre>



## Estrutura

Na <b> raiz do projeto </b>, crie os arquivos <b>package.json</b> e <b>Gruntfile.js</b>.

Dentro da pasta <b> visao/defaut </b>, crie um diretório <b> assets </b> (onde ficarão nossos arquivos HTML, CSS e JS).
Dentro de assets crie 3 diretórios: <b>_html, _css e _js</b>.
Nesses diretórios ficarão os nossos arquivos fonte, que irão gerar os minificados.


A estrutura básica do projeto se dá na seguinte forma:

<pre>
.
|-- visao/
|   |-- defaut
|	|	|-- assets
|	|	|	|-- _html
|	|	|	|-- _css
|	|	|	|-- _js
|   |-- css
|   |-- fonts
|   |-- img
|   |-- js
|-- package.json
|-- Gruntfile.js
</pre>


## Usando os Plug-ins do Grunt

* A partir de agora, digite todos os comandos dento da pasta do seu projeto.

### Minificação JS

Vamos configurar o Grunt pra ele minificar nossos arquivos JS e gerar um novo arquivo chamado main.js em <b>visao/defaut/js</b>.


Primeiro vamos instalar o plugin que faz a minificação, que chama-se [grunt-contrib-uglify](https://npmjs.org/package/grunt-contrib-uglify).


Pra instalar o uglify, use a mesma magia que usou pra instalar o grunt:

		npm install grunt-contrib-uglify --save-dev


* Na menida em que você vai instalando os plug-ins ao Grunt eles vão sendo adicionados ao seu arquivo <b>package.json</b>.


Depois de instalar o Uglify vá no seu arquivo <b>Gruntfile.js</b> e o deixe da seguinte maneira:


<pre>
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
			} // uglify
		});


		// Plugins do Grunt
		grunt.loadNpmTasks( 'grunt-contrib-uglify' );


		// Tarefas que serão executadas
		grunt.registerTask( 'default', [ 'uglify' ] );
	};
</pre>


### Minificação CSS

Depois de configurado o <b>uglify</b> não tem segredo, é só fazer o mesmo procedimento com o configurar o <b>[grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)</b>.


Rodamos o comando:

		npm install grunt-contrib-cssmin --save-dev



Depois de instalar o CssMin vá no seu arquivo <b>Gruntfile.js</b> e o deixe da seguinte maneira:


<pre>
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
			} // cssmin


		});


		// Plugins do Grunt
		grunt.loadNpmTasks( 'grunt-contrib-uglify' );
		grunt.loadNpmTasks('grunt-contrib-cssmin');


		// Tarefas que serão executadas
		grunt.registerTask( 'default', [ 'uglify', 'cssmin' ] );
	};
</pre>


### Minificação HTML

Agora já configuramos dois plugins do Grunt e já somos craques no assunto. Então é ir sem medo e correr pra o abraço. <b>[grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin)</b>.


Rodamos o comando:

		npm install grunt-contrib-htmlmin --save-dev



Depois de instalar o Htmlmin vá no seu arquivo <b>Gruntfile.js</b> e o deixe da seguinte maneira:


<pre>
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
		  	} // htmlmin
		});

 
		// Plugins do Grunt
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.loadNpmTasks('grunt-contrib-cssmin');
		grunt.loadNpmTasks('grunt-contrib-htmlmin');



		// Tarefas que serão executadas
		grunt.registerTask( 'default', [ 'uglify', 'cssmin', 'htmlmin' ] );
	};
</pre>



### Monitoramento de Atividades (watch)

Iria ser muito chato toda vez que precisar rodar uma nova versão do projeto ter que digitar: grunt

Então tem esse outro plugin que monitora suas atividades em pastas que você determina e quando você salva o arquivo que está trabalhando ele cria um novo build do projeto!

O nome dessa mão na roda é <b>[grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)</b>.


Rodamos o comando:

		npm install grunt-contrib-watch --save-dev



Já instalou o Watch? Vá no seu arquivo <b>Gruntfile.js</b> e o deixe da seguinte maneira:


<pre>
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
</pre>


Certo, mas eu instalei o watch estou salvando e nada acontece. 

Calma, vamos rodar essa linha de comando pra  ativar o monitoramento de atividades:

		grunt w




* Pra parar o monitoramento é só digitar: Ctrl + C.


#Agora preciso de feedbacks :D
