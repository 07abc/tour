console.log("working")

let btnYes = document.querySelector(".btn-yes")
let btnNo = document.querySelector(".btn-no")

btnYes.addEventListener("click", () => {
  //   document.querySelector(".love-you").classList.add("autoplay")
  document.querySelector(".love-you").play()
  const el = document.querySelector(".love-svg")
  el.classList.add("show-love-svg")

  setTimeout(
    function (el) {
      //const el = document.getElementsByClassName("love-svg")[0]
      el.style.display = "none"
      el.style.animation = "none"
      el.classList.remove("show-love-svg")
      //el.offsetHeight /* trigger reflow */
      el.style.animation = null
    }.bind(this, el),
    3300
  )
})

btnNo.addEventListener("click", () => {
  document.querySelector(".fuck-you").play()
  const el = document.querySelector(".fuck-svg")
  el.classList.add("show-fuck-svg")

  setTimeout(
    function (el) {
      //const el = document.getElementsByClassName("love-svg")[0]
      el.style.display = "none"
      el.style.animation = "none"
      el.classList.remove("show-fuck-svg")
      //el.offsetHeight /* trigger reflow */
      el.style.animation = null
    }.bind(this, el),
    13300
  )
})
