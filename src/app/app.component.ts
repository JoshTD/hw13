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
  renameWorker: MyWorker = { name: undefined, surname: undefined, type: 0 };

  getByType(type: number) {
    return this.workers.filter(worker => worker.type === type);
  }
  onRenameWorker(id: number) {
    let index = this.workers.findIndex((item) => item.id === id);
    this.renameWorker.id = id;
    this.renameWorker.name = this.workers[index].name;
    this.renameWorker.surname = this.workers[index].surname;
    this.renameWorker.phone = this.workers[index].phone;
    this.renameWorker.type = this.workers[index].type;
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