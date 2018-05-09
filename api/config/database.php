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
?>