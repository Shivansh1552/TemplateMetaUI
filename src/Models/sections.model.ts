
//  export class SectionModel{
//     sections!: StepConfigModel[];
//  }

 
// export class StepConfigModel{

//    step!: string;
// }

export class SectionModel{
   constructor(
      public id = '',
      public name = '',
      public version = '',
      public iPackName = '',
      public sectionName= '',
      public title= '',
      public desc= '',
      public content = '',
      public templateName = '',
      public headerString = ''
   ) { }

}