import { Component, OnInit } from '@angular/core';
import { HeroModel } from 'src/app/models/heroModel';

@Component({
  selector: 'app-kombat',
  templateUrl: './kombat.component.html',
  styleUrls: ['./kombat.component.css']
})
export class KombatComponent  {

  scorpion:HeroModel = {
    name: 'Scorpio',
    power: 30,
    health: 100
  }

  subZero:HeroModel = {
    name: 'subZero',
    power: 30,
    health: 100
  }

  start(){
    this.scorpion.health = 100;
    this.subZero.health = 100;
    let interval = setInterval(() => {
      if(this.scorpion.health > 0) this.scorpion.health -= this.calcPower(this.subZero.power)
      if(this.subZero.health > 0) this.subZero.health -= this.calcPower(this.scorpion.power)

      if(this.scorpion.health < 0 || this.subZero.health < 0 ) clearInterval(interval)
    }, 1000)
        
  }

  calcPower(maxPower:number):number{
    return Math.floor(Math.random() * Math.floor(maxPower))
  }

}
