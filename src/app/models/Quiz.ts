import { Question} from './Question';

//Svaki kviz ima ime i listu pitanja
export class Quiz {
    name: string;
    questions: Question[];
}