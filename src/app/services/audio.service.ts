import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AudioI } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private initialState: AudioI = {
    id: 0,
    soundName: '',
    audioFilename: '',
    path: ''
  };

  private selectedAudioSource = new BehaviorSubject<AudioI>(this.initialState);

  selectedAudio$ = this.selectedAudioSource.asObservable();

  selectAudio(audio: AudioI): void {
    this.selectedAudioSource.next(audio);
  }

}
