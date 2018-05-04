// client id: i0hx9uhbef1qw9egt0howi026f3izk
var client_id = 'i0hx9uhbef1qw9egt0howi026f3izk';
var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var urlChannels = "https://api.twitch.tv/helix/users?login=OgamingSC2";
var result;
var channelsDisplay = document.getElementById("channels-display");

function checkImage(img) {
    if(img == "") {
        return "images/placeholder-banner.png"
    }
    else
    {
        return img;
    }
}



window.onload = function() {

    var xhttp = new XMLHttpRequest();
    var urlChannels = "https://api.twitch.tv/helix/users?login=ESL_SC2&login=OgamingSC2&login=cretetion&login=freecodecamp&login=storbeck&login=habathcx&login=RobotCaleb&login=noobs2ninjas";
    xhttp.open('GET', urlChannels);
    xhttp.setRequestHeader('Client-ID', client_id);
    xhttp.onload = function() {
        if(xhttp.status === 200) {
            result = JSON.parse(xhttp.responseText);
            for(var i = 0; i < 8; i++)
            {
                channelsDisplay.innerHTML += 
                '<div class="channel">'+
                        '<div class="channel__header">'+
                            '<img class="channel__header--logo" src="images/placeholder-logo.png" alt="Logo of channel">'+
                            '<h1 class="channel__header--name">'+ result.data[i].display_name +'</h1>'+
                        '</div>'+
    
                        '<div class="channel__banner">'+
                            '<img class="channel__banner--banner" src="' + checkImage(result.data[i].offline_image_url) + '" alt="Banner of the channel">'+
                        '</div>'+
                        
                        '<div class="channel__info">'+
                            '<div class="wrapper">'+
                                    '<p class="wrapper--followers">Views:</p>'+
                                    '<span class="wrapper--number">'+ result.data[i].view_count +'</span>'+
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
        }
    }
    xhttp.send();


    /*var xhttp = {};
    for(let i = 0; i < streamers.length; i++) {
        var url = "https://api.twitch.tv/helix/users?login=" + streamers[i];
        xhttp[i] = new XMLHttpRequest();
        xhttp[i].open('GET', url);
        xhttp[i].setRequestHeader('Client-ID', client_id);
        xhttp[i].onload = function() {
            if(xhttp[i].status === 200) {
                result = JSON.parse(xhttp[i].responseText);
                console.log(result.data[0].display_name);
                channelGrid.innerHTML += 
                '<div class="channel">'+
                        '<div class="channel__header">'+
                            '<img class="channel__header--logo" src="images/placeholder-logo.png" alt="Logo of channel">'+
                            '<h1 class="channel__header--name">'+ result.data[0].display_name +'</h1>'+
                        '</div>'+
    
                        '<div class="channel__banner">'+
                            '<img class="channel__banner--banner" src="images/placeholder-banner.png" alt="Banner of the channel">'+
                        '</div>'+
                        
                        '<div class="channel__info">'+
                            '<div class="wrapper">'+
                                    '<p class="wrapper--followers">Views:</p>'+
                                    '<span class="wrapper--number">'+ result.data[0].view_count +'</span>'+
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
                console.log("Error");
            }
        }
        xhttp[i].send();

    }*/
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
    
 

