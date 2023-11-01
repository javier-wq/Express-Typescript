//Creando los tipos.
export type Wheather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
export type Visibility = "great" | "good" | "ok" | "poor";

//Creando interface.
export interface DiaryEntry {
  id: number;
  date: string;
  weather: Wheather;
  visibility: Visibility;
  comment: string;
}

//Forma de reutilizar el DiaryEntry usando pick
//export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

//Forma de reutilizar el DiaryEntry para omitir el comment usando Omit
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">;

export type NewDiaryEntry = Omit<DiaryEntry, "id">;
