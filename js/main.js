let colors = document.querySelectorAll('.col')

colors.forEach( (col)=>{

    col.addEventListener('click' , ()=>{
        
        document.documentElement.style.setProperty('--border-color',`${col.dataset.color}`)
        
    })
} )