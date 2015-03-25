self.onmessage = function(event) {
	console.log("recibido: " + event.data);
	n = 1;
	founds = 0;
	primelist = "";
	search: while(n < event.data){
	    n += 1;
	    for (var i = 2; i <= Math.sqrt(n); i += 1)
	    	if (n % i == 0)
	    		continue search;
	    primelist += " " + n;
	    founds += 1;
	    if(founds == 100000){
	    	founds = 0;
	    	self.postMessage(primelist);
	    	primelist = "";
	    }
	}
	self.postMessage(primelist);
	self.postMessage("FIN");
}
