function onLoad() {
    getMedia();
}
  
async function getMedia() {

  var requestOptions = {
    method: 'GET',
  };

  let response = await fetch("http://localhost:3000/wp-json/wp/v2/media", requestOptions) 

  let result = await response.json();

  let container = document.querySelector(".container") 

  for (let i = 0; i < result.length; i++) {
    
    const image = result[i];

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("imgContainer")

    let picture = document.createElement("img")
    picture.classList.add("picture")
    picture.src = image.media_details.sizes.thumbnail.source_url

    container.append(imgContainer)
    imgContainer.append(picture)

  }

}



window.addEventListener("load", onLoad)