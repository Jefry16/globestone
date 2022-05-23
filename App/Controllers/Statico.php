<?php


namespace App\Controllers;

use App\Models\Contact;
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
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $contactModel = new Contact($_POST);
            $contactModel->save();
        }
        View::renderTemplate('Frontend/contacto.html', ['errors' => $contactModel->errors ?? []]);
    }

    public function servicesAction()
    {
        View::renderTemplate('Frontend/service.html');
    }

}
