<?php

	// Define a Constant
	define("TITLE","Variables and Constants");


	// Your Variables
	$name = "Neil";
	$color = "Blue";
	$year = 1997;

	/*
	Use PHP to calculate the difference
	between your birth year and this year
	to show your age dynamically
	*/

	$age = 2017 - $year;


?>

<!DOCTYPE html>
<html>
	<head>
		<title>Get Your Hands Dirty: <?php echo TITLE?><!-- PAGE TITLE --></title>
		<link href="../assets/styles.css" rel="stylesheet">
	</head>
	<body>
		<div class="wrapper">
			<a href="/" title="Back to directory" id="logo">
				<img src="../assets/img/logo.png" alt="PHP">
			</a>

			<h1>Get Your Hands Dirty: <small><?php echo TITLE?><!-- PAGE TITLE --></small></h1>
			<hr>

			<h2>Your Example</h2>

			<div class="sandbox">
				<h3>Today's Date:</h3>
				<p><?php echo date("F j, Y")?><!-- DATE --></p>

				<h3>My Name:</h3>
				<p><?php echo $name?><!-- YOUR NAME --></p>

				<h3>My Favourite Colour:</h3>
				<p><?php echo $color?><!-- FAVOURITE COLOUR --></p>

				<h3>My Age:</h3>
				<p><?php echo $age?><!-- YOUR AGE --></p>
			</div><!-- end sandbox -->

			<a href="index.php" class="button">Back to the final example</a>

			<hr>

			<small>&copy;<!-- THIS YEAR --> - <!-- YOUR NAME --></small>
		</div><!-- end wrapper -->

		<div class="copyright-info">
			<?php include('../assets/includes/copyright.php'); ?>
		</div><!-- end copyright-info -->
	</body>
</html>
