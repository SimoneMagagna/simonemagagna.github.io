<?php 	
	$pageTitle = null;
	$section = null;
	
	if(isset($_GET["cat"])) {
		if($_GET["cat"] == "books") {
			$pageTitle = "Libri";
			$section = "books";
		} elseif ($_GET["cat"] == "comics") {
			$pageTitle = "Fumetti";
			$section = "comics";
		} elseif ($_GET["cat"] == "movies") {
			$pageTitle = "Film";
			$section = "movies";
		} elseif ($_GET["cat"] == "videogames") {
			$pageTitle = "Videogiochi";
			$section = "videogames";
		} else {
			$pageTitle = "Catalogo";
			$section = "catalog";
		}
	}
	
	include("inc/header.php");
	include("inc/data.php");
?>

<div class="container-catalog clearfix">
	<h2><?php echo $pageTitle ?></h2>
	<ul>
		<?php 
			if($section == "catalog") {
				foreach($catalog as $item) {
					echo "<li><a href=\"details.php?id=$item[id]\"><img src=\"$item[img]\"> $item[title]</a></li>";
				}  
			} else {	
					foreach($catalog as $item) {
						if($item["category"] == $section) {
						echo "<li><a href=\"details.php?id=$item[id]\"><img src=\"$item[img]\"> $item[title]</a></li>";
					} 
				}
			}
		?>
	</ul>
</div>