console.log("working")

let btnYes = document.querySelector(".btn-yes")
let btnNo = document.querySelector(".btn-no")

btnYes.addEventListener("click", () => {
  //   document.querySelector(".love-you").classList.add("autoplay")
  document.querySelector(".love-you").play()
})

btnNo.addEventListener("click", () => {
  document.querySelector(".fuck-you").play()
})
