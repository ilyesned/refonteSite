let user = ({
    btn: document.querySelector(".btn_connect"),
    el : document.querySelector('input[type="email"]'),
    pass : document.querySelector('input[type="password"]'),
    login: "ilyesned@hotmail.com",
    mdp: 2022,
})
console.log(user.btn)
localStorage.setItem("email", user.login)
localStorage.setItem("mdp", user.mdp)
user.btn.addEventListener("click",(e)=>{
    e.preventDefault();
    user.el.value == user.login && user.pass.value == user.mdp ? alert("connexion réussie") : alert("connexion échouée")
})