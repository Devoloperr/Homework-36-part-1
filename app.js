let btns = document.querySelectorAll("button")
btns.forEach(btn => {
    btn.addEventListener("click", (e) => { 
        if (e.target.style.color == "lightgray") {
            e.target.style.color = " gray"
        }else  {
            e.target.style.color = "lightgray"
        }
    })
}) 