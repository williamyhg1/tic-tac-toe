const cells = document.querySelectorAll(".cell")

function drawCircle(){
    cells.forEach(cell=>{
    cell.addEventListener('click',()=>{
        cell.textContent= '〇'
    })
})
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
drawX();
