import React, { Component } from "react"
import '../statics/transition.css'


class Transition extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }


    componentDidMount() {
        setInterval(function () {
            var div = document.querySelector("#counter");
            var count = div.textContent * 1 - 1;
            div.textContent = count;
            if (count <= 0) {
                window.location.replace('fonts');
            }
        }, 1000);
    }

    render() {
        return (
            <div class="container_transition">
            <div class="svg">
               <svg  viewBox="0 0 1600 750" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g class="first-left" opacity="0.45" filter="url(#filter0_dd)">
                  <rect width="114.39" height="114.572" rx="57.195" transform="translate(26 107)" fill="#DB812D"/>
                  </g>
                  <g opacity="0.45" filter="url(#filter1_dd)">
                  <rect width="114.39" height="114.572" rx="57.195" transform="translate(56.22 52.9434)" fill="#DB2D2D"/>
                  </g>
                  <g class="bottom" opacity="0.45" filter="url(#filter2_dd)">
                  <rect width="114.39" height="114.572" rx="57.195" transform="translate(107 179)" fill="#DB2D2D"/>
                  </g>
                  <g class="first-right" opacity="0.45" filter="url(#filter3_dd)">
                  <rect width="114.39" height="114.572" rx="57.195" transform="translate(178 105)" fill="#DB2D61"/>
                  </g>
                  <g opacity="0.45" filter="url(#filter4_dd)">
                  <rect width="114.39" height="114.572" rx="57.195" transform="translate(56.99 147.428)" fill="#2D7DDB"/>
                  </g>
                  <g class="top" opacity="0.45" filter="url(#filter5_dd)">
                  <rect width="114.39" height="114.572" rx="57.195" transform="translate(107 22)" fill="#2D7DDB"/>
                  </g>
                  <g opacity="0.45" filter="url(#filter6_dd)">
                  <rect width="114.39" height="114.572" rx="57.195" transform="translate(159 53)" fill="#DB2DBF"/>
                  </g>
                  <g opacity="0.45" filter="url(#filter7_dd)">
                  <rect width="114.39" height="114.572" rx="57.195" transform="translate(159 147)" fill="#2D49DB"/>
                  </g>
                  <g class="center"opacity="0.45" filter="url(#filter8_dd)">
                  <rect width="114.39" height="114.572" rx="57.195" transform="translate(105 105)" fill="#652DDB"/>
                  </g>
                  <defs>
                  <filter id="filter0_dd" x="0" y="85" width="166.39" height="166.572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="13"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                  </filter>
                  <filter id="filter1_dd" x="30.22" y="30.9434" width="166.39" height="166.572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="13"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                  </filter>
                  <filter id="filter2_dd" x="81" y="157" width="166.39" height="166.572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="13"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                  </filter>
                  <filter id="filter3_dd" x="152" y="83" width="166.39" height="166.572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="13"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                  </filter>
                  <filter id="filter4_dd" x="30.99" y="125.428" width="166.39" height="166.572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="13"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                  </filter>
                  <filter id="filter5_dd" x="81" y="0" width="166.39" height="166.572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="13"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                  </filter>
                  <filter id="filter6_dd" x="133" y="31" width="166.39" height="166.572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="13"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                  </filter>
                  <filter id="filter7_dd" x="133" y="125" width="166.39" height="166.572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="13"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                  </filter>
                  <filter id="filter8_dd" x="79" y="83" width="166.39" height="166.572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="13"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                  </filter>
                  </defs>
                </svg>
             </div>
             <h3 class="h3_transition">Redirecting to the Fonts Test...</h3>
            <div id="counter" style={{ top:0,position:"absolute"}}>10</div>    
          </div>                

        )
    }

}

export default Transition;