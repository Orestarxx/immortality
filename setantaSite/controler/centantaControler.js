
let content = document.getElementById('contentHolder');

//інформація про юзера
let userIcon = document.getElementById('userInformation');
let wall = document.createElement("div");
wall.setAttribute('id','wall');
wall.style.display = 'none'
content.append(wall)
let userDiv = document.createElement('div');
userDiv.setAttribute('id','userDiv');
wall.append(userDiv);

userIcon.addEventListener('click',()=>{
    if (wall.style.display === "block") {
                wall.style.display = "none";
        } else {
                wall.style.display = "block";
        }
})

let search = document.getElementById('search');

