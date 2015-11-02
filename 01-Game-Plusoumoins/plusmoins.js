var random,
	choix,
	recommencer,
	prompt = require('prompt');

prompt.start();

function generateNumber(){
	random = Math.floor(Math.random() * 300) + 1;
}

function verify(choix, random){
	if(choix < random){
		console.log(choix + ' est inférieur au nombre à trouver');
		choisir();
	}
	else if(choix > random){
		console.log(choix + ' est supérieur au nombre à trouver');
		choisir();
	}
	else if(choix == random){
		console.log('Champion, Champion ! Tu as trouvé le nombre que je voulais cacher.');
		console.log('Tu veux rejouer ? y pour oui, n pour non : ');
		prompt.get(['recommencer'], function (err, result) {
			recommencer = result.recommencer;
			if(recommencer == 'y'){
				console.log('');
				plusoumoins();
			}else{
				process.exit();
			}
		});
	}
}

function choisir(){

	console.log('Merci de choisir un nombre entre 0 et 300: ');
	prompt.get(['choix'], function (err, result) {
		choix = parseInt(result.choix);	
		verify(choix, random);
	});
}



function plusoumoins(){
	console.log('');
	console.log('Jeu du plus ou moins');
	console.log('******** - *********');
	console.log('Devinez le nombre que nous avons choisi aléatoirement entre 0 et 300');
	console.log('******** - *********');
	console.log('Choix en cours...');

	generateNumber();
	choisir();
}

plusoumoins();