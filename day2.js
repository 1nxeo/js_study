let strings = ["sun", "bed", "car"]	
let n = 2

function solution(strings, n) {
    let answer = [];
    
    for (i=0; i<strings.length;i++){
        let nthWord = strings[i][n]
        
        strings.splice(i, 1, nthWord+strings[i])  
    }

    strings.sort()
    
    
    for (i=0; i<strings.length;i++){
        let word = strings[i]
        let wordSplit = word.split('')
        let originWordList = wordSplit.slice(1)
        let originWord = originWordList.join()
        
        strings.splice(i, 1, originWord)
        
    }
    
    answer = strings;
    
    
    return answer;
}

solution(strings, n)


function solution(dot) {
    let answer = 0;
    let x = dot[0]
    let y = dot[1]
    // x>0,y>0 --> 1
    // x<0,y>0 --> 2
    // x<0,y<0 --> 3
    // x>0,y<0 --> 4
    
    if (x>0 && y>0){
        answer = 1
    }else if(x<0 && y>0){
        answer = 2
    }else if(x<0 && y<0){
        answer = 3
    }else{
        answer = 4
    }
    return answer;
}