import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule,MatInputModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
text = '';

  @Output() searchChange = new EventEmitter<string>();

  onInput() {
    this.searchChange.emit(this.text);
  }
}
