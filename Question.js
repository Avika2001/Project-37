class Question {
    constructor() {
      this.input=createInput("Enter your name here");
      this.input2=createInput("State your answer here")
      this.button = createButton('Submit');

    }
    hide(){
      this.input.hide();
      this.button.hide();
      this.input2.hide();
    }
  
    display(){
      var title = createElement('h2');
      title.html("My Quiz Game");
      title.position(350, 0);

      this.question = createElement('h7')
      this.question.html("Question: Who created WhatsApp?")
      this.question.position(230,75);
      
      this.option1 = createElement('h7')
      this.option1.html("1. Mike Krieger & Kevin Systrom");
      this.option1.position(300,100);
      
      this.option2 = createElement('h7')
      this.option2.html("2. Jan Koum & Brian Acton");
      this.option2.position(300,130);

      this.option3 = createElement('h7')
      this.option3.html("3. David Wehner & Mark Zuckerberg");
      this.option3.position(300,160);
      
      this.option4 = createElement('h7')
      this.option4.html("4. Reggie Brown & Bobby Murphy");
      this.option4.position(300,190);

      this.input.position(270, 300);
      this.button.position(390, 350);
      this.input2.position(420, 300);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.input2.hide();
  
        contestant.name = this.input.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.update();
        contestant.updateCount(contestantCount);
        contestant.index = contestantCount;
      });
  
    }
  }
  