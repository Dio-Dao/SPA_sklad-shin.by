<?php
$ref=$_SERVER['REQUEST_URI'];
if ($ref!='') $ref=$ref.'?no_redirect=true';
header('Location: http://sklad-shin.by'.$ref);
?>