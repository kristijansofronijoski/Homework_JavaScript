/* Create a header generator

Create two inputs, one for text and one for color
Create a button that says: generate h1
When the button is clicked create a new header below the inputs and button
The new header should have the text and color from the inputs
Additionally create an h3 element for messages
If the person enters an invalid color or an empty text show an error message in the h3 element
 You must use JQuery to complete the task */
 
 $(document).ready(function(){

     
     $("button").click(function(){
        let firstInput = $("#firstInput").val();
        let firstColor = $("#firstColor").val();
        let result = $("#result");

        $("h3.error").remove();
        if(firstInput === ""){
            result.text("");
            $("button").first().after("<h3 class='error'>Error message</h3>");
        }else {
            result.text(`${firstInput}`).css(`color`, `${firstColor}`);
        }
    });
 })