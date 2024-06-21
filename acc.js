
//using selectors inside button
//traversing the dom

// const selectButton = document.querySelectorAll(".question-btn");

// // console.log(selectButton);

// selectButton.forEach(function(button)
// {
//   	button.addEventListener("click", function(event)
// 	{
// 		// console.log(event.currentTarget.parentElement.parentElement);
// 	 const question=event.currentTarget.parentElement.parentElement;
// 	 question.classList.toggle("show-text")
// 	});
// })

const questions=document.querySelectorAll(".question");
// console.log(questions);

questions.forEach((question)=>
{
	console.log(question);
	
	// console.log(btn);
	const btn=question.querySelector(".question-btn");


	btn.addEventListener("click",function(){

		questions.forEach(function(item)
		{
			// console.log(item);
			if(item !=="question")
			{
			  item.classList.remove("show-text");
			}
			
			question.classList.toggle("show-text");

		});
		
	})

});