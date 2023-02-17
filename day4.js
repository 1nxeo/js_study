// 콜라츠 추측
// https://school.programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
    let answer = 0;
    let n = 0;
    do{
        if(num == 1){ // 1이 주어질 때
            n = 0
        }
        if (num !== 1 && num%2 == 1){ //1을 제외한 홀수
            num=num*3+1
            n++
        }
        if(num%2 == 0){ //짝수
            num = num/2
            n++
        }
        if(num == 1) break; //숫자가 1이 되면 break
    }while (n<=500);
    answer = n
    //500번 반복할 때까지 1이 되지 않을때 return 1
    if (n >= 500 && num !== 1 ){
        answer = -1
    }
    return answer;
}

//하샤드 수
function solution(x) {
    let answer = true;
    // x%자릿수의합 == 0
    let sum = 0;
    let list = String(x).split('')
    
    for(i=0;i<list.length;i++){
        sum += Number(list[i]) 
    }
    
    if(x%sum !== 0){
        answer = false
    }
    
    return answer;
}

//완주하지 못한 선수   
    //일단 오름차순 정렬
    // participant.sort()
    // completion.sort()
    //index값이 같아짐
    // answer = participant[participant.length-1]
    // ==> 동명이인이 있는걸 못봣네
    
    function solution(participant, completion) {
        let answer = '';
        
        //완주자 이름으로 참가자 인덱스 찾아서, 참가자 인덱스로 삭제
        //인덱스가 여러개 뜨면 ? 맨앞 인덱스부터 찾느다
        
        
        for(i=0;i<completion.length;i++){
                let cIndex = participant.indexOf(completion[i])
                if (cIndex !== -1){
                    let fail = participant.splice(cIndex,1)
                }
                answer = String(participant)
            }
        
        return answer;
    }
}