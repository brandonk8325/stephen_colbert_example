import React from "react";
const Form = () => {
    return ( 
        <div style={{backgroundColor: "#fff5e0", height: "70vh", position: "relative"}}>
            <div style={{margin: "0", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <div class = "container" style = {{height: "100%", backgroundColor: "fff5e0", backgroundSize: "cover", paddingTop: "30px", paddingBottom: "30px"}}>
                <form class="thisForm" id = "myForm" name="contact" method="POST" action = "/contact" style = {{textAlign: "center", backgroundColor: "#fff5e0", padding: "0px", marginBottom: "0px"}} netlify>
                    <div>
                        <input type = "hidden" name = "form-name" value = "contact"/>
                        <input type="text" class="form-control" style = {{width: "100%", padding: "7.5px", textAlign: "center", border: "0px", background: "#f5f5f5", backgroundColor: "#f5f5f5"}} placeholder="First Name*" id="firstName" name = "First Name" required />
                        <input type="text" class="form-control" style = {{ width: "100%", padding: "7.5px", textAlign: "center", border: "0px", background: "#f5f5f5", backgroundColor: "#f5f5f5"}} placeholder="Last Name*" id="lastName" name = "Last Name" required />
                        <input type="email"class="form-control" style = {{width: "100%", padding: "7.5px", textAlign: "center", border: "0px", background: "#f5f5f5", backgroundColor: "#f5f5f5"}} placeholder="Email Address*" id="their_email_address" name = "Email" required />
                        <input type="text" class="form-control" style = {{width: "100%", padding: "7.5px", textAlign: "center", border: "0px", background: "#f5f5f5", backgroundColor: "#f5f5f5"}} placeholder="Phone Number*" id="phoneNumber" name = "Phone Number" required />
                        <input type="text" class="form-control" style = {{width: "100%", padding: "7.5px", textAlign: "center", border: "0px", background: "#f5f5f5", backgroundColor: "#f5f5f5"}} placeholder="City, State, Zip Code*" id="location" name = "City, State" required />
                        <textarea style = {{width: "100%", textAlign: "center", border: "0px", background: "#f5f5f5", backgroundColor: "#f5f5f5"}} id="message" name="message" rows="5" cols="50" class = "form-control" placeholder="Message*"></textarea>
                        <button type="submit" style = {{ backgroundColor: "#f5f5f5", borderTop: "3px", borderBottom: "0px", borderLeft: "0px", borderRight: "0px", width:"100%", color:"#1f1f1f", padding:"20px"}} id = "myBtn" class="btn btn-primary" >Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );

};
export default Form;
/*
    ::-webkit-input-placeholder {
       text-align: center;
    }
    
    :-moz-placeholder {
    text-align: center;  
}

::-moz-placeholder { 
   text-align: center;  
}

:-ms-input-placeholder {  
   text-align: center; 
}
input:onclick{
    border:0px;
}
input:focus::placeholder, textarea:focus::placeholder {
  opacity:.3;
}

input:focus{
    outline:0px !important;
    -webkit-appearance:none;
    box-shadow: none !important;
}
input:hover, textarea:hover{
    background-color:#EBEBEB;

}

.btn{
    background-color: #f5f5f5;
    width:100%;
    color:#1f1f1f;
    padding:20px;
}
.btn:hover{
    background-color:#EBEBEB ;
    color:#1f1f1f;
}
.btn:active{
    background-color:#E0E0E0 !important;
    color:#1f1f1f !important;
}
.btn:focus{
    outline:0px !important;
    -webkit-appearance:none;
    box-shadow: none !important;
}
textarea{
    color:#1f1f1f;
    background-color:#f5f5f5;
}
</style>
<script>
    import { onMount } from 'svelte';
    onMount(() => {
        // document.getElementById('myForm').addEventListener('submit', function(){
        //     alert('click');
        // });

        // Get the button that opens the modal
        var form = document.getElementById("myForm");
        form.onsubmit = function() {
            document.querySelector('#myBtn').innerHTML = 'Submitted';
        }

    });
</script>
<svelte:head>
    <title>Contact - Kerpel Law</title>
</svelte:head>
<div class = "container">
<form class="thisForm" id = "myForm" name="contact" method="POST" action = "/contact" netlify>
  <div>
  <input type = "hidden" name = "form-name" value = "contact"/>
   <input type="text" class="form-control" placeholder="First Name*" id="firstName" name = "First Name" required>
  <input type="text" class="form-control" placeholder="Last Name*" id="lastName" name = "Last Name" required>
  <input type="email"class="form-control" placeholder="Email Address*" id="their_email_address" name = "Email" required>
  <input type="text" class="form-control" placeholder="Phone Number*" id="phoneNumber" name = "Phone Number" required>
  <input type="text" class="form-control" placeholder="City, State, Zip Code*" id="location" name = "City, State" required>
  <textarea id="message" name="message" rows="5" cols="50" class = "form-control" placeholder="Message*"></textarea>
  <button type="submit" id = "myBtn" class="btn btn-primary" >Submit</button>
  </div>
</form>
</div>

*/