export interface DataI {
  data: AudioI[];
}

export interface AudioI {
  id: number;
  soundName: string;
  audioFilename: string;
  path: string;
}

export interface ColumnI {
  value: string;
  displayName: string;
}