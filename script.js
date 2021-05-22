// we will make a all process in the game


var content = 'x';
var cnt = 0;
var winnertitle = document.getElementsByTagName('h2')[0]
console.log(winnertitle);
var arr = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
    // [1, 4, 7],
    // [2, 5, 8],
    // [3, 6, 9]    
]

// here we will see that if var equals one it will be user turn
// if var equal 0 it will user2 turn
var turn = true
console.log();
var won = false;
function game() {

    function Anywin(cont) {
        // here cont is to check user 

        if ((arr[0][0] == cont && arr[1][0] == cont && arr[2][0] == cont) ||
            (arr[0][1] == cont && arr[1][1] == cont && arr[2][1] == cont) ||
            (arr[0][2] == cont && arr[1][2] == cont && arr[2][2] == cont) ||

            (arr[0][0] == cont && arr[0][1] == cont && arr[0][2] == cont) ||
            (arr[1][0] == cont && arr[1][1] == cont && arr[1][2] == cont) ||
            (arr[2][0] == cont && arr[2][1] == cont && arr[2][2] == cont) ||

            (arr[0][0] == cont && arr[1][1] == cont && arr[2][2] == cont) ||
            (arr[0][2] == cont && arr[1][1] == cont && arr[2][0] == cont)
        ) {
            if (cont == 'x') {
                var container = document.querySelector('.container')
                container.classList.add('diszero')
                winnertitle.innerHTML = "user1 won"
                setInterval(() => {
                    window.location.replace('index.html')
                }, 2000);
                won = true
                game()
            }
            else if (cont == 'o') {
                var container = document.querySelector('.container')
                container.classList.add('diszero')
                winnertitle.innerHTML = "user2 won"
                setInterval(() => {
                    window.location.replace('index.html')
                }, 2000);
                won = true
                game()
            }
        }
        if (cnt == 9 && won == 0) {
            var container = document.querySelector('.container')
            container.classList.add('diszero')
            winnertitle.innerHTML = "tied"
            setInterval(() => {
                window.location.replace('index.html')
            }, 2000);
            return;
        }


    }



    var temp = document.querySelectorAll('.square')

    console.log(typeof (temp));
    temp.forEach(element => {
        element.addEventListener('click', () => {
            if (turn == 1) {
                content = 'x'
                if (element.innerHTML != 'o') {
                    console.log(element.classList[0]);
                    element.innerHTML = content
                    switch (element.classList[0]) {
                        case 'first':
                            arr[0][0] = content
                            break;
                        case 'second':
                            arr[0][1] = content
                            break;
                        case 'third':
                            arr[0][2] = content
                            break;
                        case 'fourth':
                            arr[1][0] = content
                            break;
                        case 'fifth':
                            arr[1][1] = content
                            break;
                        case 'six':
                            arr[1][2] = content
                            break;
                        case 'seven':
                            arr[2][0] = content
                            break;
                        case 'eight':
                            arr[2][1] = content
                            break;
                        case 'ninth':
                            arr[2][2] = content
                            break;
                    }
                    cnt++;
                    console.log(arr);

                    // check anyone completed or not
                    Anywin(content)
                    turn = 0

                }
            }
            else {
                content = 'o'
                if (element.innerHTML != 'x') {
                    element.innerHTML = content
                    console.log(element.classList[0]);
                    switch (element.classList[0]) {
                        case 'first':
                            arr[0][0] = content
                            break;
                        case 'second':
                            arr[0][1] = content
                            break;
                        case 'third':
                            arr[0][2] = content
                            break;
                        case 'fourth':
                            arr[1][0] = content
                            break;
                        case 'fifth':
                            arr[1][1] = content
                            break;
                        case 'six':
                            arr[1][2] = content
                            break;
                        case 'seven':
                            arr[2][0] = content
                            break;
                        case 'eight':
                            arr[2][1] = content
                            break;
                        case 'ninth':
                            arr[2][2] = content
                            break;
                    }
                    cnt++;

                    console.log(arr);
                    // check anyone won or not
                    Anywin(content)

                    turn = 1

                }

            }
        })
    });
}
game()