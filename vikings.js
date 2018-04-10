var Viking = function(name, health, strength){
	this.name = name;
	this.health = Math.floor(Math.random() * (80-50)) + 50;
	this.strength = Math.floor((Math.random() * (20-10)) + 10);
	this.attack = function(){
	return this.strength;
	};
	this.receiveDamage = function(damage){
	this.health -= damage;
		if(this.health < 1){
			return this.name + 'No puedes seguir luchando';
		}
		return this.name + ' ha recibido ' + damage + ' puntos de daño.';
	}
	this.warcry = "WAAAAAAAAAAAAAAAAAAAAAAA!!"
}


var viking1 = new Viking("rolo");
var viking2 = new Viking("laguerza");

var turn = 1;

console.log(viking1.name + ' tiene de salud' + viking1.health + ' y de fuerza ' + viking1.strength);
console.log(viking2.name + ' tiene de salud' + viking2.health + ' y de fuerza ' + viking2.strength);

var Pit = function(viking1, viking2){
	this.viking1 = viking1;
	this.viking2 = viking2;
	this.fight = function(){
		console.log('\n ----------------------- \n La práctica de guerra comienza\n ----------------------- \n')
		while(viking2.health > viking1.strength && viking1.health > viking2.strength && turn<4){
			viking2.health = viking2.health - viking1.strength;
			viking1.health = viking1.health - viking2.strength;
			console.log('\n --- Ronda nº ' + (turn++) + '--- \n')
			console.log('El vikingo ' + viking1.name + ' ha recibido ' + viking2.strength + ' puntos de daño, y su salud ahora es ' + viking1.health);
			console.log('El vikingo ' + viking2.name + ' ha recibido ' + viking1.strength + ' puntos de daño, y su salud ahora es ' + viking2.health);
		};
		console.log('\n ----------------------- \n La práctica de guerra ha terminado \n ----------------------- \n');

		if(viking2.health < viking1.health){
			console.log(viking2.name + ' ha perdido');
			console.log(viking1.name + ' es el ganador');
		} else if (viking1.health < viking2.health){
			console.log(viking1.name + ' ha perdido');
			console.log(viking2.name + ' es el ganador');
		}
	}
}

var practice = new Pit(viking1, viking2);
practice.fight();


var vikings = [];
createViking(30);
//Seleccionar vikings random
var maxIndexVikings = vikings.length - 1;
var randomIndexVikings = Math.floor(Math.random() * (maxIndexVikings + 1));

function createViking(num){
	for(i=0; i < num; i++){
		vikings[i] = new Viking('viking ' + i);
			// console.log(vikings);
	}
}

var Saxon = function(health, strength){
	this.health = Math.floor(Math.random() * (50-30)) + 30;
	this.strength = Math.floor((Math.random() * (15-10)) + 10);
}

var saxons = [];
createSaxon(50);
//Seleccionar saxons random
var maxIndexSaxons = saxons.length - 1;
var randomIndexSaxons = Math.floor(Math.random() * (maxIndexSaxons + 1));


function createSaxon(num){
	for(i=0; i < num; i++){
		saxons[i] = new Saxon;
			// console.log(saxons);
	}
}

console.log('\n ----------------------- \n COMIENZA LA BATALLA: Vikings VS Saxons \n ----------------------- \n');
console.log('Los vikingos entran a la city: \n' + vikings[0].warcry);


var battle = new Pit(vikings,saxons);

// battle.viking = vikings[randomIndexVikings];
// battle.saxon = saxons[randomIndexSaxons];

console.log('\n ----------------------- \n Los primeros oponentes son: \n ----------------------- \n');
console.log(vikings[randomIndexVikings].name + ' -- VS -- ' + 'Saxons ' + randomIndexSaxons);

// battle.fight