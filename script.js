const servicesEl = document.getElementsByClassName("services-img")[0]
function showServices(e) {
  servicesEl.classList.toggle("hide");
}

function hideServices(e) {
  servicesEl.classList.add("hide");
}

console.log('script connected')