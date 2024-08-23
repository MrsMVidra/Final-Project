function reverse()
{ //first string//
    var str1 = document.getElementById("firstStr").value;
    var splitStr1 = str1.split("");
    
    var reverse = splitStr1.reverse();
    
    var joinStr1 = reverse.join("");
    
    
    if (str1 == joinStr1)  //results//
    {
        document.getElementById("palchkr").innerHTML = "You did it! This is a palindrome! 🥳";
    }
    else  //try again msg//
    {
        document.getElementById("palchkr").innerHTML = "Sorry, Try Again 😔";
    }
}
