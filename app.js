function close1(){
    var overlay=document.getElementById("overlay");
    overlay.style.display="none";
}
function open1(){
    var overlay=document.getElementById("overlay");
    overlay.style.display="block";


    var form = document.getElementById("my-form");
    var status = document.getElementById("status");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        status.classList.add('success');
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form";
        status.classList.add('error');
      });
    }
    form.addEventListener("submit", handleSubmit)
}