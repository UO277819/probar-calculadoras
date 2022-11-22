"use strict"
class CalculadoraRPN{
    constructor(){
        this.pantalla="";
        this.lineaActual="";
        this.pila=new Array();
    }

    numero(numero){
        this.pantalla+=numero;
        this.lineaActual+=numero;
        this.actualizarTextArea();
    }

    multiplicar(){
        var n2=this.pila.pop();
        var n1=this.pila.pop();
        this.pila.push(n1*n2);
        this.actualizarPantalla();
    }

    sumar(){
        var n2=this.pila.pop();
        var n1=this.pila.pop();
        this.pila.push(n1+n2);
        this.actualizarPantalla();
    }

    restar(){
        var n2=this.pila.pop();
        var n1=this.pila.pop();
        this.pila.push(n1-n2);
        this.actualizarPantalla();
    }

    dividir(){
        var n2=this.pila.pop();
        var n1=this.pila.pop();
        this.pila.push(n1/n2);
        this.actualizarPantalla();
    }

    sin(){
        var n=this.pila.pop();
        this.pila.push(Math.sin(n));
        this.actualizarPantalla();
    }

    cos(){
        var n=this.pila.pop();
        this.pila.push(Math.cos(n));
        this.actualizarPantalla();
    }

    tan(){
        var n=this.pila.pop();
        this.pila.push(Math.tan(n));
        this.actualizarPantalla();
    }

    asin(){
        var n=this.pila.pop();
        this.pila.push(Math.asin(n));
        this.actualizarPantalla();
    }

    acos(){
        var n=this.pila.pop();
        this.pila.push(Math.acos(n));
        this.actualizarPantalla();
    }

    atan(){
        var n=this.pila.pop();
        this.pila.push(Math.atan(n));
        this.actualizarPantalla();
    }

    raiz(){
        var n=this.pila.pop();
        this.pila.push(Math.sqrt(n));
        this.actualizarPantalla();
    }

    clear(){
        this.pantalla="";
        this.lineaActual="";
        this.pila=new Array();
        this.actualizarTextArea();
    }

    punto(){
        this.pantalla+=".";
        this.lineaActual+=".";
        this.actualizarTextArea();
    }

    actualizarPantalla(){
        var result="";
        for(var i=0;i<this.pila.length;i++){
            result+=this.pila[i]+"\n";
        }
        this.pantalla=result;
        this.actualizarTextArea();
    }

    actualizarTextArea(){
        document.querySelector("textarea:first-of-Type")
            .value=this.pantalla;
    }

    resolver(){
        if(this.lineaActual!=""){
            this.pila.push(parseFloat(this.lineaActual));
            this.pantalla+="\n";
            this.lineaActual="";
            this.actualizarTextArea();
        }
    }

    reconocerTeclas(){
        document.addEventListener('keydown',(event)=>{
            const tecla=event.key;
            if(tecla=='0' || tecla =="1" || tecla=="2"|| tecla=="3" || tecla=="4"
                || tecla=="5" || tecla=="6" || tecla=="7" || tecla=="8"
                || tecla=="9"){
                    this.numero(tecla);
            }else if(tecla=='+'){
                this.sumar();
            }else if(tecla=="-"){
                this.restar();
            }else if(tecla=="*"){
                this.multiplicar();
            }else if(tecla=="/"){
                this.dividir();
            }else if(tecla=="."){
                this.punto();
            }else if(tecla=="Enter" || tecla=="="){
                this.resolver();
            }else if(tecla=="C" || tecla=="c" || tecla=="Delete"){
                this.clear();
            }else if(tecla=="s" ){
                this.sin();
            }else if(tecla=="c"){
                this.cos();
            }else if(tecla=="t"){
                this.tan();
            }else if(tecla=="S" ){
                this.asin();
            }else if(tecla=="C"){
                this.acos();
            }else if(tecla=="T"){
                this.atan();
            }else if(tecla=="r" || tecla=="R"){
                this.raiz();
            }
        })
    }
}
var calculadora=new CalculadoraRPN();
calculadora.reconocerTeclas();