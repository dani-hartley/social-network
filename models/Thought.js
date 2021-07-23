const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            max: [280, 'Text can only be 280 characters']
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
)


const ThoughtSchema = new Schema( 
    {
        thoughtText: {
            type: String,
            required: true,
            min: [1, 'Please enter text'],
            max: [280, 'Text can only be 280 characters']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
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