<?php
	
	function init($multiple) {		

		echo "<tr>";
		echo "<th>&nbsp;</th>";

		for( $i = 1; $i <= $multiple; $i++ ) {

			echo "<th>{$i}</th>";		

		}

		echo "</tr>";

		for( $i = 1; $i <= $multiple; $i++ ) {
			echo "<tr>";
			echo "<th>{$i}</th>";

			for( $j = 1; $j <= $multiple; $j++ ) {
				echo "<td>" . $i * $j . "</td>";
			}

			echo "</tr>";
		}
	}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Challenge: using loops</title>
    <link href="styles.css" rel="stylesheet" type="text/css">
</head>
<body>
<h1>Multiplication Table</h1>
<br><br>
<form method="get" action="<?php $_SERVER['PHP_SELF'] ?>">
	<label for="multiple">Multiple: </label>
	<input type="number" name="multiple" id="multiple" min="3" max="100">
	<input type="submit" id="calculate" value="Multiply">
</form>
<br><br>
<table>

	<?php	
		if( isset($_GET['multiple']) ) {
			$multiple = $_GET['multiple'];
			init($multiple);
		} else {
			$multiple = 10;
			init($multiple);
		}
	?>
</table>
</body>
</html>
