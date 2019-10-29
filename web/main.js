function clicked(){
	
            // Selecting the input element and get its value 
            var user = document.getElementById("email").value;            
            var pass = document.getElementById("psw").value;

			if(user === "test" && pass === "123")
			{				
				   alert("you are logged in as "+ user);
				   window.open("http://www.freshfoodshop.com");			
			} 
			else 
			{
					alert("Incorrect username or password");					
			}
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openForm_reg() {
  document.getElementById("myregister").style.display = "block";
}

function closeForm_reg() {
  document.getElementById("myregister").style.display = "none";
}

function clicked_reg(){
	
            // Selecting the input element and get its value 
            var user = document.getElementById("email_reg").value;            
            var pass = document.getElementById("psw_reg").value;
			var phone = document.getElementById("phone_reg").value;
			alert("User Registered");	

}