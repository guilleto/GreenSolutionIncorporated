class ListArray {
   
    constructor(){
        this.count = 0;
        this.larray = []; 
        this.position = 0;
    }

    insert(item){
 
        var inserted = false;
             
            if(!this.search(item)){
                
                for( let j = this.count; j > this.position; j--){
                        this.larray[j] = this.larray[j-1];
                }
            this.larray[this.position] = item;
            this.count++;
            inserted = true;
            }      

        return inserted;
    }


  delete(item){
        var deleted = false;
        console.log(!this.search2(item));
        
        if(!this.empty()){                    
           if(true){
            console.log(this.count-1);
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

 
    empty(){
        return this.count <= 0;
    }

    //este seacrch es el que le da la posicion a insert
    search(item){
        var found = false;
        var stop = false;
        this.position = 0;
        while(this.position < this.count && !stop){
            if(this.larray[this.position][0]==item){
                found = true;
            }
            if(this.larray[this.position][0] >= item[0]){           
                stop = true;

            }else{
                this.position++;
            }
        }
        return found;
    }

    //este seacrch es el que le da la posicion a delete
   search2(item){
        var found = false;
        var stop = false;
        this.position = 0;
        console.log(this.count)
        while(this.position < this.count && !stop){

            if(this.larray[this.position][0] >= item){           
                stop = true;
            }else{
                this.position++;
            }
        }
        return found;
    }
}

class Queue {
    constructor(){
        this.items = [];
        this.front = 0;
        this.end = 0;
    }

    enqueue(data){
        this.items[this.end]= data;
        this.end++;
    };

    dequeue(){
        if(this.fornt===this.end){
            return null;
        };
        const data = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return data;
    };

    getSize(){
        return this.end - this.front;
    }

    isEmpty(){
        if(this.getSize()=== 0 ){
            return true;
        }else {
            return false;
        }
    }
    peek(){
        if(this.getSize() === 0){
            return null;
        };
        return this.items[this.front];
    }

    print(){
        if(this.getSize === 0){
            return null;
        };
        let result = '';
        for(let i= this.front;i<this.end;i++){
            result += this.items[i] + " ";
        };

        return result;
    }
}

const prueb = new ListArray();

console.log(prueb.search('4'));

const arr = new ListArray();
const dbConnection = require('../../config/dbConnection');


module.exports = app => {
    const connection = dbConnection();


  app.get('/', (req, res) => {
            res.render('news/Vista.ejs', {
                problemas: arr.larray
              });
        
        //console.log(result);
        
     
  });

  app.post('/news', (req, res) => {
       
   const arrayInsert = new ListArray();
   arrayInsert.insert(req.body.problem_id);
   arrayInsert.insert(req.body.Problema);
   arrayInsert.insert(req.body.Departamento);
   arrayInsert.insert(req.body.Municipio);
   arrayInsert.insert(req.body.Localidad);
   arrayInsert.insert(req.body.Fecha);
   arrayInsert.insert(req.body.Descripcion);
   arrayInsert.insert(req.body.EscalaPeligro);

   const { problem_id,Problema,Departamento,Municipio,Localidad,Fecha,Descripcion,EscalaPeligro } = req.body;
   arr.insert(arrayInsert.larray);

   connection.query('INSERT INTO problemas SET ? ',
     {
        problem_id,
        Problema,
        Departamento,
        Municipio,
        Localidad,
        Fecha,
        Descripcion,
        EscalaPeligro
     }
    ,(err, result) => {        
        res.redirect('/');
      });
      console.log(arr.larray);
  });
  
  app.post('/search', (req, res) => {
    const { problem_id } = req.body;
    console.log(req.body); 
    console.log(arr.search2(req.body.problem_id));      
    res.redirect('/');
      
   });

  app.post('/delete', (req, res) => {
    const { problem_id } = req.body;
    console.log(req.body); 
    console.log(arr.delete(req.body.problem_id));      
    res.redirect('/');
    console.log(arr.larray);
      
   });

};


console.log(arr.larray);