const URL_3D = "../assets/Objeto.obj";
console.log("Hss");
// Variable donde se almacena el modelo 3D
let model3D;
let img;

// FUNCIÓN DE PRECARGA
function preload() {
  // Carga el modelo 3D, normalizado
  model3D = loadModel(URL_3D, true);
  console.log(model3D);

}
                              
// FUNCIÓN DE CONFIGURACIÓN
function setup() {
  // Cree un canvas con soporte para 3D de 500px x 500px
  createCanvas(500, 500, WEBGL);
  // Determina que se van a utilizas los grados como unidad de medición
  angleMode(DEGREES);
}

var alphaV;
var betaV;
window.addEventListener("deviceorientation",function(event) {
  alphaV = Math.round(event.alpha);
  betaV = Math.round(event.beta);
  gammaV = Math.round(event.gamma);
}, true);

function draw() {
background(300);


  if(alphaV==0){
    frameRate(1);
    rotateY(frameCount);
  }
  else{
    frameRate(alphaV);
    rotateY(frameCount);
    console.log(alphaV);
  }


// FUNCIÓN DE PINTADO

  // Establece el color de fondo
  
  // Rota la figura en el eje Y
  
  
  // Establece un material por defecto para el modelo
  normalMaterial();
  // Escala el modelo 3D
  scale(0.6 + betaV * 0.02);
  // Rota el modelo 180 grados
  rotateX(180);
  // Presenta el modelo
  model(model3D);
}
