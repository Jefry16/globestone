<?php

namespace App\Models;

use PDO;

class Attribute extends \Core\Model
{
    public $errors = [];

    public function __construct($data = [])
    {
        foreach ($data as $key => $value) {
            $this->$key = $value;
        }
    }

    public static function getAll()
    {
        $db = static::getDB();
        $stmt = $db->query('SELECT * FROM attributes');
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function save()
    {
        $this->validateName();

        if (empty($this->errors)) {
            $sql = "INSERT INTO attributes (name) VALUES (:name)";
            $db = static::getDB();
            $stmt = $db->prepare($sql);
            $stmt->bindValue(':name', $this->name, PDO::PARAM_STR);

            return $stmt->execute();
        }
        return false;
    }

    private function validateName()
    {
        $this->name = trim($this->name);

        if ($this->name == '') {
            $this->errors['name'] = 'The name of the variant can\'t be empty';
            return;
        }

        if (strlen($this->name) > 50) {
            $this->errors['name'] = 'The name of the variant can\'t be longer than 50 characters';
            return;
        }

        if ($this->findByName($this->name)) {
            $this->errors['name'] = 'The name of the variant already exists';
            return;
        }
    }

    public static function getAllAttributes()
    {
    }

    private function findByName($name)
    {
        $name = trim($name);

        $sql = 'SELECT * from attributes WHERE name = :name';

        $db = static::getDB();
        $stmt = $db->prepare($sql);

        $stmt->bindValue(':name', $name, PDO::PARAM_STR);
        $stmt->setFetchMode(PDO::FETCH_CLASS, '\App\Models\Attribute');
        $stmt->execute();

        return $stmt->fetch();
    }

    public static function getProductAttributesWithOptions()
    {
        $db = static::getDB();

        $stmt = $db->query('SELECT attributes.name as attributeName, attributes.id as attributeId, options.name as optionName, options.id as optionId FROM attributes LEFT JOIN options on attributes.id = options.attributeId');

        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $attributes = [];

        foreach ($rows as $key => $value) {
            $attributes[$value['attributeId']] = ['key' => $value['attributeName'], 'data' => []];
        }

        foreach ($attributes as $key1 => &$value1) {

            foreach ($rows as $key2 => $value2) {
                if ($key1 === $value2['attributeId']) {
                    if ($value2['optionName']) {
                        # code...
                        $value1['data'][] = $value2['optionName'];
                    } else {
                        $value1['data'] = $value2['optionName'];
                    }
                }
            }
        }

        return $attributes;
    }
}
