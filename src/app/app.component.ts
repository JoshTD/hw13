import { Component } from '@angular/core';
import { MyWorker, MyWorkersDataBase, MyWorkerType } from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkersDataBase;
  myWorkerType = MyWorkerType;

  getByType(type: number) {
    return this.workers.filter(worker => worker.type === type);
  }
  onDeleteWorker(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }
  onAddWorker(worker: MyWorker) {
    if (worker.id == null) {
      let id = this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1: 1;
      worker.id = id;
      this.workers.push(worker);
    } else {
      let index = this.workers.findIndex((item) => item.id === worker.id);
      if (index !== -1) {
        this.workers.splice(index, 1);
      }
      this.workers.push(worker);
      this.workers.sort((left, right) => left.id - right.id);
    }
  }
}