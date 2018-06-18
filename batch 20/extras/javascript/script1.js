		console.log(a); //Hoisting
		console.log(b);
		callMe();


		var a = 2;
		var b = 3
		console.log(a);
		console.log(b);
		//console.log(c);//

		if(true){
			var d = 34;
		}
		console.log(d);

		function callMe(){
			 c = a + b; //
			console.log(a);//
			console.log(b); //
			console.log(c); 

		}
		console.log(a);
		console.log(b);
		//console.log(c);//

		callMe();

		console.log(a);
		console.log(b);
		console.log(c);//

