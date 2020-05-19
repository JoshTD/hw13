import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {
  
  myWorkerType = MyWorkerType;
  maskPhone = ['\+', '7','(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  workerForm: FormGroup;
 
  @Output() addWorker = new EventEmitter<MyWorker>();
  @Input() worker: MyWorker;

  constructor() { }

  ngOnInit() {
    this.workerForm = this.validate();
  }

  onAddWorker() {
    let validation = this.validate(this.worker.name, this.worker.surname, this.worker.phone, this.worker.type);
    if (validation.status == "INVALID") {
      alert('Данные введены некорректно');
      return;
    } else {
      let worker: MyWorker = {
        name: this.worker.name,
        surname: this.worker.surname,
        phone: this.worker.phone,
        type: this.worker.type
      }
      if (this.worker.id != undefined)
        worker.id = this.worker.id; 
      this.addWorker.emit(worker);
      this.worker.name = undefined;
      this.worker.surname = undefined;
      this.worker.phone = undefined;
      this.worker.type = 0;
      this.worker.id = undefined;
    }
  }
  validate(name = null, surname = null, phone = null, type = 0) {
    return new FormGroup({
      Name: new FormControl({value: name, disabled: false}, [
        Validators.required, Validators.pattern('[A-Z,А-Я][a-z,а-я]+')
      ]),
      Surname: new FormControl({value: surname, disabled: false}, [
        Validators.required, Validators.pattern('[A-Z,А-Я][a-z,а-я]+')
      ]),
      Phone: new FormControl({value: phone, disabled: false}, [
        Validators.required,
      ]),
      Type: new FormControl({value: type, disabled: false}, [
        Validators.required,
      ])
    })
  }
}
