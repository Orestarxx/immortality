let content = document.getElementById('contentHolder');
let userIcon = document.getElementById('userInformation');
let userDiv = document.createElement('div');
userDiv.setAttribute('id','userDiv');
content.append(userDiv);

userIcon.addEventListener('click',()=>{
    if (userDiv.style.display === "block") {
                userDiv.style.display = "none";
        } else {
                userDiv.style.display = "block";
        }
})
