document.addEventListener('DOMContentLoaded', ()=>{
    flatpickr(".date-from-js", {wrap:true,dateFormat: "d_m_Y"});
    flatpickr(".date-to-js", {wrap:true,dateFormat: "d_m_Y"});
})