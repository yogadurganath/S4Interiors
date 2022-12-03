const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbarwithtoggler",
})

function formSubmit() {
  const name = document.getElementById("formName").value
  const ph = document.getElementById("formPhNo").value
  const email = document.getElementById("formEmail").value
  const requirement = document.getElementById("formRequirement").value
  const address = document.getElementById("formAddr").value
  const city = document.getElementById("formCity").value
  const state = document.getElementById("formState").value
  const pincode = document.getElementById("formPincode").value
  console.log(name)
  fetch(
    `/api/email-api?name=${name}&ph=${ph}&email=${email}&requirement=${requirement}&add=${address}&city=${city}&state=${state}&pin=${pincode}`
  ).then((res) => {
    console.log(response.json())
  })
}
