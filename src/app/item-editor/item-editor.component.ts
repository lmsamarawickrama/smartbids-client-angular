import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ItemService} from "../_services/item.service";
import {TokenStorageService} from "../_services/token-storage.service";

@Component({
  selector: 'app-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.css']
})
export class ItemEditorComponent implements OnInit {

  itemForm: any;
  isSuccessful = false;
  errorMessage = '';

  @Output() itemSavedEvent = new EventEmitter<Event>();

  constructor(private formBuilder: FormBuilder, private itemService: ItemService, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      itemDescription: ['', [Validators.required]],
      minimumPrice: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      message: ['']
    })
  }

  get getControl() {
    return this.itemForm.controls;
  }

  onSubmit() {
    let userId = this.tokenStorageService.getUser().id;
    let formControls = this.itemForm.controls;

    this.itemService.saveItem(formControls.itemDescription.value, userId, formControls.minimumPrice.value, formControls.startDate.value, formControls.endDate.value).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.itemForm.reset();
        this.itemSavedEvent.emit(event);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSuccessful = false;
      }
    );
  }
}
