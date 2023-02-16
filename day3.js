function solution(a, b) {
    let answer = '';
    let date = [ a, b ];
    let dateList = [];
    //날짜[월,일]을 쭉 쓴 리스트 뽑아서 index가 7의배수면 FRI;인덱스%7=1이면 SAT ...
    for (i=1;i<=12;i++){
        if( i == 2 ){
            for (k=1;k<=29;k++){
                dateList.push([i,k])
            }
        }else if (i == 4 || i == 6 || i == 9 || i == 11){
            for(k=1;k<31;k++){
                dateList.push([i,k])
            }
        }else{
            for(k=1;k<32;k++){
                dateList.push([i,k])
            }
        }
    }
    
    for (i=0;i<dateList;i++){
        if(dateList.indexOf([a,b] = i)){
            if (i%7 == 0){
            answer = 'FRI'
        }else if(i%7 == 1){
            answer = 'SAT'
        }else if(i%7 == 2){
            answer = 'SUN'
        }else if(i%7 == 3){
            answer = 'MON'
        }else if(i%7 == 4){
            answer = 'TUE'
        }else if(i%7 == 5){
            answer = 'WED'
        }else if(i%7 == 6){
            answer = 'THU'
        }
        }
        
    }      
    
        
    return answer;
}