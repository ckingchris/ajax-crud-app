<?php
    class Database{
    
        // specify your own database credentials
        private $host = "ocvwlym0zv3tcn68.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
        private $db_name = "m2ulg7boksqwcjf7";
        private $username = "da9sx2kn1o98wmf0";
        private $password = "butskwtvaoca51fo";
        public $conn;
    
        // get the database connection
        public function getConnection(){
    
            $this->conn = null;
    
            try{
                $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
                $this->conn->exec("set names utf8");
            }catch(PDOException $exception){
                echo "Connection error: " . $exception->getMessage();
            }
    
            return $this->conn;
        }
    }
    // for JawsDB
    // class Database{

    //     $url = getenv('JAWSDB_URL');
    //     $dbparts = parse_url($url);

    //     $hostname = $dbparts['ocvwlym0zv3tcn68.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'];
    //     $username = $dbparts['da9sx2kn1o98wmf0'];
    //     $password = $dbparts['butskwtvaoca51fo'];
    //     $database = ltrim($dbparts['m2ulg7boksqwcjf7'],'/');
    
    //     public function getConnection(){
    //         // Create connection
    //         $conn = new mysqli($hostname, $username, $password, $database);

    //         // Check connection
    //         if ($conn->connect_error) {
    //             die("Connection failed: " . $conn->connect_error);
    //         }
    //         echo "Connection was successfully established!";
    //     }
    // }
?>