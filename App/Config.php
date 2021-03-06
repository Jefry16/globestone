<?php

namespace App;

/**
 * Application configuration
 *
 * PHP version 7.0
 */
class Config
{

    /**
     * Database host
     * @var string
     */
    const DB_HOST = 'localhost';

    /**
     * Database name
     * @var string
     */
    const DB_NAME = 'jefrycay_globestone';


    /**
     * Database user
     * @var string
     */
    const DB_USER = 'jefrycay_globestone';

    /**
     * Database password
     * @var string
     */
    const DB_PASSWORD = '&VDJc8}Ce=j5';

    /**
     * Show or hide error messages on screen
     * @var boolean
     */
    const SHOW_ERRORS = true;


    const SECRET_KEY = '';

    public static $member_type = 'member_id';

    public static $admin_type = 'admin_id';
}
