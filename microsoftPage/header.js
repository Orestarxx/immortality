 let inputHolder = document.getElementById('inputHolder');
let buttonCancel = document.getElementById('cancel');
let searcher = document.getElementById('searcher');
searcher.addEventListener('click',() =>{
    inputHolder.style.display = 'block'
})
buttonCancel.addEventListener('click', () =>{
 inputHolder.style.display = 'none';
});
 console.log(location);