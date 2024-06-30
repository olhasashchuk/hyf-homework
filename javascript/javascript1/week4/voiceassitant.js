// Hello my name is Benjamin - Should save the name benjamin. and respond with "nice to meet you Benjamin". What if someone writes this twice?
// What is my name - should respond with the name of the person. What if the name has not yet been mentioned?
// Add fishing to my todo - Should respond with "fishing added to your todo". Should add fishing to a list of todos
// Add singing in the shower to my todo - Should add singing in the shower to a list of todos
// Remove fishing from my todo - Should respond with "Removed fishing from your todo"
// What is on my todo? - should respond with the todos. Fx you have 2 todos - fishing and singing in the shower
// What day is it today? - Should respond with the date in a human readable format. E.g. if today is 30/8/2019 then it should respond with 30. of August 2019
// Should be able to do simple math. fx what is 3 + 3 should respond with 6. Or what is 4 * 12 should respond with 48
// Set a timer for 4 minutes - Should respond with "Timer set for 4 minutes". When 4 minutes is up: "Timer done". How do we set a timer in js? Google is your friend here!

let namePerson = "";
let todoList = [];

function getReply(command) {
   const partOfCommand = command.split(" ");
   const action = partOfCommand[0].toLowerCase();
      
   if (action === "hello") {
      let newName = partOfCommand.slice(4).join(" ");
      if (namePerson === "") {
         namePerson = newName;
         return `nice to meet you ${namePerson}`
      }
   }

   if (action === "what") {
      if (partOfCommand[3] === "name") {
         return `Your name is ${namePerson}`
      } else if (partOfCommand[4] === "todo?") {
         if (todoList.length >= 0) {
            return `You have ${todoList.length} todo - ${todoList}`;
         }
      } else if (partOfCommand[4] === "today?") {
         const currentDay = new Date().toLocaleDateString();
         return `Today is ${currentDay}`;
      }
   }

   if (action === "add") {
      const todo = partOfCommand.slice(1, -3).join(" ");
      todoList.push(todo);
      return `${todo} added to your todo`
   }  

   if (action === "remove") {
      const removeTodo = partOfCommand.slice(1, -3).join(" ");
      const index = todoList.indexOf(removeTodo);
      if (index !== -1) {
         todoList.splice(index, 1);
         return `Removed ${removeTodo} from your todo`;
      } 
   } 

   if (action === "set") {
      if (partOfCommand[1] === "a" && partOfCommand[2] === "timer" && partOfCommand[3] === "for") {
         const minutes = parseInt(partOfCommand[4]);
         setTimeout(() => {
             console.log("Timer done");
         }, minutes * 1000);
         return `Timer set for ${minutes} minutes`;
     }
   } 

   if (action === "what") {
      if (partOfCommand[1] === "is") {
         const expression = (partOfCommand.slice(2).join(" "));
         return eval(expression)
      }
   }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name"))
console.log(getReply("Add fishing to my todo"))
console.log(getReply("Add singing in the shower to my todo"))
console.log(getReply("Remove fishing from my todo"))
console.log(getReply("What is on my todo?"))
console.log(getReply("What day is it today?"))
console.log(getReply("what is 3 + 3"))
