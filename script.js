let button = document.getElementById('button');

button.onclick = () => {
    let Name = document.getElementById('name').value;
    let Email = document.getElementById('email').value;
    let Phone = document.getElementById('phone').value;
    console.log(Name);
    console.log(Email);
    console.log(Phone);
    const dt =axios.post("https://crudcrud.com/api/346877b6e03449509343cf4a9ac7370c/yavCallPage",{
        Name,Email,Phone
    }).then(data => console.log(data))
}
