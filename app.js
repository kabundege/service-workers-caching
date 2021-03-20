window.onload = e => {
    const state = navigator.onLine;

    document.querySelector("strong").textContent = state;

    if(!state){
        document.querySelector("strong").classList.toggle('off')
    }

    const { serviceWorker } = navigator;

    if(serviceWorker){
        serviceWorker.register('./serviceWorker.js')
        .then(res => console.log("Service workers Registered"))
        .catch(err => console.error("Service worker error"))
    }
};