import express from 'express';
import cors from 'cors';
import fileupload from 'express-fileupload'
const app = express()

app.use(cors());
app.use(fileupload());



app.get('/test', function (req, res) {
  res.send('Hello World 111')
})


app.post('/upload_file',function (req, res) {

    let file_img=req.files.file;
  
    let d = new Date();
  
    let file_name= d.getTime()+'_'+file_img.name;
    if (file_img.mimetype=='image/png' || file_img.mimetype=='image/jpeg'  || file_img.mimetype=='image/jpg'){
        // save file ...

        file_img.mv('upload_img/' + file_name , function(err) {
            if(err){
                console.log(err);
            } else {
              //res.send('success')
            } 
    
       });

       

    } else {
        res.send('file not suported')
    }
   // console.log(req.body);
  
})


console.log('running server');
app.listen(5000)