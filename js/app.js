//DOM: (Document object model)
//Arvore e cada tag filha é um nó, podemos acessar a DOM pelo js

var btnIncrementas = document.querySelectorAll(".btn-incrementa");

var btnDecrementas = document.querySelectorAll(".btn-decrementa");

//document engloba tudo do html (Pai)

//querySelectorAll pega todas as classes e o querySelector pega só a primeira

var formPedido = document.forms.pedido;


for(let botao of btnIncrementas){

    botao.addEventListener("click", incrementa);

    //addEventListener vai verificar cada click no botão e quando clicar dispara a função

    function incrementa(){
        var item = botao.closest(".item");
        //closet serve pra pegar o valor mais proximo do parametro, no caso o .item


        var input = item.querySelector(".quantidade");
        
        
        input.value++;
    
        var preco = pegaPrecoItem(item);

        addTotal(preco);


    };
};

for(let botao of btnDecrementas){

    botao.addEventListener("click", decrementa);


    function decrementa(){

        var item = botao.closest(".item");

        var input = item.querySelector(".quantidade");

        if(input.value > 0){
        input.value--;
        var preco = pegaPrecoItem(item);
        addTotal(-preco);
        };

        
        
    };

};



formPedido.addEventListener("submit", (event) => {
    

    var contador = 0;

    var inputs = formPedido.querySelectorAll("input.quantidade");

    for(let input of inputs){
        if(input.value > 0){
            contador++;
        };
    };

    if(contador === 0){
        alert("Deve ter pelo menos 1 pizza no pedido.");
        event.preventDefault();
    };
});

//Funções auxiliares
function pegaPrecoItem(item){

    var precoItem = item.querySelector(".preco-item");

    return(Number(precoItem.textContent));
};


function addTotal(preco){
    var Total = document.querySelector("#total");
    Total.textContent = preco + Number(Total.textContent);
};

