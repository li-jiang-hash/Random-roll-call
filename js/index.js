"use strict"
document.write("<h1>这是李江的作品</h1>")
    ; window.onload = () => {
        let txtNum = document.getElementById('txtNum')
        let button1 = document.getElementById('button1')
        let button2 = document.getElementById('button2')
        let timer = null
        function Random() {
            let r = parseInt(Math.random() * 256)
            let g = parseInt(Math.random() * 256)
            let b = parseInt(Math.random() * 256)
            txtNum.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
            button1.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
            let c = parseInt(Math.random() * 256)
            let m = parseInt(Math.random() * 256)
            let y = parseInt(Math.random() * 256)
            txtNum.style.color = "rgb(" + c + "," + m + "," + y + ")"
            document.getElementById('content').style.backgroundColor = "rgb(" + c + "," + m + "," + y + ")"
            let x = parseInt(Math.random() * 256)
            let z = parseInt(Math.random() * 256)
            let p = parseInt(Math.random() * 256)
            document.getElementById("h1").style.color = "rgb(" + x + "," + z + "," + p + ")"
        }
        txtNum.innerHTML = arr[0]
        if (arr[0].length > 3) {
            txtNum.style.width = "450px"
        }
        function count() {
            Random()
            for (let i = 0; i < arr.length; i++) {
                let s = parseInt(Math.random() * arr.length + 1)
                // console.log(arr[s])    //测试专用
                if (arr[s].length < 2) {
                    txtNum.style.width = "100px"
                }
                if (arr[s].length == 2) {
                    txtNum.style.width = "200px"
                }
                if (arr[s].length == 3) {
                    txtNum.style.width = "300px"
                }
                if (arr[s].length >= 4) {
                    txtNum.style.width = "400px"
                }
                txtNum.innerHTML = arr[s]
            }
        }

        document.getElementById('button1').onclick = function () {
            // console.log(timer)
            if (timer == null) {
                timer = setInterval(count, 1000)
            }
            this.style.backgroundColor = "#f00"
            button2.style.backgroundColor = "#fff"
        }
        document.getElementById('button2').onclick = function () {
            clearInterval(timer)
            this.style.backgroundColor = "#f00"
            button1.style.backgroundColor = "#fff"
            timer = null
        }
    }