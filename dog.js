var age,result;

/* function getAge(val){
    age = val;
    console.log(age)
}

*/
function convertAge()
        {
            age = document.getElementById('humanAge').value;
            if(age >= 10.5 && age<=21)
                    {
                        result = age/10.5;
                        if(result == 1)
                            {
                                document.getElementById('dogAge').value = result + ' Year';
                            }
                        else{
                                document.getElementById('dogAge').value = result + ' Years'; 
                            }
                        }
            else if(age > 21)
                    {
                        result = age-21;
                        result = (result/4)+2;
                        document.getElementById('dogAge').value = result +' Years';
                    }
            else{
                alert("Age Must be Greater than 10.5")
            }
        }