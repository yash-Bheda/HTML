index=0

function yash()
{
imge=document.getElementsByTagName('img');
for(i=0;i<imge.length;i++)
{
    imge[i].style.display="none"
}

imge[index].style.display="block"
index++


setTimeout("yash()",1000)

if(index>=imge.length)
{
    index=0
}




}

yash()
