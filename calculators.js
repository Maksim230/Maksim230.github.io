  
function calculator(form) {
       var result; 
            var kaificentPol;
            var kaificentObraz;
           
            var pol = form.state.value;
            var obraz = form.state2.value;
            var stremlen = form.state3.value;
            var VO = form.vozrast.value;
            var R = form.rost.value;
            var VE = form.ves.value;
            
            
          
            
            if(obraz == "Сидячий образ жизни")
            {
                kaificentObraz = 1.1;
            }
            if(obraz == "Повышенная активность")
            {
                kaificentObraz = 1.2;
            }
            if(obraz == "Экстремальная активность")
            {
                kaificentObraz = 1.8;
            }
            if(obraz == "Средняя активность")
            {
                kaificentObraz = 1.4;
            }
            if(obraz == "Очень высокая активность")
            {
                kaificentObraz = 1.9;
                
            }
        
       
            
            var d1 = VE * 9.99;
            var d2 = R * 6.25;
            var d3 = VO * 4.92;

            
            
            
            
            if(pol == "Мужской")
            {
                kaificentPol = 5;
                var OO = d1 + d2 - d3 + kaificentPol;
            }
            else
            {
                kaificentPol = 161;
                var OO = d1 + d2 - d3 - kaificentPol;
            }
            
          result = OO * kaificentObraz;
        
            if(stremlen == "Похудение")
            {
                var pracent = result / 100 * 20;
                
                result -= pracent;
            }
            
            if(stremlen == "Набор массы")
            {
                 var pracent = result / 100 * 10;
                
                result += pracent;
            }
            
            if(stremlen == "Поддержание формы")
            {
                
                 result = OO * kaificentObraz;
            }
          
          
            alert(result.toFixed() + "/неделю" + "\n" + result.toFixed() / 7 + "/день");
              
    
    
        }

        
        function toggle_div_fun(id,id2,id3,id4,id5) {
            var state = document.forms["calc"]["state"];
            var divelemet1 = document.getElementById(id);
            var divelemet2 = document.getElementById(id2);
            var divelemet3 = document.getElementById(id3);
            var divelemet4 = document.getElementById(id4);
            var divelemet5 = document.getElementById(id5);
            
            if(divelemet1.style.display != "block" && divelemet2.style.display != "block" && divelemet3.style.display != "block"){
                divelemet1.style.display = "block";
                divelemet2.style.display = "block";
                divelemet3.style.display = "block";
               
            }
            
            if(state.value == "Мужской"){
                divelemet4.style.opacity = "1";
                divelemet5.style.opacity = "0";
            }
            else{
                divelemet4.style.opacity = "0";
                divelemet5.style.opacity = "1";
            }
           
        }



 
            
