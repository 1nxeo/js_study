// 2016

function solution(a, b) {
    
    let days = 0; 
    let day = 0;
    let Months = [3,1,3,2,3,2,3,3,2,3,2,3]; 
    let weeks = ['FRI','SAT','SUN','MON',"TUE","WED","THU"];     
    days = Months.reduce((acc,val,index) => (index < a -1) ? acc+= val : acc,0); //4월까지 
    days += b; //5월까지 
    day =(days % 7) != 0? days % 7 : 7; // 나머지가 0 == 없다. 마지막 요일이다. 
    return weeks[day -1];
  }
// 기원이는 오늘 항해99를 시작했다. 성격이 급한 기원이는 항해 1일 차부터 언제 수료를 하게될 지 궁금하다.

// 항해 1일 차 날짜를 입력하면 98일 이후 항해를 수료하게 되는 날짜를 계산해주는 알고리즘을 만들어보자.
//제한 조건
// 1 ≤ month ≤ 12
// 1 ≤ day ≤ 31 (2월은 28일로 고정합니다, 즉 윤일은 고려하지 않습니다.)
function solution(month, day){
    let date = new Date(2022, month-1, day)
    date.setDate(date.getDate()+98)
    console.log(date.toLocaleString().split('.')[1].trim() + '월' + date.toLocaleString().split('.')[2] + '일')
  }
  solution(11,27)


// 소수만들기
// 소수 : 약수가 1과 자기 자신밖에 없는 수

function isPrimeNumber(n){
	if(n==1) return false;
	for(let i=2; i<n; i++){
		if(n%i==0) return false;
	}
	return true;
}

// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 소수의 최대값과 소수가 아닌 수의 최소값을 찾아 이를
// "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.

// 예를들어 s가 "2 3 4 5"라면 "4 5"를 리턴하고, "15 3 10 9 7 8"라면 "8 7"을 리턴하면 됩니다.

function solution(s){
    let answer=""
    let primeNum = ""
    let notPrime = ""
    s.split(" ")
	for(i=0;i<s.length;i++){
        if(isPrimeNumber(s[i])){
            primeNum.push(s[i])
        }else{
            notPrime.push(s[i])
        }
    }

    answer = Math.max(String(primeNum)) + Math.min(String(notPrime))
        
	return answer;
}
let s="97 75 88 99 95 92 73";

console.log(solution(s))
console.log(primeNum)


// 지용이는 항해에서 한 주 동안 공부 기록을 남길 알고리즘을 만들어보기로 결심했다.
// 항해의 체크인 페이지에는 몇가지 조건이 있는데 이를 만족하는 알고리즘을 만들어보자.

// - 체크인과 체크아웃은 항상 정시에 진행한 것으로 가정한다.
// - 체크아웃을 할 때 익일 시간은 24+a 로 계산한다. 즉 새벽 2시는 24+2 인 26으로 표기한다.
// - 체크인 페이지는 체크아웃이 새벽 5시 정각이나 새벽 5시를 넘어가면 체크아웃을 깜빡한 것으로 간주한다.
// 따라서 새벽 5시가 넘어가 체크아웃을 하게 되면 자동으로 체크아웃을 오후 9시(21시)로 한 것으로 처리한다.

// ### 제한 조건

// - 체크인(checkin)과 체크아웃(checkout)을 진행한 시간이 담긴 배열 두 개가 주어진다.
// - 각 배열에는 월요일부터 일요일까지 체크인/아웃을 한 시간이 담겨있다.
// - checkin과 checkout 배열의 길이는 각각 7 이다.

function solution(arr1, arr2){
	let answer=0;
  for(i=0; i<arr1.length;i++){
    if(arr2[i]>=29){
      arr2[i] = 21
      answer += arr2[i] - arr1[i]
    }else{
      answer += arr2[i] - arr1[i]
    }
    
  }
	return answer;
}

let arr1=[9, 9, 8, 8, 7, 8, 9];
let arr2=[21, 25, 30, 29, 22, 23, 30];

console.log(solution(arr1, arr2)) // 96


