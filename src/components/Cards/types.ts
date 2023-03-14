// import { Card } from './types';

export type Card = {
    "id": number,
    "image": string,
    "text": string,
    "date": string,
    "lesson_num": number,
    "title": string,
    "description": string,
    "author": number,
  }

export enum CardSize {
    Large = 0,
    Medium = 1,
    Small = 2,
}
  
export type CardProps = {
    card: Card,
    size: CardSize,
}