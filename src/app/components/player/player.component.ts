import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { AudioI } from '../../interfaces/data.interface';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent implements OnInit {

  isPlaying = false;

  isMuted = false;

  currentTime = 0;

  duration = 0;

  volume = 100;

  selectedAudio$: Observable<AudioI> = EMPTY;

  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  
  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.selectedAudio$ = this.audioService.selectedAudio$;
  }

  onAudioLoaded(): void {
    this.duration = this.audioPlayer.nativeElement.duration;
    this.audioPlayer.nativeElement.play();
    this.isPlaying = true;
  }

  onAudioEnded(): void {
    this.isPlaying = false;
  }

  togglePlay(audio: HTMLAudioElement) {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  toggleMute(audio: HTMLAudioElement): void {
    this.isMuted = !this.isMuted;
    audio.volume = this.isMuted ? 0 : this.volume / 100;
  }

  onVolumeChange(value: number, audio: HTMLAudioElement): void {
    this.volume = value;
    audio.volume = this.isMuted ? 0 : this.volume / 100;
  }

  onSliderChange(value: number, audio: HTMLAudioElement): void {
    audio.currentTime = value;
    this.currentTime = value;
  }

  updateCurrentTime(time: number): void {
    this.currentTime = time;
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }
}