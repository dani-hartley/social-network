const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            //must match a vaid email address
            match: [/.+\@.+\..+/]
        },
        //array of _id values referencing the Thought model
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: []
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

//Virtual to count the total count of friends a user has
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})