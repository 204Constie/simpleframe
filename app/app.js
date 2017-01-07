var g = G$('John', 'Doe');

console.log(g);

g.greet().setLang('es').greet(true).log();

var j = $('#greeting');
G$('Jane', 'Doe').HTMLGreeting(j, true);