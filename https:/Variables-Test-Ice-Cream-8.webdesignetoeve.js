<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Frosty Ice Cream Store</title>
    <link href="index.css" rel="stylesheet" type="text/css" />
    <script src="index.js"></script>
  </head>
  <body>
   <h2>Frosty Ice Cream Store Daily Report Generator</h2>
   <div>
   Manager First Name: <input type="text" id="firstName" value=""><br>
   Manager Last Name: <input type="text" id="lastName" value=""><br>
   # Hours Worked: <input type="number" id="workHours" value="40"><br>
   # Sundaes: <input type="number" id="sundaes" value="25"><br>
   
   # Cones: <input type="number" id="cones1" value="100"><br>
   # Shakes: <input type="number" id="shakes1" value="30"><br>
   # Employees: <input type="number" id="employees1" value="3"><br>
   Notes:<br> <textarea rows="4" cols="50" id="noteNumber" value=""></textarea><br>
   <button onclick="iceCream()">Generate Report Below</button>
   <p id="finalReport"></p>
   </div>
  </body>
</html>
