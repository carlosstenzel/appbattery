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

function atualizabate() {
 var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery,
          indicator, indicatorPercentage;
          
          var numerooo = battery.level * 100;
          level = numerooo.toFixed(2);
          document.getElementById('bater').value = level ;
}
 
//setTimeout("atualizabate()", 1);
$(document).ready(function() {
	var refreshId = setInterval("atualizabate()", 0);
 //setTimeout("atualizabate()", 1);
	//atualizabate();

});
$(function($) {

                $(".knob").knob({
                    change : function (value) {
                        //console.log("change : " + value);
                    },
                    release : function (value) {
                        //console.log(this.$.attr('value'));
                        console.log("release : " + value);
                    },
                    cancel : function () {
                        console.log("cancel : ", this);
                    },
                    draw : function () {

                        // "tron" case
                        if(this.$.data('skin') == 'tron') {

                            var a = this.angle(this.cv)  // Angle
                                , sa = this.startAngle          // Previous start angle
                                , sat = this.startAngle         // Start angle
                                , ea                            // Previous end angle
                                , eat = sat + a                 // End angle
                                , r = 1;

                            this.g.lineWidth = this.lineWidth;

                            this.o.cursor
                                && (sat = eat - 0.3)
                                && (eat = eat + 0.3);

                            if (this.o.displayPrevious) {
                                ea = this.startAngle + this.angle(this.v);
                                this.o.cursor
                                    && (sa = ea - 0.3)
                                    && (ea = ea + 0.3);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });
         
            });

   