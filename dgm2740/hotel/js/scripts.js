// what is the path to the JSON file?
const apiURL = "/dgm2740/hotel/hoteldata.json"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    
    
    for (let i = 0; i < myList.length; i++) {
      
      let hotelImage = document.createElement('img');
      hotelImage.src = myList[i].photo;
      let hotelCaption = document.createElement('figcaption');
      hotelCaption.textContent = myList[i].name;

      let hotelFigure = document.createElement('figure');
      hotelFigure.appendChild(hotelImage);
      hotelFigure.appendChild(hotelCaption);

      let infoDiv = document.createElement('div')

      let carIcon = document.createElement('i')
      carIcon.className = 'icon ion-md-car'

      let addressOne = document.createElement('p')
      addressOne.textContent = myList[i].address[0]
      let addressTwo = document.createElement('p')
      addressTwo.textContent = myList[i].address[1]

      let phoneIcon = document.createElement('i')
      phoneIcon.className = 'icon ion-md-call'
      
      let phoneNumber = document.createElement('p')
      phoneNumber.textContent = myList[i].phone

      
      let sect = document.createElement('section')
      sect.appendChild(hotelFigure)
      sect.appendChild(infoDiv)
      let spanOne = document.createElement('span')
      let spanTwo = document.createElement('span')
      spanOne.appendChild(carIcon)
      spanOne.appendChild(addressOne)
      spanOne.appendChild(addressTwo)
      infoDiv.appendChild(spanOne)
      spanTwo.appendChild(phoneIcon)
      spanTwo.appendChild(phoneNumber)
      infoDiv.appendChild(spanTwo)
      
      document.getElementById('hotelsWrapper').appendChild(sect)
      
    }
    
    
    
    
    
    
    
}); //end of "then" fat arrow function