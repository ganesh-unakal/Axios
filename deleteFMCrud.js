function deleteFromCrud(event){
    event.preventDefault()
    const name = event.target.username.value
    const email = event.target.mail.value
    const Phone = event.target.phno.value

    const obj ={
        name,
        email,
        Phone
    }

    axios.post('https://crudcrud.com/api/9c9c122d5e294355a418350ede70f39a/appiontmentData', obj )
        .then((response) => {
            showUserOnScreen(response.data)
            // console.log(response)
        })
        .catch(error => console.log(error))
}
    
   

    window.addEventListener('DOMContentLoaded', () =>{
axios.get('https://crudcrud.com/api/9c9c122d5e294355a418350ede70f39a/appiontmentData')
.then((response) => {
    console.log(response)
    for (var i = 0; i< response.data.length ; i++){
        showUserOnScreen(response.data[i])
    }
})
.catch((err) => {console.log(err)})
})


    function showUserOnScreen(user){
        document.getElementById('name').value = ''
document.getElementById('mail').value = ''
document.getElementById('phno').value = ''
const parent = document.getElementById('listofusers')
const child = `<li id = ${user._id}> ${user.name} - ${user.email} -${user.phone}  
    <button onclick=editUser('${user.email}','${user.name}','${user.phone}') 
    style = "border : 3px solid green;">Edit </button> 
    <button onclick=deleteUser('${user._id}') 
    style = "border : 3px solid red;">Delete</button> </li> <br>`
parent.innerHTML = parent.innerHTML + child 
    }

    function deleteUser(userId){
axios.delete(`https://crudcrud.com/api/9c9c122d5e294355a418350ede70f39a/appiontmentData/${userId}`)
.then(() => {
    removeUserFromScreen(userId)
}).catch(err => console.log(err))
}

function removeUserFromScreen(userId){
let parent = document.getElementById('listofusers')
let childToBeDeleted = document.getElementById(userId)
parent.removeChild(childToBeDeleted)
}
   