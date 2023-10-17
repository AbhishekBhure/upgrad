const quotes = {
  brainy: [
    {
      id: "B1",
      author: "Rene Descartes",
      quote: "I think; therefore I am."
    },
    {
      id: "B2",
      author: "Confucius",
      quote: "I hear and I forget. I see and I remember. I do and I understand."
    },
    {
      id: "B3",
      author: "Mark Twain",
      quote:
        "It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt."
    },
    {
      id: "B4",
      author: "Theodore Roosevelt",
      quote:
        "Nobody cares how much you know, until they know how much you care."
    },
    {
      id: "B5",
      author: "Voltaire",
      quote: "Judge a man by his questions rather than his answers."
    }
  ],
  business: [
    {
      id: "B6",
      author: "Colin Powell",
      quote:
        "There are no secrets to success. It is the result of preparation, hard work, and learning from failure."
    },
    {
      id: "B7",
      author: "Zig Ziglar",
      quote:
        "If people like you, they'll listen to you, but if they trust you, they'll do business with you."
    },
    {
      id: "B8",
      author: "W. Edwards Deming",
      quote:
        "Profit in business comes from repeat customers, customers that boast about your project or service, and that brings friends with them."
    },
    {
      id: "B9",
      author: "Steve Jobs",
      quote:
        "Great things in business are never done by one person. They're done by a team of people."
    },
    {
      id: "B10",
      author: "Peter Drucker",
      quote:
        "The entrepreneur always searches for change, responds to it, and exploits it as an opportunity."
    }
  ],
  humor: [
    {
      id: "H11",
      author: "Maya Angelou",
      quote:
        "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style."
    },
    {
      id: "H12",
      author: "Rashida Jones",
      quote:
        "Smiling is definitely one of the best beauty remedies. If you have a good sense of humor and a good approach to life, that's beautiful."
    },
    {
      id: "H13",
      author: "Anne Wilson Schaef",
      quote:
        "I realize that humor isn't for everyone. It's only for people who want to have fun, enjoy life, and feel alive."
    },
    {
      id: "H14",
      author: "Bill Hicks",
      quote:
        "It's always funny until someone gets hurt. Then it's just hilarious."
    },
    {
      id: "H15",
      author: "Max Irons",
      quote:
        "Kindness and a generous spirit go a long way. And a sense of humor. It's like medicine- very healing."
    }
  ]
};

export const getQuote = (category = "brainy") =>
  Promise.resolve(
    quotes[category][Math.floor(Math.random() * quotes[category].length)]
  );

export const getCategories = () => Promise.resolve(Object.keys(quotes));
