/**
 * Notazione richiamata da un altro file
 * @typedef {import("./p5/types").Graphics} Graphics
 *
 * Notazione
 * @typedef {Object} Cubo
 * @property {number} x
 * @property {number} y
 * @property {number} z
 * @property {number} size
 * @property {string} color
 * @property {string} rotationAxis
 */

//

/**
 * Si chiama js doc
 * @type {Cubo[]}
 */

let cubi = [];
let copie = 30;

/** @type {Graphics} */
let g;

//

function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");

  let s = 500;

  for (let i = 0; i < copie; i++) {
    let cubo = {
      x: random(s, -s),
      y: random(s, -s),
      z: random(s, -s),
      size: 100,
      color: random(["blueviolet", "deeppink", "deepskyblue"]),
      rotationAxis: random(["x", "y", "z"]),
    };
    cubi.push(cubo);
  }

  g = createGraphics(100, 100);
}

//

function draw() {
  background("#D5D7E2");
  orbitControl();
  let velocita = frameCount * 0.005;
  rotateY(velocita);

  cornice(g, 0.33);
  texture(g);
  rotateY(frameCount * 0.001);

  for (let cubo of cubi) {
    push();
    translate(cubo.x, cubo.y, cubo.z);
    noStroke();
    // noFill();
    // stroke(cubo.color);

    rotateZ(velocita);
    if (cubo.rotationAxis == "x") {
      rotateX(velocita);
    } else if (cubo.rotationAxis == "y") {
      rotateY(velocita);
    } else {
      rotateZ(velocita);
    }
    box(cubo.size);
    pop();
  }

  //

  // g.background ("deeppink")
  // g.line(0,0,100)
  // g.fill("white")
  // g.textSize(36)
  // g.text()

  // strokeWeight(5);

  // push();
  // stroke("yellow");
  // box(100);
  // pop();

  // push();
  // stroke("blue");
  // //line(0, 0, 1000, 0);
  // translate(width, 0);
  // box(100);
  // pop();

  // push();
  // stroke("yellow");
  // translate(width, 0, -1000);
  // box(100);
  // pop();

  // push();
  // stroke("red");
  // //line(0, 0, 0, 1000);
  // translate(0, height);
  // box(100);
  // pop();

  // push();
  // stroke("yellow");
  // translate(0, height, -1000);
  // box(100);
  // pop();

  // push();
  // stroke("green");
  // //line(0, 0, 0, 0, 0, -1000);
  // translate(0, 0, -1000);
  // box(100);
  // pop();

  // const s = 100;
  // rect(0, 0, s, s);
  // rect(0, height - s, s, s);
  // rect(width - s, 0, s, s);
  // rect(width - s, height - s, s, s);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//

/**
 *
 * @param {Graphics} g
 * @param {number} p
 */
function cornice(g, p) {
  g.background("#D5D7E2");
  g.strokeCap(SQUARE);
  g.strokeWeight(22);

  //in alto
  g.line(0, 0, g.width * p, 0);
  g.line(g.width, 0, g.width - g.width * p, 0);

  //in basso
  g.line(0, g.height, g.width * p, g.height);
  g.line(g.width, g.height, g.width - g.width * p, g.height);

  //lato sx
  g.line(0, 0, 0, g.height * p);
  g.line(0, g.height, 0, g.height - g.height * p);

  //lato dx
  g.line(g.width, 0, g.width, g.height * p);
  g.line(g.width, g.height, g.width, g.height - g.height * p);
}

//salva al click del mouse un png
// function mousePressed() {
//   save("sketch.png");
// }

//salva gif
function keyPressed() {
  if (key === "s") {
    saveGif("mySketch", 03);
  }
}
