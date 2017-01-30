<?php 

define('DB_HOST', 'localhost');
define('DB_USER','root');
define('DB_PASS','');
define('DB_NAME','books');

class Books {

	public $name =" ";
	public $genre = array();
	public $author = array();
	public $description =" ";
	public $price =" ";

    function __construct(){

        $this->connect_to_db();
    }

    public function connect_to_db(){
        $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

        if (mysqli_connect_errno($connect))
        {
          die("Failed to connect:" . mysqli_connect_error());
        }

        mysqli_set_charset($connect, "utf8");

          $sql = "CREATE TABLE IF NOT EXISTS `books` (
                `id` int(10) NOT NULL AUTO_INCREMENT,
                `book` varchar(40) DEFAULT NULL,
                `id_authors` varchar(40) DEFAULT NULL,
                `id_genres` varchar(40) DEFAULT NULL,
                `description` varchar(100) DEFAULT NULL,
                `price` float(20) DEFAULT NULL,
                PRIMARY KEY (`id`)
              ) ENGINE=InnoDB  DEFAULT CHARSET=utf8;";
          
          $return = mysqli_query($connect, $sql);

          $sql = "CREATE TABLE IF NOT EXISTS `authors` (
                `id` int(10) NOT NULL AUTO_INCREMENT,
                `author` varchar(40) DEFAULT NULL,
                PRIMARY KEY (`id`)
              ) ENGINE=InnoDB  DEFAULT CHARSET=utf8;";
          
          $return = mysqli_query($connect, $sql);

          $sql = "CREATE TABLE IF NOT EXISTS `genres` (
                `id` int(10) NOT NULL AUTO_INCREMENT,
                `genre` varchar(40) DEFAULT NULL,
                PRIMARY KEY (`id`)
              ) ENGINE=InnoDB  DEFAULT CHARSET=utf8;";
          
          $return = mysqli_query($connect, $sql);

        return $connect;
    }

    public function add_book($id_author, $book, $description, $id_genre, $price){

      $connect = $this->connect_to_db();
      
     /* $sql = "INSERT INTO `authors`(`author`) VALUES ('$author')";
      $return = mysqli_query($connect, $sql);

      $sql = "SELECT `id` from `authors` WHERE `author` = '$author'";
      $return = mysqli_query($connect, $sql);
      $return = $return->fetch_object();
      $id_authors = $return->id;*/

      $sql = "INSERT INTO `books`(`book`, `description`, `price`, `id_authors` ,`id_genres`) 
              VALUES ('$book','$description', '$price', '$id_author', '$id_genre')
              ";
      $return = mysqli_query($connect, $sql);
    }

    public function delete_book(){
        
    }

    public function update_book(){
        
    }

    public function get_all_books(){
        
    }

    public function get_all_genre(){

    }

    public function get_all_author(){
      
    }

    public function add_new_author(){

      $connect = $this->connect_to_db();

      $sql = "INSERT INTO `authors`(`author`) VALUES ('$author')";
      $return = mysqli_query($connect, $sql);

    }

    public function add_new_author(){

    }


}


?>

