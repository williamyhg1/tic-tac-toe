const cells = document.querySelectorAll(".cell")
let playerTurn

function drawCircle(){
    cells.forEach(cell=>{
    cell.addEventListener('click',handleClick,{once:true})
})
}

function handleClick(e){
    
}

function removePlayer(){
    cells.forEach(cell=>
            cell.removeEventListener('click')
    )
}

function drawX(){
    cells.forEach(cell=>{
        cell.addEventListener('click',()=>{
            cell.textContent= '✕'
        })
    })

}


// function swapPlayer(){
    
//     removePlayer();
//     drawCircle()
//     removePlayer();
// }
drawCircle();