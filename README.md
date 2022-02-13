<h2>Change the border color of div according to the radio button</h1>
 <p><input type="radio" value="red" name="form" id="one" onclick="myFunction(this.id)"/> Red</p>
  <p><input type="radio" value="Green"  name="form" id="two" onclick="myFunction(this.id)"/> Green</p>
  <p><input type="radio" value="blue" name="form"  id="three" onclick="myFunction(this.id)"/> Blue</p>
  
  <div id="container">Div Demo</div>
  
  <script>  
  function myFunction(id) {
    document.getElementById("container").style.borderColor = document.getElementById(id).value;
}  
</script>

=================================================================================
<h2>Javascript array foreach function</h2>
var a = ["Banana", "Orange", "Apple", "Mango"];  <br/>
var txt = "";    <br/>
a.forEach(myFunc);   <br/>

function myFunc(value){
    console.log(value);
}
<br/>
<b>//output</b><br/>
Banana<br/>
Orange<br/>
Apple<br/>
Mango<br/>
