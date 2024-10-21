var triggerButton = document.querySelector(`#trigger-button`)
var triggerDisplay = document.querySelector(`#trigger-display`)
var reloadButton = document.querySelector(`#reload-button`)
var reloadDisplay = document.querySelector(`#reload-display`)

var max = 6
var currentAmmo = max
var inventory = 10

triggerDisplay.innerHTML = `AMMO: ${currentAmmo}`
reloadDisplay.innerHTML = `INVENTORY: ${inventory}`


triggerButton.addEventListener(`click`, function ()
{
    currentAmmo--
    if(currentAmmo<0)
    {
        currentAmmo = 0;
    }
    triggerDisplay.innerHTML = `AMMO: ${currentAmmo}`;
});

reloadButton.addEventListener('click', function() 
{
    if (inventory >= 6 && currentAmmo <= 0) 
    {
        inventory -= 6;
        currentAmmo += 6;
    } else if (inventory >= 4 && currentAmmo <= 0) 
    {
        inventory -= 4;
        currentAmmo += 4;
    }
    reloadDisplay.innerHTML = `INVENTORY: ${inventory}`;
    triggerDisplay.innerHTML = `AMMO: ${currentAmmo}`;
});

    