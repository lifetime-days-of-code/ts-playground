interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// function createCourseGoal(title:string, description: string, date:Date):CourseGoal {
//   return {
//     title: title,
//     description: description,
//     completeUntil: date
//   }
// }

function createCourseGoal(title:string, description: string, date:Date):CourseGoal {
  let courseGoal:Partial<CourseGoal> = {}
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names:Readonly<string[]> = ['Plamen', 'Sports']
// names.push('fsafa') wont work because the utility type is set to Readonly
// names.pop('fsafa') wont work because the utility type is set to Readonly