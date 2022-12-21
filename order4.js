function Submit(classid) { 
    console.log('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    this.matrixA = [];
    this.matrixB = [];
    var result = [];
    for(var i=0; i<4; i++) {
        this.matrixA[i] = [];
        this.matrixB[i] = [];
    }
    this.AxDimension = 4;
    this.AyDimension = 4;
    this.BxDimension = 4;
    this.ByDimension = 4;

    var row1 = document.getElementsByClassName("matrix1row1");
    var row2 = document.getElementsByClassName("matrix1row2");
    var row3 = document.getElementsByClassName("matrix1row3");
    var row4 = document.getElementsByClassName("matrix1row4");
    for (var i=0; i<4; i++) {
        this.matrixA[0][i] = row1[i].value;
        this.matrixA[1][i] = row2[i].value;
        this.matrixA[2][i] = row3[i].value;
        this.matrixA[3][i] = row4[i].value;
    }
    row1 = document.getElementsByClassName("matrix2row1");
    row2 = document.getElementsByClassName("matrix2row2");
    row3 = document.getElementsByClassName("matrix2row3");
    row4 = document.getElementsByClassName("matrix2row4");
    for (var i=0; i<4; i++) {
        this.matrixB[0][i] = row1[i].value;
        this.matrixB[1][i] = row2[i].value;
        this.matrixB[2][i] = row3[i].value;
        this.matrixB[3][i] = row4[i].value;
    }
    if (classid=='add') {
        var result = [];
        for(var i=0; i<4; i++) 
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
        for(var i=0; i<4; i++) 
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
        for(var i=0; i<4; i++) 
            result[i]=[];
        i=0;
        var j=0;
        //x refers to columns, y refers to rows
        var rowsRes = this.AyDimension;
        var columnsRes = this.BxDimension;
        for (i=0; i<rowsRes; i++) {
            for (j=0; j<columnsRes; j++) {
                result[i][j] = this.matrixA[i][0]*this.matrixB[0][j]+this.matrixA[i][1]*this.matrixB[1][j]+this.matrixA[i][2]*this.matrixB[2][j]+this.matrixA[i][3]*this.matrixB[3][j];
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
        var mat = this.matrixA
        var determinant;
        var num1, num2, det = 1, index, total = 1; // Initialize result
        var temp = Array(4 + 1).fill(0);
        for (i = 0; i < 4; i++)
            {
                index = i; // initialize the index
                while (index < 4 && mat[index][i] == 0)
                {
                    index++;
                }
                if (index == 4)
                {
                    continue;
                }
                if (index != i)
                {
                    for (j = 0; j < 4; j++)
                    {
                        swap(mat, index, j, i, j);
                    }
                    det = parseInt((det * Math.pow(-1, index - i)));
                }
                for (j = 0; j < 4; j++)
                {
                    temp[j] = mat[i][j];
                }
                for (j = i + 1; j < 4; j++)
                {
                    num1 = temp[i];
                    num2 = mat[j][i];
                    for (k = 0; k < 4; k++)
                    {
                        mat[j][k] = (num1 * mat[j][k]) - (num2 * temp[k]);
                    }
                    total = total * num1;
                }
            }
            for (i = 0; i < 4; i++)
            {
                det = det * mat[i][i];
            }
            determinant = (det / total)
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
        var rank = 4;
        var R=4;
        var row =  4;
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
        var rank = 4;
        var R=4;
        var row =  4;
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
        var nullity = 4-rank
        document.getElementById("outputtext").value = 'Nullity: '+nullity;
    } else if(classid=='inverse') {


    document.getElementById("outputtext").value = string
} else if(classid=='identity') {
    this.matrixA[0][0] = '1';
    this.matrixA[0][1] = '0';
    this.matrixA[0][2] = '0';
    this.matrixA[0][3] = '0';
    this.matrixA[1][0] = '0';
    this.matrixA[1][1] = '1';
    this.matrixA[1][2] = '0';
    this.matrixA[1][3] = '0';
    this.matrixA[2][0] = '0';
    this.matrixA[2][1] = '0';
    this.matrixA[2][2] = '1';
    this.matrixA[2][3] = '0';
    this.matrixA[3][0] = '0';
    this.matrixA[3][1] = '0';
    this.matrixA[3][2] = '0';
    this.matrixA[3][3] = '1';
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