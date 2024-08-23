function checkCreds()
{
    //Values
    var FirstName = document.getElementById("fname").value;
    var LastName = document.getElementById("lname").value;
    var zipNum = document.getElementById("zipID").value;

    var fullName = FirstName+ " " + LastName;
//User Information
    if (fullName.length > 20  || fullName.length< 3)
    {
        document.getElementById("loginStatus").innerHTML = "Full name too short/long";
    }

    else if (zipNum>99999 || zipNum <10000) 
     {
        document.getElementById("loginStatus").innerHTML = "Zip num < 10000 or zip num >99999"
     }
//Zip Code Length

        else if(zipNum.length  !=5) 
      {
          document.getElementById("loginStatus").innerHTML = "Zip is incorrect";
       }
     else
     {
//Custom Alert
        alert("You Passed The Test!");
     }       


}