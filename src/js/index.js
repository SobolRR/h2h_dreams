import $ from "jquery";
window.$ = $;

import "slick-carousel";
import { initSlider } from "./slider";
import { initSharing } from "./share";

document.addEventListener("DOMContentLoaded", function () {
   initSlider();
   initSharing();
});

