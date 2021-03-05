var modal = document.getElementById("dark");
var btn = document.getElementById("login");
var tab1 = document.getElementById("tab_1");
var tab2 = document.getElementById("tab_2");
var tab_1 = document.getElementById("tab1");
var tab_2 = document.getElementById("tab2");
var btn_login = document.getElementById("btn_login");
var btn_unlog = document.getElementById("authorized");
var username = document.getElementById("username");

tab1.style.color="#E5261E";
tab1.style.borderBottom = "2px solid red";
tab_1.style.display = 'block';

if (!localStorage.getItem("loc"))
{
	localStorage.setItem("loc", "Константин К.");
}
username.oninput=function()
{
	localStorage.setItem("loc", username.value);
	loc = localStorage.getItem("loc");
}
// localStorage.removeItem("loc");

btn_login.onclick=function()
{
	let log_in = document.getElementById("log_in");
	let pass_word = document.getElementById("pass_word");
	if (!log_in.value)
	{
		log_in.placeholder = "Заполните поле";
	}
	if (!pass_word.value)
	{
		pass_word.placeholder = "Заполните поле";
	}
	if (log_in.value && pass_word.value)
	{
		modal.style.display = "none";
		btn.style.display = 'none';
		username.value = localStorage.getItem("loc");
		btn_unlog.style.display = 'flex';
	}
}

tab1.onclick=function()
{
	tab1.style.color="#E5261E";
	tab1.style.borderBottom = "2px solid red";
	tab2.style.color="#333333";
	tab2.style.borderBottom = "none";
	tab_2.style.display = 'none';
	tab_1.style.display = 'block';
}
tab2.onclick=function()
{
	tab2.style.color="#E5261E";
	tab2.style.borderBottom = "2px solid red";
	tab1.style.color="#333333";
	tab1.style.borderBottom = "none";
	tab_1.style.display = 'none';
	tab_2.style.display = 'block';
}

btn.onclick=function()
{
	modal.style.display = "block";
	modal.style.position = 'absolute';
	document.body.style.overflowY = 'hidden';
}

function closeModal(event)
{
	if (event.target == modal) 
	{
		modal.style.display = "none";
		document.body.style.overflowY = 'scroll';
	}
}

window.addEventListener("click", closeModal);

// window.addEventListener("click", closeModal);