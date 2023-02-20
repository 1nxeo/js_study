//  하
//  물건을 구매해볼까?
// 르탄이가 1000원을 가지고 편의점에서 물건을 사려고 한다. 편의점에는 500원, 100원, 50원, 10원이 충분히 있고, 편의점 직원은 언제나 거스름돈 개수가 가장 적게 잔돈을 준다. 르탄이가 편의점에서 물건을 사고 1000원 지폐 한 장을 냈을 때, 받을 잔돈의 개수를 구하는 프로그램을 작성하여라. (단, 물건의 가격은 10원 이상 1000원 미만이며, 1원 단위는 고려하지 않는다.)


function solution(num) {
    let answer = 0;
    let change = 1000 - num;
    let coinList = [500, 100, 50, 10];
    for (let i = 0; i < coinList.length; i++) {
      answer += Math.floor(change / coinList[i]);
      change = change - coinList[i] * Math.floor(change / coinList[i]);
    }
    return answer;
  }
  let num1 = 160;
  console.log(solution(num1));



  // 중

//   동그라미 엑스로 숫자를?
// "OOXXOXXOOO"와 같은 OX문의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.
// "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
// OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.
// (단,  OX문의 결과는 0보다 크고 80보다 작은 문자열이 주어진다. 또한 문자열은 O와 X만으로 이루어져 있다.)


function solution(str){
	let answer= 0;
    let count = 0;
    let score = 0;

    for(i=0;i<str.length;i++){
        if(str[i] == 'O'){
            count += 1
            score += count
        }
        if(str[i] == 'X'){
            count = 0;
        }
    }
    answer = score
    return answer;
}
	

let str="OXOOOXXXOXOOXOOOOOXO";
console.log(solution(str))