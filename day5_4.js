// function isPrimeNumber(n){
// 	if(n==1) return false;
// 	for(let i=2; i<n; i++){
// 		if(n%i==0) return false;
// 	}
// 	return true;
// }

// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 소수의 최대값과 소수가 아닌 수의 최소값을 찾아 이를
// "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.

// 예를들어 s가 "2 3 4 5"라면 "4 5"를 리턴하고, "15 3 10 9 7 8"라면 "8 7"을 리턴하면 됩니다.

// function solution(s){
//     let answer=""
//     let primeNum = []
//     let notPrime = []
//     s.split(" ")
// 	for(i=0;i<s.length;i++){
//         if(isPrimeNumber(s[i])){
//             primeNum.push(s[i])
//         }else{
//             notPrime.push(s[i])
//         }
//     }

//     answer = Math.max(String(primeNum)) + Math.min(String(notPrime))
        
// 	return answer;
// }

function solution(s){
    let answer = "";
    let primeNum = [];
    let notPrime = [];
    s.split(" ")

    for(i=0;i<s.length;i++){
        for (k=2;k<s[i];k++){
            if(s[i]%k==0){
                notPrime.push(s[i]) 
            }else{
                primeNum.push(s[i])
            }
        }
    }
    let a = Math.max(...primeNum)
    let b = Math.min(...notPrime)
    answer = String(a) + String(b)
    console.log(notPrime)
    return answer
}

let s="15 3 10 9 7 8";

console.log(solution(s)) // "8 7"
