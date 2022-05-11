<?php

namespace App\Modules;

use App\Modules\Token;

class InitialConfig
{
    public static function start()
    {
        /**
         * Error and Exception handling
         */
        error_reporting(E_ALL);
        set_error_handler('Core\Error::errorHandler');
        set_exception_handler('Core\Error::exceptionHandler');


        session_start();

        if (!isset($_SESSION['formToken'])) {
            $token = new Token();
            $_SESSION['formToken'] = $token->getValue();
        }
    }
}
