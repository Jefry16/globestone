<?php


namespace App\Controllers;

use Core\Controller;
use Core\View;

class Statico extends Controller
{
    public function homeAction()
    {
        View::renderTemplate('Frontend/home.html');
    }

    public function sobreGlobeStoneAction()
    {
        View::renderTemplate('Frontend/about.html');
    }

    public function contactoAction()
    {
        View::renderTemplate('Frontend/contacto.html');
    }
}
