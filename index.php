<?php
	use PHPMailer\PHPMailer\PHPMailer;
	require 'vendor/phpmailer/src/PHPMailer.php';
	require 'vendor/phpmailer/src/Exception.php';

	if($_SERVER["REQUEST_METHOD"] == "POST") {
		
		$name = trim(filter_input(INPUT_POST, "name", FILTER_SANITIZE_STRING));
		$email = trim(filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL)); 
		$message = trim(filter_input(INPUT_POST, "message", FILTER_SANITIZE_SPECIAL_CHARS));
		
		if($name == "" || $email == "" || $message == "") {
			$error_message = "Per favore riempi i campi obbligatori: Nome, Email, Messaggio";
		}
		
		if($_POST["address"] != "") {
			$error_message = "Sei un robot, ti ho beccato!";
		}
		
		if(!PHPMailer::validateAddress($email)) {
			$error_message = "Indirizzo email non valido";
		}
		
		if(!isset($error_message)) {
			$email_body = "Name" . $name . "/n";
			$email_body .= "Email" . $email . "/n";
			$email_body .= "Messaggio" . $message . "/n";
			
			$mail = new PHPMailer;
			
			$mail->setFrom('simone.magagna91@gmail.com', $name);
			$mail->addReplyTo($email, $name);
			$mail->addAddress('simone.magagna91@gmail.com', 'Simone Magagna');
			$mail->Subject = 'Message from' . $name;
			$mail->Body = $email_body;
			//if($mail->send()) {
				header("location:thanks.php");
			//} 
		}
		header("location:index.php?error=errore");
	}	
?>
<DOCTYPE! html>
<html>
	<head>
		<meta name="viewport" content="width=device-width initial-scale=1.0">
		<title>Simone Magagna</title>
		<link href='https://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="css/normalize.css">
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
	<header class="main-header">
		<?php $navSelected = null; ?>
		<div class="container clearfix">
			<h1 class="name"><a href="#">Personal Website</a></h1>
			<ul class="main-nav">
				<li><a href="#showreel">Rigging showreel</a></li>
				<li><a href="#projects">Progetti</a></li>
				<li><a href="#about">About me</a></li>
				<li><a href="#contact-me">Contatti</a></li>
			</ul>
		</div>
	</header>
	
	<div class="banner">
		<img src="img/profile.jpg" alt="Picture about me" class="profile-picture">
		<h1 class="headline">Simone Magagna</h1>
		<span class="tagline">Developer & 3D Rigger</span>
	</div>
	
	<div id="showreel" class="container clearfix">
	<h2>Rigging Showreel</h2>
		<iframe src="https://player.vimeo.com/video/233178319" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	</div>
	
	<div id="projects" class="container clearfix">
		<h2>Progetti</h2>
		<div class="primary col">
			<h3>E-commerce VR</h3>
			<img src="img/vr-icon.png" alt="VR logo" class="project-image">
			<p>Il progetto nasce dall'idea di esplorare nuove frontiere nello sviluppo dell'e-commerce e di come le nuove
			tecnologie VR possano integrarsi per offrire all'utente un'esperienza totalmente immersiva. Viene svippato così
			un prototipo di e-commerce VR per l'azienda DIANA Corp., dove i prodotti vengono esposti all'interno di stanze
			tridimensionali create tramite foto a 360 gradi. Ogni prodotto è interattivo e insirebile nel carrello virtuale.
			Il prototipo è stato sviluppato attraverso le tecnologie di Unity 3D e Amazon Web Services e ha vinto come miglior
			progetto di stage dell'Università di Padova e Venezia all'evento STAGE-IT 2017. Su questo progetto ho sviluppato
			la mia tesi di Laurea Triennale in Informatica scaricabile 
			<a href="https://siagas.math.unipd.it/siagas/visione_tesi.php?page=19&ordine" target="_blank">qui</a>.</p>
		</div>
		
		<div class="secondary col">
			<h3>Il Bacio</h3>
			<img src="img/ilbacio.jpg" alt="Frame Il Bacio" class="project-image">
			<p>Corto animato completamente in CGI prodotto dalla scuola BigRock, nella quale ho frequentato il master in CGI,
			e diretto dal regista Adriano Candiago. Il corto racconta la storia di due marionette, un principe e una principessa,
			che, dopo un valoroso salvataggio da un perfido cattivo, vogliono baciarsi ma il marionettista non glielo permette.
			Il corto è stato candidato a numerosi festival arrivando in finale e vincendone alcuni. Al progetto ho lavorato all'interno
			del reparto di Rigging, riuscendo a produrre la mia prima Showreel di Rigging in Autodesk Maya visibile 
			<a href="#showreel">sopra</a>.
			<a href="" target="_blank">Qui</a> il cortometraggio.</p> 
		</div>
		
		<div class="tertiary col">
			<h3>Quizzipedia</h3>
			<img src="img/quizzipedia-logo.jpeg" alt="Quizzipedia logo" class="project-image">
			<p>Progetto universitario sviluppato per l'azienda Zucchetti s.p.a che si propone di creare una piattaforma per la creazione,
			la compilazione e condivisione di questionari universitari e non solo. Il software è stato sviluppato da un team di sette
			persone attraverso le tecnologie Angular.js, Node.js, Express.js e MongoDB. Il progetto è visibile al seguente 
			<a href="https://github.com/TheFellowshipOfTheCode/QuizziPedia" target="_blank">link</a>.</p>
		</div>
	</div>
	
	<div id="about" class="container clearfix">
		<h2>About me</h2>
		<p>Sono appassionato di ogni cosa derivi dalla cultura nerd. Ecco il <a href="catalog.php?cat=catalog">catalogo</a> 
		dei miei libri, fumetti, film e videogiochi preferiti.</p>
	</div>
	
	<div id="contact-me">
		<h2>Contattami</h2>
		<form method="post" action="index.php">
			<?php
				if(isset($_GET["error"])) {
					echo '<p class="error">Email errata</p>';
				}
			?>
			<label for="name">Nome</label>
			<input type="text" id="name" name="name" />

			<label for="email">Email</label>
			<input type="text" id="email" name="email" />
			
			<label for="message">Messaggio</label>
			<textarea name="message" id="message"></textarea>
			
			<label for="address" style="display:none">Indirizzo</label>
			<input name="address" id="address" style="display:none" />
		
			<input type="submit" value="Invia">
		</form>
	</div>
	
	<?php include("inc/footer.php"); ?>
</body>
</html>