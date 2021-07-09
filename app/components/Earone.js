import React from "react";
import { SvgXml } from "react-native-svg";
  
export default function Earone(){  
  const svgMarkup = `
  
<svg width="34" height="12" viewBox="0 0 34 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4659 11.4516C10.1954 11.4516 9.93 11.3753 9.69648 11.2267C9.37152 11.0203 9.14688 10.6999 9.06312 10.3246L7.7496 4.43258L6.43416 8.81114C6.29952 9.25994 5.9532 9.61658 5.508 9.76394C4.75392 10.0135 3.93768 9.60266 3.68808 8.84978L2.3196 4.7117H1.2C0.53736 4.7117 0 4.17458 0 3.5117C0 2.84882 0.53736 2.3117 1.2 2.3117H2.49312C3.42648 2.3117 4.2504 2.9069 4.54392 3.79322L5.0112 5.20658L5.71536 2.8625C5.88144 2.30978 6.25272 1.85522 6.7608 1.58186C7.26864 1.30826 7.85256 1.24922 8.40576 1.41554C9.1524 1.63946 9.72216 2.25194 9.89232 3.01346L10.4832 5.6645L11.443 1.49042C11.5579 0.990744 11.8603 0.565464 12.2952 0.293304C12.7301 0.0209039 13.2446 -0.065016 13.7443 0.049224C14.435 0.208344 14.9794 0.731544 15.1661 1.41434L16.2302 5.29994L17.0189 4.22474C17.3602 3.75938 17.8622 3.45482 18.4325 3.36698C19.0025 3.27914 19.5727 3.41858 20.0381 3.7601C20.1612 3.85034 20.2745 3.95354 20.3758 4.06706L21.6331 5.48354L22.8396 4.76282C23.8447 4.16282 24.9924 3.8465 26.1614 3.8465C26.1782 3.8465 26.195 3.84674 26.2118 3.84674L32.639 3.89618C33.3019 3.90122 33.8352 4.44266 33.8299 5.1053C33.8249 5.76506 33.2885 6.29618 32.6302 6.29618H32.6208L26.1934 6.24674C25.4338 6.24146 24.7116 6.44018 24.0698 6.82346L22.8634 7.54394C21.8748 8.13386 20.6033 7.93754 19.8384 7.07714L18.7786 5.88362L17.5781 7.52066C17.3227 7.86866 16.9529 8.1233 16.5367 8.23706C16.0421 8.37194 15.5244 8.3069 15.079 8.05322C14.6335 7.79906 14.3134 7.38674 14.1782 6.8921L13.3548 3.88634L11.8721 10.3339C11.7473 10.8725 11.3196 11.2966 10.7825 11.4166C10.6774 11.4401 10.571 11.4516 10.4659 11.4516Z" fill="black"/>
</svg>

  `;
  const SvgLogo = () => <SvgXml xml={svgMarkup} width="34px" height="12px" />;  

  return <SvgLogo />;
}