async function getAllEmployees() {
  const data = await fetch('http://localhost:8081/employee')
  return await data.json()
}

async function getAllReceivers() {
  return fetch('http://localhost:8081/api/receiver')
    .then(data => data.json())
}

async function getAllSuppliers() {
  return fetch('http://localhost:8081/api/supplier')
    .then(data => data.json())
}

async function getReceiversBySupplier(id) {
  return fetch('http://localhost:8081/api/receiver/supplier/' + id)
    .then(data => data.json())
}

async function postSupplier(data) {
  console.log(data);
  return fetch('http://localhost:8081/api/supplier', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: data
  })
    .then(data => data.json())
}

export { getAllEmployees, getAllReceivers, getAllSuppliers, getReceiversBySupplier, postSupplier }