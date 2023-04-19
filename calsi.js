let screen =document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn")

buttons.forEach(function(button){
	button.addEventListener("click",function(event){
		if (event.target.innerHTML=="C") {
			return screen.value = "";

		}
		else if (event.target.innerHTML=="=") {
			return;
		}
		let view = event.target.dataset.num;
		screen.value += view;

	})
});

var equalButton = document.querySelector("#equals")
equalButton.addEventListener('click', function(event){
  if(screen.value == ""){
    return alert("Please Enter a Value");
  }
  screen.value = screen.value + "=" + eval(screen.value);
});
    