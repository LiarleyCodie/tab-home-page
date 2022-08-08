const imageButton = document.querySelector("#imageButton")
const popupModal = document.querySelector("#detailsPopup")
let visible = false

window.addEventListener("click", popup)

function popup({ target }) {
  const image = popupModal.querySelector("img")
  const content = popupModal.querySelector("#content")
  if (visible === false && target === imageButton) {
      if (target === popupModal) {
        return
      }
      popupModal.style.animation = "bornPopup 500ms ease backwards"
      popupModal.style.display = "flex"

      visible = true
  }

  else if (target !== popupModal && target !== imageButton && target !== image && target !== content) {
    popupModal.style.animation = "deadPopup 500ms ease backwards"

    popupModal.addEventListener("animationend", ({ animationName }) => {
        if (animationName === "deadPopup") {
            popupModal.style.display = "none"
        }
    })
    visible = false
  }

  else if (visible === true && target === imageButton) {
    popupModal.style.animation = "deadPopup 500ms ease backwards"

    popupModal.addEventListener("animationend", ({ animationName }) => {
        if (animationName === "deadPopup") {
            popupModal.style.display = "none"
        }
    })
    visible = false
  }

  if (visible) {
    imageButton.style.opacity = 1
  } else {
    imageButton.style.opacity = 0.8
  }
}
