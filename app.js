const addButton =  document.querySelector(".add"),
    removeButton =  document.querySelector(".remove");

const currentCupsEl= document.querySelector(".current-cups"),
    currentLitersEl= document.querySelector(".current-liters"),
    currentPercentageEl= document.querySelector(".current-percentage"),
    progressArea= document.querySelector(".progress");

  const MAX_CUPS=10,
      MIN_CUPS = 0;
  let cups = 0,
      liters = 0,
      percentage = 0;




addButton.addEventListener("click",(addCup)=>{
    console.log("add button is clicked");
});

removeButton.addEventListener("click",(removeCup)=>{
    console.log("remove 1 cup");
});

function addCup(){
    cups++;
    liters+=250;
    percentage = (cups / MAX_CUPS)*100;

    updateLayout();

     if(cups === MAX_CUPS){
         addButton.disabled = true;
     }else{ 
         removeButton.disabled = false;
     }
}
function removeCup(){
    cups--;
    liters-=250;
    percentage = (cups / MAX_CUPS)*100;

    updateLayout();

    if(cups === MIN_CUPS){
        addButton.disabled = true;
    }else{
        removeButton.disabled = false;
    }

}
function updateLayout(){
     
    currentCupsEl.textContent=`${cups}/10`;
    currentLitersEl.textContent = `${liters/1000}l/2.5l`;
    currentPercentageEl.textContent = `${percentage}%`;
    progressArea.style.height = `${percentage}%`;
}