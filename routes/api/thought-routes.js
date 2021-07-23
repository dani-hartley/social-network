const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    addReaction,
    removeReaction,
    deleteThought
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/')
.get(getAllThoughts)

// /api/thoughts/:userId
router.route('/:userId')
.post(createThought)

// /api/thoughts/:id
router.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
.post(addReaction)

// /api/thoughts/:thoughtId/:reactionId
router.route('/:thoughtId/:reactionId')
.delete(removeReaction)

module.exports = router;