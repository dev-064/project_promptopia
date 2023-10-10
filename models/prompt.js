import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        req: [true, 'Prompt is required'],
    },
    tag: {
        type: String,
        req: [true, 'Tag is required']
    }
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;