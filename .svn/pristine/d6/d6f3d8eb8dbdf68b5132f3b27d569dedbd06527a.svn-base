import { Component, OnInit} from '@angular/core';
import { FormControl} from '@angular/forms';
import { Observable} from 'rxjs';
import { map, startWith} from 'rxjs/operators';
import { AutoCompleteService } from '../pages/service/autocomplete.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  providers: [AutoCompleteService]
})
export class AutocompleteComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(private acService: AutoCompleteService) {
  }

  ngOnInit() {
    // this.options = [];
    this.acService.getAll().subscribe((o) => {
      for(let i = 0;i < o.length; i++){
        this.options.push(o[i].value);
      }
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
