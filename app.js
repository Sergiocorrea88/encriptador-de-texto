    const textarea = document.querySelector('.cuadroTexto');
    const imagenMuñecoLupa = document.querySelector(".imagenMuñeco");
    const loaderBola = document.querySelector(".loader");
    const h2 = document.querySelector(".ladoDerecho__h2");
    const p = document.querySelector(".ladoDerecho__p");
    const botonEncriptar = document.querySelector(".botonesCaja__encriptar");
    const botonDesencriptar = document.querySelector(".botonesCaja__desencriptar");
    const botonCopiar = document.querySelector(".botonesCaja__copiar");

    const vocales = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];

    function encriptarTexto(entradaTexto){
        let textoEncriptado="";
        for (let i = 0; i< entradaTexto.length ; i++){
            let letras = entradaTexto[i];
            let encriptacion = letras;
        for (let v = 0; v<vocales.length;v++)
        
        if (letras === vocales [v][0]) {
            encriptacion = vocales[v][1];
        break;          
        }
        textoEncriptado += encriptacion;
     }
    
     return textoEncriptado;

    }

    function desencriptarTexto(entradaTexto){
        let textoDesencriptado=entradaTexto;
        for (let i = 0; i< vocales.length ; i++){
            let regex = new RegExp(vocales[i][1], "g");
            textoDesencriptado = textoDesencriptado.replace(regex, vocales[i][0]);
        }
        return textoDesencriptado;
    }

    textarea.addEventListener("input", (e) => {
        imagenMuñecoLupa.style.display = "none"; 
        loaderBola.style.display = "inline-block";
        h2.style.display = "none";
        p.textContent = "";

    });
    
    botonEncriptar.addEventListener("click", (e)=>{
        e.preventDefault();
        let entradaTexto = textarea.value.toLowerCase();
        let textoEncriptado = encriptarTexto(entradaTexto);
        p.textContent = textoEncriptado;
        botonCopiar.style.display = "inline-block";
        loaderBola.style.display = "none";
        h2.style.display = "Mensaje Encriptado";

    })

    botonDesencriptar.addEventListener("click", (e)=>{
        e.preventDefault();
        let entradaTexto = textarea.value.toLowerCase();
        let textoDesencriptado = desencriptarTexto(entradaTexto);
        p.textContent = textoDesencriptado;
        botonCopiar.style.display = "inline-block";
        loaderBola.style.display = "none";
    })

    botonCopiar.addEventListener("click", ()=>{
        let copia = p.textContent;
        navigator.clipboard.writeText(copia)
        p.textContent = "Texto Copiado!!"

    })