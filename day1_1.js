// // let num = 2;

// // let kind = num ? (num > 0 ? '양수':'음수'):'영';


// // console.log(kind)


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "동의하십니까?",
//     function() { alert("동의하셨습니다."); },
//     function() { alert("취소 버튼을 누르셨습니다."); }
//   );



//   ask(
//     "동의하십니까?",
//     () => alert("동의하셨습니다."),
//     () => alert("취소 버튼을 누르셨습니다.") 
//   );


function makeUser() {
    return {
      name: "John",
      ref: this
    };
  };
  
  let user = makeUser();
  
  alert( user.ref.name );