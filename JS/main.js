
exp = 0;
dotflag = 0;
symflag = 0;
digflag = 0;
function concat(a)
{
	var in_id = document.getElementById('in_exp');
	exp = in_id.value;
	var x = a;

	if(exp != 0)
	{
		exp = exp + a;
	}
	else
	{
		exp = a;
	}

	in_id.value = exp;
}

function singclr()
{
	var in_id = document.getElementById('in_exp');

	var x = in_id.value;

	in_id.value = x.substring(0, x.length-1);
}

function dblclr()
{
	var in_id = document.getElementById('in_exp');
	var op_id = document.getElementById('in_op');
	in_id.value = "";
	op_id.value = "";
	dotflag = 0;
	symflag = 0;
	digflag = 0;
	exp="";
}

function chkDigFlag(x)
{
	digflag = 1;
	concat(x);
}

function chkDotFlag()
{
	if(dotflag == 0)
	{
		dotflag = 1;
		concat('.');
	}
}

function chkSymFlag(x)
{
	if(digflag == 1)
	{
		symflag = 1;
		dotflag = 0;
		concat(x);
	}
}

function evalExp()
{
	var in_id = document.getElementById('in_exp');
	var op_id = document.getElementById('in_op');

	op_id.value = eval(in_id.value);
	if(op_id.value == "Infinity")
	{
		op_id.value = '∞';
		op_id.style.fontSize = '50px';
	}

}