var bykeObj = {
  vhaicleName: "R15 Byke",
  fearPerKilop: 5,
  capacitty: 2,
  vaichelPic: "../img/vaichel_2.jpg",
  text: 0.2,
  decribction:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};
var car1Obj = {
  vhaicleName: "Car",
  fearPerKilop: 10,
  capacitty: 5,
  vaichelPic: "../img/vaichel_6.jpg",
  text: 0.8,
  decribction:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};
var microbusObj = {
  vhaicleName: "Micro Bus",
  fearPerKilop: 15,
  capacitty: 30,
  vaichelPic: "../img/vaichel_1.jpg",
  text: 0.9,
  decribction:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};
var boatObj = {
  vhaicleName: "Boot",
  fearPerKilop: 10,
  capacitty: 5,
  vaichelPic: "../img/vaichel_4.jpg",
  text: 0.6,
  decribction:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};
var trackObj = {
  vhaicleName: "Track",
  fearPerKilop: 20,
  capacitty: 15,
  vaichelPic: "../img/vaichel_5.jpg",
  text: 1.2,
  decribction:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};

const vhaicelArry = [bykeObj, car1Obj, microbusObj, boatObj, trackObj];

function displayVaichel(service) {
  const vhaicelSection = document.getElementById("mainVhaicelSection");
  const stringifyService = JSON.stringify(service);
  let div = document.createElement("div");

  div.innerHTML = `
  <div class="container">
    <div class="row">
            <div class="card mb-3 mx-auto col-md-12 col-sm-12" style="max-width: 80%;">
                <div class="row g-0">
                    <div class="col-md-5 p-2">
                        <img src=${service.vaichelPic} class="img-fluid rounded-start h-100" alt="...">
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h5 class="card-title">Transport Mode  ${service.vhaicleName}</h5>
                            <p class="card-text"> ${service.decribction} </p>
                            <p class="card-text"><small class="text-muted">Capacity ${service.capacitty}</small>  <small class="mx-4 text-muted">Fare PerKilo ${service.fearPerKilop}</small> </p>
                            <!-- Scrollable modal -->
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick='heandelBooking(${stringifyService})'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  `;

  vhaicelSection.appendChild(div);
}

// display all propaty in frontend

function displayAllArticle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const eliment = arr[i];
    displayVaichel(eliment);
  }
}
displayAllArticle(vhaicelArry);

function heandelBooking(obj) {
  const modalBody = document.getElementById("modalBody");
  const stringifyObj = JSON.stringify(obj);

  modalBody.innerHTML = `
  <div class="card mx-auto" style="width: 28rem;">
  <img src=${obj.vaichelPic} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${obj.vhaicleName}</h5>
    <p class="card-text">${obj.decribction}</p>
    <p class="card-text"><small class="text-muted">Capacity ${obj.capacitty}</small> <small class="text-muted mx-4">Fare PerKilo ${obj.fearPerKilop}</small> </p>
    <p class="card-text">Fare : <span id="totalFare"> </span></p>
    <p class="card-text">Tex : <span id="totalText"> </span></p>
    <p class="card-text">Total Cost : <span id="totalCost"></span> </p>

    <label for= "ditanceInput" class="">How Many Kilometers Want to Go</label>
    <input type="number" class="form-control mb-2" id="distanceInput" placeholder="Koto Kilo Jabe">
    <label for = "quantityInput" >How Many Vhaicel Need</label>
    <input type="number" class="form-control mb-2" id="quantityInput" placeholder="How Many Vhaicel Need">
    <a href="#" class="btn btn-primary" onclick='calculateCost(${stringifyObj})'>Submit</a>
  </div>
</div>
  `;
}

// fare calculateCost===========================================

function calculateCost(Obj) {
  const distanceInput = document.getElementById("distanceInput").value;
  const quantityInput = document.getElementById("quantityInput").value;

  const fare = document.getElementById("totalFare");
  const totalFare = fare.innerText = distanceInput * quantityInput * Obj.fearPerKilop;

  const text = document.getElementById("totalText");
  const totalText = text.innerText = distanceInput * quantityInput * Obj.text;
  totalText.innerText = totalFare

  const cost = document.getElementById("totalCost");
  totalCost.innerText = totalFare + totalText;
  
}

//================================= search for all available vhaicleName ==============================

document.getElementById("search-Btn").addEventListener("click", function () {
  const value = document.getElementById("search-Btn-Input").value;

  for (let i = 0; i < vhaicelArry.length; i++) {
    const element = vhaicelArry[i];
    if (value.toLowerCase() == element.vhaicleName.toLowerCase()) {
      document.getElementById("mainVhaicelSection").innerHTML = "";
      displayVaichel(element);
      return;
    }
  }
});
