<?php

/**
 * Purpose: Initialization file to be included on each page
 * Author: Greg Haug
 * Date: 8/12/2014
 */

session_start();

/**
 * Used to auto include classes
 */
spl_autoload_register(function($class) {
    require_once 'classes/' . $class . '.php';
});




