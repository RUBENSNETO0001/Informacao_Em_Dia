document.getElementById("btn_background").addEventListener("click", function(){
    document.getElementById("header02_dropdown").style.display = "block";
    document.getElementById("fechar").addEventListener("click", function(){
        document.getElementById("header02_dropdown").style.display = "none";
    })
})