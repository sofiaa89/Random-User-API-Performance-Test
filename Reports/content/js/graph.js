/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 388.0, "minX": 0.0, "maxY": 5377.0, "series": [{"data": [[0.0, 388.0], [0.1, 407.0], [0.2, 407.0], [0.3, 409.0], [0.4, 410.0], [0.5, 410.0], [0.6, 411.0], [0.7, 412.0], [0.8, 412.0], [0.9, 412.0], [1.0, 414.0], [1.1, 414.0], [1.2, 414.0], [1.3, 415.0], [1.4, 415.0], [1.5, 416.0], [1.6, 416.0], [1.7, 416.0], [1.8, 417.0], [1.9, 417.0], [2.0, 418.0], [2.1, 418.0], [2.2, 418.0], [2.3, 419.0], [2.4, 419.0], [2.5, 420.0], [2.6, 420.0], [2.7, 420.0], [2.8, 420.0], [2.9, 420.0], [3.0, 421.0], [3.1, 421.0], [3.2, 422.0], [3.3, 422.0], [3.4, 422.0], [3.5, 423.0], [3.6, 423.0], [3.7, 423.0], [3.8, 424.0], [3.9, 424.0], [4.0, 425.0], [4.1, 425.0], [4.2, 425.0], [4.3, 425.0], [4.4, 426.0], [4.5, 426.0], [4.6, 427.0], [4.7, 428.0], [4.8, 428.0], [4.9, 429.0], [5.0, 429.0], [5.1, 430.0], [5.2, 430.0], [5.3, 430.0], [5.4, 431.0], [5.5, 432.0], [5.6, 432.0], [5.7, 432.0], [5.8, 433.0], [5.9, 434.0], [6.0, 434.0], [6.1, 434.0], [6.2, 435.0], [6.3, 435.0], [6.4, 435.0], [6.5, 436.0], [6.6, 436.0], [6.7, 437.0], [6.8, 437.0], [6.9, 438.0], [7.0, 439.0], [7.1, 439.0], [7.2, 439.0], [7.3, 440.0], [7.4, 440.0], [7.5, 441.0], [7.6, 441.0], [7.7, 442.0], [7.8, 442.0], [7.9, 442.0], [8.0, 443.0], [8.1, 444.0], [8.2, 444.0], [8.3, 445.0], [8.4, 445.0], [8.5, 446.0], [8.6, 446.0], [8.7, 447.0], [8.8, 447.0], [8.9, 448.0], [9.0, 448.0], [9.1, 449.0], [9.2, 449.0], [9.3, 450.0], [9.4, 451.0], [9.5, 451.0], [9.6, 452.0], [9.7, 453.0], [9.8, 453.0], [9.9, 454.0], [10.0, 455.0], [10.1, 456.0], [10.2, 456.0], [10.3, 457.0], [10.4, 457.0], [10.5, 457.0], [10.6, 458.0], [10.7, 459.0], [10.8, 460.0], [10.9, 461.0], [11.0, 462.0], [11.1, 462.0], [11.2, 464.0], [11.3, 465.0], [11.4, 466.0], [11.5, 466.0], [11.6, 467.0], [11.7, 468.0], [11.8, 469.0], [11.9, 469.0], [12.0, 470.0], [12.1, 471.0], [12.2, 472.0], [12.3, 473.0], [12.4, 474.0], [12.5, 475.0], [12.6, 475.0], [12.7, 476.0], [12.8, 477.0], [12.9, 477.0], [13.0, 477.0], [13.1, 478.0], [13.2, 479.0], [13.3, 480.0], [13.4, 481.0], [13.5, 482.0], [13.6, 483.0], [13.7, 483.0], [13.8, 483.0], [13.9, 484.0], [14.0, 485.0], [14.1, 485.0], [14.2, 486.0], [14.3, 486.0], [14.4, 487.0], [14.5, 487.0], [14.6, 487.0], [14.7, 488.0], [14.8, 490.0], [14.9, 490.0], [15.0, 491.0], [15.1, 491.0], [15.2, 491.0], [15.3, 491.0], [15.4, 492.0], [15.5, 492.0], [15.6, 492.0], [15.7, 493.0], [15.8, 493.0], [15.9, 493.0], [16.0, 494.0], [16.1, 494.0], [16.2, 494.0], [16.3, 494.0], [16.4, 495.0], [16.5, 495.0], [16.6, 495.0], [16.7, 495.0], [16.8, 495.0], [16.9, 496.0], [17.0, 497.0], [17.1, 497.0], [17.2, 498.0], [17.3, 498.0], [17.4, 499.0], [17.5, 499.0], [17.6, 499.0], [17.7, 500.0], [17.8, 500.0], [17.9, 500.0], [18.0, 501.0], [18.1, 501.0], [18.2, 501.0], [18.3, 502.0], [18.4, 502.0], [18.5, 502.0], [18.6, 503.0], [18.7, 503.0], [18.8, 503.0], [18.9, 504.0], [19.0, 504.0], [19.1, 504.0], [19.2, 504.0], [19.3, 505.0], [19.4, 505.0], [19.5, 505.0], [19.6, 505.0], [19.7, 506.0], [19.8, 506.0], [19.9, 506.0], [20.0, 506.0], [20.1, 507.0], [20.2, 507.0], [20.3, 507.0], [20.4, 508.0], [20.5, 508.0], [20.6, 508.0], [20.7, 508.0], [20.8, 509.0], [20.9, 509.0], [21.0, 509.0], [21.1, 509.0], [21.2, 509.0], [21.3, 510.0], [21.4, 510.0], [21.5, 510.0], [21.6, 511.0], [21.7, 511.0], [21.8, 512.0], [21.9, 512.0], [22.0, 512.0], [22.1, 512.0], [22.2, 512.0], [22.3, 513.0], [22.4, 513.0], [22.5, 513.0], [22.6, 513.0], [22.7, 514.0], [22.8, 514.0], [22.9, 515.0], [23.0, 515.0], [23.1, 515.0], [23.2, 515.0], [23.3, 516.0], [23.4, 516.0], [23.5, 516.0], [23.6, 516.0], [23.7, 517.0], [23.8, 517.0], [23.9, 517.0], [24.0, 517.0], [24.1, 518.0], [24.2, 518.0], [24.3, 518.0], [24.4, 519.0], [24.5, 519.0], [24.6, 519.0], [24.7, 519.0], [24.8, 520.0], [24.9, 520.0], [25.0, 521.0], [25.1, 521.0], [25.2, 521.0], [25.3, 521.0], [25.4, 522.0], [25.5, 522.0], [25.6, 522.0], [25.7, 522.0], [25.8, 523.0], [25.9, 523.0], [26.0, 524.0], [26.1, 524.0], [26.2, 524.0], [26.3, 524.0], [26.4, 524.0], [26.5, 524.0], [26.6, 525.0], [26.7, 525.0], [26.8, 526.0], [26.9, 526.0], [27.0, 526.0], [27.1, 526.0], [27.2, 527.0], [27.3, 527.0], [27.4, 527.0], [27.5, 527.0], [27.6, 528.0], [27.7, 528.0], [27.8, 528.0], [27.9, 528.0], [28.0, 529.0], [28.1, 529.0], [28.2, 529.0], [28.3, 529.0], [28.4, 529.0], [28.5, 530.0], [28.6, 530.0], [28.7, 530.0], [28.8, 530.0], [28.9, 531.0], [29.0, 531.0], [29.1, 531.0], [29.2, 531.0], [29.3, 532.0], [29.4, 532.0], [29.5, 532.0], [29.6, 533.0], [29.7, 533.0], [29.8, 533.0], [29.9, 533.0], [30.0, 533.0], [30.1, 533.0], [30.2, 534.0], [30.3, 534.0], [30.4, 535.0], [30.5, 535.0], [30.6, 535.0], [30.7, 536.0], [30.8, 536.0], [30.9, 536.0], [31.0, 536.0], [31.1, 536.0], [31.2, 537.0], [31.3, 537.0], [31.4, 537.0], [31.5, 537.0], [31.6, 537.0], [31.7, 538.0], [31.8, 538.0], [31.9, 538.0], [32.0, 538.0], [32.1, 539.0], [32.2, 539.0], [32.3, 539.0], [32.4, 539.0], [32.5, 540.0], [32.6, 540.0], [32.7, 540.0], [32.8, 540.0], [32.9, 541.0], [33.0, 541.0], [33.1, 541.0], [33.2, 541.0], [33.3, 541.0], [33.4, 541.0], [33.5, 542.0], [33.6, 542.0], [33.7, 542.0], [33.8, 542.0], [33.9, 543.0], [34.0, 543.0], [34.1, 543.0], [34.2, 543.0], [34.3, 543.0], [34.4, 544.0], [34.5, 544.0], [34.6, 545.0], [34.7, 545.0], [34.8, 545.0], [34.9, 545.0], [35.0, 546.0], [35.1, 546.0], [35.2, 546.0], [35.3, 546.0], [35.4, 546.0], [35.5, 546.0], [35.6, 547.0], [35.7, 547.0], [35.8, 547.0], [35.9, 547.0], [36.0, 548.0], [36.1, 548.0], [36.2, 548.0], [36.3, 548.0], [36.4, 549.0], [36.5, 549.0], [36.6, 549.0], [36.7, 550.0], [36.8, 550.0], [36.9, 550.0], [37.0, 550.0], [37.1, 551.0], [37.2, 551.0], [37.3, 551.0], [37.4, 551.0], [37.5, 551.0], [37.6, 552.0], [37.7, 552.0], [37.8, 552.0], [37.9, 552.0], [38.0, 552.0], [38.1, 553.0], [38.2, 553.0], [38.3, 553.0], [38.4, 553.0], [38.5, 554.0], [38.6, 554.0], [38.7, 554.0], [38.8, 554.0], [38.9, 555.0], [39.0, 555.0], [39.1, 555.0], [39.2, 556.0], [39.3, 556.0], [39.4, 556.0], [39.5, 557.0], [39.6, 557.0], [39.7, 557.0], [39.8, 557.0], [39.9, 557.0], [40.0, 558.0], [40.1, 558.0], [40.2, 559.0], [40.3, 559.0], [40.4, 559.0], [40.5, 559.0], [40.6, 559.0], [40.7, 560.0], [40.8, 560.0], [40.9, 560.0], [41.0, 561.0], [41.1, 561.0], [41.2, 561.0], [41.3, 561.0], [41.4, 562.0], [41.5, 562.0], [41.6, 562.0], [41.7, 563.0], [41.8, 563.0], [41.9, 563.0], [42.0, 564.0], [42.1, 564.0], [42.2, 564.0], [42.3, 565.0], [42.4, 565.0], [42.5, 565.0], [42.6, 565.0], [42.7, 565.0], [42.8, 565.0], [42.9, 565.0], [43.0, 566.0], [43.1, 566.0], [43.2, 566.0], [43.3, 566.0], [43.4, 567.0], [43.5, 567.0], [43.6, 567.0], [43.7, 568.0], [43.8, 568.0], [43.9, 568.0], [44.0, 568.0], [44.1, 568.0], [44.2, 568.0], [44.3, 569.0], [44.4, 569.0], [44.5, 570.0], [44.6, 570.0], [44.7, 570.0], [44.8, 570.0], [44.9, 571.0], [45.0, 571.0], [45.1, 571.0], [45.2, 572.0], [45.3, 572.0], [45.4, 572.0], [45.5, 572.0], [45.6, 572.0], [45.7, 573.0], [45.8, 573.0], [45.9, 573.0], [46.0, 573.0], [46.1, 574.0], [46.2, 574.0], [46.3, 574.0], [46.4, 575.0], [46.5, 575.0], [46.6, 576.0], [46.7, 576.0], [46.8, 576.0], [46.9, 577.0], [47.0, 577.0], [47.1, 577.0], [47.2, 577.0], [47.3, 577.0], [47.4, 577.0], [47.5, 578.0], [47.6, 578.0], [47.7, 579.0], [47.8, 579.0], [47.9, 579.0], [48.0, 579.0], [48.1, 579.0], [48.2, 579.0], [48.3, 580.0], [48.4, 580.0], [48.5, 580.0], [48.6, 581.0], [48.7, 581.0], [48.8, 581.0], [48.9, 581.0], [49.0, 581.0], [49.1, 581.0], [49.2, 582.0], [49.3, 582.0], [49.4, 582.0], [49.5, 582.0], [49.6, 583.0], [49.7, 583.0], [49.8, 584.0], [49.9, 584.0], [50.0, 584.0], [50.1, 585.0], [50.2, 585.0], [50.3, 585.0], [50.4, 586.0], [50.5, 586.0], [50.6, 587.0], [50.7, 587.0], [50.8, 588.0], [50.9, 588.0], [51.0, 589.0], [51.1, 589.0], [51.2, 590.0], [51.3, 590.0], [51.4, 590.0], [51.5, 590.0], [51.6, 590.0], [51.7, 591.0], [51.8, 591.0], [51.9, 591.0], [52.0, 592.0], [52.1, 592.0], [52.2, 592.0], [52.3, 592.0], [52.4, 593.0], [52.5, 593.0], [52.6, 593.0], [52.7, 593.0], [52.8, 594.0], [52.9, 594.0], [53.0, 594.0], [53.1, 594.0], [53.2, 595.0], [53.3, 595.0], [53.4, 595.0], [53.5, 596.0], [53.6, 596.0], [53.7, 596.0], [53.8, 597.0], [53.9, 597.0], [54.0, 597.0], [54.1, 598.0], [54.2, 598.0], [54.3, 599.0], [54.4, 600.0], [54.5, 600.0], [54.6, 601.0], [54.7, 601.0], [54.8, 601.0], [54.9, 601.0], [55.0, 602.0], [55.1, 602.0], [55.2, 603.0], [55.3, 603.0], [55.4, 603.0], [55.5, 604.0], [55.6, 604.0], [55.7, 604.0], [55.8, 605.0], [55.9, 605.0], [56.0, 606.0], [56.1, 606.0], [56.2, 606.0], [56.3, 607.0], [56.4, 607.0], [56.5, 607.0], [56.6, 607.0], [56.7, 607.0], [56.8, 608.0], [56.9, 608.0], [57.0, 608.0], [57.1, 609.0], [57.2, 609.0], [57.3, 609.0], [57.4, 610.0], [57.5, 610.0], [57.6, 610.0], [57.7, 611.0], [57.8, 611.0], [57.9, 611.0], [58.0, 612.0], [58.1, 612.0], [58.2, 613.0], [58.3, 613.0], [58.4, 614.0], [58.5, 614.0], [58.6, 614.0], [58.7, 615.0], [58.8, 615.0], [58.9, 616.0], [59.0, 616.0], [59.1, 616.0], [59.2, 616.0], [59.3, 616.0], [59.4, 617.0], [59.5, 617.0], [59.6, 618.0], [59.7, 618.0], [59.8, 618.0], [59.9, 619.0], [60.0, 619.0], [60.1, 619.0], [60.2, 620.0], [60.3, 620.0], [60.4, 621.0], [60.5, 621.0], [60.6, 621.0], [60.7, 621.0], [60.8, 621.0], [60.9, 622.0], [61.0, 623.0], [61.1, 623.0], [61.2, 623.0], [61.3, 624.0], [61.4, 624.0], [61.5, 624.0], [61.6, 625.0], [61.7, 625.0], [61.8, 625.0], [61.9, 626.0], [62.0, 626.0], [62.1, 627.0], [62.2, 627.0], [62.3, 627.0], [62.4, 627.0], [62.5, 628.0], [62.6, 628.0], [62.7, 628.0], [62.8, 628.0], [62.9, 629.0], [63.0, 629.0], [63.1, 629.0], [63.2, 630.0], [63.3, 630.0], [63.4, 631.0], [63.5, 631.0], [63.6, 632.0], [63.7, 633.0], [63.8, 633.0], [63.9, 634.0], [64.0, 634.0], [64.1, 635.0], [64.2, 635.0], [64.3, 636.0], [64.4, 636.0], [64.5, 636.0], [64.6, 637.0], [64.7, 637.0], [64.8, 638.0], [64.9, 639.0], [65.0, 639.0], [65.1, 639.0], [65.2, 640.0], [65.3, 640.0], [65.4, 640.0], [65.5, 641.0], [65.6, 641.0], [65.7, 642.0], [65.8, 642.0], [65.9, 642.0], [66.0, 643.0], [66.1, 643.0], [66.2, 644.0], [66.3, 644.0], [66.4, 645.0], [66.5, 645.0], [66.6, 646.0], [66.7, 646.0], [66.8, 646.0], [66.9, 647.0], [67.0, 647.0], [67.1, 648.0], [67.2, 648.0], [67.3, 648.0], [67.4, 649.0], [67.5, 649.0], [67.6, 649.0], [67.7, 650.0], [67.8, 650.0], [67.9, 651.0], [68.0, 651.0], [68.1, 651.0], [68.2, 652.0], [68.3, 652.0], [68.4, 652.0], [68.5, 653.0], [68.6, 653.0], [68.7, 653.0], [68.8, 654.0], [68.9, 654.0], [69.0, 654.0], [69.1, 655.0], [69.2, 656.0], [69.3, 656.0], [69.4, 657.0], [69.5, 657.0], [69.6, 658.0], [69.7, 658.0], [69.8, 658.0], [69.9, 658.0], [70.0, 659.0], [70.1, 659.0], [70.2, 659.0], [70.3, 660.0], [70.4, 660.0], [70.5, 661.0], [70.6, 661.0], [70.7, 662.0], [70.8, 662.0], [70.9, 663.0], [71.0, 663.0], [71.1, 664.0], [71.2, 664.0], [71.3, 664.0], [71.4, 665.0], [71.5, 665.0], [71.6, 666.0], [71.7, 666.0], [71.8, 667.0], [71.9, 668.0], [72.0, 668.0], [72.1, 668.0], [72.2, 669.0], [72.3, 669.0], [72.4, 669.0], [72.5, 669.0], [72.6, 670.0], [72.7, 670.0], [72.8, 671.0], [72.9, 671.0], [73.0, 671.0], [73.1, 672.0], [73.2, 672.0], [73.3, 673.0], [73.4, 673.0], [73.5, 674.0], [73.6, 674.0], [73.7, 675.0], [73.8, 675.0], [73.9, 676.0], [74.0, 676.0], [74.1, 677.0], [74.2, 677.0], [74.3, 677.0], [74.4, 678.0], [74.5, 679.0], [74.6, 679.0], [74.7, 680.0], [74.8, 680.0], [74.9, 681.0], [75.0, 681.0], [75.1, 681.0], [75.2, 681.0], [75.3, 682.0], [75.4, 683.0], [75.5, 683.0], [75.6, 684.0], [75.7, 685.0], [75.8, 685.0], [75.9, 685.0], [76.0, 686.0], [76.1, 687.0], [76.2, 688.0], [76.3, 689.0], [76.4, 689.0], [76.5, 690.0], [76.6, 691.0], [76.7, 691.0], [76.8, 692.0], [76.9, 692.0], [77.0, 693.0], [77.1, 694.0], [77.2, 695.0], [77.3, 696.0], [77.4, 696.0], [77.5, 697.0], [77.6, 697.0], [77.7, 698.0], [77.8, 698.0], [77.9, 699.0], [78.0, 699.0], [78.1, 700.0], [78.2, 700.0], [78.3, 702.0], [78.4, 702.0], [78.5, 702.0], [78.6, 703.0], [78.7, 705.0], [78.8, 706.0], [78.9, 706.0], [79.0, 708.0], [79.1, 708.0], [79.2, 709.0], [79.3, 710.0], [79.4, 711.0], [79.5, 712.0], [79.6, 714.0], [79.7, 715.0], [79.8, 717.0], [79.9, 717.0], [80.0, 718.0], [80.1, 719.0], [80.2, 720.0], [80.3, 721.0], [80.4, 723.0], [80.5, 723.0], [80.6, 724.0], [80.7, 725.0], [80.8, 726.0], [80.9, 726.0], [81.0, 726.0], [81.1, 727.0], [81.2, 728.0], [81.3, 728.0], [81.4, 729.0], [81.5, 729.0], [81.6, 730.0], [81.7, 730.0], [81.8, 730.0], [81.9, 730.0], [82.0, 731.0], [82.1, 731.0], [82.2, 732.0], [82.3, 732.0], [82.4, 732.0], [82.5, 732.0], [82.6, 733.0], [82.7, 734.0], [82.8, 734.0], [82.9, 736.0], [83.0, 738.0], [83.1, 740.0], [83.2, 744.0], [83.3, 746.0], [83.4, 751.0], [83.5, 756.0], [83.6, 766.0], [83.7, 774.0], [83.8, 793.0], [83.9, 802.0], [84.0, 814.0], [84.1, 823.0], [84.2, 832.0], [84.3, 834.0], [84.4, 839.0], [84.5, 842.0], [84.6, 846.0], [84.7, 850.0], [84.8, 856.0], [84.9, 860.0], [85.0, 865.0], [85.1, 871.0], [85.2, 873.0], [85.3, 878.0], [85.4, 879.0], [85.5, 884.0], [85.6, 888.0], [85.7, 891.0], [85.8, 893.0], [85.9, 896.0], [86.0, 901.0], [86.1, 905.0], [86.2, 917.0], [86.3, 929.0], [86.4, 935.0], [86.5, 940.0], [86.6, 956.0], [86.7, 962.0], [86.8, 974.0], [86.9, 978.0], [87.0, 985.0], [87.1, 995.0], [87.2, 1002.0], [87.3, 1008.0], [87.4, 1026.0], [87.5, 1043.0], [87.6, 1055.0], [87.7, 1071.0], [87.8, 1076.0], [87.9, 1084.0], [88.0, 1085.0], [88.1, 1087.0], [88.2, 1092.0], [88.3, 1096.0], [88.4, 1098.0], [88.5, 1106.0], [88.6, 1120.0], [88.7, 1135.0], [88.8, 1142.0], [88.9, 1163.0], [89.0, 1169.0], [89.1, 1174.0], [89.2, 1182.0], [89.3, 1188.0], [89.4, 1197.0], [89.5, 1204.0], [89.6, 1208.0], [89.7, 1209.0], [89.8, 1218.0], [89.9, 1222.0], [90.0, 1225.0], [90.1, 1229.0], [90.2, 1232.0], [90.3, 1233.0], [90.4, 1236.0], [90.5, 1238.0], [90.6, 1239.0], [90.7, 1245.0], [90.8, 1248.0], [90.9, 1252.0], [91.0, 1260.0], [91.1, 1263.0], [91.2, 1265.0], [91.3, 1266.0], [91.4, 1270.0], [91.5, 1275.0], [91.6, 1280.0], [91.7, 1286.0], [91.8, 1290.0], [91.9, 1293.0], [92.0, 1297.0], [92.1, 1299.0], [92.2, 1312.0], [92.3, 1317.0], [92.4, 1325.0], [92.5, 1332.0], [92.6, 1339.0], [92.7, 1349.0], [92.8, 1359.0], [92.9, 1363.0], [93.0, 1372.0], [93.1, 1384.0], [93.2, 1387.0], [93.3, 1392.0], [93.4, 1396.0], [93.5, 1397.0], [93.6, 1403.0], [93.7, 1407.0], [93.8, 1413.0], [93.9, 1420.0], [94.0, 1427.0], [94.1, 1430.0], [94.2, 1434.0], [94.3, 1442.0], [94.4, 1444.0], [94.5, 1449.0], [94.6, 1452.0], [94.7, 1456.0], [94.8, 1465.0], [94.9, 1472.0], [95.0, 1509.0], [95.1, 1524.0], [95.2, 1564.0], [95.3, 1586.0], [95.4, 1590.0], [95.5, 1598.0], [95.6, 1603.0], [95.7, 1610.0], [95.8, 1627.0], [95.9, 1633.0], [96.0, 1637.0], [96.1, 1642.0], [96.2, 1652.0], [96.3, 1657.0], [96.4, 1664.0], [96.5, 1667.0], [96.6, 1675.0], [96.7, 1681.0], [96.8, 1686.0], [96.9, 1709.0], [97.0, 1712.0], [97.1, 1722.0], [97.2, 1729.0], [97.3, 1738.0], [97.4, 1760.0], [97.5, 1776.0], [97.6, 1794.0], [97.7, 1807.0], [97.8, 1818.0], [97.9, 1870.0], [98.0, 1895.0], [98.1, 1905.0], [98.2, 1925.0], [98.3, 1984.0], [98.4, 2021.0], [98.5, 2122.0], [98.6, 2165.0], [98.7, 2182.0], [98.8, 2211.0], [98.9, 2265.0], [99.0, 2291.0], [99.1, 2406.0], [99.2, 2493.0], [99.3, 2671.0], [99.4, 2704.0], [99.5, 3021.0], [99.6, 3250.0], [99.7, 3589.0], [99.8, 4093.0], [99.9, 4373.0]], "isOverall": false, "label": "Random User", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 1223.0, "series": [{"data": [[600.0, 791.0], [700.0, 192.0], [800.0, 69.0], [900.0, 42.0], [1000.0, 41.0], [1100.0, 33.0], [1200.0, 91.0], [1300.0, 47.0], [1400.0, 48.0], [1500.0, 19.0], [1600.0, 44.0], [1700.0, 25.0], [1800.0, 15.0], [1900.0, 9.0], [2000.0, 5.0], [2100.0, 10.0], [2200.0, 8.0], [2300.0, 2.0], [2400.0, 4.0], [2500.0, 2.0], [2600.0, 4.0], [2700.0, 2.0], [3000.0, 3.0], [3200.0, 3.0], [3400.0, 2.0], [3500.0, 1.0], [3800.0, 2.0], [4000.0, 1.0], [4200.0, 2.0], [4300.0, 2.0], [4400.0, 1.0], [300.0, 1.0], [5300.0, 1.0], [400.0, 588.0], [500.0, 1223.0]], "isOverall": false, "label": "Random User", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 167.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2569.0, "series": [{"data": [[0.0, 597.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2569.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 167.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.5, "minX": 1.71838518E12, "maxY": 2.644578313253012, "series": [{"data": [[1.7183853E12, 2.5542168674698797], [1.71838596E12, 2.5892857142857144], [1.71838566E12, 2.345238095238095], [1.7183856E12, 2.644578313253012], [1.71838626E12, 2.4431137724550878], [1.71838572E12, 2.391566265060242], [1.71838536E12, 2.607142857142858], [1.71838542E12, 2.3772455089820377], [1.71838638E12, 1.5], [1.71838632E12, 2.6265060240963836], [1.71838602E12, 2.433734939759035], [1.71838548E12, 2.466666666666667], [1.71838614E12, 2.349397590361445], [1.71838518E12, 2.3757575757575746], [1.71838608E12, 2.3892215568862283], [1.71838578E12, 2.4191616766467066], [1.7183862E12, 2.5269461077844317], [1.7183859E12, 2.3892215568862265], [1.71838584E12, 2.445783132530122], [1.71838524E12, 2.3915662650602414], [1.71838554E12, 2.3832335329341316]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71838638E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 523.0, "minX": 1.0, "maxY": 2130.285714285714, "series": [{"data": [[4.0, 1052.021621621622], [2.0, 602.041037735849], [8.0, 1883.5], [1.0, 523.0], [5.0, 1331.6176470588236], [3.0, 830.1054247697036], [6.0, 1724.8571428571427], [7.0, 2130.285714285714]], "isOverall": false, "label": "Random User", "isController": false}, {"data": [[2.456945694569462, 707.6252625262515]], "isOverall": false, "label": "Random User-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 3.966666666666667, "minX": 1.71838518E12, "maxY": 5336.466666666666, "series": [{"data": [[1.7183853E12, 5276.616666666667], [1.71838596E12, 5335.416666666667], [1.71838566E12, 5336.466666666666], [1.7183856E12, 5273.533333333334], [1.71838626E12, 5310.6], [1.71838572E12, 5276.8], [1.71838536E12, 5335.25], [1.71838542E12, 5309.65], [1.71838638E12, 63.733333333333334], [1.71838632E12, 5272.633333333333], [1.71838602E12, 5277.8], [1.71838548E12, 5241.0], [1.71838614E12, 5278.2], [1.71838518E12, 5243.266666666666], [1.71838608E12, 5312.2], [1.71838578E12, 5307.766666666666], [1.7183862E12, 5309.516666666666], [1.7183859E12, 5309.266666666666], [1.71838584E12, 5272.916666666667], [1.71838524E12, 5283.816666666667], [1.71838554E12, 5311.183333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7183853E12, 329.23333333333335], [1.71838596E12, 333.2], [1.71838566E12, 333.2], [1.7183856E12, 329.23333333333335], [1.71838626E12, 331.21666666666664], [1.71838572E12, 329.23333333333335], [1.71838536E12, 333.2], [1.71838542E12, 331.21666666666664], [1.71838638E12, 3.966666666666667], [1.71838632E12, 329.23333333333335], [1.71838602E12, 329.23333333333335], [1.71838548E12, 327.25], [1.71838614E12, 329.23333333333335], [1.71838518E12, 327.25], [1.71838608E12, 331.21666666666664], [1.71838578E12, 331.21666666666664], [1.7183862E12, 331.21666666666664], [1.7183859E12, 331.21666666666664], [1.71838584E12, 329.23333333333335], [1.71838524E12, 329.23333333333335], [1.71838554E12, 331.21666666666664]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71838638E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 641.1785714285716, "minX": 1.71838518E12, "maxY": 814.0, "series": [{"data": [[1.7183853E12, 753.6807228915661], [1.71838596E12, 724.2976190476188], [1.71838566E12, 641.1785714285716], [1.7183856E12, 750.9277108433738], [1.71838626E12, 691.1257485029939], [1.71838572E12, 687.1325301204818], [1.71838536E12, 753.0297619047615], [1.71838542E12, 682.6826347305387], [1.71838638E12, 814.0], [1.71838632E12, 752.4397590361446], [1.71838602E12, 684.746987951807], [1.71838548E12, 730.0060606060606], [1.71838614E12, 688.7831325301211], [1.71838518E12, 684.8363636363634], [1.71838608E12, 685.7185628742513], [1.71838578E12, 716.0838323353296], [1.7183862E12, 765.4191616766468], [1.7183859E12, 670.6586826347302], [1.71838584E12, 692.2650602409641], [1.71838524E12, 711.5], [1.71838554E12, 685.1017964071855]], "isOverall": false, "label": "Random User", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71838638E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 631.8095238095235, "minX": 1.71838518E12, "maxY": 813.5, "series": [{"data": [[1.7183853E12, 752.1686746987955], [1.71838596E12, 702.1785714285712], [1.71838566E12, 631.8095238095235], [1.7183856E12, 725.114457831325], [1.71838626E12, 689.5029940119759], [1.71838572E12, 686.4759036144577], [1.71838536E12, 730.1130952380951], [1.71838542E12, 667.0239520958083], [1.71838638E12, 813.5], [1.71838632E12, 744.1445783132531], [1.71838602E12, 670.9457831325303], [1.71838548E12, 722.3515151515152], [1.71838614E12, 677.9698795180726], [1.71838518E12, 684.1575757575762], [1.71838608E12, 678.7365269461075], [1.71838578E12, 684.8443113772458], [1.7183862E12, 745.6586826347304], [1.7183859E12, 663.7844311377244], [1.71838584E12, 675.5361445783126], [1.71838524E12, 696.6265060240966], [1.71838554E12, 678.1197604790419]], "isOverall": false, "label": "Random User", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71838638E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 114.5, "minX": 1.71838518E12, "maxY": 232.44242424242418, "series": [{"data": [[1.7183853E12, 225.59036144578312], [1.71838596E12, 175.375], [1.71838566E12, 182.76785714285717], [1.7183856E12, 183.34337349397595], [1.71838626E12, 203.2275449101796], [1.71838572E12, 212.09638554216872], [1.71838536E12, 208.0059523809523], [1.71838542E12, 190.8083832335329], [1.71838638E12, 114.5], [1.71838632E12, 205.53614457831327], [1.71838602E12, 185.50602409638552], [1.71838548E12, 232.44242424242418], [1.71838614E12, 211.67469879518083], [1.71838518E12, 224.37575757575752], [1.71838608E12, 198.30538922155682], [1.71838578E12, 218.79640718562874], [1.7183862E12, 225.28143712574854], [1.7183859E12, 179.53293413173654], [1.71838584E12, 187.5722891566265], [1.71838524E12, 225.9156626506024], [1.71838554E12, 201.11976047904187]], "isOverall": false, "label": "Random User", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71838638E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 388.0, "minX": 1.71838518E12, "maxY": 5377.0, "series": [{"data": [[1.7183853E12, 2741.0], [1.71838596E12, 3885.0], [1.71838566E12, 3021.0], [1.7183856E12, 4093.0], [1.71838626E12, 4253.0], [1.71838572E12, 2285.0], [1.71838536E12, 2461.0], [1.71838542E12, 2152.0], [1.71838638E12, 1105.0], [1.71838632E12, 5377.0], [1.71838602E12, 2193.0], [1.71838548E12, 2672.0], [1.71838614E12, 2294.0], [1.71838518E12, 4428.0], [1.71838608E12, 4394.0], [1.71838578E12, 3842.0], [1.7183862E12, 2493.0], [1.7183859E12, 4373.0], [1.71838584E12, 3282.0], [1.71838524E12, 2182.0], [1.71838554E12, 2671.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7183853E12, 1306.9000000000003], [1.71838596E12, 1253.3999999999999], [1.71838566E12, 766.9999999999995], [1.7183856E12, 1270.0000000000005], [1.71838626E12, 1190.800000000001], [1.71838572E12, 1215.9000000000003], [1.71838536E12, 1427.8], [1.71838542E12, 1279.6000000000008], [1.71838638E12, 1105.0], [1.71838632E12, 1219.9], [1.71838602E12, 1236.6], [1.71838548E12, 1297.6000000000001], [1.71838614E12, 1002.5000000000036], [1.71838518E12, 856.4000000000002], [1.71838608E12, 864.2000000000002], [1.71838578E12, 1148.2000000000012], [1.7183862E12, 1297.8000000000004], [1.7183859E12, 1145.4000000000015], [1.71838584E12, 1178.2000000000003], [1.71838524E12, 1157.4000000000008], [1.71838554E12, 1233.0000000000007]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7183853E12, 2716.2100000000005], [1.71838596E12, 3571.740000000001], [1.71838566E12, 3007.89], [1.7183856E12, 3664.200000000008], [1.71838626E12, 3190.1599999999894], [1.71838572E12, 1951.3400000000063], [1.71838536E12, 2434.78], [1.71838542E12, 1977.2399999999982], [1.71838638E12, 1105.0], [1.71838632E12, 3951.9100000000267], [1.71838602E12, 2185.63], [1.71838548E12, 2091.860000000003], [1.71838614E12, 2226.3300000000013], [1.71838518E12, 4306.56], [1.71838608E12, 3846.5999999999945], [1.71838578E12, 2505.7999999999865], [1.7183862E12, 2378.079999999999], [1.7183859E12, 3223.1199999999885], [1.71838584E12, 2775.4800000000096], [1.71838524E12, 2082.170000000002], [1.71838554E12, 2153.519999999995]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7183853E12, 1617.5000000000002], [1.71838596E12, 1767.449999999999], [1.71838566E12, 1402.6999999999991], [1.7183856E12, 1685.5000000000005], [1.71838626E12, 1441.1999999999998], [1.71838572E12, 1445.9], [1.71838536E12, 1829.8499999999972], [1.71838542E12, 1394.6], [1.71838638E12, 1105.0], [1.71838632E12, 1577.600000000001], [1.71838602E12, 1637.1000000000004], [1.71838548E12, 1654.8999999999996], [1.71838614E12, 1508.9500000000005], [1.71838518E12, 1394.4999999999998], [1.71838608E12, 1605.7999999999997], [1.71838578E12, 1598.6], [1.7183862E12, 1686.0], [1.7183859E12, 1403.6], [1.71838584E12, 1467.7], [1.71838524E12, 1434.5500000000002], [1.71838554E12, 1454.2]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7183853E12, 456.0], [1.71838596E12, 388.0], [1.71838566E12, 405.0], [1.7183856E12, 410.0], [1.71838626E12, 410.0], [1.71838572E12, 417.0], [1.71838536E12, 408.0], [1.71838542E12, 410.0], [1.71838638E12, 523.0], [1.71838632E12, 408.0], [1.71838602E12, 412.0], [1.71838548E12, 442.0], [1.71838614E12, 409.0], [1.71838518E12, 418.0], [1.71838608E12, 407.0], [1.71838578E12, 425.0], [1.7183862E12, 466.0], [1.7183859E12, 407.0], [1.71838584E12, 410.0], [1.71838524E12, 416.0], [1.71838554E12, 415.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7183853E12, 613.0], [1.71838596E12, 554.0], [1.71838566E12, 540.5], [1.7183856E12, 578.0], [1.71838626E12, 570.0], [1.71838572E12, 593.5], [1.71838536E12, 600.0], [1.71838542E12, 568.0], [1.71838638E12, 814.0], [1.71838632E12, 592.0], [1.71838602E12, 562.5], [1.71838548E12, 607.0], [1.71838614E12, 593.0], [1.71838518E12, 590.0], [1.71838608E12, 577.0], [1.71838578E12, 604.0], [1.7183862E12, 633.0], [1.7183859E12, 559.0], [1.71838584E12, 577.5], [1.71838524E12, 612.0], [1.71838554E12, 578.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71838638E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 571.5, "minX": 1.0, "maxY": 1636.5, "series": [{"data": [[2.0, 572.5], [4.0, 619.0], [1.0, 571.5], [8.0, 1636.5], [5.0, 724.5], [3.0, 577.0], [6.0, 951.5], [7.0, 1444.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 571.5, "minX": 1.0, "maxY": 1636.5, "series": [{"data": [[2.0, 572.0], [4.0, 616.0], [1.0, 571.5], [8.0, 1636.5], [5.0, 719.5], [3.0, 575.0], [6.0, 951.5], [7.0, 1444.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.7666666666666666, "minX": 1.71838518E12, "maxY": 2.783333333333333, "series": [{"data": [[1.7183853E12, 2.783333333333333], [1.71838596E12, 2.783333333333333], [1.71838566E12, 2.783333333333333], [1.7183856E12, 2.783333333333333], [1.71838626E12, 2.7666666666666666], [1.71838572E12, 2.7666666666666666], [1.71838536E12, 2.7666666666666666], [1.71838542E12, 2.783333333333333], [1.71838632E12, 2.783333333333333], [1.71838602E12, 2.783333333333333], [1.71838548E12, 2.783333333333333], [1.71838614E12, 2.783333333333333], [1.71838518E12, 2.7666666666666666], [1.71838608E12, 2.7666666666666666], [1.71838578E12, 2.783333333333333], [1.7183862E12, 2.783333333333333], [1.7183859E12, 2.7666666666666666], [1.71838584E12, 2.783333333333333], [1.71838524E12, 2.783333333333333], [1.71838554E12, 2.7666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71838632E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71838518E12, "maxY": 2.8, "series": [{"data": [[1.7183853E12, 2.7666666666666666], [1.71838596E12, 2.8], [1.71838566E12, 2.8], [1.7183856E12, 2.7666666666666666], [1.71838626E12, 2.783333333333333], [1.71838572E12, 2.7666666666666666], [1.71838536E12, 2.8], [1.71838542E12, 2.783333333333333], [1.71838638E12, 0.03333333333333333], [1.71838632E12, 2.7666666666666666], [1.71838602E12, 2.7666666666666666], [1.71838548E12, 2.75], [1.71838614E12, 2.7666666666666666], [1.71838518E12, 2.75], [1.71838608E12, 2.783333333333333], [1.71838578E12, 2.783333333333333], [1.7183862E12, 2.783333333333333], [1.7183859E12, 2.783333333333333], [1.71838584E12, 2.7666666666666666], [1.71838524E12, 2.7666666666666666], [1.71838554E12, 2.783333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71838638E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71838518E12, "maxY": 2.8, "series": [{"data": [[1.7183853E12, 2.7666666666666666], [1.71838596E12, 2.8], [1.71838566E12, 2.8], [1.7183856E12, 2.7666666666666666], [1.71838626E12, 2.783333333333333], [1.71838572E12, 2.7666666666666666], [1.71838536E12, 2.8], [1.71838542E12, 2.783333333333333], [1.71838638E12, 0.03333333333333333], [1.71838632E12, 2.7666666666666666], [1.71838602E12, 2.7666666666666666], [1.71838548E12, 2.75], [1.71838614E12, 2.7666666666666666], [1.71838518E12, 2.75], [1.71838608E12, 2.783333333333333], [1.71838578E12, 2.783333333333333], [1.7183862E12, 2.783333333333333], [1.7183859E12, 2.783333333333333], [1.71838584E12, 2.7666666666666666], [1.71838524E12, 2.7666666666666666], [1.71838554E12, 2.783333333333333]], "isOverall": false, "label": "Random User-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71838638E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71838518E12, "maxY": 2.8, "series": [{"data": [[1.7183853E12, 2.7666666666666666], [1.71838596E12, 2.8], [1.71838566E12, 2.8], [1.7183856E12, 2.7666666666666666], [1.71838626E12, 2.783333333333333], [1.71838572E12, 2.7666666666666666], [1.71838536E12, 2.8], [1.71838542E12, 2.783333333333333], [1.71838638E12, 0.03333333333333333], [1.71838632E12, 2.7666666666666666], [1.71838602E12, 2.7666666666666666], [1.71838548E12, 2.75], [1.71838614E12, 2.7666666666666666], [1.71838518E12, 2.75], [1.71838608E12, 2.783333333333333], [1.71838578E12, 2.783333333333333], [1.7183862E12, 2.783333333333333], [1.7183859E12, 2.783333333333333], [1.71838584E12, 2.7666666666666666], [1.71838524E12, 2.7666666666666666], [1.71838554E12, 2.783333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71838638E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

