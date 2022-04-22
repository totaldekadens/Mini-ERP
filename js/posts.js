// Hämta blogginlägg - Finkar!
function onLoad() {
    getinlagg();
}

async function getinlagg() {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };
        
        let response = await fetch("http://localhost:3000/wp-json/wp/v2/posts/", requestOptions)
        
        let result = await response.json();
    
        let container = document.querySelector(".container")

        let columntitleCont = document.createElement("div")
        columntitleCont.classList.add("columnTitleCont")

        let id = document.createElement("h3")
        id.innerText = "Id"

        let picture = document.createElement("h3")
        picture.innerText = "Bild"

        let title = document.createElement("h3")
        title.innerText = "Titel"

        container.append(columntitleCont)
        columntitleCont.append(id)
        columntitleCont.append(picture)
        columntitleCont.append(title)

        for (let i = 0; i < result.length; i++) {
            const post = result[i];

            let container2 = document.createElement("div")
            container2.classList.add("container2")

            let idContainer = document.createElement("div")
            idContainer.classList.add("idContainer")

            let picContainer = document.createElement("div")
            picContainer.classList.add("picContainer")

            let smallPicContainer = document.createElement("div")
            smallPicContainer.classList.add("smallPicContainer")

            let titleContainer = document.createElement("div")
            titleContainer.classList.add("titleContainer")

            let linkButton = document.createElement("a")
            linkButton.classList.add("linkButton")
            linkButton.innerHTML = "Gå till inlägg"
            linkButton.href = post.guid.rendered

            container.append(container2)
            container2.append(idContainer,picContainer, titleContainer, linkButton)
            picContainer.append(smallPicContainer)

            var newReq = {
                method: 'GET',
                redirect: 'follow'
                };
                
            let response2 = await fetch(`http://localhost:3000/wp-json/wp/v2/media/${post.featured_media}`, newReq)
            
            let result2 = await response2.json();
            
            let postPicture = document.createElement("img")
            postPicture.src = result2.guid.rendered
 
            let postId = document.createElement("p")
            postId.classList.add("postId")
            postId.innerText = post.id

            let postTitle = document.createElement("a")
            postTitle.classList.add("postTitle")
            postTitle.innerText = post.title.rendered
            postTitle.href = post.guid.rendered
            
            
            idContainer.append(postId)
            titleContainer.append(postTitle)
            smallPicContainer.append(postPicture)
        }
    
    }
    
    window.addEventListener("load", onLoad)