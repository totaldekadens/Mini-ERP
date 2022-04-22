function onLoad() {
    getOrders();
}
  
async function getOrders() {

  try {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
      let response = await fetch("http://localhost:3000/wp-json/wc/v3/orders/?oauth_consumer_key=ck_6203ddb9ed101fb6c439a850e69acd4d3341615a&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1650642870&oauth_nonce=5MKfdkLzpeI&oauth_version=1.0&oauth_signature=McYljrbUYVwAKR0gUM5iwNDartc%3D", requestOptions)
        
      let result = await response.json();
  
    let container = document.querySelector(".container")
  
    let container3 = document.createElement("div")
    container3.classList.add("container3")
    container3.classList.add("none")
  
    let infoCont = document.createElement("div")
    infoCont.classList.add("infoCont")
  
    let columntitleCont = document.createElement("div")
    columntitleCont.classList.add("columnTitleCont")
  
    let id = document.createElement("h3")
    id.innerText = "Id"
  
    let customerId = document.createElement("h3")
    customerId.innerText = "Kundnr"
    customerId.classList.add("customerId")
  
    let status = document.createElement("h3")
    status.innerText = "Status"
  
    let total = document.createElement("h3")
    total.innerText = "Totalbelopp"
  
    let dateCreated = document.createElement("h3")
    dateCreated.innerText = "Skapad"
  
    let dateCompleted = document.createElement("h3")
    dateCompleted.innerText = "Slutförd"
  
    container.append(columntitleCont)
    columntitleCont.append(id, customerId, status, total, dateCreated, dateCompleted)
  
  
    for (let i = 0; i < result.length; i++) {
      
      const order = result[i];
  
      let container2 = document.createElement("div")
      container2.classList.add("container2")
  
      let idContainer = document.createElement("div")
      idContainer.classList.add("idContainer")
  
      let custContainer = document.createElement("div")
      custContainer.classList.add("custContainer")
  
      let statusContainer = document.createElement("div")
      statusContainer.classList.add("statusContainer")
  
      let totalContainer = document.createElement("div")
      totalContainer.classList.add("totalContainer")
  
      let createdContainer = document.createElement("div")
      createdContainer.classList.add("createdContainer")
  
      let completedContainer = document.createElement("div")
      completedContainer.classList.add("completedContainer")
  
      let orderLines = order.line_items
  
      let infoButton = document.createElement("div")
      infoButton.classList.add("infoButton")
      infoButton.innerText ="Mer info"
      infoButton.addEventListener("click", () => {moreInfo(order.id, order.billing.first_name, order.billing.last_name, order.billing.address_1, order.billing.postcode, order.billing.city, orderLines);})
  
  
      container.append(container2, container3)
      container2.append(idContainer, custContainer, statusContainer, totalContainer, createdContainer, completedContainer, infoButton)
  
      let orderId = document.createElement("p")
      orderId.classList.add("orderInfo")
      orderId.innerText = order.id
  
      let custId = document.createElement("a")
      custId.classList.add("orderInfo")
      custId.innerText = order.customer_id
  
      let orderStatus = document.createElement("p")
      orderStatus.classList.add("orderStatus")
      orderStatus.innerText = order.status
  
      if(order.status == "on-hold") {
        orderStatus.style.backgroundColor = "#e3b6b6"
      } 
      else if(order.status == "processing") {
        orderStatus.style.backgroundColor = "#afdebc"
      }
      else if (order.status == "completed") {
        orderStatus.style.backgroundColor = "#afd5de"
      }
  
  
      let orderTotal = document.createElement("p")
      orderTotal.classList.add("orderInfo")
      orderTotal.innerText = order.total + " kr"
  
      let createDate = order.date_created
      let createdDate = createDate.substring(0,10)
  
      let orderCreated = document.createElement("p")
      orderCreated.classList.add("orderInfo")
      orderCreated.innerText = createdDate
  
      let completeDate = order.date_completed
  
      if(!completeDate) {
        let completedDate = "-"
  
        let orderCompleted = document.createElement("p")
        orderCompleted.classList.add("orderInfo")
        orderCompleted.innerText = completedDate
  
        completedContainer.append(orderCompleted)
  
      } else {
  
        let completedDate = completeDate.substring(0,10)
  
        let orderCompleted = document.createElement("p")
        orderCompleted.classList.add("orderInfo")
        orderCompleted.innerText = completedDate
  
        completedContainer.append(orderCompleted)
      }
      
      idContainer.append(orderId)
      statusContainer.append(orderStatus)
      totalContainer.append(orderTotal)
      createdContainer.append(orderCreated)
      custContainer.append(custId)
  
    }
  
    
    let backButton = document.createElement("div")
    backButton.classList.add("backButton")
    backButton.innerText = "X"
    backButton.addEventListener("click", () => {
      let container3 = document.querySelector(".container3")
  
            container3.classList.toggle("none")
    })
  
    container3.append(backButton)


  } catch(err) {

    console.log('Error: ', err.message);
  }



}

let container3 = document.querySelector(".container3")

let custTitle = document.createElement("h3")
let orderID = document.createElement("p")
let firstName = document.createElement("p")
let lastName = document.createElement("p")
let address1 = document.createElement("p")
let postcode1 = document.createElement("p")
let city1 = document.createElement("p")

let productTitle = document.createElement("h3")
let productT = document.createElement("p")
let antal = document.createElement("p")
let pris = document.createElement("p")
let totalPris = document.createElement("strong")



        
function moreInfo(id, firstname, lastname, address, postcode, city, orderLines) {

  let container3 = document.querySelector(".container3")

  container3.classList.toggle("none")

for (let i = 0; i < orderLines.length; i++) {
  const orderLine = orderLines[i];

  console.log(orderLine)
  productT.innerText = orderLine.name
  antal.innerHTML = orderLine.quantity + " x " + orderLine.price*1.25 + " kr <br>"

  
}

  productTitle.innerText = "Beställda produkter"
  orderID.innerText = "Order Id: " + id
  custTitle.innerText = "Kundinformation"
  firstName.innerText ="Förnamn: " + firstname
  lastName.innerText = "Efternamn: " + lastname
  address1.innerHTML = "Adress: <br> "  + address
  postcode1.innerText = postcode + " " + city 
  


  container3.append(custTitle, orderID, firstName, lastName, address1,postcode1, city1, productTitle, productT, antal, pris )

}


window.addEventListener("load", onLoad)