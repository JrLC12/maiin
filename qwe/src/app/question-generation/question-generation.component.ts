import { Component, OnInit } from '@angular/core';
import { Question } from '../_models/quesiton';
import { letter } from '../_models/letters';
import { QuestionGenerationService } from '../question-generation.service';
import { questionGenerationRequest } from '../_models/questionGenerationRequest';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-question-generation',
  templateUrl: './question-generation.component.html',
  // styleUrls: ['./question-generation.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
  styleUrls: ['./question-generation.component.css', '../_themes/minty-bootstrap.min.css']
})
export class QuestionGenerationComponent implements OnInit {

  questions: Question[];
  letters:letter[];
  constructor(private questionGenerationService: QuestionGenerationService) { }

  ngOnInit() {
    // this.getHeroes();
  }

  // getQuestions(): void {
  //   this.questionGenerationService.getQuestions()
  //   .subscribe(questions => this.questions = questions);
  // }

  generate(text: string, count: number): void {
	this.letters = ["a","b","c","d","e"]
    if (!text) { 
		document.getElementById("modal_box_div").style.display = "none";
		document.getElementById("hideMe").style.display = "block";
		document.getElementById("text").innerHTML = "Text is required";
		setTimeout(() => {
		const box = document.getElementById('hideMe');
		box.style.display = 'none';}, 5000); 
	return; }
    if (!count) { 
		document.getElementById("modal_box_div").style.display = "none";
		document.getElementById("hideMe").style.display = "block";
		document.getElementById("text").innerHTML = "Number of Question is required";
		setTimeout(() => {
		const box = document.getElementById('hideMe');
		box.style.display = 'none';}, 3000); 
	return; }
	if(count == 1){
		count = count;	
	}
	else if(count == 2){
		count = 2;
		count = count;
	}
	else if(count >= 3 && count === 5){
		count = count-1;
	}
	
    let req = new questionGenerationRequest()
    req.text = text.trim()
    req.count = count

    this.questions = []

    this.questionGenerationService.generate(req)
      .subscribe(questions => {
        
        this.questions = []
        questions.forEach(questionJson => {
          this.questions.push(JSON.parse(JSON.parse(JSON.stringify(questionJson))))
          this.addAnswers()
			document.getElementById("generating").style.display = "none";
        });
      });
	  
	 if(req){
		document.getElementById("generating").style.display = "block";
	 }
  }
  
  
  checkAnswer(quesiton: Question, answer: string){
    if (quesiton.answerText == answer){
      alert("Yeeeeeey!")
    }
    else{
      alert("Wrooonong!")
    }
  }
	
  addAnswers(){
    this.questions.forEach(q => {q.answers = [];

      q.distractors.forEach(d => {q.answers.push(d)});

      q.answers.push(q.answerText);

      q.answers = this.shuffle(q.answers)
    });


  }


  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
	
	
	
	
}
	
	
	
