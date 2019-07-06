// Declare our collection

import { Mongo } from "meteor/mongo";

export const Courses = new Mongo.Collection("courses");

// Meteor.methods({
//     'todos.updateText'({ todoId, newText }) {
//         new SimpleSchema({
//             todoId: { type: String },
//             newText: { type: String }
//         }).validate({ todoId, newText });

//         const todo = Todos.findOne(todoId);

//         if (!todo.editableBy(this.userId)) {
//             throw new Meteor.Error('todos.updateText.unauthorized',
//                 'Cannot edit todos in a private list that is not yours');
//         }

//         Todos.update(todoId, {
//             $set: { text: newText }
//         });
//     }
// });
