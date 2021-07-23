const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema( 
    {
        thoughtText: {
            type: String,
            require: true,
            min: [1, 'Please enter text'],
            max: [280, 'Text can only be 280 characters']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal = dateFormat(createdAtVal)
        },
        username: {
            type: String,
            require: true
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

//Virtual to count the total count of reactions 
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

//Create a Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

//export the thought model
module.exports= Thought;