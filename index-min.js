$(document).ready(function(){var c=[{name:"Ion",catlink:"/catPic.jpg"},{name:"Atom",catlink:"/catPic2.jpg"},{name:"Helium",catlink:"/catPic.jpg"},{name:"Lithium",catlink:"/catPic2.jpg"},{name:"Beryllium",catlink:"/catPic2.jpg"}];$.each(c,function(c,a){$("#catPic").append("<img src="+a[catlink]+" height=300px width= 350px/>")})});