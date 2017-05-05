function Squad(nombre,apellido,edad,hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
		/*this.nombreCompleto=function(){
			return this.nombre + "" + this.apellido;*/
		}

var spuler = new Squad("Valentina","Spuler","21","Comer")
var valentina = new Squad("Valentina","Rodriguez","25","Jugar Videojuegos")
var joselyn = new Squad("Joselyn","Grez","22","Leer")
var martina = new Squad("Martina","Covarrubias","27","Escuchar Musica")
var paulina = new Squad("Paulina","Rojas","35","Bailar")
var perla = new Squad("Perla","Diaz","31","Escuchar Musica")


var comp1 = document.getElementById("compa1");
			compa1.innerHTML = "<strong>Nombre:</strong> " + 
			spuler.nombre + " " + spuler.apellido +
			"<strong><br>Edad:</strong> " + 
			spuler.edad + "<strong><br>Hobbies:</strong> " + 
			spuler.hobbies;

var comp2 = document.getElementById("compa2");
			compa2.innerHTML = "<strong>Nombre:</strong> " + 
			valentina.nombre + " " + valentina.apellido + 
			"<strong><br>Edad:</strong> " + valentina.edad + 
			"<strong><br>Hobbies:</strong> " + valentina.hobbies;

var comp3 = document.getElementById("compa3");
			compa3.innerHTML = "<strong>Nombre:</strong> " + 
			joselyn.nombre + " " + joselyn.apellido + 
			"<strong><br>Edad:</strong> " + joselyn.edad + 
			"<strong><br>Hobbies:</strong> " + joselyn.hobbies;

var comp4 = document.getElementById("compa4");
			compa4.innerHTML = "<strong>Nombre:</strong> " + 
			martina.nombre + " " + martina.apellido + 
			"<strong><br>Edad:</strong> " + martina.edad + 
			"<strong><br>Hobbies:</strong> " + martina.hobbies;

var comp5 = document.getElementById("compa5");
			compa5.innerHTML = "<strong>Nombre:</strong> " + 
			paulina.nombre + " " + paulina.apellido + 
			"<strong><br>Edad:</strong> " + paulina.edad + 
			"<strong><br>Hobbies:</strong> " + paulina.hobbies;

var comp6 = document.getElementById("compa6");
			compa6.innerHTML = "<strong>Nombre:</strong> " + 
			perla.nombre + " " + perla.apellido + 
			"<strong><br>Edad:</strong> " + perla.edad + 
			"<strong><br>Hobbies:</strong> " + perla.hobbies;