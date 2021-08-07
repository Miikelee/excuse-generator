window.onload = function(){
  
    var first = ['Mi perro', 'Mi Abuela', 'Mi gato', 'El hijo de mi vecina que es como mi hijo', 'Mi hermano', 'Mi sobrina'  ];
    var adj = [' Se enfermó y tuve que cuidarle', ' Se cayó por las escaleras ', ' Falleció ', ' No queria comer y tuve que llevarle al médico ',' Enloquecío y casi me mata' ];

    var rdm1 = Math.floor((Math.random() * first.length) );
    var rdm2 = Math.floor((Math.random() * adj.length) );
  
    document.querySelector('#theexcuse').innerHTML = first[rdm1] + adj[rdm2] 
}