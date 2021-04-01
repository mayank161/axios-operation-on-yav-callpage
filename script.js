let button = document.getElementById('button');

button.onclick = () => {
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var Phone = document.getElementById('phone').value;
    console.log(Name);
    console.log(Email);
    console.log(Phone);
    const post =axios.post("https://crudcrud.com/api/c9d03e1e122746f5a9157c18d552a3ec/yavCallPage",{
        Name,Email,Phone
    })
    location.reload();
}
const get = axios.get("https://crudcrud.com/api/c9d03e1e122746f5a9157c18d552a3ec/yavCallPage")
    .then(data => {
        data.data.forEach(element => {
            document.getElementById('namO').innerHTML += `${element.Name}<br>`
            document.getElementById('emailO').innerHTML += `${element.Email}<br>`
            document.getElementById('phonO').innerHTML += `${element.Phone}<br>`
            document.getElementById('edit').innerHTM += `<button>EDIT</button> <br>`
            document.getElementById('delete').innerHTM += `<button>DELETE</button> <br>`
            console.log(element.Name)
        });
    })