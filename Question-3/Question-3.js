
const fs = require('fs');
const createfilelogs = ()=>{
    const file = "./logs.txt";
   if(!fs.existsSync(file)){
    fs.mkdirSync(file);
    console.log(`Created file: ${file}`);
   }
   process.chdir(file);
   for(let i=0; i<10; i++){
       fs.writeFileSync(`log${i}.txt`, `Log file ${i}`);
       console.log(`Created file: log${i}.txt`);
   }


}

const removefilelogs = ()=>{
    const file = "./logs.txt";
    if(fs.existsSync(file)){
        process.chdir(file);
        fs.readdir(process.cwd(), (err, files)=>{
            files.forEach(file => {
                    fs.unlink(file, (err)=>{
                        if(err) throw err;
                        console.log(`Deleted file: ${file}`)
                    }
                    )
            });
        }
        )
        
        
        
    }
}
    
            
                    
                    
                
//createfilelogs();
removefilelogs();






