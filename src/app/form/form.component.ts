import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  public feedbackform=new FormGroup({
  name : new FormControl('',Validators.required),
  email:new FormControl('',Validators.required),
  feedback:new FormControl('',Validators.required),
  comment:new FormControl(''),
  })

  ngOnInit() {
    this.getForm();
  }

  getForm(): void {
    this.heroService.getData()
    .subscribe(data => {this.feedbackform.setValue({
      name : data.name,
      email : data.email,
      feedback : data.feedback,
      comment : data.comment
    })});
  }
  onSubmit() {
  this.heroService.postData(this.feedbackform.value)
  .subscribe(data => {console.log(data)}
  )
  console.warn(this.feedbackform.value);
  this.feedbackform.setValue({
    name: '',
    email:  '',
    feedback:'',
    comment:''
  });
  }

}


