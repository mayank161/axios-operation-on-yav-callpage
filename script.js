let button = document.getElementById('button');
let delItem = document.getElementById('delete');

// it will post the data to the server at crudcrud.com
button.onclick = () => {
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var Phone = document.getElementById('phone').value;
    const post =axios.post("https://crudcrud.com/api/f8b96cbbe71244ee890a7f64e3658846/yavCallPage",{
        Name,Email,Phone
    }).then(location.reload());
}
// it will get the data from server crudcdud.com link is in the axios
const get = axios.get("https://crudcrud.com/api/f8b96cbbe71244ee890a7f64e3658846/yavCallPage")
    .then(data => {
        data.data.forEach(element => {
            document.getElementById('namO').innerHTML += `${element.Name}<br>`
            document.getElementById('emailO').innerHTML += `${element.Email}<br>`
            document.getElementById('phonO').innerHTML += `${element.Phone}<br>`
            
            var addButton = document.createElement('button');
            addButton.id = element._id;
            addButton.appendChild(document.createTextNode('edit'));
            document.getElementById('edit').appendChild(addButton);
            document.getElementById('edit').appendChild(document.createElement('br'));

            var delButton = document.createElement('button');
            delButton.id = element._id;
            delButton.appendChild(document.createTextNode('delete'));
            delItem.appendChild(delButton);
            delItem.appendChild(document.createElement('br'));
        });
    })

    // it will delete item by specific id attached at last
delItem.onclick = (e) => {
  axios.delete(`https://crudcrud.com/api/f8b96cbbe71244ee890a7f64e3658846/yavCallPage/${e.target.id}`)
  .then(location.reload());
}