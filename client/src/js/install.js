const butInstall = document.getElementById('buttonInstall');
const installPrompt = null 

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    installPrompt = event
   console.log(event)
     
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    installPrompt.prompt()
    installPrompt.userChoice.then((choice)=>{
        console.log(choice.outcome)
        if (choice.outcome === "accepted") {
            installPrompt = null
        }
    })
    if (installPrompt !== null){
 
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log("user installed app")
});
