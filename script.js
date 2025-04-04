const images = [
  "https://i.postimg.cc/dtLfGzKK/SZV02564.jpg",
  "https://i.postimg.cc/Pxy7MHxd/SZV02565.jpg",
  "https://i.postimg.cc/cCDVdWyF/SZV02566.jpg",
  "https://i.postimg.cc/DwDnqqNx/SZV02567.jpg",
  "https://i.postimg.cc/nLCMxFyP/SZV02568.jpg",
  "https://i.postimg.cc/gkHxqByN/SZV02569.jpg",
  "https://i.postimg.cc/7YkCzyz5/SZV02570.jpg",
  "https://i.postimg.cc/BbWjNrww/SZV02571.jpg",
  "https://i.postimg.cc/c18YYm5b/SZV02572.jpg",
  "https://i.postimg.cc/YCtm5w25/SZV02573.jpg",
  "https://i.postimg.cc/RV7Hp0m1/SZV02574.jpg",
  "https://i.postimg.cc/rsWrkVrk/SZV02575.jpg",
  "https://i.postimg.cc/vT6mV0YL/SZV02576.jpg",
  "https://i.postimg.cc/vDFZL5DR/SZV02577.jpg",
  "https://i.postimg.cc/nzWzryJh/SZV02578.jpg",
  "https://i.postimg.cc/xdtqDkpH/SZV02579.jpg",
  "https://i.postimg.cc/FKZkrCzY/SZV02580.jpg",
  "https://i.postimg.cc/9QyqSQjt/SZV02581.jpg",
  "https://i.postimg.cc/MKMB7YPL/SZV02582.jpg",
  "https://i.postimg.cc/gcBRL7DR/SZV02583.jpg",
  "https://i.postimg.cc/wTZhZrRH/SZV02584.jpg",
  "https://i.postimg.cc/mDB3VFzH/SZV02585.jpg",
  "https://i.postimg.cc/VvHjYG7q/SZV02586.jpg",
  "https://i.postimg.cc/D0zr3kcf/SZV02587.jpg",
  "https://i.postimg.cc/pTJCtBbC/SZV02588.jpg",
  "https://i.postimg.cc/6QGbFRpb/SZV02589.jpg",
  "https://i.postimg.cc/gkN7hm7s/SZV02590.jpg",
  "https://i.postimg.cc/qvq5XWVT/SZV02591.jpg",
  "https://i.postimg.cc/X7VhXpsX/SZV02592.jpg",
  "https://i.postimg.cc/GpZVpKf1/SZV02593.jpg",
  "https://i.postimg.cc/pXRN80LW/SZV02594.jpg",
  "https://i.postimg.cc/Gmg6WdJt/SZV02595.jpg",
  "https://i.postimg.cc/X78Rgwrw/SZV02596.jpg",
  "https://i.postimg.cc/zf6Zg8V6/SZV02597.jpg",
  "https://i.postimg.cc/W4Hjw0f9/SZV02598.jpg",
  "https://i.postimg.cc/jj5tfMvw/SZV02599.jpg",
  "https://i.postimg.cc/13y9mmqK/SZV02600.jpg",
  "https://i.postimg.cc/vHrYwgcB/SZV02601.jpg",
  "https://i.postimg.cc/fTnzPjWp/SZV02602.jpg",
  "https://i.postimg.cc/vmHHzY8m/SZV02603.jpg",
  "https://i.postimg.cc/rw9wx0kb/SZV02604.jpg",
  "https://i.postimg.cc/y8KNDhwc/SZV02605.jpg",
  "https://i.postimg.cc/HWJnRkwc/SZV02606.jpg",
  "https://i.postimg.cc/k5ndmfLY/SZV02607.jpg",
  "https://i.postimg.cc/W1cv928v/SZV02608.jpg",
  "https://i.postimg.cc/qBY03cCg/SZV02609.jpg",
  "https://i.postimg.cc/Hxvm3XZZ/SZV02610.jpg",
  "https://i.postimg.cc/cJZdJstm/SZV02611.jpg",
  "https://i.postimg.cc/cLfsZKCC/SZV02612.jpg",
  "https://i.postimg.cc/SR5yQCc2/SZV02613.jpg",
  "https://i.postimg.cc/HnjYCB81/SZV02614.jpg",
  "https://i.postimg.cc/FRrFT99R/SZV02615.jpg",
  "https://i.postimg.cc/m2JDTfSX/SZV02616.jpg",
  "https://i.postimg.cc/fLDy1cvM/SZV02617.jpg",
  "https://i.postimg.cc/rp6KNX00/SZV02618.jpg",
  "https://i.postimg.cc/NGNFPr2w/SZV02619.jpg",
  "https://i.postimg.cc/x8dC1977/SZV02620.jpg",
  "https://i.postimg.cc/4xyzSgxW/SZV02621.jpg",
  "https://i.postimg.cc/26hd77Sm/SZV02622.jpg",
  "https://i.postimg.cc/c17MKhzB/SZV02623.jpg",
  "https://i.postimg.cc/PJHW3vCD/SZV02624.jpg",
  "https://i.postimg.cc/tCW0nKjm/SZV02650.jpg",
  "https://i.postimg.cc/z3mj122y/SZV02651.jpg",
  "https://i.postimg.cc/0561P6Hv/SZV02652.jpg",
  "https://i.postimg.cc/7Pp86xp2/SZV02653.jpg",
  "https://i.postimg.cc/bwcCXr4m/SZV02654.jpg",
]

let currentIndex = 0
const imageElement = document.getElementById("gallery-image")
const nextButton = document.getElementById("next-button")
const prevButton = document.getElementById("prev-button")

// Initial image setup
imageElement.src = images[currentIndex]

// Function to update the image without animation
function updateImage(index) {
  imageElement.src = images[index]
}

// Button event listeners
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length
  updateImage(currentIndex)
})

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length
  updateImage(currentIndex)
})

// Auto-slide feature
let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length
  updateImage(currentIndex)
}, 5000)

// Pause auto-slide on button interaction
;[nextButton, prevButton].forEach((button) => {
  button.addEventListener("click", () => {
    clearInterval(autoSlide)
    autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length
      updateImage(currentIndex)
    }, 8000)
  })
})

