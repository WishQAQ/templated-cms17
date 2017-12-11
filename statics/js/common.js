function  turnit(ss) 
{ 
	if(ss.style.display=="none") 
	{
		ss.style.display=""; 
	}else{
		ss.style.display="none"; 
	} 
} 
function sele(tid) 
{ 
	bb.style.display='none'; 
	text1.value=tid.innerText; 
}

function over(tid) 
{ 
	for (var i=1;i<4;i++) 
	{ 
		eval('t'+i).className=''; 
	} 
	tid.className='ss';
}

function out(tid) 
{ 
	if (bb.style.display!='none'){ 
		tid.className='';
	}
}