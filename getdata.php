<?php
if (($handle = fopen("current_data.txt", "r")) !== FALSE) {
        $data = fgetcsv($handle) ;
        $num = count($data);
	while($num < 7) {
        array_push($data,"NA");
        $num = count($data);
	}

foreach($data as $value){
echo "$value,";
}
        
    fclose($handle);
}
?>
