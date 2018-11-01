<DOCTYPE! html>
<html>
	<head>
		<meta name="viewport" content="width=device-width initial-scale=1.0">
		<title>Simone Magagna - Catalogo</title>
		<link href='https://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="css/normalize.css">
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
	<header class="main-header">
		<div class="container clearfix">
			<h1 class="name"><a href="index.php">Home</a></h1>
			<ul class="main-nav">
				<li><a href="catalog.php?cat=catalog" class="<?php if($section == "catalog") {echo "nav-selected";} ?>">Catalogo</a></li>
				<li><a href="catalog.php?cat=books" class="<?php if($section == "books") {echo "nav-selected";} ?>">Libri</a></li>
				<li><a href="catalog.php?cat=comics" class="<?php if($section == "comics") {echo "nav-selected";}?>">Fumetti</a></li>
				<li><a href="catalog.php?cat=movies" class="<?php if($section == "movies") {echo "nav-selected";}?>">Film</a></li>
				<li><a href="catalog.php?cat=videogames" class="<?php if($section == "videogames") {echo "nav-selected";}?>">Videogame</a></li>
			</ul>
		</div>
	</header>