import axios from 'axios';

export function getVisitors() {
  return axios.get('http://127.0.0.1:8000/visitors/')
    .then(response => response.data)
}

export function deleteVisitor(visitorId) {
  return axios.delete('http://127.0.0.1:8000/visitors/' + visitorId + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function addVisitor(visitor){
  return axios.post('http://127.0.0.1:8000/visitors/', {
    visitorId:null,
    FirstName:visitor.FirstName.value,
    LastName:visitor.LastName.value,
    RegisterNumber:visitor.RegisterNumber.value,
    Email:visitor.Email.value,
    PhoneNumber:visitor.PhoneNumber.value
  })
    .then(response=>response.data)
}

export function updateVisitor(visid, visitor) {
  return axios.put('http://127.0.0.1:8000/visitors/' + visid + '/', {
    FirstName:visitor.FirstName.value,
    LastName:visitor.LastName.value,
    RegisterNumber:visitor.RegisterNumber.value,
    Email:visitor.Email.value,
    PhoneNumber:visitor.PhoneNumber.value
  })
   .then(response => response.data)
}
