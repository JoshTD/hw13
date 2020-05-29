import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorkersDataBase, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {

  @Input() workerId: number;
  @Output() sendWorker = new EventEmitter<MyWorker>();
  workers: MyWorker[] = MyWorkersDataBase;
  worker: MyWorker;
  

  maskPhone = ['\+', '7','(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  workerForm: FormGroup;

  constructor() {
    this.workerForm = this.validate();
  }

  ngOnInit() {
    let index = this.workers.findIndex((item) => item.id === this.workerId);
    this.workerForm = this.validate(this.workers[index].name, this.workers[index].surname, this.workers[index].phone, this.workers[index].type, this.workerId);
  }
  onEditWorker() {
    let worker: MyWorker = {
      name: this.workerForm.value.Name,
      surname: this.workerForm.value.Surname,
      phone: this.workerForm.value.Phone,
      type: parseInt(this.workerForm.value.Type),
      id: this.workerForm.value.Id
    };
    console.log(worker);
    this.sendWorker.emit(worker);
    this.workerForm.disable();
  }
  onCancel() {
    this.sendWorker.emit(null);
    this.workerForm.disable();
  }
  validate(name = null, surname = null, phone = null, type = 0, id = null) {
    return new FormGroup({
      Name: new FormControl({value: name, disabled: false}, [
        Validators.required, Validators.pattern('[A-Z,А-Я][a-z,а-я]+')
      ]),
      Surname: new FormControl({value: surname, disabled: false}, [
        Validators.required, Validators.pattern('[A-Z,А-Я][a-z,а-я]+')
      ]),
      Phone: new FormControl({value: phone, disabled: false}, [
        Validators.required
      ]),
      Type: new FormControl({value: type, disabled: false}, [
        Validators.required
      ]),
      Id: new FormControl({value: id, disabled: false})
    })
  }
}
