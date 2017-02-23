/*
|-------------------------------------------------
|  JavaScript Online Chef App - Rubi Jihantoro
|-------------------------------------------------
|
|  Published Under MIT
|  Interested with my skill & creativity ? 
|  contact jihantoro8@gmail.com
|
*/

// PROTOTYPE !!!!

/* Basic javascript function */

/* Randomizing Some Data */
function mathRand (i) { /*
		Get Random number below something
  */if(i == 0)
		return Math.floor(Math.random() * $('.client-store > div').length);
	else if(i == 1)
		return Math.floor(Math.random() * $('.order-store > div').length);
}

function nowM() { /*
		get minutes
	*/  return new Date().getMinutes();
}

t=setTimeout(function(){
	nowM();
	mathRand();
},500);

/* Get Client And They Order */
function getClient () {
	if(!$('.whatorder').html() || $('.whatorder').html() == '')
	{
		var i = mathRand(0);
		$('.whoclient').attr('client-id', i);
		$('.whoclient').attr('client-name', $('.client-store > div[id="'+i+'"]').attr('name'));

	}
}

function foodParser (i) {
	var m = $('.resep-store > div').length;
	for (var i = m - 1; i >= 0; i--) {
		m[i]
	};
}