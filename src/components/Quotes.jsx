import React, { useState, useEffect } from "react";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuotes(data);
    }
    fetchData();
  }, []);

  const handleRandomQuote = () => {
    if (quotes.length === 0) {
      return;
    }
    const randomNum = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNum];
    setRandomQuote(randomQuote);

    console.log(randomQuote);
  };

  const buttonClassWhenQuoteIsNotRendered =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-6 mb-6 p-6 w-5/6 mx-auto";

  const buttonClassWhenQuoteIsRendered =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-6 mb-6 p-6";

  return (
    <div className="flex flex-col max-w-3xl bg-slate-400 items-center h-45 rounded-lg">
      <h1 className="text-center text-red-600 text-2xl ">Random Quotes</h1>
      <button
        className={
          randomQuote
            ? buttonClassWhenQuoteIsRendered
            : buttonClassWhenQuoteIsNotRendered
        }
        onClick={handleRandomQuote}
      >
        Generate Random Quote
      </button>
      {randomQuote && (
        <div className="w-96 p-5">
          <p className="text-center font-serif">{randomQuote.text}</p>
          {/* <p>- {randomQuote.author}</p> */}
        </div>
      )}
    </div>
  );
};

export default Quotes;
