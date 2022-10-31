import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SectionModel } from 'src/Models/sections.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // data = {
  //   sections: [
  //     {
  //       sectionName : "",
  //       title : "",
  //       desc: "",
  //     }
  //   ]
  // }

  //  data = new SectionModel;
  myForm : FormGroup;
  data = new SectionModel();
  // sections: any;
  constructor(private fb: FormBuilder, private router: Router) {
    this.myForm = this.fb.group({
      id: [''],
      name: [''],
      version :2,
      iPackName: [''],
      
      sections: this.fb.array([]),
      // sec : this.fb.group(this.sections)
    })

    // this.setSections();
  }

  getSectionControls() {
    return (this.myForm.get('sections') as FormArray).controls;
  }

  get sections(): FormArray {
    return this.myForm.get('sections') as FormArray;
  }

  addNewSection(): void {
    this.sections.push(this.buildSection());
  }

  buildSection(): FormGroup {
    return this.fb.group({
      // overview : this.fb.group({
       sectionName: '',
       title: '',
       desc: '',
      //  staticConfig : this.fb.group({

        content : '',
        headers : this.fb.array([])

      //  })
       

      })
       
    // });
  }

  // get overview() :FormGroup {
  //   return this.getSectionControls().overview as FormGroup;
  // }

  // getControls() {
  //   return (this.myForm.get('sections') as FormArray).controls;
  // }

  // get headers(): FormArray {
  //   return this.myForm.get('section.headers') as FormArray;
  // }

  // addNewHeader(): void {
  //   this.headers.push(this.buildHeader());
  // }

  // buildHeader(): FormGroup {
  //   return this.fb.group({
  //      templateName: '',
  //      headerString: '',
  //   });
  // }

  headers(sectionIndex: number): FormArray {
    return this.sections
      .at(sectionIndex)
      .get('headers') as FormArray;
  }

  buildHeader(): FormGroup {
    return this.fb.group({
      templateName: '',
      headerString: ''
    });
  }

  addHeader(sectionIndex: number) {
    this.headers(sectionIndex).push(this.buildHeader());
  }

  removeHeader(sectionIndex: number, headerIndex: number) {
    this.headers(sectionIndex).removeAt(headerIndex);
  }
  // addNewSection() {
  //   // let control = <FormArray>this.myForm.controls.cities;
  //   let control = <FormArray>this.myForm.get('sections');
  //   control.push(
  //     this.fb.group({
  //       name : [''],
  //       title : [''],
  //       desc: ['']
  //       // addressLines: this.fb.array([])
  //     })
  //   )
  // }

  deleteSection(index: number) {
    // let control = <FormArray>this.myForm.controls.cities;
    let control = <FormArray>this.myForm.get('sections');
    control.removeAt(index)
  }


  // deleteHeader(index: number) {
  //   // let control = <FormArray>this.myForm.controls.cities;
  //   let control = <FormArray>this.myForm.get('section.headers');
  //   control.removeAt(index)
  // }

  // addNewAddressLine(control: FormGroup<{ addressLine: FormControl<string | null>; }>[]) {
  //   control.push(
  //     this.fb.group({
  //       addressLine: ['']
  //     }))
  // }

  // deleteAddressLine(control: { removeAt: (arg0: any) => void; }, index: any) {
  //   control.removeAt(index)
  // }

  // setSections() {
  //   // let control = <FormArray>this.myForm.controls.cities;
  //   let control = <FormArray>this.myForm.get('sections');
  //   this.data.sections.forEach(x => {
  //   control.push(this.fb.group({
  //       sectionName: x.sectionName,
  //       title: x.title,
  //       desc: x.desc,
  //       // addressLines: this.setAddressLines(x)
  //     }));
  //   })
  // }

  // setAddressLines(x: { name: string; title : string ; step : string; addressLines: { addressLine: string; }[]; }) {
  //   // let arr = new FormArray([])
  //   let arr = <FormArray>this.myForm.get('sections.addressLines');
  //   x.addressLines.forEach(y => {
  //     arr.push(this.fb.group({ 
  //       addressLine: y.addressLine
  //     }))
  //   })
  //   return arr;
  // }

  // save(obj: any) {

  //   this.metaService.addMetadata(obj)
  //   .subscribe((result) => console.log(result));
    
  //  console.log(obj);
 
  // }

  // save(obj: any) {
            
  //   console.log(obj);
  
  //  }

//   onSubmit(myForm: any) {
 
//    //   this.headers.push({
//    //       templateName: myForm.templateName,
//    //       headerString: myForm.headerString,
//    // })
 
// //    this.headers.push({
// //      templateName: myForm.templateName,
// //      headerString: myForm.headerString,
// //  })
 
// //      this.validations.push({
// //        type : myForm.type1,
// //        value : myForm.value
// //      })
   
//  //   this.validations.push({
//  //     type1: myForm.type1,
//  //     value: myForm.value,
//  // })
// //  console.log(myForm.value);
// //  this.sections.push(this.buildSection());
//    const obj: SectionModel={
//          //id: parseInt('uuid()',10),
   
//              id: myForm.id,
//              //id: parseInt('uuid()',10),
//              name: myForm.name,
//              iPackName: myForm.iPackName,
//              version: myForm.version,
         
      
//                sectionName : myForm.sectionName,
//                title :myForm.title,
//                desc:myForm.desc,

//            }

//            console.log(obj);
//           }

onSubmit(){
  console.log(this.myForm);
  console.log('Saved: ' + JSON.stringify(this.myForm.value));
}
     
         
  }


 



