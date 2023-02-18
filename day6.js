// 기원이는 오늘 항해99를 시작했다. 성격이 급한 기원이는 항해 1일 차부터 언제 수료를 하게될 지 궁금하다.

// 항해 1일 차 날짜를 입력하면 98일 이후 항해를 수료하게 되는 날짜를 계산해주는 알고리즘을 만들어보자.

// ### 제한 조건

// - 1 ≤ month ≤ 12
// - 1 ≤ day ≤ 31 (2월은 28일로 고정합니다, 즉 윤일은 고려하지 않습니다.)
/**
 * 템플릿 리터럴
 * -> `${month}, ${day}`

 * 
 */

function solution(month, day){
	let result=""
    
    let date = new Date(`${month}, ${day}`) //시작일자 => day-1
    // console.log(date)
    //이제 계산!
    let nextDate = new Date(date.setDate(date.getDate() + 99))
    
    
    result = nextDate.getMonth() + 1 + "월 " + Number(nextDate.getDate()-1) + "일"
    // console.log(date.getDate()) //며칠인지?

    // console.log(date.getMonth())// 월 -1
	return result;
}
console.log(solution(1,18)) //4월 26일



//재란 풀이
// function solution(month, day){
// 	let result=""
//     //매개변수 month, day를 오늘 날짜로 설정해주기
//     const now = new Date(`${month}, ${day}`) //매개변수 날짜 = 시작일자
//     //now의 Date를 set해준 new Date 생성
//     const study = new Date(now.setDate(now.getDate() + 98))
//     //0월 =1월이라서, 바로 +1하여 받아옴
// 	return result = study.getMonth() + 1 + '월 ' + study.getDate() + '일';
// }
