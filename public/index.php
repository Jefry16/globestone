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
$router->add('aviso-legal', ['controller' => 'Statico', 'action' => 'avisoLegal']);
$router->add('politicas-de-cookies', ['controller' => 'Statico', 'action' => 'politicasDeCookies']);
$router->add('politicas-de-privacidad', ['controller' => 'Statico', 'action' => 'politicasDePrivacidad']);
$router->add('contacto', ['controller' => 'Statico', 'action' => 'contacto']);
$router->add('servicios/{title:[a-zÁ-Ź-]+}', ['controller' => 'Statico', 'action' => 'services']);
$router->add('{controller}/{action}');
$router->dispatch($_SERVER['QUERY_STRING']);
