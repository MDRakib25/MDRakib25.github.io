function createTable()
{
   rn = parseInt(document.getElementById("rowsnum").value); //fetches the entered rows by user
   cn = parseInt(document.getElementById("colnum").value); //fetches the entered column by user

   for(var i=0;i<=rn;i++)
   {
      var x=document.getElementById("myTable").insertRow(i); //insert row to the table
   for(var j=0;j<=cn;j++)  
      {
          var y= x.insertCell(j); //insert cells to each row
          y.innerHTML = " "+i+","+" "+j;
      }
   }
}