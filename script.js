const quotes = {
    inspirational: [
      { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
      { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
      { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
      { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
      { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
      { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
      { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
      { text: "Act as if what you do makes a difference. It does.", author: "William James" },
      { text: "Don't wait for the perfect moment. Take the moment and make it perfect.", author: "Unknown" },
      { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
      { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
      { text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
      { text: "Success is going from failure to failure without losing your enthusiasm.", author: "Winston Churchill" },
      { text: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
      { text: "Great things never come from comfort zones.", author: "Unknown" },
      { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
      { text: "Dream as if you’ll live forever, live as if you’ll die today.", author: "James Dean" },
      { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" }
    ],
    wisdom: [
      { text: "Knowledge speaks, but wisdom listens.", author: "Jimi Hendrix" },
      { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
      { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
      { text: "Wise men speak because they have something to say; fools because they have to say something.", author: "Plato" },
      { text: "A fool thinks himself to be wise, but a wise man knows himself to be a fool.", author: "William Shakespeare" },
      { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
      { text: "It is not the man who has too little, but the man who craves more, that is poor.", author: "Seneca" },
      { text: "The invariable mark of wisdom is to see the miraculous in the common.", author: "Ralph Waldo Emerson" },
      { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
      { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
      { text: "Knowing others is intelligence; knowing yourself is true wisdom.", author: "Lao Tzu" },
      { text: "The fool doth think he is wise, but the wise man knows himself to be a fool.", author: "William Shakespeare" },
      { text: "Patience is the companion of wisdom.", author: "Saint Augustine" },
      { text: "Silence is the sleep that nourishes wisdom.", author: "Francis Bacon" },
      { text: "There is no wealth like knowledge, and no poverty like ignorance.", author: "Buddha" },
      { text: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.", author: "Albert Einstein" },
      { text: "The wise man knows he knows nothing.", author: "Socrates" },
      { text: "The more you know, the more you realize you don’t know.", author: "Aristotle" },
      { text: "The mind once enlightened cannot again become dark.", author: "Thomas Paine" },
      { text: "To acquire knowledge, one must study; but to acquire wisdom, one must observe.", author: "Marilyn vos Savant" }
    ],
    love: [
      { text: "Love all, trust a few, do wrong to none.", author: "William Shakespeare" },
      { text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
      { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
      { text: "Love is not about possession. Love is about appreciation.", author: "Osho" },
      { text: "Where there is love, there is life.", author: "Mahatma Gandhi" },
      { text: "Love is a friendship set to music.", author: "Joseph Campbell" },
      { text: "You don’t marry someone you can live with – you marry the person you cannot live without.", author: "Unknown" },
      { text: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn" },
      { text: "Love doesn’t make the world go round. Love is what makes the ride worthwhile.", author: "Franklin P. Jones" },
      { text: "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love.", author: "Gabriel Garcia Marquez" },
      { text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss" },
      { text: "Love does not consist in gazing at each other, but in looking outward together in the same direction.", author: "Antoine de Saint-Exupéry" },
      { text: "Love is when the other person's happiness is more important than your own.", author: "H. Jackson Brown, Jr." },
      { text: "There is only one happiness in this life, to love and be loved.", author: "George Sand" },
      { text: "Love is a canvas furnished by nature and embroidered by imagination.", author: "Voltaire" },
      { text: "To love at all is to be vulnerable.", author: "C.S. Lewis" },
      { text: "Love is a friendship that has caught fire.", author: "Ann Landers" },
      { text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", author: "Lao Tzu" },
      { text: "A simple 'I love you' means more than money.", author: "Frank Sinatra" },
      { text: "Love is the only force capable of transforming an enemy into a friend.", author: "Martin Luther King Jr." }
    ],
    comedy: [
      { text: "I used to think I was indecisive, but now I'm not so sure.", author: "Unknown" },
      { text: "I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.", author: "Groucho Marx" },
      { text: "Behind every great man is a woman rolling her eyes.", author: "Jim Carrey" },
      { text: "I’m not arguing, I’m just explaining why I’m right.", author: "Unknown" },
      { text: "I told my wife the truth. I told her I was seeing a psychiatrist. Then she told me the truth: that she was seeing a psychiatrist, two plumbers, and a bartender.", author: "Rodney Dangerfield" },
      { text: "If at first you don't succeed, then skydiving definitely isn't for you.", author: "Steven Wright" },
      { text: "My fake plants died because I did not pretend to water them.", author: "Mitch Hedberg" },
      { text: "I always wanted to be somebody, but now I realize I should have been more specific.", author: "Lily Tomlin" },
      { text: "I can resist everything except temptation.", author: "Oscar Wilde" },
      { text: "A day without laughter is a day wasted.", author: "Charlie Chaplin" },
      { text: "I refuse to join any club that would have me as a member.", author: "Groucho Marx" },
      { text: "Why don’t scientists trust atoms? Because they make up everything!", author: "Unknown" },
      { text: "I always arrive late at the office, but I make up for it by leaving early.", author: "Charles Lamb" },
      { text: "I'm writing a book. I've got the page numbers done.", author: "Steven Wright" },
      { text: "I haven't spoken to my wife in years. I didn't want to interrupt her.", author: "Rodney Dangerfield" },
      { text: "People say nothing is impossible, but I do nothing every day.", author: "A. A. Milne" },
      { text: "If you think nobody cares if you’re alive, try missing a couple of payments.", author: "Steven Wright" },
      { text: "I'm on a whiskey diet. I've lost three days already.", author: "Tommy Cooper" },
      { text: "My doctor told me to watch my drinking. Now I drink in front of a mirror.", author: "Rodney Dangerfield" },
      { text: "I'm reading a book on anti-gravity. It's impossible to put down!", author: "Unknown" }
    ]

  };
  
    function getRandomQuote(category) {
      const categoryQuotes = category === "all" 
          ? Object.values(quotes).flat()
          : quotes[category] || [];
      return categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
    }

    function generateQuote() {
      const category = document.getElementById("quote-category").value;
      const count = parseInt(document.getElementById("quote-count").value, 10);
      let generatedQuotes = [];

      for (let i = 0; i < count; i++) {
          const randomQuote = getRandomQuote(category);
          generatedQuotes.push(randomQuote);
      }

      displayQuotes(generatedQuotes);
    }

    function displayQuotes(quotesArray) {
      const quoteDisplay = document.getElementById("quote-display");
      quoteDisplay.innerHTML = ""; 

      quotesArray.forEach(quote => {
          const quoteText = document.createElement("p");
          quoteText.className = "quote-text";
          quoteText.textContent = `"${quote.text}"`;

          const quoteAuthor = document.createElement("p");
          quoteAuthor.className = "quote-author";
          quoteAuthor.textContent = `- ${quote.author}`;

          quoteDisplay.appendChild(quoteText);
          quoteDisplay.appendChild(quoteAuthor);
      });
    }

    function copyQuotes() {
      const quotesArray = document.querySelectorAll(".quote-text");
      const authorsArray = document.querySelectorAll(".quote-author");
      let textToCopy = "";

      quotesArray.forEach((quoteText, index) => {
          textToCopy += `${quoteText.textContent} ${authorsArray[index].textContent}\n\n`;
      });

      if (textToCopy) {
          navigator.clipboard.writeText(textToCopy)
              .then(() => {
                  alert("Quotes copied to clipboard!");
              })
              .catch(err => {
                  console.error("Failed to copy: ", err);
                  alert("Failed to copy the quotes.");
              });
      } else {
          alert("No quotes found to copy.");
      }
    }

    function downloadQuotes() {
      const quotesArray = document.querySelectorAll(".quote-text");
      const authorsArray = document.querySelectorAll(".quote-author");
      let textToSave = "";

      quotesArray.forEach((quoteText, index) => {
          textToSave += `${quoteText.textContent} ${authorsArray[index].textContent}\n\n`;
      });

      const blob = new Blob([textToSave], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.download = "quotes.txt";
      link.click();
      
      URL.revokeObjectURL(url);
    }

  document.getElementById("submission-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const userQuote = document.getElementById("user-quote").value;
    const userName = document.getElementById("user-name").value;
    
    if (userQuote && userName) {
      alert(`Thank you, ${userName}! Your quote request has been submitted.`);
      
      document.getElementById("user-quote").value = "";
      document.getElementById("user-name").value = "";
    }
  });
  