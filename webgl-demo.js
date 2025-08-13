var cubo_triangulo = new Float32Array([ 
  
  //topo
  0.5, 0.5, 0.5, //Coordenadas x,y,z (V0) 0
  1,0,0, 1.0, //4 valores R,G,B,A 1 
  
  -0.5, 0.5, 0.5,// (V1)                 2
  1,0,0, 1.0,//                   3
  
  0.5, 0.5, -0.5, // (V2)                 4
  1,0,0, 1.0,//                   5
  
  0.5, 0.5, -0.5, //Coordenadas x,y,z (V0) 0
  1,0,0, 1.0, //4 valores 1,0,0,A 1 
  
  -0.5, 0.5, -0.5,// (V1)                 2
  1,0,0, 1.0,//                   3
  
  -0.5, 0.5, 0.5, // (V2)                 4
  1,0,0, 1.0,//                   5*/
  
  //lodo esquerdo (Azul medio)
  0.5, 0.5, 0.5, //Coordenadas x,y,z (V0) 0
  0,0.5,1, 1.0, //4 valores R,G,B,A 1 
  
  0.5, -0.5, 0.5,// (V1)                 2
  0,0.5,1, 1.0,//                   3
  
  0.5, 0.5, -0.5, // (V2)                 4
  0,0.5,1, 1.0,//                   5
  
  0.5, 0.5, -0.5, //Coordenadas x,y,z (V0) 0
  0,0.5,1, 1.0, //4 valores R,G,B,A 1 
  
  0.5, -0.5, 0.5,// (V1)                 2
  0,0.5,1, 1.0,//                   3
  
  0.5, -0.5, -0.5, // (V2)                 4
  0,0.5,1, 1.0,//                   5*/
  
  //Frente(Roxo)
  -0.5, 0.5, -0.5, //Coordenadas x,y,z (V0) 0
  1, 0, 1, 1.0, //4 valores R,G,B,A 1 
  
  0.5, 0.5, -0.5,// (V1)                 2
  1, 0, 1, 1.0,//                   3
  
  0.5, -0.5, -0.5, // (V2)                 4
  1, 0, 1, 1.0,//                   5
  
  -0.5, 0.5, -0.5, //Coordenadas x,y,z (V0) 0
  1, 0, 1, 1.0, //4 valores R,G,B,A 1 
  
  -0.5, -0.5, -0.5,// (V1)                 2
  1, 0, 1, 1.0,//                   3
  
  0.5, -0.5, -0.5, // (V2)                 4
  1, 0, 1, 1.0,//                   5

  //Traz (Amarelo)
  -0.5, 0.5, 0.5, //Coordenadas x,y,z (V0) 0
  1, 1, 0, 1.0, //4 valores R,G,B,A 1 
  
  0.5, 0.5, 0.5,// (V1)                 2
  1, 1, 0, 1.0,//                   3
  
  0.5, -0.5, 0.5, // (V2)                 4
  1, 1, 0, 1.0,//                   5
  
  -0.5, 0.5, 0.5, //Coordenadas x,y,z (V0) 0
  1, 1, 0, 1.0, //4 valores R,G,B,A 1 
  
  -0.5, -0.5, 0.5,// (V1)                 2
  1, 1, 0, 1.0,//                   3
  
  0.5, -0.5, 0.5, // (V2)                 4
  1, 1, 0, 1.0,//                   5

  //lodo direito(Ciano)
  -0.5, 0.5, -0.5, //Coordenadas x,y,z (V0) 0
  0, 1, 1, 1.0, //4 valores R,G,B,A 1 
  
  -0.5, -0.5, -0.5,// (V1)                 2
  0, 1, 1, 1.0,//                   3
  
  -0.5, 0.5, 0.5, // (V2)                 4
  0, 1, 1, 1.0,//                   5
  
  -0.5, 0.5, 0.5, //Coordenadas x,y,z (V0) 0
  0, 1, 1, 1.0, //4 valores R,G,B,A 1 

  -0.5, -0.5, 0.5,// (V1)                 2
  0, 1, 1, 1.0,//                   3

  -0.5, -0.5, -0.5, // (V2)                 4
  0, 1, 1, 1.0,//                   5*/
  

  //Baixo(Azul)
  0.5, -0.5, 0.5, //Coordenadas x,y,z (V0) 0
  0,0,1, 1.0, //4 valores 0,0,1,A 1 
  
  -0.5, -0.5, 0.5,// (V1)                 2
  0,0,1, 1.0,//                   3
  
  0.5, -0.5, -0.5, // (V2)                 4
  0,0,1, 1.0,//                   5
  
  -0.5, -0.5, 0.5, //Coordenadas x,y,z (V0) 0
  0,0,1, 1.0, //4 valores 0,0,1,A 1 
  
  -0.5, -0.5, -0.5,// (V1)                 2
  0,0,1, 1.0,//                   3
  
  0.5, -0.5, -0.5, // (V2)                 4
  0,0,1, 1.0,//                   5*/ 

]);

var circulo_triangulo = new Float32Array([
  //Lado positivo
  0,0,0,
  1,0,0,1,

  0.0,1.0,0,
  0,1,0,1,

  0.44,0.9,0,
  0,0,1,1,
  //
  0,0,0,
  1,0,0,1,

  0.44,0.9,0,
  0,1,0,1,

  0.84,0.54,0,
  0,0,1,1,
  //
  0,0,0,
  1,0,0,1,

  0.84,0.54,0,
  0,1,0,1,

  1.0,0.0,0,
  0,0,1,1,

  //lado negativo
  0,0,0,
  1,0,0,1,

  0,-1,0,
  0,1,0,1,

  -0.44,-0.9,0,
  0,0,1,1,
  //
  0,0,0,
  1,0,0,1,

  -0.44,-0.9,0,
  0,1,0,1,

  -0.84,-0.54,0,
  0,0,1,1,
  //
  0,0,0,
  1,0,0,1,

  -0.84,-0.54,0,
  0,1,0,1,

  -1,0,0,
  0,0,1,1,

  //Lado positivo e negativo
  0,0,0,
  1,0,0,1,

  0.0,-1.0,0,
  0,1,0,1,

  0.44,-0.9,0,
  0,0,1,1,
  //
  0,0,0,
  1,0,0,1,

  0.44,-0.9,0,
  0,1,0,1,

  0.84,-0.54,0,
  0,0,1,1,
  //
  0,0,0,
  1,0,0,1,

  0.84,-0.54,0,
  0,1,0,1,

  1.0,0.0,0,
  0,0,1,1,

  //lado negativo e positivo
  0,0,0,
  1,0,0,1,

  0,1,0,
  0,1,0,1,

  -0.44,0.9,0,
  0,0,1,1,
  //
  0,0,0,
  1,0,0,1,

  -0.44,0.9,0,
  0,1,0,1,

  -0.84,0.54,0,
  0,0,1,1,
  //
  0,0,0,
  1,0,0,1,

  -0.84,0.54,0,
  0,1,0,1,

  -1,0,0,
  0,0,1,1,
]);

var triangulo = new Float32Array([
  0,0.5,0,
  1,0,0,1,

  -0.5,-0.5,0,
  0,1,0,1,

  0.5,-0.5,0,
  0,0,1,1,
]);

main();

//
// start here
//

function createVertexShader(gl){
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  const vertexSource = `attribute vec3 aPos;
                        attribute vec4 aCor;
                        attribute vec3 a_normal;
                        uniform mat4 transla;
                        uniform mat4 scala;
                        uniform mat4 rotacao_x;
                        uniform mat4 rotacao_y;
                        uniform mat4 rotacao_z;
                        varying vec3 v_normal;
                        varying vec4 vCor;
                        void main(){
                          gl_Position = transla*scala*rotacao_x*rotacao_y*rotacao_z*vec4(aPos,1.0);
                          vCor = vec4(1.0,0.0,0.0,1.0);
                          v_normal = a_normal;
                        }`;

  gl.shaderSource(vertexShader, vertexSource);//Adiciona o código ao Shader
  gl.compileShader(vertexShader);//Compila o Shader
  
  if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {//Verfica erros do Shader
      alert("invalid vertex shader : " + gl.getShaderInfoLog(vertexShader));
  } 
  return vertexShader;
}

function createFragmentShader(gl){
  const fragShader = gl.createShader(gl.FRAGMENT_SHADER)
  const fragSource = `precision mediump float;

                      varying vec3 v_normal;
                      varying vec4 vCor;

                      void main(){
                        vec3 normal = normalize(v_normal);

                        vec3 lightColor = vec3(1.0,1.0,1.0);
                        vec3 lightSource = vec3(1.0,0.0,0.0);
                        float diffuseStrength = max(0.0 , dot(lightSource,normal));
                        vec3 diffuse = diffuseStrength * lightColor;

                        vec3 ambient = vec3(0.3,0.3,0.3);
                        //vec3 ambient = vec3(1.0,1.0,1.0);
                        vec3 lighting = vec3(0.0,0.0,0.0);

                        lighting = (ambient * 1.0) + (diffuse * 1.0);
                        
                        vec3 modelColor = vec3(vCor.x,vCor.y,vCor.z);
                        vec3 color = modelColor * lighting;

                        gl_FragColor = vec4(color,1.0);
                      }`

  gl.shaderSource(fragShader, fragSource);//Adiciona o código ao Shader
  gl.compileShader(fragShader);//Compila o Shader
  
  if (!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {//Verfica erros do Shader
      alert("invalid fragment shader : " + gl.getShaderInfoLog(fragShader));
  } 
  return fragShader;
}

function translada(gl,progID,tx,ty,tz){
  var translacao = new Float32Array([
    1,0,0,0,
    0,1,0,0,
    0,0,1,0,
    tx,ty,tz,1,
  ]);
  var translation = gl.getUniformLocation(progID,'transla');
  gl.uniformMatrix4fv(translation,false,translacao);
}

function escala(gl,progID,s){
  var scalas = new Float32Array([
    s,0,0,0,
    0,s,0,0,
    0,0,s,0,
    0,0,0,1,
  ]);
  var aumenta = gl.getUniformLocation(progID,'scala');
  gl.uniformMatrix4fv(aumenta,false,scalas);
}

function rotacion_x_y(gl,progID,angulo){
  const cos = Math.cos(angulo);
  const sen = Math.sin(angulo);
  var roda = new Float32Array([
    cos,-sen,0,0,
    sen,cos,0,0,
    0,0,1,0,
    0,0,0,1,
  ]);
  var rota = gl.getUniformLocation(progID,'rotacao_x');
  gl.uniformMatrix4fv(rota,false,roda);
}


function rotacion_y_z(gl,progID,angulo){
  const cos = Math.cos(angulo);
  const sen = Math.sin(angulo);
  var roda = new Float32Array([
    1,0,0,0,
    0,cos,-sen,0,
    0,sen,cos,0,
    0,0,0,1,
  ]);
  var rota = gl.getUniformLocation(progID,'rotacao_y');
  gl.uniformMatrix4fv(rota,false,roda);
}

function rotacion_x_z(gl,progID,angulo){
  const cos = Math.cos(angulo);
  const sen = Math.sin(angulo);
  var roda = new Float32Array([
    cos,0,-sen,0,
    0,1,0,0,
    sen,0,cos,0,
    0,0,0,1,
  ]);
  var rota = gl.getUniformLocation(progID,'rotacao_z');
  gl.uniformMatrix4fv(rota,false,roda);
}

function troca_cor(gl,progID,r,g,b,a){
  var cor = new Float32Array([
    r,g,b,a,
  ]);
  var localiza_cor = gl.getUniformLocation(progID,'cores');
  gl.uniform4fv(localiza_cor,cor);
}

function cria_triangulo(gl,pontos,TRINAGULO){

  gl.bufferData(gl.ARRAY_BUFFER, pontos, gl.STATIC_DRAW); //

  var vertexLoc = 0; //var para localização dos dados de vértice 
  var colorLoc = 1; //var para localização dos dados de cor
  
  //Definindo o acesso ao VBO (similiar ao VAO OpenGL) 
  var offset = 0; //Começando da posição 0 (vértice) do array triangleVertexData
  var stride = (3+4) * Float32Array.BYTES_PER_ELEMENT; //***** de 7 em 7 os dados de cada vértice
  gl.vertexAttribPointer(vertexLoc, 3, gl.FLOAT, false, stride, offset); //Começando de 0 até 3 temos os vertices, para os proximos ***** 7 (stride)
  gl.enableVertexAttribArray(vertexLoc); //
  
  offset = 0 + 3 * Float32Array.BYTES_PER_ELEMENT; //começa na posiçao 3 (cor)
  gl.vertexAttribPointer(colorLoc, 4, gl.FLOAT, false, stride, offset); //os 4 valores são da cor e ***** de stride em stride (7)
  gl.enableVertexAttribArray(colorLoc);
}

function main() {

  const canvas = document.querySelector("#glcanvas");
  //1. Criar o contexto
  const gl = canvas.getContext("webgl");
  
  // Only continue if WebGL is available and working
  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it."
    );
    return;
  }

  //3. Criar os shaders de Vértice e Fragmento
  var vertexShader = createVertexShader(gl)
  var fragShader = createFragmentShader(gl)
  
  //3. Criar um programa (relacionado aos Shaders de Vértice e Fragmento)
  var progID = gl.createProgram();//Cria um programa (objeto para os shaders)
  gl.attachShader(progID, vertexShader);//Associa o programa com os shaders
  gl.attachShader(progID, fragShader);
  gl.linkProgram(progID);// Cria um link com o Programa
  if (!gl.getProgramParameter(progID, gl.LINK_STATUS)) { //Verifica o link do Programa
    alert(gl.getProgramInfoLog(progID));
    return;
  }
  
  gl.viewport(0, 0, canvas.width, canvas.height)//ViewPort do tamanho da Tela (toda a cena 3D)
  
  gl.useProgram(progID);//Executando o programa
  
  var i = 0,ahfa = 1,quant = 12,prox = 0;
  var r = 0,g = 0,b = 0;

  escala(gl,progID,1/2);
  translada(gl,progID,0,0,0);
  
  var TRIANGULO_0 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER,TRIANGULO_0);

  var vet_normal = new Float32Array([
    0.0,1.0,0.0
  ])
  var nor = gl.getUniformLocation(progID,'a_normal');
  gl.uniform3fv(nor,vet_normal);
  
  var loop = function(){
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    //gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
    
    cria_triangulo(gl,cubo_triangulo,TRIANGULO_0);
    gl.drawArrays(gl.TRIANGLES,0,3*quant);


    if(prox == 0){
      if(r < 1){
        troca_cor(gl,progID,r,0,0,ahfa);
        r = Math.abs(r + Math.cos(0.01));
      }else if(g < 1){
        troca_cor(gl,progID,r,g,0,ahfa);
        g = Math.abs(g + Math.sin(0.01));
      }else{
        r = g = 0;
        prox = 1;
      }
    }else if(prox == 1){
      if(b < 1){
        troca_cor(gl,progID,r,0,b,ahfa);
        r = Math.abs(r + Math.cos(0.01));
        b = Math.abs(b + Math.sin(0.01));
      }else{
        r = b = 0;
        prox = 2;
      }
    }else{
      if(g < 1){
        troca_cor(gl,progID,0,g,0,ahfa);
        g = Math.abs(g + Math.cos(0.01));
      }else if(b < 1){
        troca_cor(gl,progID,0,g,b,ahfa);
        b = Math.abs(b + Math.sin(0.01));
      }else{
        b = g = 0;
        prox = 0;
      }
    }
    
    rotacion_x_y(gl,progID,0);//nao mexe
    rotacion_y_z(gl,progID,0.5);
    rotacion_x_z(gl,progID,1);

    
    requestAnimationFrame(loop);
    i = i + 0.005;
  };
  requestAnimationFrame(loop);
}