import { Livre } from "./livre";
// début pgm

let livre1 : Livre;
livre1 = new Livre();
livre1.setTitre("martine à la plage");
livre1.setAuteur("mr Dupont");
livre1.setPrix(25);


let livre2 = new Livre("martine à la montagne","mr Dupont",30);

console.log(livre1.toString());
console.log(livre2.toString());