function form() {
  
    return (  
   
     <center>
     <form>
     <h1>pls enter your marks </h1>
  <div><label>
    roll number:
    <input type="text" name="name" />
  </label></div>
  
  <div><label>
    Name :
    <input type= "text" name="name" max="100" />
  </label></div>
  <div><label>
    physics :
    <input type= "number" name="physics marks" max="3"/>
  </label></div>
  <div>
      <label>
    chemistry :
    <input type= "number" name="physics marks" max="3"/>
  </label></div>
  <div>
      <label>
    Maths :
    <input type= "number" name="physics marks" max="3"/>
  </label></div>
  <div>
  <label>
    total:
    <input type= "number" name="physics marks" max="3"/>
  </label></div>
  <div>
  <label>
    percentage :
    <input type= "number" name="physics marks" max="3"/>
  </label></div>
 
 
  

<div> <input type="submit" onClick= "./leader" value="Submit" />
</div>

 
</form>
</center>
 
    );
  }
  
export default form;
