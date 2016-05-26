<?php
error_reporting(E_ALL); ini_set('display_errors', 1);

$link = mysql_connect('localhost', 'root', '');

if (!$link) {
    die('Not connected : ' . mysql_error());
} 

$db_selected = mysql_select_db('turbine_data', $link);

if (!$db_selected) {
    die ('Can\'t use foo : ' . mysql_error());
} else { 

    $query = "SELECT * from raw_data";
    $result = mysql_query($query);
    $row = mysql_fetch_array($result);
    while($row = mysql_fetch_assoc($result))
    {
        echo $row['date'] . "," . $row['output'] . ',' . $row['heat_rate'] . ',' . $row['compressor_efficiency'] . ',' . $row['availability'] . ',' . $row['reliability'] . ',' . $row['fired_hours'] . ',' . $row['trips'] . ',' . $row['starts'] . '/n';
    }
}

mysql_close($link);

?>