function onLoad() {
    getProducts();
}

async function getProducts() {

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
    let response = await fetch("http://localhost:3000/wp-json/wc/v3/products/?oauth_consumer_key=ck_6203ddb9ed101fb6c439a850e69acd4d3341615a&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1650642788&oauth_nonce=xDocgyXG6HQ&oauth_version=1.0&oauth_signature=oBvqwfGN97sm272fhxzSWVooLxk%3D", requestOptions)
      
    let result = await response.json();

  let container = document.querySelector(".container")

  let columntitleCont = document.createElement("div")
  columntitleCont.classList.add("columnTitleCont")

  let category = document.createElement("h3")
  category.innerText = "Kategori"

  let picture = document.createElement("h3")
  picture.innerText = "Bild"
  picture.classList.add("picture")

  let title = document.createElement("h3")
  title.innerText = "Titel"
  title.classList.add("title")

  let price = document.createElement("h3")
  price.innerText = "Pris"

  container.append(columntitleCont)
  columntitleCont.append(picture, title, category, price)


  for (let i = 0; i < result.length; i++) {

      const product = result[i];

      let container = document.querySelector(".container")

      let container2 = document.createElement("div")
      container2.classList.add("container2")

      let categoryContainer = document.createElement("div")
      categoryContainer.classList.add("categoryContainer")

      let picContainer = document.createElement("div")
      picContainer.classList.add("picContainer")

      let smallPicContainer = document.createElement("div")
      smallPicContainer.classList.add("smallPicContainer")

      let priceContainer = document.createElement("div")
      priceContainer.classList.add("priceContainer")

      let titleContainer = document.createElement("div")
      titleContainer.classList.add("titleContainer")

      let linkButton = document.createElement("a")
      linkButton.classList.add("linkButton")
      linkButton.innerHTML = "Gå till produkt"
      linkButton.href = product.permalink

      container.append(container2)
      container2.append(picContainer, titleContainer, categoryContainer, priceContainer, linkButton)
      picContainer.append(smallPicContainer)

      let images = product.images

      for (let i = 0; i < images.length; i++) {
        
        const picture = images[i];

        let postPicture = document.createElement("img")
        postPicture.src = picture.src

        smallPicContainer.append(postPicture)
      }
      
      let categories = product.categories

      for (let i = 0; i < categories.length; i++) {
        
        const category = categories[i];

        /* var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        }; */
          // skickar in idt sedan
/*           let response2 = await fetch(""", requestOptions)
          let result2 = await response2.json(); */

        let postCategory = document.createElement("a")
        postCategory.classList.add("postId")
        postCategory.innerText = category.name
        postCategory.href = "http://localhost:3000/produkt-kategori/"+ category.slug  // Hittade inte kategorilänken 
        categoryContainer.append(postCategory)
      
      }

      let postTitle = document.createElement("p")
      postTitle.classList.add("postTitle")
      postTitle.innerText = product.name

      let postPrice = document.createElement("p")
      postPrice.classList.add("postPrice")
      postPrice.innerText = product.price + " kr"
      
      titleContainer.append(postTitle)
      priceContainer.append(postPrice)
      
  }

}




window.addEventListener("load", onLoad)