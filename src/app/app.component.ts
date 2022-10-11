import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SectionModel } from 'src/Models/sections.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = {
    sections: [
      {
        name : "",
        title : "",
        step: ""
        // addressLines: [
        //   {
        //     addressLine: "",
        //   }
        // ]
      }
    ]
  }

  //  data = new SectionModel;
  myForm! : FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: [''],
      ipackname: [''],
      version :2,
      sections: this.fb.array([])
    })

    this.setSections();
  }

  onSubmit() {
    alert(this.data);
  }

  getControls() {
    return (this.myForm.get('sections') as FormArray).controls;
  }

  // getAddress(){
  //   return (this.myForm.get('step.addressLines') as FormArray).controls;
  // }

  // getAddress(){
  //   return (this.myForm.get('section.addressLines') as FormArray).controls;
  // }


  addNewSection() {
    // let control = <FormArray>this.myForm.controls.cities;
    let control = <FormArray>this.myForm.get('sections');
    control.push(
      this.fb.group({
        name : [''],
        title : [''],
        step: ['']
        // addressLines: this.fb.array([])
      })
    )
  }

  deleteSection(index: number) {
    // let control = <FormArray>this.myForm.controls.cities;
    let control = <FormArray>this.myForm.get('sections');
    control.removeAt(index)
  }

  // addNewAddressLine(control: FormGroup<{ addressLine: FormControl<string | null>; }>[]) {
  //   control.push(
  //     this.fb.group({
  //       addressLine: ['']
  //     }))
  // }

  // deleteAddressLine(control: { removeAt: (arg0: any) => void; }, index: any) {
  //   control.removeAt(index)
  // }

  setSections() {
    // let control = <FormArray>this.myForm.controls.cities;
    let control = <FormArray>this.myForm.get('sections');
    this.data.sections.forEach(x => {
      control.push(this.fb.group({ 
        name : x.name,
        title : x.title,
        step: x.step,

        // addressLines: this.setAddressLines(x) 
      }))
    })
  }

  // setAddressLines(x: { city: string; addressLines: { addressLine: string; }[]; }) {
  //   let arr = new FormArray([])
  //   x.addressLines.forEach(y => {
  //     arr.push(this.fb.group({ 
  //       addressLine: y.addressLine
  //     }))
  //   })
  //   return arr;
  // }
}


