<?php
/* 
    Purpose    : Php file for processing ajax requests for an array of
                 the first 1000 prime numbers.
    Created on : Mar 24, 2015
    Author     : Greg
*/

$primes = array();
$nextInteger = 2;
        
while(count($primes) < 1000) {
    $nextDivisor = 2;
    $isPrime = TRUE;

    while ($isPrime && $nextDivisor < $nextInteger) {
        if($nextInteger % $nextDivisor == 0) {
            $isPrime = FALSE;
        }
        $nextDivisor++;        
    }
    
    if($isPrime) {
        array_push($primes, $nextInteger); 
    }

    $nextInteger++;
}

/*
 * Creates a string of the prime numbers found and returns as ajax response
 */
$primesResponse = "";
foreach ($primes as $index => $prime) {
    if($index != 0) {
        $primesResponse .= ",";
    }
    $primesResponse .= $prime;
}
echo $primesResponse;