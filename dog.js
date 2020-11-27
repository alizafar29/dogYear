var age,years,months,temp,result;

/* function getAge(val){
    age = val;
    console.log(age)
}

*/
function convertAge()
        {
            age = Number(document.getElementById('humanYear').value);

            if(age >= 10.5 && age<=21)
                    {
                        result = age/10.5;
                        years = parseInt(result);
                        temp = result-years;
                        temp = temp*12;
                        months = Math.floor(temp);
                        console.log(months)

                        if(years > 0){
                   
                                        if(years < 2){
                                                        document.getElementById('dogYear').value = years + ' Year';
                                                    }
                                        else if(years == 2){
                                                        document.getElementById('dogYear').value = years + ' Years';
                                                    }
                                    }
                        if(months >= 0){
                                      
                                        if(months < 2){
                                                        document.getElementById('dogMonth').value = months + ' Month';
                                                    }
                                        else{
                                            document.getElementById('dogMonth').value = months + ' Months';
                                        }

                                    }
                    }

            else if(age >21)
                    {
                        result = age-21;
                        result = result/4+2;
                        years = parseInt(result);
                        temp = result-years;
                        temp = temp*12;
                        months = Math.floor(temp);
              
                        document.getElementById('dogYear').value = years +' Years';
                        if(months < 2){
                                        document.getElementById('dogMonth').value = months + ' Month';
                                    }
                        else{
                            document.getElementById('dogMonth').value = months + ' Months';
                        }

                    }
            else{
                alert("Age Must be Greater than 0")
            }
        }