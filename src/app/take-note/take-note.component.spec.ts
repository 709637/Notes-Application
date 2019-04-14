import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeNoteComponent } from './take-note.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule,  ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 

import { KeepServiceService } from '../keep-service.service';
import { notesStub } from '../notesStub';
import { By } from '@angular/platform-browser';
import { Note } from '../note';


describe('TakeNoteComponent', () => {
  let component: TakeNoteComponent;
  let fixture: ComponentFixture<TakeNoteComponent>;
  let notesService: KeepServiceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeNoteComponent ],
      imports:[MatExpansionModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, BrowserAnimationsModule],
      providers:[{ provide: KeepServiceService, useClass: notesStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeNoteComponent);
    component = fixture.componentInstance;
    notesService= fixture.debugElement.injector.get(KeepServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a input element', ()=>{
    let de= fixture.debugElement.query(By.css('input'));
    expect(de).toBeTruthy();
    expect(de.nativeElement.value).toBe('');
  })

  it('should contain button with value', ()=>{
    let de= fixture.debugElement.query(By.css('button'));
    expect(de).toBeTruthy();
    expect(de.nativeElement.value).toBe('Done');
  })

  it('should call the takeaNote method and returns the same value',()=>{
    spyOn(notesService,'postNote').and.callThrough();

    const testnote:Note= new Note();
    testnote.title='Testing from Spec File   ';
    testnote.text='Testing from Spec File test';

    component.note=testnote;
    fixture.detectChanges();

    let de= fixture.debugElement.query(By.css('button'));
    de.nativeElement.click();
    fixture.detectChanges();

    expect(notesService.postNote).toHaveBeenCalledWith(testnote);

    expect(component.note.text).toBe('');
    expect(component.note.title).toBe('');
  })

});
