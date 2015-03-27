/* 
    Purpose    : Js file for ajax interaction and displaying
                 the recieved data.
    Created on : Mar 24, 2015
    Author     : Greg
*/

var hasBeenLoaded = false;

/*
 * Sends an ajax request to the server and listens for a response
 */
function getPrimeNumbers() {
    
    if(hasBeenLoaded) {
        return;
    }
    
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
        
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    /*
     * Listens for a response from the server. Creates an array from the 
     * returned data and calls createPrimesTable($primes).
     */
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {           
            $primes = xmlhttp.responseText.split(',');
            createPrimesTable($primes);
        }
    }
    
    xmlhttp.open("GET", "http://localhost/AjaxPrimeNumbers/generateprimes.php", true);
    xmlhttp.send();
    
    hasBeenLoaded = true;
}
/*
 * Creates a table for displaying the array of prime numbers
 */
function createPrimesTable($primes) {
    var body = document.body;
    var tbl  = document.createElement('table');
    tbl.id = "primesTable";
    for(var i = 0; i < 50; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 20; j++){
            var td = tr.insertCell();
            td.className = "primesCell";
            td.appendChild(document.createTextNode($primes[(i * 20) + j]));         
        }
    }
    body.appendChild(tbl);
}