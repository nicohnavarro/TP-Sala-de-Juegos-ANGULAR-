import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirPokemonComponent } from './elegir-pokemon.component';

describe('ElegirPokemonComponent', () => {
  let component: ElegirPokemonComponent;
  let fixture: ComponentFixture<ElegirPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElegirPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegirPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
