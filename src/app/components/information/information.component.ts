import { Component, OnInit } from '@angular/core';
import { Information } from 'src/app/information';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  panelOpenState = false;
  information : Information[] = []; 

  constructor(config: NgbAccordionConfig) {
    // customize default values of accordions used by this component tree
    config.closeOthers = false;
   // config.type = 'danger';
  }
  
  ngOnInit() {
    this.fillInformation();
  }

addInformation(id: number, question: string, answer:string){
let myInformation = new Information(id,question,answer);
this.information.push(myInformation);
console.log(this.information);
}


fillInformation(){
  this.addInformation(0,'¿Qué son las enfermedades poco frecuentes?', 
  `Las Enfermedades Poco Frecuentes (EPOF) son aquellas que afectan a un número limitado de personas con respecto a la población en general. Se consideran EPOF cuando afectan a 1 persona cada 2.000 habitantes. En su mayoría son de origen genético, crónicas, degenerativas y, en muchos casos, pueden producir algún tipo de discapacidad. Una gran cantidad son graves y ponen en serio riesgo la vida de los pacientes son no se las diagnostica a tiempo y se las trata de forma adecuada.
  <br><br> Estas enfermedades son invisibles para una gran mayoría de las personas.
  <br><br>El origen de muchas de estas patologías permanece aún desconocido.
  <br><br>La OMS estima que mundialmente hay entre 6.000 y 8.000 enfermedades poco frecuentes identificadas, cuya incidencia en la población mundial es entre el 6 y el 8%.
  <br><br>Las EPOF se caracterizan por una gran diversidad de patologías y síntomas, que no sólo varían entre ellas, sino que también se manifiestan de diferente manera en pacientes afectados por la misma enfermedad.
  <br><br>Si bien internacionalmente se las conoce como “Rare Diseases”, su traducción al castellano “Enfermedades Raras” puede despertar significados equívocos. Las patologías reciben esta denominación no por la “rareza” de su naturaleza sino por la “rareza” de su frecuencia. Por ello, también se utiliza la denominación de “Enfermedades Poco Frecuentes”.
  `);
  this.addInformation(1,'¿Cuántos tipos de enfermedades poco frecuentes existen?',
  `Las enfermedades poco frecuentes están caracterizadas por el <strong>gran número y amplia diversidad de desórdenes </strong> y síntomas que varían no sólo de enfermedad a enfermedad, sino también dentro de la misma enfermedad.
  <br>La misma condición puede tener manifestaciones clínicas muy diferentes de una persona afectada a otra. Para muchos desórdenes, hay una gran diversidad de subtipos de la misma enfermedad.
  `);
  this.addInformation(2,'¿Qué caracteriza a las enfermedades poco frecuentes?',
  `Las enfermedades poco frecuentes son, en su mayor parte, crónicas y degenerativas. De hecho, el 65% de estas patologías son graves e invalidantes y se caracterizan por:
  <br>Comienzo precoz en la vida (2 de cada 3 aparecen antes de los dos años)
  <br>Dolores crónicos (1 de cada 5 enfermos)
  <br>El desarrollo de déficit motor, sensorial o intelectual en la mitad de los casos, que originan una discapacidad en la autonomía (1 de cada 3 casos);
  <br>En casi la mitad de los casos el pronóstico vital está en juego, ya que a las enfermedades raras se le puede atribuir el 35% de las muertes antes de un año, del 10% entre 1 y 5 años y el 12% entre los 5 y 15 años.
  `);
  this.addInformation(3,'¿Cuál es la más «rara» de las enfermedades raras?',
  `Se estima que existen hoy entre 5.000 y 7.000 enfermedades poco frecuentes distintas, que afectan a los pacientes en sus capacidades físicas, habilidades mentales y en sus cualidades sensoriales y de comportamiento.
  Precisamente por eso, no podemos saber con certeza cuáles son más o menos comunes, más aún teniendo en cuenta que las enfermedades raras están caracterizadas por el gran número y amplia diversidad síntomas que varían también dentro de la misma enfermedad. Es decir, la misma condición puede tener manifestaciones clínicas muy diferentes de una persona afectada a otra.  
  `);
  this.addInformation(4,'¿Cuáles son los principales problemas de quienes conviven con enfermedades poco frecuentes?',
  `Sin duda alguna, uno de los principales problemas a los que se enfrentan las personas con Enfermedades Poco Frecuentes, desde el primer momento, es el diagnóstico. Las principales causas de esta ausencia de diagnóstico atienden a múltiples causas; las principales son el desconocimiento que rodea a estas patologías, la dificultad de acceso a la información necesaria y la localización de profesionales o centros especializados.
  Todo esto provoca una serie de consecuencias que afectan tanto al paciente como a su familia. De hecho, en gran parte de los casos, esta demora diagnóstica priva al afectado de intervenciones terapéuticas, lo que conlleva, en un 30% de los casos, un agravamiento de la enfermedad que podría haberse evitado o paliado previamente.
  Estas dificultades, como vemos, son clave en el tratamiento sanitario y el desarrollo de la enfermedad. De hecho, el 42,68% de las personas con estas patologías no dispone de tratamiento o si lo dispone, no es el adecuado. 
  `);

}

}
