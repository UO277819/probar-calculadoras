
class CalculadoraEspecilizada extends CalculadoraRPN{
    constructor(){
        super();
        this.consumoPersona=4216;//La media de un dia=136l
        this.fugasMes=465;//La media de un dia =15l
        this.precioAgua=1.9;//1m^3 de agua=1,90€
        this.deposito=600;//Cada piso tiene un deposito de reserva de 600l
        this.agua;//Guarda el consumo de agua
    }

    consumoAguaVivienda(){
        this.calcularV();
        this.pila.push(this.agua);
        super.actualizarPantalla();
    }
    consumoAguaEdificio(){
        this.calcularE();
        this.pila.push(this.agua);
        super.actualizarPantalla();
    }

    precioVivienda(){
        this.calcularV();
        var result=(this.agua*this.precioAgua)/1000;
        this.pila.push(result);
        super.actualizarPantalla();
    }

    precioEdificio(){
        this.calcularE();
        var result=(this.agua*this.precioAgua)/1000;
        this.pila.push(result);
        super.actualizarPantalla();
    }

    calcularV(){
        var fugas=this.pila.pop();
        var personas=this.pila.pop();
        this.agua=personas*this.consumoPersona+fugas*this.fugasMes;
    }

    calcularE(){
        var fugas=this.pila.pop();
        var personas=this.pila.pop();
        var pisos=this.pila.pop();
        this.agua=personas*this.consumoPersona+fugas*this.fugasMes+pisos*this.deposito;
    }

    calcularPrecio(){
        var litros=this.pila.pop();
        var result=litros*this.precioAgua/1000;
        this.pila.push(result);
        super.actualizarPantalla();
    }
    
    reconocerTeclas(){
        document.addEventListener('keydown',(event)=>{
            const tecla=event.key;
            if(tecla=='0' || tecla =="1" || tecla=="2"|| tecla=="3" || tecla=="4"
                || tecla=="5" || tecla=="6" || tecla=="7" || tecla=="8"
                || tecla=="9"){
                    super.numero(tecla);
            }else if(tecla=='+'){
                super.sumar();
            }else if(tecla=="-"){
                super.restar();
            }else if(tecla=="*"){
                super.multiplicar();
            }else if(tecla=="/"){
                super.dividir();
            }else if(tecla=="."){
                super.punto();
            }else if(tecla=="Enter" || tecla=="="){
                super.resolver();
            }else if(tecla=="C" || tecla=="c" || tecla=="Delete"){
                super.clear();
            }else if(tecla=="s" ){
                super.sin();
            }else if(tecla=="c"){
                super.cos();
            }else if(tecla=="t"){
                super.tan();
            }else if(tecla=="S" ){
                super.asin();
            }else if(tecla=="C"){
                super.acos();
            }else if(tecla=="T"){
                super.atan();
            }else if(tecla=="r" || tecla=="R"){
                super.raiz();
            }else if(tecla=="e"){
                this.consumoAguaEdificio();
            }else if(tecla=="E"){
                this.precioEdificio();
            }else if(tecla=="v"){
                this.consumoAguaVivienda();
            }else if(tecla=="V"){
                this.precioVivienda();
            }else if(tecla=="A" || tecla=="a"){
                this.precioAgua();
            }
        })
    }
}

var calculadora=new CalculadoraEspecilizada();
calculadora.reconocerTeclas();