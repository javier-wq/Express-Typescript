//Creando los tipos.
export type Wheather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'


//Creando interface.
export interface DiaryEntry{
    id: number,
    date: string,
    weather: Wheather,
    visibility: Visibility,
    comment: string
}