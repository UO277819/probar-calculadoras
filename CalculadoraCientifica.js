"use srtict";
class Calculadora extends CalculadoraMilan{
    
    constructor(){
        super();
        this.parentesisSinCerrar=false;
        this.parentesisIzq=0;
        this.parentesisDer=0;
        this.hyp=false;
        this.rad=false;
        this.arco=false;
        this.potencia=0;
    }

    parentesisD(){
        this.pantalla+=")";
        this.ultimo+=")";
        this.parentesisDer++;
        if(this.parentesisDer==this.parentesisIzq)
            this.parentesisSinCerrar=false;
    
        super.actualizarPantalla();
    }
    parentesisI(){
        this.pantalla+="(";
        this.ultimo+="(";
        this.parentesisIzq++;
        this.parentesisSinCerrar=true;
        super.actualizarPantalla();
    }
    numero(numero){
        super.numero(numero);
    }

    punto(){
        super.decimales();
    }

    resolver(){
        super.resolver();
    }
    suma(){
        super.suma();
        if(this.parentesisSinCerrar){
            this.ultimo+="+";
        }
    }
    resta(){
        super.resta();
        if(this.parentesisSinCerrar){
            this.ultimo+="-";
        }
    }
    multiplicar(){
        super.multiplicar();
        if(this.parentesisSinCerrar){
            this.ultimo+="*";
        }
    }
    dividir(){
        super.dividir();
        if(this.parentesisSinCerrar){
            this.ultimo+="/";
        }
    }
    borrar(){
        super.borrar();
    }

    clear(){
        super.clear();
    }

    pi(){
        this.pantalla+=Math.PI;
        super.actualizarPantalla();
    }

    factorial(){
        this.pantalla=this.pantalla.substring(0,this.pantalla.length-this.ultimo.length);
        if(Number(this.ultimo)>=0){
           var fact=1;
           for(var i=1;i<this.ultimo.length;i++){
                fact*=i;
           } 
           this.pantalla=fact;
           super.actualizarPantalla();
        }
    }

    masMenos(){
        super.masMenos();
    }

    raiz(){
        super.raiz();
    }

    elevar2(){
        this.pantalla=this.pantalla.substring(0,this.pantalla.length-this.ultimo.length);
        this.pantalla+=Math.pow(eval(this.ultimo),2);
        this.ultimo=Math.pow(2,eval(this.ultimo));
        super.actualizarPantalla();
    }

    elevarxy(){
        this.pantalla+="**";
        if(this.parentesisSinCerrar){
            this.ultimo+="**";
        }else{
            this.ultimo="";
        }
        super.actualizarPantalla();
    }
    memMas(){
        super.menMas();
    }
    menMeno(){
        super.menMenos();
    }
    memMr(){
        super.memoria();
    }
    memMs(){
        this.resolver();
        this.memoria=this.pantalla;
    }
    menMc(){
        this.memoria=0;
    }
    Changehyp(){
        if(this.hyp){
            this.hyp=false;
        }else{
            this.hyp=true;
            this.arco=false;
        }
    }
    ChangeArco(){
        if(this.arco){
            this.arco=false;
        }else{
            this.arco=true;
            this.hyp=false;
        }
    }
    CahngeRad(){
        if(this.rad){
            this.rad=false;
        }else{
            this.rad=true;
        }
    }
    exponencial(){
        this.pantalla+="e";
        if(this.parentesisSinCerrar){
            this.ultimo+="e";
        }else{
            this.ultimo="";
        }
        super.actualizarPantalla();
    }
    mod(){
        this.pantalla+="%";
        if(this.parentesisSinCerrar){
            this.ultimo+="%";
        }else{
            this.ultimo="";
        }
        super.actualizarPantalla();
    }
    fe(){
        var numero=Number(this.ultimo);
        var cont=0;
        numero=numero/10;
        while(numero!=0){
            numero=numero/10;
            cont++;
        }
        this.pantalla+="e-"+cont;
        this.ultimo+="e"+cont;
        
    }
    elevar10x(){
        this.pantalla+="10**";
        this.ultimo+="10**";
        super.actualizarPantalla();
    }
    logaritmo(){
        this.pantalla=this.pantalla.substring(0,this.pantalla.length-this.ultimo.length);
        this.pantalla+=Math.log10(eval(this.ultimo));
        this.ultimo=Math.log10(eval(this.ultimo));
        super.actualizarPantalla();
    }
    sin(){
        if(Number(this.ultimo)){
            this.pantalla=this.pantalla.substring(0,this.pantalla.length-this.ultimo.length);
            if(this.rad){
                this.ultimo=this.ultimo*Math.PI/180;
            }
            if(this.hyp){
                this.pantalla+=Math.asih(eval(this.ultimo));
                this.ultimo=Math.asih(eval(this.ultimo));
            }else if(this.arco){
                this.pantalla+=Math.asin(eval(this.ultimo));
                this.ultimo=Math.asin(eval(this.ultimo));
            }
            else{
                this.pantalla+=Math.sin(eval(this.ultimo));
                this.ultimo=Math.sin(eval(this.ultimo));
            }
            super.actualizarPantalla();
        }
    }
    cos(){
        if(Number(this.ultimo)){
            this.pantalla=this.pantalla.substring(0,this.pantalla.length-this.ultimo.length);
            if(this.rad){
                this.ultimo=this.ultimo*Math.PI/180;
            }
            if(this.hyp){
                this.pantalla+=Math.cosh(eval(this.ultimo));
                this.ultimo=Math.cosh(eval(this.ultimo));
            }else if(this.arco){
                this.pantalla+=Math.acos(eval(this.ultimo));
                this.ultimo=Math.acos(eval(this.ultimo));
            }else{
                this.pantalla+=Math.cos(eval(this.ultimo));
                this.ultimo=Math.cos(eval(this.ultimo));
            }
            super.actualizarPantalla();
        }
    }
    tan(){
        if(Number(this.ultimo)){
            this.pantalla=this.pantalla.substring(0,this.pantalla.length-this.ultimo.length);
            if(this.rad){
                this.ultimo=this.ultimo*Math.PI/180;
            }
            if(this.hyp){
                this.pantalla+=Math.tanh(eval(this.ultimo));
                this.ultimo=Math.tanh(eval(this.ultimo));
            }else if(this.arco){
                this.pantalla+=Math.acos(eval(this.ultimo));
                this.ultimo=Math.acos(eval(this.ultimo));
            }else{
                this.pantalla+=Math.tan(eval(this.ultimo));
                this.ultimo=Math.tan(eval(this.ultimo));
            }
            super.actualizarPantalla();
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
                this.suma();
            }else if(tecla=="-"){
                this.resta();
            }else if(tecla=="*"){
                this.multiplicar();
            }else if(tecla=="/"){
                this.dividir();
            }else if(tecla=="."){
                this.punto();
            }else if(tecla=="M"){
                this.memMas();
            }else if(tecla=="m"){
                this.menMeno();
            }else if(tecla=="R"){
                this.memMr();
            }else if(tecla=="S"){
                this.memMs();
            }else if(tecla=="C"){
                this.memMc();
            }else if(tecla=="B" || tecla=="b"){
                this.borrar();
            }else if(tecla=="Enter" || tecla=="="){
                this.resolver();
            }else if(tecla=="C" || tecla=="c" || tecla=="Delete"){
                this.clear();
            }else if(tecla=="x" || tecla=="X"){
                this.elevar2();
            }else if(tecla=="y"){
                this.elevarxy();
            }else if(tecla=="s" ){
                this.sin();
            }else if(tecla=="c"){
                this.cos();
            }else if(tecla=="t" || tecla=="T"){
                this.tan();
            }else if(tecla=="r" || tecla=="R"){
                this.raiz();
            }else if(tecla=="g" ){
                this.masMenos();
            }else if(tecla=="d"){
                this.elevar10x();
            }else if(tecla=="l" || tecla=="L"){
                this.logaritmo();
            }else if(tecla=="e" || tecla=="E"){
                this.exponencial();
            }else if(tecla=="r"){
                this.mod();
            }else if(tecla=="p" || tecla=="P"){
                this.pi();
            }else if(tecla=="f"){
                this.factorial();
            }else if(tecla=="D"){
                this.parentesisD();
            }else if(tecla=="I"){
                this.parentesisI();
            }else if(tecla=="D"){
                this.rad();
            }else if(tecla=="Y"){
                this.hyp();
            }else if(tecla=="F"){
                this.fe();
            }else if(tecla=="A" || tecla=="a"){
                this.ChangeArco();
            }
        })
    }
}

var calculadora=new Calculadora();
calculadora.reconocerTeclas();