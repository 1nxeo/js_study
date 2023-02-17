///코딩테스트 연습 > 2021 카카오 채용연계형 인턴십 > 숫자 문자열과 영단어



// 일부 자리수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임
//숫자의 일부 자릿수가 영단어 바뀌어졌거나, 혹은 바뀌지 않고 그대로이 문자열 s
//s가 의미하는 원래 숫자를 return 
//'zero' 또는 '0'으로 시작하는 경우 x

//객체를 만둘어 키를 문자로 value를 숫자로 넣는다. 
//한글자씩 돌면서 문자면 숫자로 바꿔서 넣고
//숫자면 바로 넣는다

function solution(s) {
    let numbers = {
    	'zero' : '0',
    	'one' : '1',
    	'two' : '2',
    	'three' : '3',
    	'four' : '4',
    	'five' : '5',
    	'six' : '6',
    	'seven' : '7',
    	'eight' : '8',
    	'nine' : '9', 
    }
    
    let word = ''; 
    let result = ''; 
    for(let i =0; i <s.length; i++){
        if(isNaN(Number(s[i]))){
            if(Boolean(numbers[word])){
                result += numbers[word]; 
                word ='';
                word += s[i]
            }else{
                word += s[i];
            }


        }else{
            if(word != ''){
                result += numbers[word]; 
                result += s[i];
                word =''
            }else{
                result += s[i];
            }   
        }
    }

    if(Boolean(numbers[word])){
        result += numbers[word]; 
        word ='';
    }
   

    return Number(result);
}

//다른 풀이

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;
    
    for(let i=0; i< numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
    }
    
    return Number(answer);
    }