
function submit(){
  
    let table =document.getElementById("myTable");
      let row=table.insertRow(table.rows.length);
      let cell1=row.insertCell();
      let cell2=row.insertCell();
      let cell3=row.insertCell();
      let cell4=row.insertCell();
      let cell5=row.insertCell();
      let cell6=row.insertCell();
      let cell7=row.insertCell();
      let cell8=row.insertCell();
      cell1.innerHTML=document.querySelector(".fname").value;
      cell2.innerHTML=document.querySelector(".lname").value;
      cell3.innerHTML=document.querySelector(".address").value;
      cell4.innerHTML=document.querySelector(".pincode").value;
      cell5.innerHTML=document.querySelector(".gender").value;
      cell6.innerHTML=document.querySelector("#food").value;
      cell7.innerHTML=document.querySelector(".state").value;
      cell8.innerHTML=document.querySelector(".country").value;
      reset();
    }
 
    function reset(){
      document.querySelector(".fname").value="";
      document.querySelector(".lname").value="";
      document.querySelector(".address").value="";
      document.querySelector(".pincode").value="";
      document.querySelector(".gender").value="";
      // document.querySelector(".food").value="";
      document.querySelector(".state").value="";
      document.querySelector(".country").value="";
    }
 
    