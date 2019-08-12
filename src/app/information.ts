

export class Information {
    public id: number;   
    public question:string; 
    public answer: string;
    public fecha : number;
    

      constructor(id: number, question: string, answer:string ) {
          this.id = id;
        this.question = question;
          this.answer = answer;      
      }
  }
  