// 클로저 예문

//예시
function foo(){
    const x = 1;
    const y = 2;

    //클로저
    //중첩함수 bar는 외부 함수보다 더 오래 유지되며 상위 스코프의 식별자를 참조한다.
    function bar(){
        debugger;
        console.log(x)
    }
    return bar;
}

const bar = foo();
bar();

// 클로저 예시
const Counter = (function(){
    let num = 0;

    return {
        increase(){
            return ++num;
        },
        decrease(){
            return num > 0 ? --num : 0;
        }
    };
}());

console.log(counter.increase()); //1
console.log(counter.increase()); //2

console.log(counter.decrease()); //1
console.log(counter.decrease()); //0

//생성자 함수로 표현하면
const Counter = (function(){
    let num = 0;

    function Counter(){

    }

    Counter.prototype.increase = function(){
        return ++num;
    };

    Counter.prototype.decrease = function(){
        return num > 0 ? --num : 0;
    };

    return Counter;
}());

const counter = new Counter();

console.log(counter.increase()); //1
console.log(counter.increase()); //2

console.log(counter.decrease()); //1
console.log(counter.decrease()); //0



//보조함수를 사용
//함수를 인수로 전달받고 함수를 반환하는 고차함수
//이 함수는 카운트 상태를 유지하기 위한 자유변수 counter를 기억하는 클로저를 반환한다.
function makeCounter(aux){
    //카운트 상태를 유지하기 위한 자유 변수
        let counter = 0;

        //클로저를 반환
        return function(){
            counter = aux(counter);
            return counter;
        };
}

//보조함수
function increase(n){
    return ++n;
}

function decrease(n){
    return --n;
}


//함수로 함수를 생성한다.
//makeCounter 함수는 보조 함수를 인수로 전달받아 함수를 반환한다.
const increaser = makeCounter(increase);
console.log(increaser()); //1
console.log(increaser()); //2

//increaser 함수와는 별개로 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다.
const decreaser = makeCounter(decrease);
console.log(decreaser()); //-1
console.log(decreaser()); //-2


// 캡슐화와 은닉

function Person(name,age){
    this.name = name; //public
    let _age = age; //private

    //인스턴스 메서드
    this.sayHi = function(){
        console.log(`Hi! My name is ${this.name}. I am ${_age}`)
    };
}

const me = new Person('Lee',20);
me.sayHi(); // Hi! My name is Lee. I am 20.
console.log(me.name); // Lee
console.log(me._age) // undefined

const you = new Person('Kim',20);
you.sayHi(); // Hi! My name is Kim. I am 30.
console.log(you.name); // Kim
console.log(you._age) // undefined

// sayHi 메서드는 인스턴스 메서드이므로 Person 객체가 생성될 때마다 중복 생성된다.
// sayHi 메서드를 프로토타입 메서드로 변경하여 sayHi 메서드의 중복 생성을 방지해보자

function Person(name,age){
    this.name = name; //public
    let _age = age; //private

    //프로토타입 메서드
    Person.prototype.sayHi = function(){
        // Person 생성자 함수의 지역 변수 _age를 참조할 수 없다.
        console.log(`Hi! My name is ${this.name}. I am ${_age}`);
    }
}

// 그렇다면 이렇게 쓰면 됨

const Person = (function(){
    let _age = 0; //private

    // 생성자 함수
    function Person(name, age){
        this.name = name; //public
        _age = age;
    }

    //프로토타입 메서드
    Person.prototype.sayHi = function(){
        console.log(`Hi! My name is ${this.name}. I am ${_age}`)
    };

    //생성자 함수를 반환
    return Person;

}());

const me = new Person('Lee',20);
me.sayHi(); //Hi! My name is Lee. I am 20.
console.log(me.name); // Lee
console.log(me._age); // undefined

const you = new Person('Kim',30);
you.sayHi(); //Hi! My name is Kim. I am 30.
console.log(you.name); // Kim
console.log(you._age); // undefined