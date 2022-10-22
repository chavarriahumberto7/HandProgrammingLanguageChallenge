/* 
👉 : moves the memory cellPointer to the next cell
👈 : moves the memory cellPointer to the previous cell
👆 : increment the memory cell at the current position
👇 : decreases the memory cell at the current position.
🤜 : if the memory cell at the current position is 0, jump just after the corresponding 🤛
🤛 : if the memory cell at the current position is not 0, jump just after the corresponding 🤜
👊 : Display the current character represented by the ASCII code defined by the current position. 


This program display "Hello"
👇🤜👇👇👇👇👇👇👇👉👆👈🤛👉👇👊👇🤜👇👉👆👆👆👆👆👈🤛👉👆👆👊👆👆👆👆👆👆👆👊👊👆👆👆👊

This program (with nested loops) display "Hello World!"
👉👆👆👆👆👆👆👆👆🤜👇👈👆👆👆👆👆👆👆👆👆👉🤛👈👊👉👉👆👉👇🤜👆🤛👆👆👉👆👆👉👆👆👆🤜👉🤜👇👉👆👆👆👈👈👆👆👆👉🤛👈👈🤛👉👇👇👇👇👇👊👉👇👉👆👆👆👊👊👆👆👆👊👉👇👊👈👈👆🤜👉🤜👆👉👆🤛👉👉🤛👈👇👇👇👇👇👇👇👇👇👇👇👇👇👇👊👉👉👊👆👆👆👊👇👇👇👇👇👇👊👇👇👇👇👇👇👇👇👊👉👆👊👉👆👊

*/



const handMovingSigns='👉👆👆👆👆👆👆👆👆🤜👇👈👆👆👆👆👆👆👆👆👆👉🤛👈👊👉👉👆👉👇🤜👆🤛👆👆👉👆👆👉👆👆👆🤜👉🤜👇👉👆👆👆👈👈👆👆👆👉🤛👈👈🤛👉👇👇👇👇👇👊👉👇👉👆👆👆👊👊👆👆👆👊👉👇👊👈👈👆🤜👉🤜👆👉👆🤛👉👉🤛👈👇👇👇👇👇👇👇👇👇👇👇👇👇👇👊👉👉👊👆👆👆👊👇👇👇👇👇👇👊👇👇👇👇👇👇👇👇👊👉👆👊👉👆👊'


const MIN_CELL=0;
const MAX_CELL=256;


 const getNextPairFist=(index ,input)=>{

    let fists=1;

    

    for(let i=index+1;i<input.length;i++){
        if(input[i]=='🤜') fists++;
        if(input[i]=='🤛') fists--;
        if(fists==0) return i;
    }
}

const getPreviousPairFist=(index ,input)=>{
    let fists=1;

    


    for(let i=index-1;i>=0;i--){
        if(input[i]=='🤜') fists--;
        if(input[i]=='🤛') fists++;
        if(fists==0) return i;
    }
}



function translator(string){

    const input=[...string];

    const memory=[0];
    let index=0;
    let cellPointer=0;   
    let message='' 

    //dictionary of actions
   const actions={
    '👉':()=>
    {
       
        cellPointer++
        memory[cellPointer]??=0;
    },
    '👈':()=>
    {
        
        cellPointer--
        memory[cellPointer]??=0;
    },
    '👆':()=>
    {
        memory[cellPointer]=(memory[cellPointer]+1)%MAX_CELL
    },
   
    '👇':()=>
    {
        memory[cellPointer]=(memory[cellPointer]+(MAX_CELL-1))%MAX_CELL
    },
   '🤜':()=>
    {
        if(memory[cellPointer]==0){
            
            index= getNextPairFist(index,input);
            

        }
    },

    '🤛':()=>
    {
        if(memory[cellPointer]!==0){
            
           index= getPreviousPairFist(index,input);
            

        }
    },
    '👊':()=>{
        message+= String.fromCharCode(memory[cellPointer]);
    }


}
    

         

        
        

    
    
    while ( index< input.length){
        

        const action=input[index];

        actions[action]()

        

        index++
    }

return message;

}



console.log(translator(handMovingSigns).length);

module.exports=translator

