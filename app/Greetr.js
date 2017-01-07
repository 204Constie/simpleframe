(function(global, $){

	'use strict';

	// returns an object created with a constructor function
	var Greetr = function(firstname, lastname, language){
		return new Greetr.init(firstname, lastname, language);
	};

	// variables hidden withing a closure of Greetr.js
	var supportedLangs = ['en', 'es'];

	// default greetings accessible via language name code
	var greetings = {
		en: 'Hi',
		es: 'Hola'
	};

	// formal greetings accessible via language name code
	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};

	// informs that a message was logged
	var logMessages = {
		en: 'Logged in',
		es: 'Inicio sesion'
	};

	// methods added to the prototype of main Greetr function
	Greetr.prototype = {
		// logs first and lkast name
		fullName: function(){
			return this.firstname + ' ' + this.lastname;
		},
		// checks if a language is available
		validate: function(){
			if(supportedLangs.indexOf(this.language) === -1){
				throw 'invalid language';
			}
		},
		// returns a message with default greeting
		greeting: function(){
			return greetings[this.language] + ' ' + this.firstname;
		},
		// returns a message with formal greeting
		formalGreeting: function(){
			return formalGreetings[this.language] + ' ' + this.fullName();
		},
		// logs either greeting or formalGreeing to the console
		greet: function(formal){
			var msg;

			if(formal){
				msg = this.formalGreeting();
			} else {
				msg = this.greeting();
			}

			if(console){
				console.log(msg);
			}

			return this;
		},
		// logs to console information about logging
		log: function(){
			if(console){
				console.log(logMessages[this.language] + ': ' + this.fullName());
			}

			return this;
		},
		// allows to set the language to be used and checks if it's available
		setLang: function(lang){
			this.language = lang;

			this.validate();

			return this;
		},
		// does the same as greet but rather than logging it to the console adds text to am HTML element
		HTMLGreeting: function(selector, formal){
			if(!$){
				throw 'jQuery not loaded';
			} 
			if(!selector){
				throw 'missing jQuery selector';
			}

			var msg;
			if(formal){
				msg = this.formalGreeting();
			} else {
				msg = this.greeting();
			}

			$(selector).html(msg);

			return this;
		}
	};

	// constructor function that is return from the main function
	Greetr.init = function(firstname, lastname, language){
		var self = this;
		self.firstname = firstname || '';
		self.lastname = lastname || '';
		self.language = language || 'en';
	};

	// the methods added to the main Greetr function are here added to each object created
	Greetr.init.prototype = Greetr.prototype;

	// the function Greetr is exposed here to the global object; an alias G$ is created for less typing
	global.Greetr = global.G$ = Greetr;

})(window, jQuery);