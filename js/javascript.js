function Mostrartipo() {
    var jan = open("Tipoaux.html", "",
    "location=no,status=no,width=250,height=200");   
    }

function Mostrarcapacidades() {
     open("Capacidadeaux.html", "",
    "location=no,status=no,width=340,height=320");
     }

var tabProdutos = [
    ["vazio", 0],
    ["SpringerSplit12000", "1.680,00"],
    ["SpringerParede12000", "1.890,00"],
    ["ConsulParede7500", "1.300,00"],
    ["ElginPortatil9000", "1.900,00"] ];
    
        
function Mostra(ind) {
    var foto = document.getElementById("vazio");
        var prec = document.getElementById("preco1");
    
            foto.src = "../img/" + tabProdutos[ind][0] + ".jpg";
            prec.innerHTML = " R$ " +
            tabProdutos[ind][1] ;
        }



function Verificartelefone( campo, tam ) {
    var most, carac, strTel = campo.value;
        
        if ( strTel.length != tam ) {
        alert("Txt" +campo.name
        + " tem de ter " +
        tam + " dígitos!");
        return false;
    }
    for ( most = 0; most < tam; most++ ) {
        carac = strTel.charAt(most);
        if ( (carac < '0') || (carac > '9')) {
        alert("Txt" +campo.name + " só pode ter" +
        " dígitos, caracter " +
        carac + " inválido!");
                
                return false;
                }
        
            }
         }

         var tabPrcProd = [ ["", 0],
         ["Split -", 1680],
         ["Parede -", 1890],
         ["Parede -", 1300],
         ["Portatil -", 1900] ];
        
         function Incluirlista( sel ) {
            var prod = sel.selectedIndex;
            if ( prod != 0 ) {
            var tip = tabPrcProd[prod][0];
            var prc = tabPrcProd[prod][1];
            sel.selectedIndex = 0;
            
        with ( sel.form ) {
        listaPedidos.value += tip + "  " +
        sel.options[prod].text + '\n';
        TxtTotal.value = prc + parseInt(TxtTotal.value);
        }
        }
        else
        alert("Nenhum Produto selecionado!");
        }

 

 



 