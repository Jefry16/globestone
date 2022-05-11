<?php

/**
 * Front controller
 *
 */

use App\Modules\InitialConfig;

/**
 * Composer
 */
require dirname(__DIR__) . '/vendor/autoload.php';


/**
 * Initial setup
 */

InitialConfig::start();

/**
 * Routing
 */
$router = new Core\Router();



$router->add('', ['controller' => 'Statico', 'action' => 'home']);
$router->add('sobre-globe-stone', ['controller' => 'Statico', 'action' => 'sobreGlobeStone']);
$router->add('{controller}/{action}');

$router->dispatch($_SERVER['QUERY_STRING']);
