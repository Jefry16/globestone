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

            $sql = "INSERT INTO contacto (name, lastname, phone, email, province, services, message) VALUES (:name, :lastname, :phone, :email, :province, :services, :message)";
            $db = static::getDB();
            $stmt = $db->prepare($sql);
            $stmt->bindValue(':name', $this->name, PDO::PARAM_STR);
            $stmt->bindValue(':lastname', $this->lastname, PDO::PARAM_STR);
            $stmt->bindValue(':phone', $this->phone, PDO::PARAM_STR);
            $stmt->bindValue(':email', $this->email, PDO::PARAM_STR);
            $stmt->bindValue(':province', $this->province, PDO::PARAM_STR);
            $stmt->bindValue(':services', implode(',', $this->service ?? []) ?? '', PDO::PARAM_STR);
            $stmt->bindValue(':message', $this->message, PDO::PARAM_STR);
            return $stmt->execute();
        }
        return  false;
    }

    private function validateBeforeSaving()
    {
        $this->validateName();
        $this->validatePhone();
        $this->validateEmail();
        $this->validateProvincia();
    }
    private function validateName()
    {
        if (trim($this->name) == '') {
            $this->errors['name'] = 'Introduzca un nombre válido';
        }
        if (trim($this->lastname) == '') {
            $this->errors['lastname'] = 'Introduzca un apellido válido';
        }
    }

    private function validatePhone()
    {
        if (trim($this->phone) == '') {
            $this->errors['phone'] = 'Introduzca un número válido';
        }
    }

    private function validateEmail()
    {
        if (filter_var($this->email, FILTER_VALIDATE_EMAIL) === false) {
            $this->errors['email'] = 'Email inválido';
        }
    }

    private function validateProvincia()
    {
        if (trim($this->province) == '') {
            $this->errors['province'] = 'Elija una provincia';
        }
    }
}
