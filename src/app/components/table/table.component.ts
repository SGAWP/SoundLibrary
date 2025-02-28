import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataI, ColumnI, AudioI } from '../../interfaces/data.interface';
import { AudioService } from '../../services/audio.service';
import { of, Observable } from 'rxjs';

const COLS: ColumnI[] = [
  { value: 'id', displayName: '№' },
  { value: 'soundName', displayName: 'Наименование звука' },
  { value: 'audioFilename', displayName: 'Имя файла звукозаписи' },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {

  allCols = COLS;

  displayedColumns: string[] = [];

  @Input('audio') audio: DataI = {} as DataI;

  @Output() audioSelected = new EventEmitter<Observable<AudioI>>()

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.displayedColumns = this.allCols.map((col) => col.value);
  }

  selectAudio(row: AudioI): void {
    this.audioSelected.emit(of(row));
    this.audioService.selectAudio(row);
  }
}
