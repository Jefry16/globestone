<?php

namespace App\Modules;

use App\Models\User;

/**
 * Ajax controller
 *
 * PHP version 7.0
 */
class Message
{
    const SUCCESS = "success";
    const INFO = 'info';
    const FAIL = 'fail';

    public static function set($message, $title, $type = "success") 
    {
        if ( !isset($_SESSION['flash_notification']) ) {
            $_SESSION['flash_notification'] = [];
        }
        $_SESSION['flash_notification'][] = [
            'message' => $message,
            'title' => $title,
            'type' => $type
        ];
    }

    public static function get()
    {
        if(isset($_SESSION['flash_notification'])) {
            $message = $_SESSION['flash_notification'];
            unset($_SESSION['flash_notification']);
            return $message;
        }
    }
}