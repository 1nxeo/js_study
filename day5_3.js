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