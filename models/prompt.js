import {Schema,model,models} from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type : Schema.Types.ObjectId,
        ref : 'User',
    },
    prompt :{ 
        type : String,
        required : [true, "Prompt is required"],
    },
    tag : {
        type : String, 
        required : [true, 'Tag is required'],
    }
})
// either get the prompt that already exist on models object and if doesn't exist create a new model that's called prompt bases on prompt schema
const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;