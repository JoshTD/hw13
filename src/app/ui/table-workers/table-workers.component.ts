import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css']
})
export class TableWorkersComponent implements OnInit {

  @Input() title: string;
  @Input() workers: MyWorker[] = [];
  @Output() deleteWorker = new EventEmitter<number>();
  @Output() renameWorker = new EventEmitter<number>();
  @Output() editWorker = new EventEmitter< MyWorker>();
  @Output() editById: number;

  constructor() { }

  ngOnInit(): void {
  }
  onEditWorker(worker: MyWorker) {
    if (worker != null)
      this.editWorker.emit(worker);
    this.closeForm();
  }
  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }
  onRenameWorker(id: number) {
    this.renameWorker.emit(id);
    this.editById = id;
  }
  closeForm() {
    this.editById = undefined;
  }
}
