
/* DOM ELEMENTS */

const grid = document.getElementById('grid');
const button= document.getElementById('play');
const scoreElement = document.getElementById('score');


/* FUNCTIONS */

const createCell = () => {
    const cell = document.createElement('div');
    cell.className= 'cell';
    return cell;
} 




button.addEventListener('click', function(){

  grid.innerText='';
  let score = 0;
    for(i= 0 ; i < 100; i ++){
      const cell = createCell();  
      
      const cellnumb = cell.innerText= i + 1;
      
      cell.addEventListener('click', function(){
        
        cell.classList.add('clicked');
        
          ++score;
          console.log(cellnumb);
        
        
        
        scoreElement.innerText= score;
      })
      
      
      grid.appendChild(cell);
    }
})