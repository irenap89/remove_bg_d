import express from 'express';
import cors from 'cors';
import fileupload from 'express-fileupload'
import fs from "node:fs";

const app = express()

app.use(cors());
app.use(fileupload());

app.use(express.static('upload_img'));
app.use(express.static('no_bg_img'))

app.get('/test', function (req, res) {
  res.send('Hello World 111')
})


app.post('/upload_file',function (req, res) {

    let file_img=req.files.file;
  
    let d = new Date();
  
    let file_name= d.getTime()+'_'+file_img.name;
    let file_path='upload_img/' + file_name;
    let color=req.body.color;

    if (file_img.mimetype=='image/png' || file_img.mimetype=='image/jpeg'  || file_img.mimetype=='image/jpg'){
        // save file ...

        file_img.mv(file_path , async function(err) {
            if(err){
                console.log(err);
            } else {
                // send to API

                const inputPath = file_path;
                const fileBlob = await fs.openAsBlob(inputPath)
                const rbgResultData = await removeBg(fileBlob,color);
                fs.writeFileSync('no_bg_img/no_bg_' + file_name, Buffer.from(rbgResultData));

                res.send(file_name);
            } 
    
       });

       

    } else {
        res.send('file not suported')
    }
   // console.log(req.body);
  
})




async function removeBg(blob,color) {
    const formData = new FormData();
    formData.append("size", "auto");
    formData.append("image_file", blob);
    formData.append("bg_color", color);
    
  
    const response = await fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: { "X-Api-Key": "hYDHDX7Th9Jb9vYMhCYQprvE" },
      body: formData,
    });
  
    if (response.ok) {
      return await response.arrayBuffer();
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  }


console.log('running server');
app.listen(5000)