//import data from './data.json' assert {type: 'json'};
window.onload = load();
function load () {
  let data = fetch("data.json").then(response => response.json()).then(data =>  {
    let barDays = [].concat(data);
    let amounts = barDays.map(data => data.amount);
    let maxAmount = Math.max(...amounts);
    let heightRef = maxAmount; 
  
    function getHeight(heightRef, amount) {
      return Math.round((amount / heightRef) * 70);
    }
    barDays.forEach(el => el['height']= getHeight(heightRef, el.amount));
  
  
  
    (function getBars(){
  
        let bars = document.querySelectorAll('.bar');
  
        for (let i in barDays) {
            bars.forEach(bar => {
              if(barDays[i].day && bar.children[1].className.includes(barDays[i].day) ) {
                
                  if (barDays[i].amount == maxAmount) bar.children[1].style.backgroundColor = 'hsl(186, 34%, 60%)';
                  
                  bar.children[1].style.backgroundColor += 'hsl(10, 79%, 65%)';
                  bar.children[1].style.height = barDays[i].height + "%";
                  bar.children[0].innerHTML = `'<span>$${barDays[i].amount}</span>'`;
  
      // Getting a hover effect to show and hide the amount div
  
                  bar.children[1].addEventListener('mouseenter', (e)=> {
                    
                    bar.children[0].style.visibility = 'visible';
                    bar.children[1].style.cursor = 'pointer';
                    bar.children[1].style.opacity = '0.7';
                  });
                  bar.children[1].addEventListener('mouseleave', (e)=> {
                    
                    bar.children[0].style.visibility = 'hidden';
                    bar.children[1].style.opacity = '1';
                  });
                
              }
            });
            
          }
        })();
        
  
  })
}


    
//getComputedStyle(document.querySelector('.bar'))['height']) Considerating using getComputedStyle for the future
// maybe for dinamically get the max height reference
//getComputedStyle(document.querySelector('.day'))['height'])
