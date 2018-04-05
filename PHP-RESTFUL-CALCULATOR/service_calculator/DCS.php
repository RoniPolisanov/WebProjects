<?php

class system
{
    public function checkNum(&$num1, &$num2, &$num3)
    {
        if (is_int($num1) && is_int($num2) && is_int($num3)) {
            echo "The numbers entered are VALID :)\n";
            return;
        }
        echo "The numbers entered are INVALID :(\n";
        $this->error();
    }
    public function error()
    {
        echo "The program was closed";
        trigger_error('Die', E_ERROR);
    }
}

class model extends system
{
    public $num1, $num2, $num3, $func, $retVal, $method;
    
    public function init()
    {
        $this->method = $_SERVER['REQUEST_METHOD'];
        //PUT REQUEST
        if ($this->method === 'PUT') {
            parse_str(file_get_contents('php://input'), $_PUT);
            $this->num1 = (int) $_PUT['num1'];
            $this->num2 = (int) $_PUT['num2'];
            $this->num3 = (int) $_PUT['num3'];
            //$this->checkNum($this->num1,  $this->num2,  $this->num3);
            $this->func = $_PUT['func'];
        }
        //POST REQUEST
        else if ($this->method === 'POST') {
            $this->num1 = (int) $_POST['num1'];
            $this->num2 = (int) $_POST['num2'];
            $this->num3 = (int) $_POST['num3'];
            //$this->checkNum($this->num1,  $this->num2,  $this->num3);
            $this->func = $_POST['func'];
            //GET REQUEST
        } 
        else if ($this->method === 'GET') {
            $this->num1 = (int) $_GET['num1'];
            $this->num2 = (int) $_GET['num2'];
            $this->num3 = (int) $_GET['num3'];
            //this->checkNum($this->num1,  $this->num2,  $this->num3);
            $this->func = $_GET['func'];
        }
    }
}

class controller extends model
{
    //SUM
    public function sum()
    {
        $this->retVal = $this->num1 + $this->num2 + $this->num3;
    }
    //AVERAGE
    public function avg()
    {
        $this->retVal = ($this->num1 + $this->num2 + $this->num3) / 3;
    }
    //MULTIPLY
    public function multi()
    {
        $this->retVal = $this->num1 * $this->num2 * $this->num3;
    }
}

$start = new controller();
$start->init();

switch ($start->func) {
    case "sum":
        $start->sum();
        break;
    case "avg":
        $start->avg();
        break;
    case "multi":
        $start->multi();
        break;
    default:
        echo "INVALID OPERATION\n";
        $start->error();
        break;
}

//Build a static array
$a = array(
    'retVal' => $start->retVal
);

header('Content-Type: application/json');
echo json_encode($a);

?>