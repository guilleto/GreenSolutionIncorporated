class ListArray {
   
    constructor(){
        this.n = 5;
        this.count = 0;
        this.larray = []; 
        this.position = 0;
    }

    insert(item){
 
        var inserted = false;
        if(true){      
            if(!this.search(item)){
                for( let j = this.count; j > this.position; j--){
                        this.larray[j] = this.larray[j-1];
                }
            this.larray[this.position] = item;
            this.count++;
            inserted = true;
            }
        }       
         else{
            console.log("List is full");
            }
        return inserted;
    }


    delete(item){
        var deleted = false;
        if(!this.empty()){
           if(this.search(item)){
               console.log(this.position);
               
            for(let j = this.position; j<(this.count-1); j++){
                this.larray[j] = this.larray[j+1];
                
            }
            this.count--;
            deleted = true;
           }
        }
        else{
            console.log("List is empty");
        }
        return deleted;        
    }
    full(){
        return false;
    }
    empty(){
        return this.count <= 0;
    }
    search(item){
        var found = false;
        var stop = false;
        this.position = 0;
        while(this.position < this.count && !stop){
            //if(this.larray[this.position][0]==item){
              //  found = true;
           // }
            if(this.larray[this.position][0] >= item[0]){           
                stop = true;
            }else{
                this.position++;
            }
        }
        return found;
    }
}

const arr = ListArray();
module.exports = arr;
