const quoteText = document.querySelector(".quote"),
  authorName = document.querySelector(".author .name"),
  quoteBtn = document.querySelector("button"),
  soundBtn = document.querySelector(".Sound"),
  copyBtn = document.querySelector(".Copy"),
  twitterBtn = document.querySelector(".Twitter");

//random quote function
function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      quoteText.innerText = result.content;
      authorName.innerText = result.author;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("loading");
    });
}
soundBtn.addEventListener("click", () => {
  //the SpeechSynthesisUtterance is a web speech api that represents a speech request

  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.innerText}by ${authorName.innerText}`
  );
  speechSynthesis.speak(utterance); //speak method of speechSnthesis speaks the utternance
});
/*soundBtn.addEventListener("click", () => {
  //the SpeechSynthesisUtterance is a web speech api that represents a speech request

  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.innerText}by ${authorName.innerText}`);
  speechSynthesis.speak(utterance); //speak method of speechSnthesis speaks the utternance
});*/

copyBtn.addEventListener("click", () => {
  //copying the quote text on copyBtn click
  //writerText()property writes the specified text string to the system clipboard.
  navigator.clipboard.writeText(quoteText.innerText);
});
twitterBtn.addEventListener("click", () => {
  let tweeturl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(tweeturl, "_blank"); //opening a new twitter tab with passing quote in the url
});

quoteBtn.addEventListener("click", randomQuote);



