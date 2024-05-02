const button = document.querySelector("button");
const textParagraph = document.querySelector("p");
button.addEventListener("click", () => {
  const text = textParagraph.textContent;

  if(navigator.clipboard){
    navigator.clipboard
    .writeText(text)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  } else{
    alert('ClipBoard API를 사용하시려면 Chrome를 사용해주시길 바랍니다.')
  }

});
