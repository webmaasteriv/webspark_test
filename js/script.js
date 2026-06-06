document.addEventListener('DOMContentLoaded', ()=>{
    flatpickr(".date-from-js", {wrap:true,dateFormat: "d_m_Y"});
    flatpickr(".date-to-js", {wrap:true,dateFormat: "d_m_Y"});

    const content = document.querySelector('.content-js');
    const sort = document.querySelector('.sort-type-js');
    const chooseRows = document.querySelector('.sort-type-rows-js');
    const chooseTails = document.querySelector('.sort-type-tiles-js');
    if(!content || !sort || !chooseRows || !chooseTails){
        return;
    }
    chooseTails.addEventListener('click', (e)=>{
        sort.querySelectorAll('button').forEach((but)=>{
            but.classList.remove('is-active');
        })
        e.currentTarget.classList.add('is-active');
        content.classList.add('tiles');
    });
    chooseRows.addEventListener('click', (e)=>{
        sort.querySelectorAll('button').forEach((but)=>{
            but.classList.remove('is-active');
        })
        e.currentTarget.classList.add('is-active');
        content.classList.remove('tiles');
    })
})