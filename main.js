let getElement_lb_category = document.querySelector("#Lb_category")
let getElement_Category = document.querySelector("#Category")
let getElement_list_li_Category = document.querySelectorAll(".li_category")

// getElement_Category.style.display = "flex"
function Show_category(){
    getElement_Category.style.display = "flex"
    // console.log("hello")
}
function None_category(Event){
    getElement_Category.style.display = "none"
    Event.stopImmediatePropagation()
    // console.log("hello")
    console.log("hello")
}
getElement_lb_category.addEventListener("mouseover", Show_category)
// getElement_list_li_Category.forEach((obj) => {
//     obj.addEventListener("mouseout", None_category)
    
// });
getElement_Category.addEventListener("mouseout", None_category)



