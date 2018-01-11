
/* POUR METTRE UN BOUTON AAFFICHER LES ELEMENTS CENTRAUX*/

let bouton = document.getElementById('boutonjs');
bouton.onclick = function()
{
	document.getElementById('Bloc-central').style.display='flex';
	document.getElementById('boutonjs').style.display='none';
};



/* POUR FAIRE FONCTIONNER LA BARRE DE RECHERCHE AVEC LE BOUTO RECHERCHE */

document.getElementById('bouton_recherche').onclick=function()
{
let texte = document.getElementById('input').value; 
document.getElementById('bouton_recherche').href = "https://www.google.com/fr#q=" + texte;

 }



/* POUR FAIRE POPUP QUI S'OUVRE DANS &ÀSEC */

setTimeout(function(){ alert("Hey le site BLABLABLA est trop bien. Viens dessus stp please"); }, 10000);






/* POUR FAIRE FONCTIONNER LA BARRE DE RECHERCHE AVEC ENTREE */

/* FORMULE QUI EXPLIQUE UNE FONCTION IF 
sdfqsdf.onkeypress=function(){
	if (condition){
	code }}*/

document.getElementById('bouton_recherche').onkeypress=function()
{
	if (event.keyCode == 13) {
	let texte = document.getElementById('input').value; 
	document.getElementById('bouton_recherche').href = "https://www.google.com/fr#q=" + texte;
	}
}

