function taskAlert() {
  event.preventDefault();
  var newAlert;
  var task = document.forms["reminder"]["task"].value;
  var days = document.forms["reminder"]["days"].value;
  if (days <= 3) {

    var alerts = document.getElementById('alerts');
    newAlert = document.createElement("div");
    newAlert.innerHTML = '<div class="col-auto alert alert-danger alert-dismissable alerts" style="display:inline-block;"><div class="row"><span>'+task+'</span><button type="button" style="margin: 0px 5px 0px 20px;" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="row"><span>'+days+' Day(s)</span></div></div>';
    alerts.appendChild(newAlert);

  }

  else if (days >=8) {
    var alerts = document.getElementById('alerts');
    newAlert = document.createElement("div");
    newAlert.innerHTML = '<div class="col-auto alert alert-dark alert-dismissable alerts" style="display:inline-block;"><div class="row"><span>'+task+'</span><button type="button" style="margin: 0px 5px 0px 20px;" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="row"><span>'+days+' Day(s)</span></div></div>';
    alerts.appendChild(newAlert);
  }

  else {
    var alerts = document.getElementById('alerts');
    newAlert = document.createElement("div");
    newAlert.innerHTML = '<div class="col-auto alert alert-warning alert-dismissable alerts" style="display:inline-block;"><div class="row"><span>'+task+'</span><button type="button" style="margin: 0px 5px 0px 20px;" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="row"><span>'+days+' Day(s)</span></div></div>';
    alerts.appendChild(newAlert);
  }
}
