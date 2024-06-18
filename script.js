window.addEventListener('scroll', function() {
    const toTopButton = document.getElementById('to-top-button');
    if (window.scrollY > 200) {
        toTopButton.style.display = 'flex';
    } else {
        toTopButton.style.display = 'none';
    }
});

document.getElementById('to-top-button').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

let i=0, imgArr=new Array();
imgArr[0] = "https://i.postimg.cc/ZK7SJJmL/448283502-827251652252170-2969280458495325539-n.jpg";
imgArr[1] = "https://i.postimg.cc/dQnM9JhK/448247486-836127458406370-752030593462737668-n.jpg";
imgArr[2] = "https://i.postimg.cc/4N3DLjcH/448108560-494108556299865-708565993708979521-n.jpg";
//imgArr[3] = "https://pngfree.io/upload/cache/upload/imgs/homepngwing/free-png-zskhc-f350x255.png";

function showImg()
{
  document.getElementById('ico').src = imgArr[i];
  i = (i+1)%3;
}
function show()
{
  setInterval(showImg,1500);
}