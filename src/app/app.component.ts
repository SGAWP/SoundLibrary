import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { AudioI, DataI } from './interfaces/data.interface';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  data$: Observable<DataI> = EMPTY;

  selectedAudio!: Observable<AudioI>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.data$ = this.dataService.getData();
  }

  onAudioSelected(audio: Observable<AudioI>): void {
    this.selectedAudio = audio;
  }
}
