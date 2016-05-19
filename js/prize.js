function selectADoor(){
	var doorNumber = prompt( "Enter a number from 1 to 3 to retrieve the prize" );

	switch( doorNumber ){
		case "1":
			console.log( "You selected door number 1. You just won $100!");
			document.getElementById("displayPad").innerHTML = "You selected door number 1. You just won $100!";
			break;
		case "2":
			console.log( "You selected door number 2. You just won a boat!");
			document.getElementById("displayPad").innerHTML = "You selected door number 2. You just won a boat!";
			break;
		case "3":
			console.log( "You selected door number 3. You just won a trip to Italy!");
			document.getElementById("displayPad").innerHTML = "You selected door number 3. You just won a trip to Italy!";
			break;
		default:
			console.log( "Enter the + doorNumber")
			document.getElementById("displayPad").innerHTML = "Hi "+ userName + ". Nice to meet you";
	}
}