// let a = 345;
// let b = 345;
// console.log(a + b);
// console.log(a === b);

// // AND: &&
// // OR: ||

// a = true
// b = false 
// console.log(a && b);
// console.log(a || b);

// // Decisión   IF (condición){}

// if (a<b){
//     console.log( "a es mayo que b")
// }

// if (a>b){
//     console.log( "a es mayo que b")
// }else {
//     console.log(" a des menor que b")
// }    

//  clase 2 funciones JS
  // solicitar al usuario ingresar su nombre e imprimirlo
 let nombre ;
 nombre = prompt ("ingresa tu nombre");
 console.log(" Hola " + nombre);


 function calcular( base, altura){ 
    const area = base*altura;
    const perimetro = 2*(base + altura);
   
   // valores que retorna la función a la que se hace llamado
    return [perimetro,area];
} 
    //Retornar valores
    let resultado = calcular (5, 4);
     // imprimir los valores
     console.log(resultado[0]);
     console.log(resultado[1]);

     function calcularHipotenusa(a, b){
        // Math.pow(a,2)
        // para exponenciales se utiliza esta forma
        const hipotenusa = Math.sqrt(a**2+b**2);
        return hipotenusa ;
    }
    let resultado1 = calcularHipotenusa(10, 20);
    console.log(resultado1);

    function calculadora(c,d){ 
        document.writeln(c+d)   ;
        document.writeln(c-d);
        document.writeln(c*d);
        document.writeln(c/d);

        console.log(c+d);
        console.warn(c-d);
        console.error(c*d);
        console.info(c/d);
    }

    calculadora(5,4);

    function media(){
          let campo_x = document.getElementById('x');
          let campo_y = document.getElementById('y');
          let campo_z = document.getElementById('z');
         
          //casting: transformar de manera explicita el tipo de variables en js
        
          let x = parseInt(campo_x.value);
          let y = parseInt(campo_y.value);
          let z= parseInt(campo_z.value);

          let promedio = (x+y+z)/3
          console.log(promedio)
           return promedio;
        //    let x = parseInt(document.getElementById('x').value);
        //    let y = parseInt(document.getElementById('y').value);
        //    let z = parseInt(document.getElementById('z').value);
        //    let promedio = (x+y+z)/3
    };

    function nota_final(){
        let nota_1 = parseFloat(document.getElementById('nota_1').value);
        let nota_2 = parseFloat(document.getElementById('nota_2').value);
        let nota_3 = parseFloat(document.getElementById('nota_3').value);
        let promedio_nota = (nota_1+nota_2+nota_3)/3;
        let por_parciales = promedio_nota*0.55;

        let nota_ex = parseFloat(document.getElementById('nota_ex').value);
        let por_nota_ex = nota_ex*0.30;
        
        let nota_tra = parseInt(document.getElementById('nota_tra').value);
        let por_nota_tra = nota_tra*0.15;
         
        let porc_final = (por_parciales+por_nota_ex+por_nota_tra);
        
        let nota_final = document.getElementById('resultado_final');
        nota_final.value = porc_final;
        console.log(porc_final);
        return porc_final;
       

        
    };

    function calcular_tiempo(){
       let v1 = parseInt(document.getElementById('x1').value);
       let v2 = parseInt(document.getElementById('y1').value);
       let dist = parseInt(document.getElementById('z1').value);
       let t = dist/(v1-v2);
       let tf = t*60;

       let resultado_1 = document.getElementById('resultado');
       resultado_1.value = tf;
       return  tf;
    };


