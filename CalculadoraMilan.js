"use strict";
class CalculadoraMilan{
    
    constructor(){
        this.pantalla="";
        this.memoria=0;
        this.ultimo="";
    }
    numero(numero) {  
        this.pantalla+=numero;
        this.ultimo+=numero;
        this.actualizarPantalla();
    }
    suma(){
        this.pantalla+="+";
        this.ultimo="";
       this.actualizarPantalla();
    }
    resta(){
        this.pantalla+="-";
        this.ultimo="";
       this.actualizarPantalla();
    }
    multiplicar(){
        this.pantalla+="*";
        this.ultimo="";
       this.actualizarPantalla();
    }
    dividir(){
        this.pantalla+="/";
        this.ultimo="";
       this.actualizarPantalla();
    }
    clear(){
        this.pantalla="";
        this.ultimo="";
       this.actualizarPantalla();
    }
    resolver(){
        try{
            this.pantalla=""+eval(this.pantalla);
            this.actualizarPantalla();
            this.ultimo=this.pantalla;
        }catch(e){
            document.querySelector("input[type=text]").value=e;
        }
        
    }
    menMenos(){
        try{
            this.memoria=eval(this.memoria+"-"+this.pantalla);
        }catch(e){
            document.querySelector("input[type=text]").value=e;
        }
    }
    menMas(){
        try{
            this.memoria=eval(this.memoria+"+"+this.pantalla);
        }catch(e){
            document.querySelector("input[type=text]").value=e;
        }
    }
    memoria(){
        document.querySelector("input[type=text]").value=this.memoria;
    }
    decimales(){
        this.pantalla+=".";
        this.ultimo+=".";
        this.actualizarPantalla();
    }
    porcentaje(){
        this.pantalla=this.pantalla.substring(0,this.pantalla.length-this.ultimo.length);
        this.pantalla+=(eval(this.ultimo+"/100"));
        this.ultimo=(eval(this.ultimo));
        this.actualizarPantalla();
    }
    masMenos(){
        this.pantalla=this.pantalla.substring(0,this.pantalla.length-this.ultimo.length);
        this.ultimo="(-"+this.ultimo+")";
        this.pantalla+=this.ultimo;
        this.actualizarPantalla();
    }
    raiz(){
        this.pantalla=this.pantalla.substring(0,this.pantalla.length-this.ultimo.length);
        this.pantalla+=Math.sqrt(eval(this.ultimo));
        this.ultimo=Math.sqrt(eval(this.ultimo));
        this.actualizarPantalla();
        
    }
    borrar(){
        if(this.pantalla!=""){
            this.pantalla=this.pantalla.substring(0,this.pantalla.length-1);
        }
        if(this.ultimo!=""){
            this.ultimo=this.ultimo.substring(0,this.ultimo.length-1);
        }
        this.actualizarPantalla();
    }
    reconocerTeclas(){
        document.addEventListener('keydown',(event)=>{
            const tecla=event.key;
            if(tecla=='0' || tecla =="1" || tecla=="2"|| tecla=="3" || tecla=="4"
                || tecla=="5" || tecla=="6" || tecla=="7" || tecla=="8"
                || tecla=="9"){
                    this.numero(tecla);
            }else if(tecla=='+'){
                this.suma();
            }else if(tecla=="-"){
                this.resta();
            }else if(tecla=="*"){
                this.multiplicar();
            }else if(tecla=="/"){
                this.dividir();
            }else if(tecla=="."){
                this.decimales();
            }else if(tecla=="M"){
                this.menMas();
            }else if(tecla=="m"){
                this.menMenos();
            }else if(tecla=="R"){
                this.memoria();
            }else if(tecla=="Enter" || tecla=="="){
                this.resolver();
            }else if(tecla=="C" || tecla=="c" || tecla=="Delete"){
                this.clear();
            }else if(tecla=="r" || tecla=="R"){
                this.raiz();
            }else if(tecla=="g" || tecla=="G"){
                this.masMenos();
            }else if(tecla=="B" || tecla=="b"){
                this.borrar();
            }
        })
    }
    actualizarPantalla(){
        document.querySelector("input[type=text]").value=this.pantalla;
    }
}