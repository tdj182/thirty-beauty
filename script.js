const servicesEl = document.getElementsByClassName("services-img")[0]
function showServices(e) {
  servicesEl.classList.toggle("hide");

  // document.getElementsByClassName("services-img")[0].style.display = "block";
}

function hideServices(e) {
  servicesEl.classList.add("hide");
}

