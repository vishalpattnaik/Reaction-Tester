            var start = new Date().getTime();
            
            function getRandomColor() {
            
                var letters = '0123456789ABCDEF';
  
                var color = '#';
  
                for (var i = 0; i < 6; i++) {
    
                    color += letters[Math.floor(Math.random() * 16)];
  
                }
  
                return color;

            }
            
            function shapeAppear() {
               
               var top = Math.random() * 400;
               
                var left = Math.random() * 400;
                
                var width = (Math.random() * 200) + 100;
                
                if(Math.random() > 0.5)
                    {
                       document.getElementById("shape").style.borderRadius = "50%"; 
                    }
                else
                    {
                        document.getElementById("shape").style.borderRadius = "0";
                    }
                
                
                document.getElementById("shape").style.backgroundColor = getRandomColor();
                
                document.getElementById("shape").style.width = width + "px" ;
                
                document.getElementById("shape").style.height = width + "px" ;
                
               document.getElementById("shape").style.top = top + "px" ;
               
               document.getElementById("shape").style.left = left + "px"; 
            
               document.getElementById("shape").style.display = "block";
                
                start = new Date().getTime();
            }
            
            function setDelay(){
                
                setTimeout(shapeAppear , Math.random() * 2000);
            }
          
            setDelay();
            
           var clickCounter = 0; 
            
            var oldTime;
            
          document.getElementById("shape").onclick = function(){
              
              clickCounter = clickCounter + 1; 
              
	           document.getElementById("counter").innerHTML = "Number of Clicks = " + clickCounter;
              
              document.getElementById("shape").style.display = "none" ;
              
              oldTime = document.getElementById('best').innerHTML;
              
              var end = new Date().getTime();
              
              var timeTaken = (end - start) / 1000;
              
              var bestTime;
              
              document.getElementById("timeTaken").innerHTML = timeTaken + "s";
              
              if (timeTaken < oldTime){
                bestTime = timeTaken;
                document.getElementById("best").innerHTML=bestTime;
            }

              setDelay()
          }