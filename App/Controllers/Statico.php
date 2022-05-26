<?php


namespace App\Controllers;

use App\Models\Contact;
use App\Modules\Message;
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
            if ($contactModel->save()) {
                $this->redirectSecure('/statico/set-message');
            }
        }
        View::renderTemplate('Frontend/contacto.html', ['errors' => $contactModel->errors ?? [], 'input' => $_POST]);
    }

    public function servicesAction()
    {
        View::renderTemplate('Frontend/service.html');
    }

    public function avisoLegalAction()
    {
        View::renderTemplate('Frontend/aviso-legal.html');
    }

    public function politicasDeCookiesAction()
    {
        View::renderTemplate('Frontend/politicas-cookies.html');
    }

    public function politicasDePrivacidadAction()
    {
        View::renderTemplate('Frontend/privacidad.html');
    }

    public function setMessageAction()
    {
        Message::set('Nos pondremos en contacto contigo tan pronto nos sea posible.', 'Mensaje enviado.', Message::SUCCESS);
        $this->redirectSecure('/');
    }
}
