<?php

namespace App\Models;

use App\Modules\Message;
use PDO;

class Contact extends \Core\Model
{
    public $errors = [];

    public function __construct($data = [])
    {
        foreach ($data as $key => $value) {
            $this->$key = $value;
        }
    }

    public function save()
    {
        $this->validateBeforeSaving();
        if (empty($this->errors)) {
            Message::set('Contacto enviado', Message::SUCCESS);
            return 'true';
        }
        return  false;
    }

    private function validateBeforeSaving()
    {
        $this->validateName();
        $this->validatePhone();
        $this->validateEmail();
    }
    private function validateName()
    {
        if (trim($this->name) == '') {
            $this->errors[] = 'El nombre es invalido';
        }
    }

    private function validatePhone()
    {
        if (trim($this->phone) == '') {
            $this->errors[] = 'Número es invalido';
        }
    }

    private function validateEmail()
    {
        if (filter_var($this->email, FILTER_VALIDATE_EMAIL) === false) {
            $this->errors['email'] = 'Email invalido';
        }
    }
}
