function get_parameters() {
    
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                data = this.responseText.split(",");

                document.getElementById("date").value = data[0];
                document.getElementById("time").value = data[1];
                document.getElementById("pH").value = data[2];
                document.getElementById("O2").value = data[3];
                document.getElementById("x3").value = data[4];
                document.getElementById("x4").value = data[5];
                document.getElementById("x5").value = data[6];

                timer_function();
            }
        };
        xmlhttp.open("GET", "getdata.php", true);
        xmlhttp.send();
    }


function timer_function(){
var refresh=2000; // Refresh rate in milli seconds
mytime=setTimeout('get_parameters();',refresh)
}

timer_function();
