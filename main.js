function Submit(classid) { 
    console.log('hello world')
    this.matrixA = [];
    this.matrixB = [];
    var result = [];
    for(var i=0; i<3; i++) {
        this.matrixA[i] = [];
        this.matrixB[i] = [];
    }
    this.AxDimension = 3;
    this.AyDimension = 3;
    this.BxDimension = 3;
    this.ByDimension = 3;
    
    var row1 = document.getElementsByClassName("matrix1row1");
    var row2 = document.getElementsByClassName("matrix1row2");
    var row3 = document.getElementsByClassName("matrix1row3");
    for (var i=0; i<3; i++) {
        this.matrixA[0][i] = row1[i].value;
        this.matrixA[1][i] = row2[i].value;
        this.matrixA[2][i] = row3[i].value;
    }
    row1 = document.getElementsByClassName("matrix2row1");
    row2 = document.getElementsByClassName("matrix2row2");
    row3 = document.getElementsByClassName("matrix2row3");
    for (var i=0; i<3; i++) {
        this.matrixB[0][i] = row1[i].value;
        this.matrixB[1][i] = row2[i].value;
        this.matrixB[2][i] = row3[i].value;
    }



    var string = "\r";
		for (i =0; i<this.AyDimension; i++) {
			for (var j=0; j<this.AxDimension; j++) {
				string=string+"    "+matrixA[i][j];
			}
			string=string+"\r";
		}
    console.log(matrixA)
    console.log(matrixB)

    document.getElementById("outputtext").value = string;
}