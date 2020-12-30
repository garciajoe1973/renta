let flag = 0;
function formulaFinanciera() {
	var a = "a";
	if (document.fformula.formula[0].checked) { a = "Co"};
	if (document.fformula.formula[1].checked) { a = "Cf"};
	if (document.fformula.formula[2].checked) { a = "i"};
	if (document.fformula.formula[3].checked) { a = "n"};

    hh.innerHTML="Elegisteee como incognita: "+ a;
    hclave.style.padding = "10px";
    hclave.innerHTML="Calculo ";

   // ------------------CO----------------------------------------------------------------
     if (a == "Co") {
     	  if (flag == 1) { l1.innerHTML=""}; 
           flag = 1 ;
           inputCf();
           inputI();
           inputN();     
           inputBoton(a);                 
              jj.innerHTML="El Capital Inicial es :           ";
              document.getElementById("clickMe").onclick =  () => {     	                        	
                                       var cff = ii =nn = 0 ;
                                       var Cff = document.getElementsByName("Cf")[0].value;
                                       var ii = document.getElementsByName("i")[0].value;
                                       var nn = document.getElementsByName("n")[0].value;
                                    
                                       var Coo = parseInt(Cff) / Math.pow ((1 + parseFloat (ii)), parseInt(nn)) ;
                                           Coo = Coo.toFixed(2);
                                                  jj.innerHTML="El Capital Inicial es : Co =  "+ Coo;        	             
	                                             alert( '   El Capital Inicial Co es : '+ Coo ) ;
	                                                   }
                          }
    // --------------------------------------------CF------------------------------------------------------------   
           if (a == "Cf") { 
           
                 if (flag == 1) { l1.innerHTML=""};             
                 flag = 1;             
                 jj.innerHTML="El Capital Final Es : ";
                 inputCo();
                 inputI();
                 inputN();
                 inputBoton(a);
                 document.getElementById("clickMe").onclick =  ()=> {             	                        	
                                       var coo = ii =nn = 0 ;
                                       var Coo = document.getElementsByName("Co")[0].value;
                                       var ii = document.getElementsByName("i")[0].value;
                                       var nn = document.getElementsByName("n")[0].value;

                                       var Cff = parseInt(Coo) * Math.pow ((1 + parseFloat (ii)), parseInt(nn)) ;
                                           Cff = Cff.toFixed(2);

                                                 jj.innerHTML="El Capital Final es : Cf =  "+ Cff;
                                                 alert( '   El Capital Final Cf es : '+ Cff ) ;
                                                }
                                            }                       
// --------------------------------------------------------i-----------------------------------------------
            if (a == "i") {            
                 if (flag == 1) { l1.innerHTML=""};             
                 flag = 1;                      
                 jj.innerHTML="El Interes es : ";
                  inputCo();                          
                  inputCf();
                  inputN();
                  inputBoton(a);              
                  document.getElementById("clickMe").onclick = () => {             	                        	
                                       var coo = Cff =nn = 0 ;
                                       var Coo = document.getElementsByName("Co")[0].value;
                                       var Cff = document.getElementsByName("Cf")[0].value;
                                       var nn = document.getElementsByName("n")[0].value;

                                       var ii = Math.pow ((parseInt(Cff) / parseInt(Coo)),(1/parseInt (nn))) - 1; 
                                           ii = ii.toFixed(3);
                                                 jj.innerHTML="El Interes es : i =  "+ ii;
                                                 alert( '   El Interes i es : '+ ii ) ;
                                                }
            }  
 // --------------------------------------------------------n --------------------------------------------------------------------                                
             if (a == "n") {            
                 if (flag == 1) { l1.innerHTML=""};             
                 flag = 1;             
                 jj.innerHTML="La cantidad de periodos n son: ";
                 inputCo();                           
                 inputCf();
                 inputI();
                 inputBoton(a);
                 document.getElementById("clickMe").onclick = () => {             	                        	
                                       var Coo = Cff =ii = 0 ;
                                       var Coo = document.getElementsByName("Co")[0].value;
                                       var Cff = document.getElementsByName("Cf")[0].value;
                                       var ii = document.getElementsByName("i")[0].value;

                                       var nn = (Math.log (parseInt(Cff) / parseInt(Coo))) / (Math.log (1 + parseFloat(ii)));
                                           nn = nn.toFixed(2);
                                                 jj.innerHTML="la cantidad de  periodos : n =  "+ nn;
                                                 alert( '   La cantidad de periodos n es : ' +nn ) ;
                                                }
            }                       
                                                          
 }
function inputCf() {
    var input = document.createElement("input");
    input.type="number";
    input.name="Cf";
    input.value="1000000";
    input.step ="50000";
l1.appendChild(input);

var labell = document.createTextNode("  Ingresa el Capital Final Cf ");
    creaEtiqueta(labell);
 

}
function inputCo() {
    var input = document.createElement("input");
    input.type="number";
    input.name="Co";
    input.value="1000000";
    input.step ="50000";
    l1.appendChild(input);            
var labell = document.createTextNode("  Ingresa el Capital Inicial Co ");
    creaEtiqueta(labell);
    

}
function inputI() {
    var input = document.createElement("input");
    input.type="number";
    input.name="i";
    input.id = "i";
    input.step ="0.005";
    input.value= ".05";
    l1.appendChild(input);
    var labell = document.createTextNode("  Ingresa el Interes i");
        creaEtiqueta(labell);
    

}
function inputN() {
    var input = document.createElement("input");
    input.type="number";
    input.name="n";
    input.value="20";
    l1.appendChild(input);
    var labell = document.createTextNode("  Ingresa la cantidad de periodos n");
        creaEtiqueta(labell);

}
function inputBoton(a) {
    var inp= document.createElement("input");
    inp.type="button";
    inp.id = "clickMe";
    inp.name="z";
    inp.value="Calcular : " + a;
    l1.appendChild(inp);

}
function creaEtiqueta(labell) {
    l1.appendChild(labell);
    l1.appendChild(document.createElement("br"));
    l1.appendChild(document.createElement("br"));

}


