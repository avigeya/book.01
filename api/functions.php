<?php 

	require_once 'classes/Books_class.php';

	$postArray = json_decode(file_get_contents('php://input'), true);
/*
	$author = $postArray['author'];
	$book = $postArray['book'];
	$description = $postArray['description'];
	$genre = $postArray['genre'];
	$price = $postArray['price'];*/
	$typeAction = $postArray['typeAction'];

	$bk = new Books();
	$connect = $bk->connect_to_db();

	if($typeAction == 'add'){
		$bk->add_book($author, $book, $description, $genre, $price);
	}

	if($typeAction == 'add_new_author'){
		$bk->add_new_author();
	}

	if($typeAction == 'add_new_genre'){

	}
	if($typeAction == 'printAllBooks'){
		echo json_encode($bk->get_all_books());
	}

?>