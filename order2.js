function Submit(classid) { 
    console.log('hello world')
    this.matrixA = [];
    this.matrixB = [];
    var result = [];
    for(var i=0; i<2; i++) {
        this.matrixA[i] = [];
        this.matrixB[i] = [];
    }
    this.AxDimension = 2;
    this.AyDimension = 2;
    this.BxDimension = 2;
    this.ByDimension = 2;
    
    var row1 = document.getElementsByClassName("matrix1row1");
    var row2 = document.getElementsByClassName("matrix1row2");
    var row3 = document.getElementsByClassName("matrix1row3");
    for (var i=0; i<2; i++) {
        this.matrixA[0][i] = row1[i].value;
        this.matrixA[1][i] = row2[i].value;
    }
    row1 = document.getElementsByClassName("matrix2row1");
    row2 = document.getElementsByClassName("matrix2row2");
    row3 = document.getElementsByClassName("matrix2row3");
    for (var i=0; i<2; i++) {
        this.matrixB[0][i] = row1[i].value;
        this.matrixB[1][i] = row2[i].value;
    }
        if (classid=='add') {
            var result = [];
            for(var i=0; i<2; i++) 
                result[i]=[];
            for (i =0; i<this.AyDimension; i++) {
                for (var j=0; j<this.AxDimension; j++) {
                    result[i][j]=Math.round((parseFloat(this.matrixA[i][j])+parseFloat(this.matrixB[i][j]))*100)/100;
                }
            }
            var string = "\r";
            for (i =0; i<this.AyDimension; i++) {
                for (var j=0; j<this.AxDimension; j++) {
                    string=string+"\t"+result[i][j];
                }
                string=string+"\r";
            }
            document.getElementById("outputtext").value = string;
        } else if(classid=='sub') {
            var result = [];
            for(var i=0; i<2; i++) 
                result[i]=[];
            for (i =0; i<this.AyDimension; i++) {
                for (var j=0; j<this.AxDimension; j++) {
                    result[i][j]=Math.round((parseFloat(this.matrixA[i][j])-parseFloat(this.matrixB[i][j]))*100)/100;
                }
            }
            var string = "\r";
            for (i =0; i<this.AyDimension; i++) {
                for (var j=0; j<this.AxDimension; j++) {
                    string=string+"\t"+result[i][j];
                }
                string=string+"\r";
            }
            document.getElementById("outputtext").value = string;
        } else if(classid=='multiply') {
            var result = [];
            for(var i=0; i<2; i++) 
                result[i]=[];
            i=0;
            var j=0;
            //x refers to columns, y refers to rows
            var rowsRes = this.AyDimension;
            var columnsRes = this.BxDimension;
            for (i=0; i<rowsRes; i++) {
                for (j=0; j<columnsRes; j++) {
                    result[i][j] = this.matrixA[i][0]*this.matrixB[0][j]+this.matrixA[i][1]*this.matrixB[1][j];
                    result[i][j] = Math.round(result[i][j]*100)/100;
                }
            }
            var string = "\r";
            for (i=0; i<rowsRes; i++) {
                for (j=0; j<columnsRes; j++) {
                    string=string+"\t"+result[i][j];
                }
                string=string+"\r";
            }
            document.getElementById("outputtext").value = string;
        } else if(classid=='determinent') {
            determinant = (this.matrixA[0][0]*this.matrixA[1][1])-(this.matrixA[0][1]*this.matrixA[1][0]);
            if (determinant < 0) {this.determinantA = (determinant*-1);}
            else {this.determinantA = (determinant);}
            document.getElementById("outputtext").value = 'Determinant: '+this.determinantA;
        } else if(classid=='transpose') {
            var string = "\r";
            for (var i =0; i<this.AxDimension; i++) {
                for (var j=0; j<this.AyDimension; j++) {
                    string=string+"\t"+this.matrixA[j][i];
                }
                string=string+"\r";
            }
            document.getElementById("outputtext").value = string;
        } else if(classid=='rank') {
            var rank = 2;
            var R=2;
            var row =  2;
            var mat = this.matrixA;
            for (row = 0; row < rank; row++)
            {
                if (mat[row][row] != 0)
                {
                    for (col = 0; col < R; col++)
                    {
                        if (col != row)
                        {
                            var mult = mat[col][row] / mat[row][row];             
                            for (i = 0; i < rank; i++)
                            mat[col][i] -= mult * mat[row][i];
                        }
                    }
                }
                else
                {
                    reduce = true;
                    for (var i = row + 1; i < R; i++)
                    {
                        if (mat[i][row] != 0)
                        {
                            swap(mat, row, i, rank);
                            reduce = false;
                            break ;
                        }
                    }
                    if (reduce)
                    {
                        rank--;
                        for (i = 0; i < R; i ++)
                            mat[i][row] = mat[i][rank];
                    }
                    row--;
                }
            }
            document.getElementById("outputtext").value = 'Rank: '+rank;
            return rank;
        } else if(classid=='nullity') {
            var rank = 2;
            var R=2;
            var row =  2;
            var mat = this.matrixA;
            for (row = 0; row < rank; row++)
            {
                if (mat[row][row] != 0)
                {
                    for (col = 0; col < R; col++)
                    {
                        if (col != row)
                        {
                            var mult = mat[col][row] / mat[row][row];             
                            for (i = 0; i < rank; i++)
                            mat[col][i] -= mult * mat[row][i];
                        }
                    }
                }
                else
                {
                    reduce = true;
                    for (var i = row + 1; i < R; i++)
                    {
                        if (mat[i][row] != 0)
                        {
                            swap(mat, row, i, rank);
                            reduce = false;
                            break ;
                        }
                    }
                    if (reduce)
                    {
                        rank--;
                        for (i = 0; i < R; i ++)
                            mat[i][row] = mat[i][rank];
                    }
                    row--;
                }
            }
            var nullity = 2-rank
            document.getElementById("outputtext").value = 'Nullity: '+nullity;
        } else if(classid=='inverse') {
            determinant = (this.matrixA[0][0]*this.matrixA[1][1])-(this.matrixA[0][1]*this.matrixA[1][0]);
            if (determinant < 0) {this.determinantA = (determinant*-1);}
            else {this.determinantA = (determinant);}
        if (this.determinantA==null){
            document.getElementById("outputtext").value = 'Fubuki Dummy cant even pass a variable'
			return;}
		if(this.determinantA==0) {
            document.getElementById("outputtext").value = 'Not Defined'
			return;
		}
		var adjacent = [];
		var result = [];
		var aux = [];
		for(var i=0; i<2; i++) {
			adjacent[i] = [];
			result[i] = [];
			aux[i]=[];
		}
		for (i =0; i<this.AyDimension; i++) {
			for (var j=0; j<this.AxDimension; j++) {
				if (this.AxDimension == 1)
					adjacent[i][j] = 1+"/"+this.matrixA[i][j];
				if (this.AxDimension==2) {
					adjacent[j][i] = ((-1)**(i+1+j+1))*this.matrixA[i][j];
				}
				if (this.AxDimension==3) { 
					var count1 = 0;
					var count2 = 0;
					for (var k=0; k<3; k++) {
						for (var l=0; l<3; l++) {
							if (l!=j && k!=i) {
								aux[count1][count2]=this.matrixA[k][l];
								count2++;
							}
						}
						count2 = 0;
						if (k!=i)
							count1++;
					}
					adjacent[i][j] = ((-1)**(i+1+j+1))*(aux[0][0]*aux[1][1]-aux[0][1]*aux[1][0]);
				}
			}
		}
		for (var i =0; i<this.AxDimension; i++) {
			for (var j=0; j<this.AyDimension; j++) {
				result[i][j]=adjacent[j][i];
			}
		}
		if (this.AxDimension==2) {
			var temp = result[0][0];
			result[0][0] = result[1][1];
			result[1][1] = temp;
		}
		if (this.AxDimension!=1) {
			for (var i =0; i<this.AxDimension; i++) {
				for (var j=0; j<this.AyDimension; j++) {
					result[i][j]=Math.round(result[i][j]/this.determinantA*100)/100;
				}
			}
		}
		var string = "\r";
		for (i =0; i<this.AyDimension; i++) {
			for (var j=0; j<this.AxDimension; j++) {
				string=string+"\t"+result[i][j];
			}
			string=string+"\r";
		}
        document.getElementById("outputtext").value = string
    } else if(classid=='identity') {
        this.matrixA[0][0] = '1';
        this.matrixA[0][1] = '0';
        this.matrixA[1][0] = '0';
        this.matrixA[1][1] = '1';
        result = this.matrixA
        var string = "\r";
		for (i =0; i<this.AyDimension; i++) {
			for (var j=0; j<this.AxDimension; j++) {
				string=string+"\t"+result[i][j];
			}
			string=string+"\r";
		}
        document.getElementById("outputtext").value = string
    } else if(classid=='random') {
        for (let i = 0; i<this.AxDimension; i++) {
            for (let j = 0; j<this.AxDimension; j++) {
                this.matrixA[i][j] = Math.floor((Math.random() * 10) + 1);
            }
        }
        result = this.matrixA
        var string = "\r";
		for (i =0; i<this.AyDimension; i++) {
			for (var j=0; j<this.AxDimension; j++) {
				string=string+"\t"+result[i][j];
			}
			string=string+"\r";
		}
        document.getElementById("outputtext").value = string
    } else if(classid=='power') {
        pow = document.getElementById("pow").value
        for (i = 0; i<this.AyDimension; i++) {
            for (let j = 0; j<this.AxDimension; j++) {
                this.matrixA[i][j] = this.matrixA[i][j]**pow
            }
        }
        result = this.matrixA
        var string = "\r";
		for (i =0; i<this.AyDimension; i++) {
			for (var j=0; j<this.AxDimension; j++) {
				string=string+"\t"+result[i][j];
			}
			string=string+"\r";
		}
        document.getElementById("outputtext").value = string
    }
}





function swap(mat, row1 , row2 , col)
{
    for (i = 0; i < col; i++)
    {
        var temp = mat[row1][i];
        mat[row1][i] = mat[row2][i];
        mat[row2][i] = temp;
    }
}