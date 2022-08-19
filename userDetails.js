
var user =JSON.parse(localStorage.getItem("userDetails"));
for (let index = 0; index < user.length; index++) {
    myTable.innerHTML += 
    `<tr>
    <td>${index+1}</td>
    <td>${user[index].firstName}</td>
    <td>${user[index].lastName}</td>
    <td>${user[index].email}</td>
    <td>
    <button class="btn btn-warning" onclick="edit(${index})">Edit</button>
    <button class="btn btn-danger ms-2" onclick="del(${index})">Del</button>
    </td>
    </tr>`
}

const del=(i)=> {
    user=user.splice(!i,1)
    localStorage.setItem("userDetails",JSON.stringify(user))
    location.reload()
}
const edit=(i)=> {
    localStorage.setItem("index",JSON.stringify(i))
    window.location.href="editPage.html"
}