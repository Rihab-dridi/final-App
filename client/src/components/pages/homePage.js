import React from 'react';
import  { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '90vh',
    backgroundImage: `url(https://blog.aifsabroad.com/wp-content/uploads/2020/05/AdobeStock_254424115-scaled.jpeg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  container: {
    textAlign: 'start',
  },
  title: {
    color: 'black',
    fontSize: '2.5rem',
    padding:'20px',
    paddingTop:'10%',
    back:'gold'
  },
  colorText:{
    borderRadius:"50%",
    backgroundColor:"orange",
    padding:'5px',
    paddingLeft:'10px',
    paddingRight:'10px'
  },
  paragraph:{
    padding:'20px',
  },
startBtn:{
 marginLeft:'20px',
 width:'600px',
 backgroundColor:'orange',
 color:'black'

  }
  
}));
export default function HomePage() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  
  return (
    <div className={classes.root}>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
           Your <span className={classes.colorText}>PFE</span> is not a typical trainee... <br/>
           <h3>it's the Spring of your career</h3>
          </h1>
          <h4 className={classes.paragraph}> 
          PFE online guide provide you handred of pfe books, <br/>where you can find resources,<br/>
           inspiration and all you need to be creative  </h4>
           
          <Button className={classes.startBtn}>
             Start
           </Button>
        </div>
        
      </Collapse>
     
    </div>
  );
}