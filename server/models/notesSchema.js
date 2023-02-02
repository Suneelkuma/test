const mongoose=require('mongoose');

const notesSchema=new mongoose.Schema(
    {
        user:{type:mongoose.Schema.Types.ObjectId,ref:"USERT"},
        Title:{type:String ,required:true},
        Description:{type:String ,required:true},
        
        Tag:{type:String,required:true},
     
        work:{type:String, required:true},
       
}


)

const notesModel=mongoose.model("NOTES",notesSchema);

module.exports=notesModel