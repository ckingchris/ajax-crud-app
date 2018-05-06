<?php
    class Database{
    
        // specify your own database credentials
        private $host = "umabrisfx8afs3ja.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
        private $db_name = "piy0ptxjohs8xchg";
        private $username = "s4n38yn0hfpf4ivn";
        private $password = "aykupehre4mhh1he";
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