import { Note } from './note';
import { Observable, observable } from 'rxjs';

export class notesStub{

    postNote(note: Note): Observable<Note>{
       return Observable.of(note);
    }

}   