// https://pousadabarravelha.com.br
// Alguns elementos do site que usa o JavaScript:
// O campo de Check In, Check Out, Adultos, crianças.


// https://www.minadobrasil.com.br
// Essa função tem como finalidade fazer um efeito carrossel nas fotos dos produto (fica alternando elas).

      function addElemento() {
        const containerPrincipal = document.getElementsByClassName('conteiner-principal')[0];
        const elemento = document.createElement('section');
        
        containerPrincipal.insertBefore(elemento, containerPrincipal.children[1]);
        elemento.innerHTML = '<div id="div-carousel" class="container"><div class="row"><div id="myCarousel" class="carousel slide" style="max-width: 900px; margin: 0px auto;"> <ol class="carousel-indicators hidden-xs hidden-sm" style="padding-bottom: 42px;"> <li data-target="#carcousel-example-generic" data-slide-to="0" class="active"></li> <li data-target="#carcousel-example-generic" data-slide-to="1"></li> <li data-target="#carcousel-example-generic" data-slide-to="2"></li> </ol> <div class="carousel-inner"> <div class="active item" align="center"><a href="https://www.minadobrasil.com.br/colar-14622696"><img src="https://cdn.awsli.com.br/600x700/1983/1983191/produto/173273663/60a41a3138.jpg" class="img-rounded" alt="PS3 reparatie Haarlem"></a> </div> <div class="item" align="center"><a href="https://www.minadobrasil.com.br/brinco-14587954"><img src="https://cdn.awsli.com.br/1000x1000/1983/1983191/produto/174396255/caeb74f87f.jpg" alt="Blu-ray Lens reparatie"></a> </div> <div class="item" align="center"><a href="https://www.minadobrasil.com.br/pulseira-16582784"><img src="https://cdn.awsli.com.br/1000x1000/1983/1983191/produto/173185512/c68a3df37d.jpg" class="img-rounded" alt="Yellow Light of Death"></a> </div> </div> <a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a> <a class="right carousel-control" href="#myCarousel" data-slide="next">›</a> </div></div></div>';
      console.log('carousel carregado')
      
  }
     addElemento();
      
