const watchedStocks = [];

const articles = [
  {
    id: 1,
    title: "The crypto market downturn explained",
    imageUrl:
      "https://images.ctfassets.net/q5ulk4bp65r7/6l81zv96xpcPweCUKJi00N/1f7575ca211fd6587d825aa59bd101f0/ATB-3__4_.png?w=768&fm=png",
    intro:
      "In this edition of Around The Block, we take a look at the overall macro downturn with an eye towards the crypto markets.",
    articleUrl:
      "https://www.coinbase.com/learn/market-updates/around-the-block-issue-29",
  },
  {
    id: 2,
    title: "Coinbase Ventures Q1 recap and market outlook",
    imageUrl:
      "https://images.ctfassets.net/q5ulk4bp65r7/33GVXdrGtlXckL2bsvgwVG/42592e4b43891b761bc83c9e356144f8/ATB-4__11_.png?w=768&fm=png",
    intro:
      "Despite the market downturn, Q1 was another highly active quarter for crypto venture funding.",
    articleUrl:
      "https://www.coinbase.com/learn/market-updates/around-the-block-issue-28",
  },
  {
    id: 3,
    title: `Crypto’s emergence as a geopolitical force`,
    imageUrl:
      "https://images.ctfassets.net/q5ulk4bp65r7/35LMkJDyvieRsyqdhPpobP/bdc3f05369c6b07e1880ac3d5292b17f/ATB-3__3_.png?w=768&fm=png",
    intro: `Examining crypto’s usage in Ukraine, sanctions, and the Biden Executive Order`,
    articleUrl:
      "https://www.coinbase.com/learn/market-updates/around-the-block-issue-27",
  },
  {
    id: 4,
    title: `Crypto’s 69 most interesting charts from 2021`,
    imageUrl:
      "https://images.ctfassets.net/q5ulk4bp65r7/1jChjFNILvjkad1ap3Rl7s/82471252761848b027952e491ecdb312/1_QioVpQhV8qEaX4I617fk0Q.png?w=768&fm=png",
    intro:
      "As most of us were enjoying some R&R over Christmas break, Coinbase Cloud protocol specialist Elias Simos was scouring the web for the most interesting crypto charts of 2021: 69 of them to be exact.",
    articleUrl:
      "https://www.coinbase.com/learn/market-updates/around-the-block-issue-24",
  },
  {
    id: 5,
    title: "A simple guide to the Web3 stack",
    imageUrl:
      "https://images.ctfassets.net/q5ulk4bp65r7/image-130f17ee-3433-50c5-802f-cbf1e0cf9324/7be6d863504cfc782697e1b56fd686ca/news_article_image_a_simple_guide_to_the_web3_stack_image?w=768&fm=png",
    intro:
      "Web3 is the latest buzzword to see an uptick in interest in recent months — What does it actually mean?",
    articleUrl:
      "https://www.coinbase.com/learn/market-updates/around-the-block-issue-22",
  },
  {
    id: 6,
    title: "DAOs: Social networks that can rewire the world",
    imageUrl:
      "https://images.ctfassets.net/q5ulk4bp65r7/3CjuVVkSgj0EwHAcOenSir/076283948fd9466da329410353273524/ATB-4__4_.png?w=768&fm=png",
    intro: "Exploring the new world of decentralized autonomous organizations",
    articleUrl:
      "https://www.coinbase.com/learn/market-updates/around-the-block-issue-21",
  },
  {
    id: 7,
    title: "Scaling Ethereum & crypto for a billion users",
    imageUrl:
      "https://www.coinbase.com/learn/market-updates/around-the-block-issue-20",
    intro:
      "A guide to the multi-chain future, sidechains, and layer-2 solutions",
    articleUrl:
      "https://www.coinbase.com/learn/market-updates/around-the-block-issue-20",
  },
];

export { watchedStocks, articles };
