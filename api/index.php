<?php
    require 'vendor/autoload.php';
//    load database and create instance
    $db = new medoo([
        'database_type' => 'mysql',
        'database_name' => '',
        'server' => '',
        'username' => '',
        'password' => '',
        'charset' => 'utf8',
        'port' => 3306
    ]);

//    debug sql test
//    print_r(json_encode($db->select('Offer', '*')));

//    Email instance
    $mail = new PHPMailer;

//    create instance from slim framework
    $app = new \Slim\Slim();
    $app->response->headers->set('Content-Type', 'application/json');

//    if we have to load external php methods
//    require 'functions.php';

//    slim app routes
    
    // slim controllers
    $app->get('/', function ($type) use($app, $db) {
        $app->response->setBody(json_encode(array('test' => 'ok')));
    });

//    run slim application
    $app->run();

// http://docs.slimframework.com/
// http://medoo.in/api/new