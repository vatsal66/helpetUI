import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }


  html,
  body,
  #___gatsby
  #gatsby-focus-wrapper {
    height: 100%;
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    overflow-x: hidden;
  }

  html,
  button {
    font-family: Nunito;
  }

  a {
    color: #9c2e85;
  }

  .slick-slide {
    align-items: center;
    justify-content: center;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    position: relative;
    display: block;
  }

  .slick-loading .slick-slide,
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slider {
    box-sizing :border-box;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .services .slick-list {
    padding-bottom: 150px !important;
  }

  @media (max-width: 409px) {
    .services .slick-list {
      height: 480px;
    }
  }

  .slick-list:focus {
    outline: 0;
  }

  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-list,.slick-slider .slick-track {
    transform: translate3d(0,0,0);
  }

  .slick-track {
    top: 0;
    left: 0;
  }

  .slick-track:after,.slick-track:before {
    display: table;
    content: '';
  }

  .slick-track:after {
    clear:both;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 310px;
    position: relative;
    width: 310px;
  }

  .slick-slide img {
    display: block;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: flex;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }

  .slick-arrow.slick-hidden {
    display:none;
  }

  .slick-loading .slick-list{
    background:url(ajax-loader.gif) center center no-repeat #fff;
  }

  .slick-dotted.slick-slider  {
    margin-bottom:30px;
  }

  .slick-current {
    background-color: #fff;
    border-radius: 50%;
  }

  .slick-slide.slick-current svg {
    width: 215px;
  }

  .slick-slide svg {
    transition: width .2s ease;
    width: 145px;
  }

  .slick-dots {
    display: flex !important;
    list-style: none;
    justify-content: center;
  }

  .slick-dots li {
    margin: 0 8px;
  }

  .slick-dots li button {
    background-color: #dedede;
    border: none;
    border-radius: 50%;
    font-size: 0;
    height: 13px;
    width: 13px;
  }

  .slick-dots li.slick-active button {
    background-color: #9c2e85;
  }
`;

export default GlobalStyle;

// html {
//   overflow-x: hidden;
// }
