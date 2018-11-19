
function foo() {
    let a = 2;

    function bar() {
        console.log(a)
    }

    return bar
}

var baz = foo()

baz() // 2. bar is closing 'a' making it live longer

function wait(message) {
    setTimeout(function timer() {
        console.log(message)
    }, 1000)
}

wait('hello closure') // setTimeout is closing over 'message' making it live longer


function wait2() {
    for(let i = 0; i < 10; i++) {
        setTimeout(function timer() {
            console.log(i)
        }, 1000)
    }
}

wait2()
