// client id: i0hx9uhbef1qw9egt0howi026f3izk
var client_id = 'i0hx9uhbef1qw9egt0howi026f3izk';
var xhttp = new XMLHttpRequest();
var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var urlChannels = "https://api.twitch.tv/helix/users?login=OgamingSC2";
var data;
var channelGrid = document.getElementById("channels-grid");




window.onload = function() {
    
    for(var i = 0; i < streamers.length; i++) {
        var url = "https://api.twitch.tv/helix/users?login=" + streamers[i];
        xhttp.open('GET', url);
        xhttp.setRequestHeader('Client-ID', client_id);
        xhttp.onload = function() {
            if(xhttp.status === 200) {
                data = xhttp.responseText;
                console.log(data);
                console.log("Code 200");
            }
            else {
                console.log("Error");
            }
        }
        xhttp.send();

    }
}




            /*xhttp.open('GET', urlChannels);
            xhttp.onload = function() {
            if (xhttp.status === 200) {
                data = xhttp.responseText;
                console.log("I am inside of the loop " + i);
                channelGrid.innerHTML += 
                '<div class="channel">'+
                        '<div class="channel__header">'+
                            '<img class="channel__header--logo" src="images/placeholder-logo.png" alt="Logo of channel">'+
                            '<h1 class="channel__header--name">Placeholder name</h1>'+
                        '</div>'+
    
                        '<div class="channel__banner">'+
                            '<img class="channel__banner--banner" src="images/placeholder-banner.png" alt="Banner of the channel">'+
                        '</div>'+
                        
                        '<div class="channel__info">'+
                            '<div class="wrapper">'+
                                    '<p class="wrapper--followers">Followers:</p>'+
                                    '<span class="wrapper--number">12456</span>'+
                                    '<p class="wrapper--status">'+
                                        'Online: '+
                                    '</p>'+
                                    
                                    '<svg class="wrapper--icon">'+
                                        '<use class="online" xlink:href="images/icons.svg#icon-checkmark"></use>'+
                                    '</svg>'+
                            '</div>'+
                            
                        '</div>'+
    
                        '<div class="channel__supp-actions">'+
                            '<div class="wrapper-actions">'+
                                '<a class="wrapper-actions--button" href="#">'+
                                    'Check it out!'+
                                '</a>'+
                            '</div>'+
    
                        '</div>'+
                    '</div>';
    
            }
            else {
                alert('Request failed.  Returned status of ' + xhttp.status);
            }
        xhttp.send();
        */
    
 

