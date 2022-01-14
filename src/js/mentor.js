// *======================
// const array = [2, 3, 6, 8, 9];
// let example = array.reduce((prev, num) => (prev += num), 0);
// console.log(example);

// function myCustomReduce(arr, initialValue = 0) {
//   let total = initialValue;
//   for (let i = 0; i < arr.length; i++) {
//     const iterator = arr[i];
//     total += iterator;
//   }
//   //   return total;
//   console.log(total);
// }
// myCustomReduce(arr, 10);

// *======================
// const words = [
//   'number',
//   'boolean',
//   'string',
//   'number',
//   'NaN',
//   'object',
//   'boolean',
// ];
// const arr = words.reduce((prev, item) => {
//   return prev.includes(item) ? prev : [...prev, item];
// }, []);
// console.log(arr);

// const arr = words.filter((item, index) => words.indexOf(item) === index);
// console.log(arr);

// *=======================
// const word = ['a', 'B', 14, 'c', true, 'w'];
// const cba = word.filter(item => typeof item === 'string');
// const down = cba.map(leter => leter.toLowerCase());
// const up = cba.map(leter => leter.toUpperCase());
// console.log(down);
// console.log(up);
// const revSort = [...cba].sort().reverse();
// console.log(revSort);
// console.log(cba);

// *======================
// const Olesia = {
//   name: 'Olesia',
//   skills: ['html', 'css', 'js'],

//   upgrade(skillName) {
//     const hasSkill = this.skills.includes(skillName);
//     if (hasSkill) {
//       console.log(`Studend ${this.name} has this skill ${skillName}`);
//       return;
//     }
//     if (typeof skillName !== 'string' || skillName === '') {
//       console.log('Write something');
//       return;
//     }

//     this.skills.push(skillName);
//     console.log(`Student ${this.name} upgrade skills ${this.skills}`);
//   },
// };

// // Olesia.upgrade(765);

// const Svitlana = {
//   name: 'Svitlana',
//   skills: ['html', 'css', 'js'],
// };
// const link = Olesia.upgrade;
// // link.call(Svitlana,'js')
// // console.log(link);
// const upgradeLink = link.bind(Svitlana);

// upgradeLink('java');

// const Masha = {
//   name: 'Masha',
//   skills: ['html', 'css', 'js'],
// };
// const linkMasha = link.bind(Masha);
// linkMasha('js');
// upgradeLink('angular');

// *=================
// class Student {
//   constructor({ name, skills }) {
//     (this.name = name), (this.skills = skills);
//   }
//   upgrade(skillName) {
//     console.log(this);
//     const hasSkill = this.skills.includes(skillName);
//     if (hasSkill) {
//       console.log(`Studend ${this.name} has this skill ${skillName}`);
//       return;
//     }
//     if (typeof skillName !== 'string' || skillName === '') {
//       console.log('Write something');
//       return;
//     }
//     this.skills.push(skillName);
//     console.log(`Student ${this.name} upgrade skills ${this.skills}`);
//   }
// }
// const Ruslan = new Student({
//   name: 'Ruslan',
//   skills: ['html', 'js', 'css'],
// });
// Ruslan.upgrade('react');
// const Vadim = new Student({
//   name: 'Vadim',
//   skills: ['html', 'js', 'css'],
// });
// Vadim.upgrade('Nodejs');
