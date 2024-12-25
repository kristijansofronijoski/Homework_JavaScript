/* Create a greeting app with JQuery
Create an input
Create a button
When clicked the button should print a greet message in an h1 header
Ex: input: Petko output message: Hello there Petko!

You must use JQuery to complete the task */
$(document).ready(function () {
  $("button")
    .first()
    .click(function () {
      let button = $("button").first();
      let input = $("#input").val();
      let greeting = $("#greeting");

      greeting.text(`Hello there ${input}`);
    });
});
