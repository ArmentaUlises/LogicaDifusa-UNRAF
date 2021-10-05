import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data;
  consty;
  constructor() {
    this.consty = this.getRandomArbitrary(150, 450);
    this.data = {
        gravedad: 9.81,
        posY: this.consty,
        velY: 0,
        x: 400,
        y: this.consty,
        objY: 225,
        ventilador: this.getRandomArbitrary(1, 120),
        caos: 0
    };
  }

  ngOnInit(){
    this.update()
  }
  boolean(x, y) {
    let member = (x <= y) ? 0 : 1;
    return member;
  }

  booleanInverted(x, y) {
    let member = (x < y) ? 1 : 0;
    return member;
  }

  grade(x, y, z) {
    let member = 0;
    if (x <= y) {
        member = 0;
    } else {
        if(x > y && x < z){
            member = (x/(z-y))-(y/(z-y));
        }else{
            if(x>= z){
                member = 1;
            }
        }
    }
    return member;
  }

  gradeInverted(x, y, z) {
    let member = 0;
    if (x <= y) {
        member = 1;
    } else {
        if(x > y && x < z){
            member = (x/(z-y))-(z/(z-y));
        }else{
            if(x>= z){
                member = 0;
            }
        }
    }
    return member;
  }

  triangle(x, a, b, c){
    let member = 0;
    if(x <= a) {
        member = 0;
    }else{
        if (x > a && x <= b) {
            member = (x/(b-a)) - (a/(b-a));
        }else{
            if (x > b && x <= c) {
                member = - (x/(c-b)) + (c/(c-b));
            } else {
                if (x>c) {
                    member = 0;
                }
            }
        }
    }
    return member;
  }

  trapezoid(x, a, b, c, d){
    let member = 0;
    if(x <= a) {
        member = 0;
    }else{
        if (x > a && x <= b) {
            member = (x/(b-a)) - (a/(b-a));
        }else{
            if (x > b && x <= c) {
                member = 1;
            } else {
                if (x>c && x <= d) {
                    member = - (x/(d-c)) + (d/(d-c))
                } else {
                    if (x>d) {
                        member = 0;
                    }
                }
            }
        }
    }
    return member;
  }

  operatorAND(a, b){
    return Math.min(a, b);
  }

  operatorOR(a, b){
    return Math.max(a, b);
  }

  operatorNOT(a){
    return 1-a;
  }
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  draw(data){
    // mover bolita
    // mover ventilador
    // mostrar un texto con info
    const ball = document.getElementById('ball');
    ball.style.top = data.y+'px';

    const posicion = document.getElementById('posicion');
    posicion.innerText = data.y;

    const velocidad = document.getElementById('velocidad');
    velocidad.innerText = data.velY;

    const ventilador = document.getElementById('ventilador');
    ventilador.innerText = data.ventilador;

    const objetivo = document.getElementById('objetivo');
    objetivo.innerText = data.objY;
  }

  fuzzification(data){
    let distancia = data.objY - data.posY;

    let centrado = this.triangle(distancia, -40, 0, 40);
    let cercaA = this.trapezoid(distancia, 20, 80, 120, 180);
    let normalA = this.trapezoid(distancia, 120, 160, 240, 280);
    let lejosA = this.grade(distancia, 240, 300);

    let cercaB = this.trapezoid(distancia, -180, -120, -80, -20);
    let normalB = this.trapezoid(distancia, -280, -240, -160, -120);
    let lejosB = this.gradeInverted(distancia, -300, -240);

    const numerador = centrado*9.8 + cercaA*4 + normalA*2 + lejosA*1 + cercaB*14 + normalB*15.5 + lejosB*18;
    const denominador = centrado+cercaA+normalA+lejosA+cercaB+normalB+lejosB;
    data.ventilador = numerador/denominador;
    return data;
  }

  setCaos(){
    this.data.caos =  this.getRandomArbitrary(-3, 3);
  }

  update(){
    setInterval(() => {
        this.data = this.fuzzification(this.data);
        this.setCaos();
        this.data.velY += ((this.data.gravedad - this.data.ventilador + this.data.caos) * 0.01);
        this.data.posY += this.data.velY;
        this.data.y = this.data.posY;
        this.draw(this.data)
    }, 20);
  }
}
