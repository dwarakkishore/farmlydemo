// ----------Scramble------------
$(document).ready(function () {
    // ELEMENTS
    var $scramble = $(".scramble");
  
    $scramble.scramble(3000, 20, "alphabet", true);
  });
  
  // ----------scrambleEnd--------------
  
  var tl = gsap.timeline();
  tl.to(".Loading", {
    opacity: 0,
    delay: 2.5,
  })
    .to(".loader", {
      // y: "-100%",
      opacity: 0,
      duration: 1,
      ease: "Expo.easeInOut",
    })
    .to(
      ".loader",
      {
        y: "-100%",
        // opacity:0,
        duration: 1,
        // ease: "Expo.easeInOut"
      },
      "up"
    )
    .to(
      ".svgwaala",
      {
        opacity: 1,
        delay: -1.7,
        ease: "Expo.easeInOut",
      },
      "donut"
    )
    .to(
      "#dotted",
      {
        opacity: 1,
        delay: -1.8,
        ease: "Expo.easeInOut",
      },
      "donut"
    )
    .to(
      "#donut",
      {
        opacity: 1,
        scale: 2,
        delay: -1.4,
        ease: "Expo.easeInOut",
        rotationY: "+=15",
        duration: 3,
        rotationX: "+=15",
        rotationZ: "+=15",
      },
      "up"
    )
  
    .from(
      "#kothik-k, #kothik-o, #kothik-t, #kothik-h, #kothik-k2, #kothik-i",
      {
        opacity: 0,
        duration: 1,
        scale: 0,
        top: "40%",
        left: "47%",
      },
      "up"
    );
  
  var tl2 = gsap.timeline();
  
  document.querySelectorAll("#explore").forEach(function (elem) {
    elem.addEventListener("click", function () {
      tl2
        .to(
          "#kothik-k",
          {
            left: "-15%",
            top: "-15%",
            scale: "2",
            rotate: "25deg",
            ease: "ease.out",
            duration: 1,
            opacity: 0,
          },
          "sw"
        )
        .to(
          "#kothik-o",
          {
            top: "-20%",
            scale: "2",
            rotate: "25deg",
            ease: "ease.out",
            duration: 1,
            opacity: 0,
          },
          "sw"
        )
        .to(
          "#kothik-t",
          {
            left: "115%",
            top: "-20%",
            scale: "2",
            rotate: "25deg",
            ease: "ease.out",
            duration: 1,
            opacity: 0,
          },
          "sw"
        )
        .to(
          "#kothik-h",
          {
            left: "115%",
            top: "110%",
            scale: "2",
            rotate: "25deg",
            ease: "ease.out",
            duration: 1,
            opacity: 0,
          },
          "sw"
        )
        .to(
          "#kothik-i",
          {
            left: "35%",
            top: "120%",
            scale: "2",
            rotate: "25deg",
            ease: "ease.out",
            duration: 1,
            opacity: 0,
          },
          "sw"
        )
        .to(
          "#kothik-k2",
          {
            left: "-15%",
            top: "80%",
            scale: "2",
            rotate: "25deg",
            ease: "ease.out",
            duration: 1,
            opacity: 0,
          },
          "sw"
        )
        .to("#donut", {
          width: "80vw",
          top: "-10%",
          rotate: "360deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
          delay: "-1",
        })
        .to(
          "#dotted",
          {
            opacity: 0,
          },
          "sw"
        )
        .to(".svgwaala", {
          opacity: 0,
        });
    });
  });
  
  function example() {
    window.location.href = "again.html";
  }
  
  // video 3 --------------
  
  var tl7 = gsap.timeline();
  tl7.from(
    ".main-abhishek",
    {
      opacity: "0",
      ease: "expo.inout",
      duration: 1,
    },
    "anim3"
  );
  tl7
    .from(
      ".front-page-img",
      {
        opacity: "0",
        ease: "expo.inout",
        duration: 1,
      },
      "anim3"
    )
    .from(
      "#line-effect-3",
      {
        opacity: "0",
        ease: "expo.inout",
        duration: 1,
      },
      "anim3"
    )
    .from(
      "#line-effect-1",
      {
        height: "0%",
        ease: "expo.inout",
        duration: 2,
      },
      "anim1"
    )
    .from(
      "#line-effect-2",
      {
        height: "0%",
        ease: "expo.inout",
        duration: 1,
      },
      "anim2"
    )
    .from(
      ".img-one",
      {
        height: "0%",
        ease: "expo.inout",
        duration: 1,
      },
      "anim1"
    )
    .from(
      ".mandit",
      {
        width: "0%",
        opacity: 0,
        ease: "expo.inout",
        duration: 1,
      },
      "anim1"
    )
    .from(
      ".mandit-2",
      {
        height: "0%",
        opacity: 0,
        ease: "expo.inout",
        duration: 1,
      },
      "anim1"
    )
    .from(
      ".main-txt-front",
      {
        opacity: 0,
        ease: "expo.inout",
        delay: -0.5,
        duration: 1,
      },
      "anim2"
    )
    .from(
      "#circle",
      {
        opacity: 0,
        ease: "expo.inout",
        duration: 2,
      },
      "anim2"
    )
    .from(
      "#nav",
      {
        top: -50,
        opacity: 0,
        ease: "expo.inout",
        duration: 1,
      },
      "anim2"
    );
  
  document
    .querySelector("#cntr-nav .ri-menu-line")
    .addEventListener("click", function () {
      document.querySelector(".upar-menu").style.top = "0%";
      document.querySelector(".upar-menu .ri-close-fill").style.display =
        "initial";
      document.querySelector("#cntr-nav .ri-menu-line").style.display = "none";
    });
  
  document
    .querySelector(".upar-menu .ri-close-fill")
    .addEventListener("click", function () {
      document.querySelector(".upar-menu").style.top = "-100%";
      document.querySelector(".upar-menu .ri-close-fill").style.display = "none";
      document.querySelector("#cntr-nav .ri-menu-line").style.display = "initial";
    });
  
  document.querySelector("#abhishek").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "0%";
    document.querySelector("#abhishek").style.cursor = "pointer";
  });
  document.querySelector("#amarjeet").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "-50vh";
    document.querySelector("#amarjeet").style.cursor = "pointer";
  });
  document.querySelector("#rk").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "-100vh";
    document.querySelector("#rk").style.cursor = "pointer";
  });
  document.querySelector("#ak").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "-150vh";
    document.querySelector("#ak").style.cursor = "pointer";
  });
  
  
  // video 3 ----------------------------
  
  
  function dom(){
    const canvas = document.querySelector("#home>canvas");
    const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  })
  
  function files(index) {
    var data = `https://i.postimg.cc/c1FzVZgS/0050.png
    https://i.postimg.cc/zXMcGjF2/0051.png
    https://i.postimg.cc/d1qWxSJ3/0052.png
    https://i.postimg.cc/x8860JJS/0053.png
    https://i.postimg.cc/QCz0V81K/0054.png
    https://i.postimg.cc/6QhcnLCX/0055.png
    https://i.postimg.cc/V6GFHf7Z/0056.png
    https://i.postimg.cc/VshRqN0d/0057.png
    https://i.postimg.cc/zXRk01Tp/0058.png
    https://i.postimg.cc/SxFfPtr4/0059.png
    https://i.postimg.cc/Sx6fb7TM/0060.png
    https://i.postimg.cc/HLT4YcRP/0061.png
    https://i.postimg.cc/fRNgdb1Y/0062.png
    https://i.postimg.cc/v8CKQhzq/0063.png
    https://i.postimg.cc/jdNFCf3s/0064.png
    https://i.postimg.cc/CxsrsgVX/0065.png
    https://i.postimg.cc/VNsG7Vf6/0066.png
    https://i.postimg.cc/1zWWbrXK/0067.png
    https://i.postimg.cc/Twpkx5Wv/0068.png
    https://i.postimg.cc/859ZzkhJ/0069.png
    https://i.postimg.cc/tggkdnkn/0070.png
    https://i.postimg.cc/wTKWKvqn/0071.png
    https://i.postimg.cc/NG2NPTc1/0072.png
    https://i.postimg.cc/vZb3BN6z/0073.png
    https://i.postimg.cc/c4QFdS6C/0074.png
    https://i.postimg.cc/K8fQgDPy/0075.png
    https://i.postimg.cc/xdFR6jpx/0076.png
    https://i.postimg.cc/1tnK2xL9/0077.png
    https://i.postimg.cc/C134VPgb/0078.png
    https://i.postimg.cc/9X9pBhdb/0079.png
    https://i.postimg.cc/DyKcjM5T/0080.png
    https://i.postimg.cc/4xfQZHr2/0081.png
    https://i.postimg.cc/5NqSZSkF/0082.png
    https://i.postimg.cc/fR8jbTsz/0083.png
    https://i.postimg.cc/253dLRj4/0084.png
    https://i.postimg.cc/cJjRQ96P/0085.png
    https://i.postimg.cc/zBgnpCgv/0086.png
    https://i.postimg.cc/RhxwYW7R/0087.png
    https://i.postimg.cc/J7jNkQ8d/0088.png
    https://i.postimg.cc/MKxybjKZ/0089.png
    https://i.postimg.cc/HLJ5sw3z/0090.png
    https://i.postimg.cc/W11gxLkQ/0091.png
    https://i.postimg.cc/jdXy8dLH/0092.png
    https://i.postimg.cc/CxrkgPCd/0093.png
    https://i.postimg.cc/hGHmJX5B/0094.png
    https://i.postimg.cc/Qt1Tcj2W/0095.png
    https://i.postimg.cc/4yGh5rG2/0096.png
    https://i.postimg.cc/44vcdNvD/0097.png
    https://i.postimg.cc/jdZJHgFv/0098.png
    https://i.postimg.cc/nhWj5sZD/0099.png
    https://i.postimg.cc/MpHfd0kw/0100.png
    https://i.postimg.cc/mDfcL0PZ/0101.png
    https://i.postimg.cc/hG7zqSP3/0102.png
    https://i.postimg.cc/50BX6nzB/0103.png
    https://i.postimg.cc/ZnJC3pP1/0104.png
    https://i.postimg.cc/KjQ45jJ4/0105.png
    https://i.postimg.cc/59mHJKb1/0106.png
    https://i.postimg.cc/QxxFdgd7/0107.png
    https://i.postimg.cc/ncRCjsXP/0108.png
    https://i.postimg.cc/8z7sh1WP/0109.png
    https://i.postimg.cc/xdHC4ttw/0110.png
    https://i.postimg.cc/x1B85WyG/0111.png
    https://i.postimg.cc/50V0dLr6/0112.png
    https://i.postimg.cc/tTNgX70D/0113.png
    https://i.postimg.cc/L548hR2S/0114.png
    https://i.postimg.cc/sxnDh8gh/0115.png
    https://i.postimg.cc/SNvxQw50/0116.png
    https://i.postimg.cc/0yK2zVRz/0117.png
    https://i.postimg.cc/cJq1wf0X/0118.png
    https://i.postimg.cc/tTk9KfPM/0119.png
    https://i.postimg.cc/7LgHVbLD/0120.png
    https://i.postimg.cc/MTqWrxcB/0121.png
    https://i.postimg.cc/T1HfwDtj/0122.png
    https://i.postimg.cc/T2kRQzTy/0123.png
    https://i.postimg.cc/m2JTW7zB/0124.png
    https://i.postimg.cc/8CVDjDmY/0125.png
    https://i.postimg.cc/mrN49qdg/0126.png
    https://i.postimg.cc/ZRbSxcgF/0127.png
    https://i.postimg.cc/hj2qymRF/0128.png
    https://i.postimg.cc/C5dpWKwR/0129.png
    https://i.postimg.cc/WzKcjP4X/0130.png
    https://i.postimg.cc/15nZB4WT/0131.png
    https://i.postimg.cc/Xv3SnLVS/0132.png
    https://i.postimg.cc/1zHxXFtg/0133.png
    https://i.postimg.cc/zBt9S1T8/0134.png
    https://i.postimg.cc/9MF67fRL/0135.png
    https://i.postimg.cc/RhW2gbTf/0136.png
    https://i.postimg.cc/3NzVVCLq/0137.png
    https://i.postimg.cc/sfLkMsVJ/0138.png
    https://i.postimg.cc/y842Tj3g/0139.png
    https://i.postimg.cc/jSHm3fy8/0140.png
    https://i.postimg.cc/yN75MNP7/0141.png
    https://i.postimg.cc/B66zvwky/0142.png
    https://i.postimg.cc/tJnm3nXN/0143.png
    https://i.postimg.cc/23p92jyR/0144.png
    https://i.postimg.cc/7PCxsBhm/0145.png
    https://i.postimg.cc/YqYtkh1F/0146.png
    https://i.postimg.cc/qB9p98C0/0147.png
    https://i.postimg.cc/Jz8MhMq2/0148.png
    https://i.postimg.cc/13KPn275/0149.png
    https://i.postimg.cc/TP76QmXz/0150.png    
    `;
    return data.split("\n")[index];
  }
  
  const frameCount = 150;
  
  const images = [];
  const imageSeq = {
    frame: 0
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub:1.8,
        pin:true,
        trigger:"#home",
    },
    onUpdate: render
  });
  
  images[0].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context)
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  }
  
  gsap.to("#home canvas",{
    scale:0.8,
    scrollTrigger:{
        scrub:.1,
        trigger:"#home",
        start:"bottom 100%",
        // markers:true,
    },
  })
  ScrollTrigger.create({
    trigger:"#home",
    pin:true,
    start:"bottom 100%",
  })
  
  }
  
  dom()