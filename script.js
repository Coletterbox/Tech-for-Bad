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

const quote8 =
  '"Your brand is what people say about you when you\'re not in the room." - Jeff Bezos';

const quote9 =
  '"To get something new done you have to be stubborn and focused, to the point that others might find unreasonable." - Jeff Bezos';

const quote10 =
  "\"When you receive criticism from well-meaning people, it pays to ask, 'Are they right?' And if they are, you need to adapt what they're doing.\" - Jeff Bezos";

const quote11 =
  '"One of the only ways to get out of a tight box is to invent your way out." - Jeff Bezos';

const quote12 =
  '"The common question that gets asked in business is, "why?" That\'s a good question, but an equally valid question is, "why not?"" - Jeff Bezos';

const quote13 =
  '"Don\'t let anyone tell you to change who you are." - Mark Zuckerberg';

const quote14 =
  '"Nothing influences people more than a recommendation from a trusted friend." - Mark Zuckerberg';

const quote15 =
  '"By giving people the power to share, we\'re making the world more transparent." - Mark Zuckerberg';

const quote16 =
  "\"The question isn't, 'What do we want to know about people?' It's, 'What do people want to tell about themselves.'\" - Mark Zuckerberg";

const quote17 =
  "\"You don't let people deter you. That's how you do it.\" - Mark Zuckerberg";

const quote18 =
  '"My goal was never to just create a company. It was to build something that actually makes a really big change in the world." - Mark Zuckerberg';

const ideaArray = [
  quote1,
  quote2,
  quote3,
  quote4,
  quote5,
  quote6,
  quote7,
  quote8,
  quote9,
  quote10,
  quote11,
  quote12,
  quote13,
  quote14,
  quote15,
  quote16,
  quote17,
  quote18
];

const linkArray = [
  '"Is Facebook Destroying Society and Your Mental Health?" - https://www.psychologytoday.com/gb/blog/the-pacific-heart/201801/is-facebook-destroying-society-and-your-mental-health',
  '"Is Facebook Destroying Society and Your Mental Health?" - https://www.psychologytoday.com/gb/blog/the-pacific-heart/201801/is-facebook-destroying-society-and-your-mental-health',
  '"Google Continues Investments in Military and Police AI Technology Through Venture Capital Arm." - https://theintercept.com/2019/07/23/google-ai-gradient-ventures',
  '"Microsoft has reportedly avoided up to £100m a year in UK corporation tax by routing its sales through Ireland." (Yes, Bill Gates retired from Microsoft in 2006, but he still owns 330 million shares in it.) - https://www.independent.co.uk/news/business/news/microsoft-avoids-paying-100m-a-year-in-uk-corporation-tax-a7089931.html',
  '"Another Samsung supplier factory exploiting child labor." - http://www.chinalaborwatch.org/report/90',
  '"In the face of a net neutrality repeal, Comcast has promises they may not keep." - https://heritagetalon.org/comcasts-hypocrisy',
  '"Where Were Netflix and Google in the Net-Neutrality Fight?" - https://www.theatlantic.com/business/archive/2017/12/netflix-google-net-neutrality/548768',
  "\"Amazon workers 'forced to urinate in plastic bottles because they cannot go to toilet on shift'\" - https://www.independent.co.uk/news/uk/home-news/amazon-protests-workers-urinate-plastic-bottles-no-toilet-breaks-milton-keynes-jeff-bezos-a9012351.html",
  "\"Amazon Warehouse Staff In 'Slave Camp' Conditions, Workers Say\" - https://www.huffingtonpost.co.uk/2013/11/25/amazon-staff-investigation_n_4335894.html",
  '"Amazon Uses a Twitter Army of Employees to Fight Criticism of Warehouses" - https://www.nytimes.com/2019/08/15/style/amazon-fc-ambassadors.html',
  '"People are horrified by an Amazon patent that puts workers in cages" - https://www.businessinsider.com/amazon-defends-worker-cage-patent-that-was-recently-unearthed-2018-9',
  "\"Amazon workers treated like 'animals' in exhausting working conditions, reporter reveals\" - https://www.rt.com/uk/411105-amazon-workers-conditions-retail/",
  "\"Mark Zuckerberg's Horrible People Skills Are Ruining Facebook's Culture\" - https://www.inc.com/peter-cohan/mark-zuckerbergs-horrible-people-skills-are-ruining-facebooks-culture.html",
  '"They \'trust me\'" ... "Dumb fucks" - Mark Zuckerberg',
  '"Unsecured Facebook Databases Leak Data Of 419 Million Users" - https://www.forbes.com/sites/daveywinder/2019/09/05/facebook-security-snafu-exposes-419-million-user-phone-numbers',
  '"Smart TVs sending private data to Netflix and Facebook" - https://www.ft.com/content/23ab2f68-d957-11e9-8f9b-77216ebe1f17',
  '"Facebook\'s plans to sell user data revealed in email" - https://www.telegraph.co.uk/technology/2018/11/29/facebooks-plans-sell-user-data-revealed-email/',
  '"Mark Zuckerberg Is More Dangerous than Donald Trump" - https://www.fairobserver.com/region/north_america/mark-zuckerberg-facebook-cambridge-analytica-scandal-data-business-news-headlines-today-23490/'
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
