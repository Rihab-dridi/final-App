import React,{Fragment, useState } from 'react';
import axios from 'axios'

function FileUpload() {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
        console.log('onchange')
      };
    
const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e)
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData.append)
    console.log("onsubmit")
try {
    const res = await axios.post('/upload/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
          }
    })
   
    const { fileName, filePath } = res.data;
    
    setUploadedFile({ fileName, filePath });
    console.log(fileName)
    console.log(res);
} catch (err) {
    if (err.response.status === 500) {
      
    } else {
      console.log(err.response.data.msg);
    }
  }
};

    return (
        <Fragment>
            <form >
            <div className='custom-file mb-4'>
                
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>
            <button  className='btn btn-primary btn-block mt-4'onClick={onSubmit} > upload</button>
            </form>
            
            <div>{uploadedFile ? <img src={uploadedFile.filePath} alt="hi"/>:null } </div>
            <h1>{uploadedFile.fileName}</h1>
        </Fragment>
    )
}

export default FileUpload
