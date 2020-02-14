function taskAlert() {
  var newAlert;
  var task = document.forms["reminder"]["task"].value;
  var days = document.forms["reminder"]["days"].value;
  if (days <= 3) {

    var alerts = document.getElementById('alerts');
    newAlert = document.createElement("div");
    newAlert.innerHTML = '<div class="col-auto alert alert-danger" style="display:inline-block;"><div class="row"><span>'+task+'</span></div><div class="row"><span>'+days+' Day(s) to complete</span></div></div>';
    alerts.appendChild(newAlert);


    //newAlert = document.createElement("div");
    //newAlert.innerText='<div class="col-auto alert alert-danger" style="display:inline-block;"><div class="row"><span id="newTask"></span></div><div class="row"><span id="daysToComplete"></span></div></div>'
    //document.body.appendChild(newAlert);
    //document.getElementById(task).innerText = task;
    //document.getElementById(days).innerText = days + " Day(s) to complete";
  //  document.getElementById("generate-here").appendChild(fragment);
  }

  else if (day >=8) {
    newAlert = document.createElement("div");
    newAlert.innerHTML='<div class="col-auto alert alert-dark" style="display:inline-block;"><div class="row"><span id="newTask"></span></div><div class="row"><span id="daysToComplete"></span></div></div>'
    document.body.appendChild(newAlert);
    document.getElementById("newTask").innerText = task;
    document.getElementById("daysToComplete").innerText = days + " Day(s) to complete";
  }

  else {
    newAlert = document.createElement("div");
    newAlert.innerHTML='<div class="col-auto alert alert-warning" style="display:inline-block;"><div class="row"><span id="'+ task +'"></span></div><div class="row"><span></span id="'+ days +'"></div></div>'
    document.body.appendChild(newAlert);
    document.getElementById(task).innerText = task;
    document.getElementById(days).innerText = days + " Day(s) to complete";
  }

  //  document.getElementById("newTask").value = task;
  //  document.getElementById("daysToComplete").value = days + " Day(s) to complete";
//    document.getElementById("show").style.display = "block";
}
