		//1. ways to print in javascript
		//console.log("Hello World"); 
		//alert("me");
		//document.write("this is document write");	<!--this will print on browser-->
		
		//2. javascript console API
		//console.log("Hello World"); <!--will print on console not on browser-->
		//console.log("Hello World", 4+6,"another log");
		//console.error("This is Error"); <!--will print on console not on browser-->
		//console.warn("this is warning");
		
		//3. JavaScript Variables
		// js variables are containers to store datab values
		/*
		var num1=34;
		var num2=39;
		console.log(num1+num2);
		
		// Data Types
		//Numbers,Strings, Bollean Values
		
		//Numbers
		var number1=65;
		var number2=65.25;
		console.log(number1+number2);
		
		//Strings
		var str= 'this is string';
		var str1= 'this is string';
		
		//Objects
		var marks={
			ravi:35,
			harry:99.77,
			padmesh:90
		}
		console.log(marks);
		
		//Booleans value-true or false
		var a=true;
		var b=false;
		console.log(a,b)
		
		//var undefined
		var und;
		console.log(und)
		
		//var null(nothing)
		var n=null;
		console.log(n);
		
		//Data types-1.primitive(numbers,strings and boolean undefined,null,symbol) and 2.reference(Arrays,Objects) data types(at very high level
		
		var arr=[1,2,"string",4,5];
		*/
		
		//Arithmetic Operators in Javascript=> +,-,*,/
		/*var a=100;
		var b=10;
		console.log("the value of a+b is ",a+b);
		console.log("the value of a-b is ",a-b);
		console.log("the value of a*b is ",a*b);
		console.log("the value of a/b is ",a/b);
		*/
		//Assignment Operators
		/*
		var c=b;
		c+=2; //c=c+2;
		c-+2;
		c*=2;
		c/=2;//c=c/2;
		console.log(c);
		*/
		
		//comparison operators
		/*
		var x=10;
		var y=20;
		console.log(x<=y);
		console.log(x==y);
		console.log(x>=y);
		*/
		
		//logical operators(AND)
		/*
		console.log(true && true);
		console.log(false && true);
		console.log(false && false);
		console.log(true && false);
		//OR Operators
		console.log(true || true);
		console.log(false || true);
		console.log(false || f alse);
		console.log(true || false);
		*/
		
		//FUNCTIONS in JAVASCRIPT
		//DRY=DO NOT REPEAT YOURSELF 
		/*function avg(a,b){
			return (a+b)/2;
		}
		c1=avg(4,6);//function call
		c2=avg(14,16);//function call
		console.log(c1,c2);
		*/
		
		//conditonals in javascript
		//if....else condition
		/*
		var age=4;
		if(age>8)
		{
			console.log('you are not kid');
		}
		else{
			console.log('you are kid');
		}
		*/
		//if..else ladder
		/*
		var age=31;
		if(age>50)
		{
			console.log('you are old');
		}
		else if(age<20)
		{
			console.log('you are an adult');
		}
		else if(age==31)
		{
			console.log('you are not old and not so young');
		}
		else
		{
			console.log('you are legend');
		}
		console.log('end of ladder');
		*/
		//FOR LOOP
		/*
		var arr=[1,2,3,4,5,6,7];
		console.log(arr);
		for(var i=0;i<arr.length;i++)
		{
			console.log(arr[i]);
		}
		*/
		
		//FOR EACH LOOP
		/*
		var arr=[1,2,3,4,5,6,7];
		arr.forEach(function(element){
			console.log(element);
		})
		*/
		
		//const ac=0; it constant that means we cant change its value.it remains same as mentioned.
		//ac=ac+1;;
		
		//WE SHOULD USE 'let' INSTEAD OF var (var is used in old javascript).
		//WHILE LOOP
		/*
		var arr=[1,2,3,4,5,6,7];
		let j=0;
		while(j<arr.length)
		{
		console.log(arr[j]);
		j++;
		}
		*/
		
		//Do..while loop
		/*
		var arr=[1,2,3,4,5,6,7];
		let j=10;
		do{
		console.log(arr[j]); //will print undefined on console
		j++;
		}while(j<arr.length);
		*/
	
		//BREAK STATEMENT
		/*
		var arr=[1,2,3,4,5,6,7];
		console.log(arr);
		for(var i=0;i<arr.length;i++)
		{
			if(i==3||i==5)
			{
				//break;
				continue;
			}
			console.log(arr[i]);
		}
		*/
		
		//METHODS OF AN ARRAY
		/*
		let myArr=["Fan","camera",34,null,true]; // You can include string,numbers,booleans,null in one array
		//console.log(myArr.length); //It will print the lenth of myArr
		//myArr.pop(); //it will remove the last element from array
		//myArr.push('Neha'); // it will add 'Neha' in Array
		//myArr.shift(); //removes first elt from array
		//myArr.unshift('Neha'); //it will place the 'Neha' at first place
		console.log(myArr.unshift("Harry")); //secong method of unshift
		//const newLen=myArr.unshift('harry'); //third method of unshift
		//console.log(newLen); // will print the new lenght of array
		console.log(myArr); //wiill print the length after implementing methods
		*/
		
		//String Method in JavaScript
		/*
		let myLovelyString="neha is good good good girl";
		//console.log(myLovelyString.length)
		//console.log(myLovelyString.indexOf("good")) //will print the position of good i.e.8.if there are 2 good then it will print the number of first good
		//console.log(myLovelyString.lastIndexOf("good")) //will print the last occurence of good
		//console.log(myLovelyString.slice(1,3)) // used for slicing the string here output will be 'eh'
		d=myLovelyString.replace("neha","Harry"); //replace methdod
		d=d.replace("good","bad"); //it will replace the first good
		console.log(d);
		*/
		
		//DATE OF JavaScript
		//let myDate=new Date();
		//console.log(myDate);//it will print when your server is live.ISD
		//console.log(myDate.getTime());//it will give you in seconds
		//console.log(myDate.getFullYear());//will print the year
		//console.log(myDate.getDay());// will print dy
		//console.log(myDate.getMinutes());// will print minutes
		//console.log(myDate.getHours());//will print hours and now you can learn other date methods too.
		
		//DOM MANIPULATION(Document Object Model)
		
		//Let elem=document.getElementByid(click');	//if u want to target an element by its ID
		//console.log(elem);							//will print syntax
		//Let elemClass= document.getElementsByClassName(container)
		//console.log(elemClass);						//will print htmlcollection consisting of containers
		//elemClass[0].style.background="yellow"; //background color will change
		//elemClass[0].classList.add("bg-primary")	//you can add the whole class from html using this syntax.
		//elemClass[0].classList.remove("bg-primary")	//you can remove the whole class from html using this syntax.
	
		//console.log(elemClass[0].innerHTML);//we can access inner elements of html
		//console.log(elemClass[0].innerText);// access the inner text of html like paragraph text
		/*
		tn=document.getElementsByTagName('div') //if you want to print all buttons,div of HTML
		console.log(tn)
		//APPEND CHILD METHOD
		createdElement=document.createElement('p') //we can make paragraph with the help of createElement
		createdElement.innerText="this is my new para by using innertext";
		tn[0].appendChild(createdElement);//if you wan to add child elemnt to any div 
		
		//REPLACE CHILD METHOD
		createdElement2=document.createElement('b')
		createdElement2.innerText="this is a created bold";
		tn[0].replaceChild(createdElement2,createdElement);//it will replace createdElement paragraph with createdElement2 paragraph
		
		//SEARCH OTHER CHILD METHODS 
		
		//SELECTING USING QUERY
		sel=document.querySelector('.container')
		console.log(sel)
		sel=document.querySelectorAll('.container')//will display all the container on console
		console.log(sel)
		*/
		//EVENTS IN JAVASCRIPTS
		/*
		
		//2.CLICK EVENT
		
		firstContainer.addEventListener('click',function(){
			console.log('get clicked on container')
		})
		
		//3.MOUSEOVER EVENT
		firstContainer.addEventListener('mouseover',function(){
			console.log('mouse on container')
		})
		
		//4.MOUSEOUT EVENT
		firstContainer.addEventListener('mouseout',function(){
			console.log('mouse out of container')
		})
		
		//5.MOUSEUP EVENT
		firstContainer.addEventListener('mouseup',function(){
			console.log('mouse up when clicked on container')
		})
		//6.MOUSEDOWN EVENT
		firstContainer.addEventListener('mousedown',function(){
			console.log('mouse down when clicked on container')
		})
		//LEARN OTHER EVENTS TOO
		
		//1.ONLCLICK EVENT
		let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
		firstContainer.addEventListener('mouseup',function(){
			document.querySelectorAll('.container')[1].innerHTML=prevHTML;
			console.log("mouse up when cliked oncontainer");
		})
		firstContainer.addEventListener('mousedown',function(){
			document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked</b>"
			console.log("mouse down when clicked on container");
		})
		*/
		//ARROW FUNCTIONS
		/*
		//function sum(a,b){
			//return a+b;
		//}
		//OR
		sum=(a,b)=>{
			return a+b;
		}
		
		//SET TIME OUT-- it is used in event repeating
		login=()=>{
			document.querySelectorAll('.container')[1].innerHTML="<b> set interval fired</b>"
			console.log("I am your log")
		}
		//setTimeout(login,2000);//used for scheduled the time
		
		//SET INTERVAL
		clr=setTimeout(login,5000);
		clr=setInterval(login,2000);
		
		//use clearInterval(clr)/clearTimeout(clr) cancel setInterval/setTimeout
		//clr=setInterval(logKaro,2000);
		*/
		
		//JAVASCRIPT LOCAL STORAGE--IT IS USED TO SAVE THE DATA IN USER'S COMPUTER as a STRING
		
		//localStorage.setItem('name','neha')
		//localStorage		//output:Storage{name: "neha", length: 1}
		//localStorage.getItem('name')
		//localStorage.removeItem('name');//if you want to remove item then use this
		//localStorage.clear()
		
		
		//Json
		
		//obj={name: "neha", length: 1,a:{"this":"that"}} //JSON supports Double Quote
		//jso=JSON.stringify(obj); //convert object into JSON string
		//console.log(typeof jso)
		//console.log(jso)
		//parsed=JSON.parse('{"name":"neha","length":1,"a":{"this":"that"}}')	//convert string in JSON object.
		//console.log(parsed);	
		
		
		object={
		"id": 1,
		"name": "Leanne Graham",
		"username": "Bret",
		"email": "Sincere@april.biz",
		"address": {
		"street": "Kulas Light",
		"suite": "Apt. 556",
		"city": "Gwenborough",
		"zipcode": "92998-3874",
		"geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
	}
		}
		jso=JSON.stringify(object);
		console.log(typeof jso);
		console.log(jso);
		
		
		
		
		
		
		
		
		