<script>
   function LCSubStr( X,Y,m,n){
      var LCStuff = Array(m+1).fill().map(()=>Array(n+1).fill(0));
      var Result = 0;
      for ( i=0; i<=m; i++){
         for( j= 0; j<=n; j++) {
            if(i==0 || j==0)
               LCStuff[i][j]=0;
            else if (X [i-1] == Y[j-1]){
               LCStuff[i][j]=LCStuff[i-1][j-1]+1;
               result = Math.max(result, LCStuff[i][j]);
            }
            else {
               LCStuff[i][j]=0;
            }
         }
      }
   return result;
   }

   
   //Driver Code 
   var X= "Abhilash ";
   var Y= "Abhilash Gandham";
   var m = X.length;
   var n = Y.length;

   document.write("Length of Longest Common SubString is " + LCSubStr(X,Y,m,n));
</script>