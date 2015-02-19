/*
 ________  ________  ________  _______                               
|\   ____\|\   __  \|\   ___ \|\  ___ \                              
\ \  \___|\ \  \|\  \ \  \_|\ \ \   __/|                             
 \ \  \    \ \  \\\  \ \  \ \\ \ \  \_|/__                           
  \ \  \____\ \  \\\  \ \  \_\\ \ \  \_|\ \                          
   \ \_______\ \_______\ \_______\ \_______\                         
    \|_______|\|_______|\|_______|\|_______|                         
                                                                     
                                                                     
                                                                     
 ___  ___  ________  _____ ______   ________  _______   ________     
|\  \|\  \|\   __  \|\   _ \  _   \|\   __  \|\  ___ \ |\   __  \    
\ \  \\\  \ \  \|\  \ \  \\\__\ \  \ \  \|\  \ \   __/|\ \  \|\  \   
 \ \   __  \ \   __  \ \  \\|__| \  \ \   ____\ \  \_|/_\ \   _  _\  
  \ \  \ \  \ \  \ \  \ \  \    \ \  \ \  \___|\ \  \_|\ \ \  \\  \| 
   \ \__\ \__\ \__\ \__\ \__\    \ \__\ \__\    \ \_______\ \__\\ _\ 
    \|__|\|__|\|__|\|__|\|__|     \|__|\|__|     \|_______|\|__|\|__|
                                                                     
                                                                     
                                                                     

# stenzel@hotmail.com
# www.codehamper.com

*/

// Install app
if (navigator.mozApps) {
    var checkIfInstalled = navigator.mozApps.getSelf();
    checkIfInstalled.onsuccess = function () {
        if (checkIfInstalled.result) {
            // Already installed
            var installationInstructions = document.querySelector("#installation-instructions");
            if (installationInstructions) {
                installationInstructions.style.display = "none";
            }
        }
        else {
            var install = document.querySelector("#install"),
                manifestURL = location.href.substring(0, location.href.lastIndexOf("/")) + "/manifest.webapp";
            install.className = "show-install";
            install.onclick = function () {
                var installApp = navigator.mozApps.install(manifestURL);
                installApp.onsuccess = function(data) {
                    install.style.display = "none";
                };
                installApp.onerror = function() {
                    alert("Install failed\n\n:" + installApp.error.name);
                };
            };
        }
    };
}
else {
    console.log("Open Web Apps not supported");
}


 

$(document).ready(function() {
	function mudacor() {}
var colornova = '#fd7700';
 $('.dial').val(0).trigger('change').delay(100);
$(".dial").knob({
    'min':0,
    'max':100,
    'readOnly': true,
    'width': 300,
    'height': 300,
    'fgColor': colornova,
    'dynamicDraw': true,
    'thickness': 0.2,
    'tickColorizeValues': true,
    'skin':'tron',
    'cursor': false
})         
 
 var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery,
          indicator, indicatorPercentage;
          
          var numerooo = battery.level * 100;
          level = numerooo.toFixed(2);
     

    var tmr = self.setInterval(function(){myDelay()},1000);
    function myDelay(){
        
        $('.dial').val(level).trigger('change');
        
    }    

});


   
