/* Opgave 1*/
const personName = "Jens Jensen"
const yearsWorkedInCompany = 23

const message = ` <h2> Hej ${personName} du har nu arbejdet i vores virksomhed i ${yearsWorkedInCompany} år.</h2>`

const container = document.getElementById(`message`)
container.innerHTML = message
// din kode her


/* Opgave 2*/

const myData = [
  { navn: "Gifflar", beskrivelse: "En pose af gifflar med kanel", pris: 18 },
  { navn: "Monster", beskrivelse: "En energidrik med smag af anananas og kokos", pris: 20 },
  { navn: "Nudler", beskrivelse: "En pakke med instant nudler", pris: 10 }
];


const productList = myData.map(item => `
  <article class="produkt">
      <h2>${item.navn}</h2>
      <p>${item.beskrivelse}</p>
      <p>Pris: ${item.pris} kr.</p>
  </article>
`)
const productListContainer = document.getElementById("produktListe");
productListContainer.innerHTML = productList;

/* Opgave 3 - skriv videre på koden her: */
const myForm = document.getElementById('formular');
const submitButton = document.getElementById('indsend-knap');
const personList = document.getElementById('person-liste');

// array med person data
const myPersons = [];


submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  // hent data fra form
  const name = myForm.elements['navn'].value;
  const age = myForm.elements['alder'].value;

  // tilføj person til array
  myPersons.push({ navn: name, alder: age });
    console.log(myPersons);

    personList.innerHTML = '';
    updatePersonList();
});


// funktion til at opdatere person listen
function updatePersonList() {
  personList.innerHTML = myPersons.map(person => `
    <li>${person.navn} - ${person.alder} år</li>
  `).join('');
}