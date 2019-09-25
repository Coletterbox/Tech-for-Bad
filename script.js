let button = document.getElementById("generate");
let para = document.getElementById("text");
let para2 = document.getElementById("text2");

let lastRandomNumberArray = [];

function randomNumber() {
  let randomNumber = Math.floor(Math.random() * ideaArray.length);
  console.log(randomNumber);
  lastRandomNumberArray.push(randomNumber);
  console.log(lastRandomNumberArray);
  if (
    randomNumber === lastRandomNumberArray[lastRandomNumberArray.length - 2]
  ) {
    randomNumber();
  }
  return randomNumber;
}

function idea() {
  let index = randomNumber();
  para.textContent = ideaArray[index];
  para2.textContent = linkArray[index];
}

button.addEventListener("click", idea);

// const ideaArray = [
//   '"I know it sounds corny, but I\'d love to improve people\'s lives, especially socially... Making the world more open is not an overnight thing. It\'s a 10-to-15-year thing." - Mark Zuckerberg \n \n "Facebook was not originally created to be a company. It was built to accomplish a social mission - to make the world more open and connected." - Mark Zuckerberg \n \n "Is Facebook Destroying Society and Your Mental Health?" - https://www.psychologytoday.com/gb/blog/the-pacific-heart/201801/is-facebook-destroying-society-and-your-mental-health'
// ];

const quote1 =
  "\"I know it sounds corny, but I'd love to improve people's lives, especially socially... Making the world more open is not an overnight thing. It's a 10-to-15-year thing.\" - Mark Zuckerberg";

const quote2 =
  '"Facebook was not originally created to be a company. It was built to accomplish a social mission - to make the world more open and connected." - Mark Zuckerberg';

const quote3 = '"Don\'t be evil." - Google';

const quote4 =
  '"I\'ve paid more taxes, over $10 billion, than anyone else, but the government should require people in my position to pay significantly higher taxes." - Bill Gates';

const quote5 =
  "\"Driven by our philosophy of fairness, openness, and win-win cooperation, we operate our supply chain with approximately 2500 suppliers across the globe. We assist all our suppliers in complying with the 'Samsung Supplier Code of Conduct' and operating in accordance with relevant local regulations and international standards. Through assessing our suppliers, we manage supply chain risks in terms of sustainability aspects, such as environment, human rights, financials, and etc. [sic] Furthermore, we continuously support our suppliers to build mutual competitive edge and growth.\" - Samsung";

const quote6 =
  '"We do not and will not block, throttle, or discriminate against lawful content. We will continue to make sure that our policies are clear and transparent for consumers, and we will not change our commitment to these principles." - Comcast';

const quote7 =
  '"We are committed to the principles of strong net neutrality." - Netflix';

const ideaArray = [quote1, quote2, quote3, quote4, quote5, quote6, quote7];

const linkArray = [
  '"Is Facebook Destroying Society and Your Mental Health?" - https://www.psychologytoday.com/gb/blog/the-pacific-heart/201801/is-facebook-destroying-society-and-your-mental-health',
  '"Is Facebook Destroying Society and Your Mental Health?" - https://www.psychologytoday.com/gb/blog/the-pacific-heart/201801/is-facebook-destroying-society-and-your-mental-health',
  '"Google Continues Investments in Military and Police AI Technology Through Venture Capital Arm." - https://theintercept.com/2019/07/23/google-ai-gradient-ventures',
  '"Microsoft has reportedly avoided up to £100m a year in UK corporation tax by routing its sales through Ireland." (Yes, Bill Gates retired from Microsoft in 2006, but he still owns 330 million shares in it.) - https://www.independent.co.uk/news/business/news/microsoft-avoids-paying-100m-a-year-in-uk-corporation-tax-a7089931.html',
  '"Another Samsung supplier factory exploiting child labor." - http://www.chinalaborwatch.org/report/90',
  '"In the face of a net neutrality repeal, Comcast has promises they may not keep." - https://heritagetalon.org/comcasts-hypocrisy',
  '"Where Were Netflix and Google in the Net-Neutrality Fight?" - https://www.theatlantic.com/business/archive/2017/12/netflix-google-net-neutrality/548768'
];

// I know it sounds corny, but I’d love to improve people’s lives, especially socially… Making the world more open is not an overnight thing. It’s a 10-to-15-year thing. - Mark Zuckerberg

// Facebook was not originally created to be a company. It was built to accomplish a social mission – to make the world more open and connected. - Mark Zuckerberg

// Is Facebook Destroying Society and Your Mental Health? - https://www.psychologytoday.com/gb/blog/the-pacific-heart/201801/is-facebook-destroying-society-and-your-mental-health

// Don't be evil. - Google

// Google Continues Investments in Military and Police AI Technology Through Venture Capital Arm - https://theintercept.com/2019/07/23/google-ai-gradient-ventures/

// I’ve paid more taxes, over $10 billion, than anyone else, but the government should require people in my position to pay significantly higher taxes. - Bill Gates, who, despite retiring from Microsoft in 2006, still owns 330 million shares in it.

// Microsoft has reportedly avoided up to £100m a year in UK corporation tax by routing its sales through Ireland. - The Independent

// Driven by our philosophy of fairness, openness, and win-win cooperation, we operate our supply chain with approximately 2500 suppliers across the globe. We assist all our suppliers in complying with the ‘Samsung Supplier Code of Conduct’ and operating in accordance with relevant local regulations and international standards. Through assessing our suppliers, we manage supply chain risks in terms of sustainability aspects, such as environment, human rights, financials, and etc. Furthermore, we continuously support our suppliers to build mutual competitive edge and growth. - Samsung

// Another Samsung supplier factory exploiting child labor - http://www.chinalaborwatch.org/report/90

// We do not and will not block, throttle, or discriminate against lawful content. We will continue to make sure that our policies are clear and transparent for consumers, and we will not change our commitment to these principles. - Comcast

// In the face of a net neutrality repeal, Comcast has promises they may not keep. - https://heritagetalon.org/comcasts-hypocrisy/

// We are committed to the principles of strong net neutrality. - Netflix

// Where Were Netflix and Google in the Net-Neutrality Fight? - https://www.theatlantic.com/business/archive/2017/12/netflix-google-net-neutrality/548768/
