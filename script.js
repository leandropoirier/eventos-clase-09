class User {
    constructor(username, work, date) {
        this.username = username
        this.work = work
        this.date = date
    }
}

const  users = []

const form = document.getElementById('idForm')
const divUsers = document.getElementById('divUsers')
const botonUsers = document.getElementById('botonUsers')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    let username = document.getElementById('idUser').value 
    let work = document.getElementById('idWork').value  
    let date = document.getElementById('idDate').value 

    const user = new User(username, work, date)
    users.push(user)
    console.log(users)

    form.reset()
})

botonUsers.addEventListener('click', () => {
    users.forEach(user => {
        divUsers.innerHTML += `
        <div class="card" style="width: 20rem; margin:3px;">
            <div class="card-body">
                <h5 class="card-title">${user.username}</h5>
                <p class="card-text">${user.work}</p>
                <p class ="card-text2"</p>${user.date}
            </div>
        </div>
        
        `
    })
})