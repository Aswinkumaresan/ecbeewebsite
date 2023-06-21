function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      company: document.getElementById("company").value,
      contact: document.getElementById("contact").value,
    };
  
    const serviceID = "service_6vz9izs";
    const templateID = "template_vv4bu2d";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          document.getElementById("company").value = "";
          document.getElementById("contact").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  
  