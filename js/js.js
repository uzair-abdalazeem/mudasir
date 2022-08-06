new Typed('#typed',{
  strings : ['mudasir','fullstack Developer','web Developer','Designer'],
  typeSpeed : 40,
  delaySpeed : 90,
  loop : true
});


//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = () => {//after window loaded
  filterItem.onclick = selectedItem => {//if user click on filterItem div
    if (selectedItem.target.classList.contains("item")) {//if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach(image => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if (filterImges == filterName || filterName == "all") {
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        } else {
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  };
  for (let i = 0; i < filterImg.length; i++) {if (window.CP.shouldStopExecution(0)) break;
    filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
  }window.CP.exitedLoop(0);
};


// DOM Selectors
const body = document.querySelector("body");
const switchBtn = document.getElementById("switch");
const root = document.querySelector(":root");

// Change theme
switchBtn.addEventListener("change", () => {
  toggleRootClass();
});

function toggleRootClass() {
  document.querySelector(":root").classList.toggle("dark");
}





