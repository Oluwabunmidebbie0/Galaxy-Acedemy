let matching = false;

function check() {
  const password = document.getElementById('pwd');
  const confirm = document.getElementById('cpwd');
  const span = document.getElementById('matched');
  
  if (password.value == confirm.value) {
    password.style.border = "2px solid green";
    confirm.style.border = "2px solid green";
    span.innerText = "";
    matching = true;
  } else {
    password.style.border = "2px solid #b91c1c";
    confirm.style.border = "2px solid #b91c1c";
    span.innerText = "* Passwords do not match";
    span.style.color = "#b91c1c";
    span.style.fontSize = "12px";
    span.style.marginTop = "2px";
    matching = false;
  }
}

function submit_form() {
  if (!matching) {
    alert("Check if the passwords match.");
  } else {
    document.forms['sign-up'].submit();
  }
}