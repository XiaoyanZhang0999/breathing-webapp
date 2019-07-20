import React, { Component } from "react"
import '../statics/camerademo.css'

//IMPORTANT: THIS CSS CAUSING CONFLICT

class camera extends Component {

    componentDidMount() {
        setInterval(function () {
            var div = document.querySelector("#counter");
            var count = div.textContent * 1 - 1;
            div.textContent = count;
            //if (count <= 0) {
            //  window.location.replace('randombackground.html');
            //}
        }, 1000);

        const vid = document.querySelector('video');
        navigator.mediaDevices.getUserMedia({ video: true }) // request cam
            .then(stream => {
                vid.srcObject = stream; // don't use createObjectURL(MediaStream)
                return vid.play(); // returns a Promise
            })


            .then(() => { // enable the button
                const btn = document.querySelector('button');
                btn.disabled = false;
                btn.onclick = e => {
                    takeASnap()
                        .then(download);
                };
            });


        // IMPORTANT: BUTTON IS CAUSING PROBLEM AND NEEDED TO BE FIXED

        function takeASnap() {
            const canvas = document.createElement('canvas'); // create a canvas
            const ctx = canvas.getContext('2d'); // get its context
            canvas.width = vid.videoWidth; // set its size to the one of the video
            canvas.height = vid.videoHeight;
            ctx.drawImage(vid, 0, 0); // the video
            return new Promise((res, rej) => {
                canvas.toBlob(res, 'image/jpeg'); // request a Blob from the canvas
            });
        }
        function download(image) {
            // uses the <a download> to download
            let a = document.createElement('a');
            a.href = URL.createObjectURL(image);
            a.download = 'screenshot.jpg';
            document.body.appendChild(a);
            a.click();
        }

    }




    render() {


        return (
            <div class="camerabg">

                <video id="video" width="600" height="500" autoplay></video>

                <h1 class='cameraDes'>Keep Calm and Breathe!</h1>

                <button onclick={this.takeASnap}> click me </button>
                <div id="counter">15</div>



            </div>
        )
    }
}

export default camera;