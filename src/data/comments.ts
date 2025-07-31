import { UserComment } from '../types';

export const COMMENTS: Record<string, UserComment[]> = {
  'iphone-15-pro-max': [
    {
      id: '1',
      userName: 'TechEnthusiast42',
      rating: 5,
      title: 'Best iPhone Yet!',
      content: 'I upgraded from an iPhone 12 Pro and the difference is night and day. The camera improvements alone are worth the upgrade. Battery life is significantly better than my old phone, and the A17 Pro chip handles everything I throw at it with ease.',
      date: '2023-10-15',
      verified: true
    },
    {
      id: '2',
      userName: 'PhotoPro',
      rating: 4.5,
      title: 'Amazing Camera, Minor Quirks',
      content: 'As a professional photographer, I\'m impressed with the camera capabilities. The 48MP main sensor captures incredible detail. That said, I\'ve noticed some inconsistencies with the auto white balance in challenging lighting. Still, it\'s the best camera phone I\'ve used.',
      date: '2023-10-28',
      verified: true
    },
    {
      id: '3',
      userName: 'DailyUser',
      rating: 4,
      title: 'Great Phone, But Expensive',
      content: 'This is certainly a premium device with premium features, but I\'m not sure it justifies the price increase over previous models. The titanium feels nice but doesn\'t fundamentally change the experience. Battery life is good but not revolutionary.',
      date: '2023-11-03',
      verified: true
    }
  ],
  'sony-wh-1000xm5': [
    {
      id: '1',
      userName: 'AudioPhile',
      rating: 5,
      title: 'Noise Cancellation King',
      content: 'These headphones have the best noise cancellation I\'ve ever experienced. They completely block out airplane noise and office chatter. Sound quality is exceptional too, with clear highs and punchy but not overwhelming bass. The comfort level makes them perfect for long listening sessions.',
      date: '2023-08-12',
      verified: true
    },
    {
      id: '2',
      userName: 'FrequentFlyer',
      rating: 4.5,
      title: 'Travel Essential',
      content: 'I fly weekly for work and these have been a game-changer. My only complaint is that they don\'t fold as compactly as the XM4s, which makes them slightly less convenient for travel. Sound and ANC are both improved though.',
      date: '2023-09-05',
      verified: true
    }
  ],
  'java-burn': [
    {
      id: '1',
      userName: 'CoffeeLover23',
      rating: 3.5,
      title: 'Convenient but Expensive',
      content: 'I\'ve been using Java Burn for about 3 months now. It really is tasteless and dissolves completely in my coffee. I do feel more energized throughout the morning, and I think my appetite has decreased slightly. However, at $69 per month, it\'s quite expensive for the modest results I\'ve seen.',
      date: '2024-01-15',
      verified: true
    },
    {
      id: '2',
      userName: 'HealthyMom',
      rating: 4,
      title: 'Good Energy Boost',
      content: 'As a busy mom, I love that I can just add this to my morning coffee without changing my routine. The energy boost is noticeable and I don\'t get the afternoon crash I used to. I\'ve lost about 8 pounds over 4 months, which isn\'t dramatic but it\'s steady progress.',
      date: '2024-02-03',
      verified: true
    },
    {
      id: '3',
      userName: 'SkepticalBuyer',
      rating: 2.5,
      title: 'Minimal Results for the Price',
      content: 'I wanted to love this product because the concept is so convenient, but after 2 months I haven\'t seen any significant weight loss. Maybe slightly more energy, but nothing I couldn\'t get from a good B-vitamin supplement for much less money. The price just doesn\'t justify the minimal benefits for me.',
      date: '2024-02-20',
      verified: true
    }
  ],
  'green-glucose': [
    {
      id: '1',
      userName: 'DiabetesWarrior',
      rating: 4,
      title: 'Helpful for Blood Sugar Management',
      content: 'I\'ve been using Green Glucose for about 5 months now as part of my prediabetes management plan. While it\'s not a miracle cure, I have noticed more stable energy levels throughout the day and my doctor says my A1C has improved slightly. The taste is actually quite pleasant, which was a nice surprise.',
      date: '2024-01-08',
      verified: true
    },
    {
      id: '2',
      userName: 'GutHealthFocus',
      rating: 3.5,
      title: 'Good for Digestion, Pricey',
      content: 'The digestive benefits are real - I\'ve had much better regularity and less bloating since starting this. The mushroom blend seems to help with my overall energy too. However, at $79 per container, it\'s a significant monthly expense. I\'m considering trying to replicate the benefits with individual supplements.',
      date: '2024-02-14',
      verified: true
    },
    {
      id: '3',
      userName: 'SupplementSkeptic',
      rating: 3,
      title: 'Modest Benefits, High Price',
      content: 'I tried Green Glucose for 3 months hoping for significant blood sugar improvements. While I did notice some energy stability and digestive improvements, the blood sugar benefits were minimal. For the price, I expected more dramatic results. It\'s a decent product but not worth the premium cost for me.',
      date: '2024-02-28',
      verified: true
    },
    {
      id: '4',
      userName: 'WellnessEnthusiast',
      rating: 4.5,
      title: 'Great All-in-One Formula',
      content: 'I love having all these beneficial ingredients in one convenient powder. The apple-goji flavor is actually delicious, and I\'ve noticed improvements in energy, digestion, and overall well-being. Yes, it\'s expensive, but for me the convenience and comprehensive formula justify the cost.',
      date: '2024-03-10',
      verified: true
    }
  ],
  'yu-sleep': [
    {
      id: '1',
      userName: 'InsomniacNoMore',
      rating: 4.5,
      title: 'Finally Found Something That Works',
      content: 'I\'ve struggled with sleep for years and tried everything from melatonin pills to prescription sleep aids. Yu Sleep is the first thing that has helped me fall asleep quickly without making me groggy the next day. The liquid format is so much easier than pills, and I love that it\'s all natural ingredients.',
      date: '2024-02-18',
      verified: true
    },
    {
      id: '2',
      userName: 'StressedExecutive',
      rating: 4,
      title: 'Great for Stress-Related Sleep Issues',
      content: 'My job is incredibly stressful and my mind used to race at bedtime. Yu Sleep has been a game-changer - the combination of ingredients really helps calm my thoughts and I fall asleep much faster. I\'ve been using it for 6 weeks and my sleep quality has definitely improved. Worth the investment.',
      date: '2024-03-02',
      verified: true
    },
    {
      id: '3',
      userName: 'NaturalHealthMom',
      rating: 3.5,
      title: 'Good Results, But Pricey',
      content: 'I appreciate that this is all natural and non-habit forming. It definitely helps me sleep better and I wake up more refreshed. My only complaint is the price - it\'s quite expensive for a monthly supply. The liquid format is convenient though, and I like being able to adjust the dose.',
      date: '2024-03-15',
      verified: true
    },
    {
      id: '4',
      userName: 'SleepStruggler',
      rating: 3,
      title: 'Modest Improvement',
      content: 'Yu Sleep has helped somewhat with my sleep onset - I do fall asleep a bit faster than before. However, I was hoping for more dramatic results given the price point. The taste is fine and it\'s easy to take, but I\'m not sure if the benefits justify the cost compared to basic melatonin.',
      date: '2024-03-22',
      verified: true
    }
  ],
  'super-affiliate-system-pro': [
    {
      id: '1',
      userName: 'DigitalMarketer2024',
      rating: 4,
      title: 'Comprehensive but Demanding',
      content: 'I completed SAS Pro over 4 months and can say it\'s thorough. The content is extensive and John really does walk you through everything. I\'ve made back my investment plus about $3,000 profit so far. However, be prepared to spend way more on ads than you expect - I went through about $2,500 testing before finding profitable campaigns.',
      date: '2024-01-22',
      verified: true
    },
    {
      id: '2',
      userName: 'SideHustleSeeker',
      rating: 2.5,
      title: 'Overwhelming for Beginners',
      content: 'I bought this hoping to start a side business but found it way too complex. The videos are long and assume you know more than I did. The Facebook group is helpful but I felt lost most of the time. After 3 months and losing $800 on failed ads, I requested a refund. Maybe better for people with marketing experience.',
      date: '2024-02-08',
      verified: true
    },
    {
      id: '3',
      userName: 'AffiliateVeteran',
      rating: 4.5,
      title: 'Great for Scaling Existing Business',
      content: 'I was already doing affiliate marketing but wanted to improve my paid traffic game. SAS Pro delivered exactly what I needed. The advanced modules on scaling and the ad templates saved me months of testing. I\'ve increased my monthly revenue from $4K to $12K using these strategies. Worth every penny if you\'re serious.',
      date: '2024-02-25',
      verified: true
    },
    {
      id: '4',
      userName: 'SkepticalStudent',
      rating: 3,
      title: 'Mixed Results After 6 Months',
      content: 'The training is solid and John knows his stuff, but the results aren\'t as easy as the sales page suggests. I\'ve been implementing for 6 months, spent about $3,000 on ads, and I\'m barely breaking even. The coaching calls are helpful but often rushed. It\'s legitimate education, just don\'t expect quick riches.',
      date: '2024-03-12',
      verified: true
    },
    {
      id: '5',
      userName: 'OnlineEntrepreneur',
      rating: 4.5,
      title: 'Transformed My Business Approach',
      content: 'SAS Pro completely changed how I think about online marketing. The systematic approach to testing ads and the funnel templates are gold. I went from random attempts to a structured business. Made $8,500 last month alone. Yes, it\'s expensive and requires work, but for serious entrepreneurs, it\'s an investment that pays off.',
      date: '2024-03-28',
      verified: true
    }
  ],
  'social-sale-rep': [
    {
      id: '1',
      userName: 'RemoteWorker2024',
      rating: 2,
      title: 'Not What I Expected',
      content: 'I signed up hoping for direct job placement but realized it\'s just training and job leads. The training is basic - mostly text-based content that you could find free online. After 2 months, I haven\'t found any of the high-paying jobs they advertise. The $27/month adds up quickly when you\'re not earning anything.',
      date: '2024-03-15',
      verified: true
    },
    {
      id: '2',
      userName: 'ChatSupportNewbie',
      rating: 3.5,
      title: 'Helpful for Complete Beginners',
      content: 'As someone with zero customer service experience, the structured training was actually helpful. It taught me the basics of live chat support and gave me confidence to apply for jobs. I did find a part-time chat position through one of their leads, though it pays $18/hour, not the $25-35 they advertise. Worth it if you need the guidance.',
      date: '2024-02-28',
      verified: true
    },
    {
      id: '3',
      userName: 'SkepticalJobSeeker',
      rating: 1.5,
      title: 'Feels Like a Scam',
      content: 'The aggressive upselling started immediately after signing up. Constant emails trying to sell additional courses and tools. The job database is just links to freelance sites I could access for free. I used the 60-day guarantee to get my money back. Save yourself the trouble and just search Indeed or Upwork directly.',
      date: '2024-03-08',
      verified: true
    },
    {
      id: '4',
      userName: 'WorkFromHomeMom',
      rating: 3,
      title: 'Mixed Results',
      content: 'The training gave me a good foundation, but finding actual jobs is still challenging. I appreciate the 24/7 support - they do respond to questions quickly. However, most of the "high-paying" jobs require experience I don\'t have. I\'ve made about $200 in 3 months from small chat gigs, which doesn\'t cover the membership fees.',
      date: '2024-03-20',
      verified: true
    },
    {
      id: '5',
      userName: 'TechStartupEmployee',
      rating: 4,
      title: 'Actually Helped Me Land a Job',
      content: 'I\'ll be honest - I was skeptical at first. But the training helped me understand what employers look for in chat support roles. I used their tips during interviews and landed a customer success position at a tech startup. It pays $22/hour, which isn\'t the $35 they promise, but it\'s legitimate work. The key is applying what you learn beyond just their job board.',
      date: '2024-02-12',
      verified: true
    }
  ],
  'vip-indicators': [
    {
      id: '1',
      userName: 'ForexNewbie2024',
      rating: 4,
      title: 'Great for Learning Technical Analysis',
      content: 'As someone completely new to trading, VIP Indicators helped me understand chart patterns and market signals. The educational course is actually quite comprehensive. I\'ve had mixed results with the signals - some winners, some losers - but overall it\'s helped me learn faster than trying to figure everything out on my own. The $9 price makes it a no-brainer to try.',
      date: '2024-03-10',
      verified: true
    },
    {
      id: '2',
      userName: 'CryptoTrader88',
      rating: 3.5,
      title: 'Works Well on Bitcoin Charts',
      content: 'I\'ve been using VIP Indicators on BTC/USD 30-minute charts for about 2 months. The signals are decent - not the 93% they claim, but probably around 60-65% accurate in my experience. The support and resistance levels are particularly helpful. For $9, it\'s worth having as an additional tool, but don\'t expect it to make you rich overnight.',
      date: '2024-02-28',
      verified: true
    },
    {
      id: '3',
      userName: 'SkepticalTrader',
      rating: 2.5,
      title: 'Overhyped but Cheap',
      content: 'The marketing is definitely overhyped - no way this has a 93% win rate. I\'ve been tracking my trades for 6 weeks and I\'m at about 55% winners, which isn\'t terrible but not amazing either. The indicators do lag sometimes in fast markets. That said, for $9 it\'s not a huge loss, and the Telegram group has some useful discussions.',
      date: '2024-03-05',
      verified: true
    },
    {
      id: '4',
      userName: 'DayTraderPro',
      rating: 3,
      title: 'Decent Supplementary Tool',
      content: 'I\'ve been trading for 3 years and bought this out of curiosity. It\'s not going to replace proper analysis, but the indicators do highlight some good setups I might have missed. The cloud bands are actually pretty useful for trend identification. Don\'t rely on it exclusively, but as part of a broader toolkit, it has some value.',
      date: '2024-02-15',
      verified: true
    },
    {
      id: '5',
      userName: 'BeginnersLuck',
      rating: 4.5,
      title: 'Perfect Starting Point',
      content: 'I had zero trading experience and VIP Indicators gave me a structured way to start. The course taught me the basics and the signals gave me confidence to place my first trades. I\'m up about $300 in my first month, though I know beginner\'s luck plays a role. The community support is really helpful for newbies like me.',
      date: '2024-03-18',
      verified: true
    }
  ],
  'crypto-code': [
    {
      id: '1',
      userName: 'CryptoEnthusiast2024',
      rating: 2.5,
      title: 'Expensive Lesson Learned',
      content: 'I invested the full $1,997 hoping for the promised $800/day returns. After 4 months, I\'m barely breaking even. The education is decent and WaveBot does work, but the results are nowhere near what\'s advertised. The community is helpful, but I feel like I paid premium prices for what could be learned elsewhere for much less.',
      date: '2024-02-15',
      verified: true
    },
    {
      id: '2',
      userName: 'AutomationSeeker',
      rating: 3.5,
      title: 'Good Automation, Overhyped Results',
      content: 'The WaveBot is actually pretty sophisticated and does automate trading well. I\'ve made some profits, but nothing close to the marketing claims. The educational content is comprehensive and the community support is real. However, at $2k+ total cost, I expected much better performance. It\'s a decent system but overpriced.',
      date: '2024-03-02',
      verified: true
    },
    {
      id: '3',
      userName: 'SkepticalInvestor',
      rating: 2,
      title: 'Withdrawal Issues and Hype',
      content: 'I had some early success with the alerts and made about $1,200 in my first month. However, when I tried to withdraw profits, there were delays and complications. The customer support was slow to respond. The income claims are definitely exaggerated, and the no-refund policy is concerning. Proceed with extreme caution.',
      date: '2024-01-28',
      verified: true
    },
    {
      id: '4',
      userName: 'TradingVeteran',
      rating: 4,
      title: 'Solid Education, Realistic Expectations',
      content: 'I approached this with realistic expectations and focused on the educational value. The Crypto Code University is actually quite good, and the live coaching sessions with Joel and Adam are valuable. I\'ve learned new strategies and improved my trading. Yes, it\'s expensive, but if you use it as education rather than expecting guaranteed profits, there\'s value here.',
      date: '2024-03-12',
      verified: true
    },
    {
      id: '5',
      userName: 'DisappointedCustomer',
      rating: 1.5,
      title: 'Not Worth the Investment',
      content: 'After 6 months and $2,500 invested (including the monthly fees), I\'ve lost more than I\'ve gained. The WaveBot had several losing streaks, and the alerts didn\'t perform as advertised. The education is okay but nothing you can\'t find elsewhere for free. The no-refund policy means I\'m stuck with this expensive mistake. Look elsewhere.',
      date: '2024-03-20',
      verified: true
    }
  ],
  '1000pip-builder': [
    {
      id: '1',
      userName: 'ForexTrader2024',
      rating: 5,
      title: 'Excellent Signals and Support',
      content: 'I\'ve been using 1000pip Builder for 8 months now and I\'m consistently profitable. Bob James really knows what he\'s doing - the signals are clear, well-timed, and come with detailed explanations. The MyFxBook verification gives me confidence, and the Telegram group is very active. Yes, it\'s expensive at $97/month, but I\'ve made that back many times over.',
      date: '2024-03-15',
      verified: true
    },
    {
      id: '2',
      userName: 'SwingTraderPro',
      rating: 4.5,
      title: 'Quality Over Quantity',
      content: 'What I love about 1000pip Builder is that they don\'t spam you with signals. Usually 3-5 per day, all high-quality setups. Bob\'s analysis is spot-on most of the time. I\'ve had a few losing weeks, but overall my account is up about 40% in 6 months. The educational aspect is great too - I\'ve learned so much about market structure.',
      date: '2024-02-28',
      verified: true
    },
    {
      id: '3',
      userName: 'SkepticalNewbie',
      rating: 3.5,
      title: 'Good but Expensive for Beginners',
      content: 'As a complete beginner, the signals helped me understand how Forex works. Bob explains the reasoning behind each trade which is educational. However, at $97/month it\'s quite expensive when you\'re starting with a small account. I\'ve had mixed results - some good weeks, some bad ones. The support is responsive though.',
      date: '2024-03-08',
      verified: true
    },
    {
      id: '4',
      userName: 'BusyProfessional',
      rating: 4,
      title: 'Perfect for Part-Time Trading',
      content: 'I work full-time so I can\'t watch the markets all day. The SMS alerts are perfect - I get notified when there\'s a setup and can quickly place the trade. The signals usually have enough time buffer that I don\'t miss them. Made about $2,500 profit in 4 months, which more than covers the subscription cost.',
      date: '2024-02-15',
      verified: true
    },
    {
      id: '5',
      userName: 'ExperiencedTrader',
      rating: 4.5,
      title: 'Solid Addition to My Strategy',
      content: 'I\'ve been trading for 5 years and use 1000pip Builder to supplement my own analysis. Bob\'s signals often confirm my own setups, and sometimes he spots opportunities I miss. The risk management is excellent - proper stop losses and realistic profit targets. The verified track record on MyFxBook gives credibility that most signal services lack.',
      date: '2024-01-22',
      verified: true
    },
    {
      id: '6',
      userName: 'DisappointedCustomer',
      rating: 2.5,
      title: 'Mixed Results, High Cost',
      content: 'I tried 1000pip Builder for 3 months hoping for consistent profits. While some signals were winners, I had several losing streaks that wiped out my gains. The $97 monthly fee is steep, especially when you\'re not making consistent profits. The signals are professional, but the results didn\'t justify the cost for me. Requested a refund after 3 months.',
      date: '2024-03-01',
      verified: true
    }
  ],
  'business-credit-builder': [
    {
      id: '1',
      userName: 'SmallBizOwner2024',
      rating: 4,
      title: 'Comprehensive Credit Education',
      content: 'I\'ve been implementing the strategies from Business Credit Builder for about 4 months now. The step-by-step approach is really helpful, and I\'ve already seen improvements in my business credit score. The loan broker training is a nice bonus - I\'ve made about $1,200 in commissions so far. The 30-day guarantee gave me confidence to try it.',
      date: '2024-03-10',
      verified: true
    },
    {
      id: '2',
      userName: 'PropertyInvestor',
      rating: 3.5,
      title: 'Good Strategies, Takes Time',
      content: 'As a real estate investor, I was looking for alternative funding sources. The program has some solid strategies, but building credit takes much longer than the marketing suggests. I\'ve been able to get a few small business credit lines, but nothing close to the $100K in 7 days they advertise. Still, the education is valuable if you have realistic expectations.',
      date: '2024-02-28',
      verified: true
    },
    {
      id: '3',
      userName: 'SkepticalEntrepreneur',
      rating: 2.5,
      title: 'Overhyped Claims',
      content: 'I joined hoping for quick funding solutions but found the reality much different. The strategies are legitimate but require significant time and effort. The business acquisition part seems risky - buying businesses just for credit lines involves complexities they don\'t fully explain. The support is helpful, but I feel the marketing oversells what\'s actually achievable.',
      date: '2024-03-05',
      verified: true
    },
    {
      id: '4',
      userName: 'CreditBuilder',
      rating: 4.5,
      title: 'Excellent for Serious Students',
      content: 'If you\'re willing to put in the work, this program delivers. I\'ve built my business credit from zero to about $75K in credit lines over 8 months. The key is following the system exactly and being patient. The loan broker opportunity has been great too - I\'m making about $3K/month helping others get funding. Worth every penny if you\'re committed.',
      date: '2024-01-15',
      verified: true
    },
    {
      id: '5',
      userName: 'DisappointedMember',
      rating: 2,
      title: 'Not Worth the Cost',
      content: 'After 6 months in the program, I haven\'t seen the dramatic results promised. Yes, my credit improved slightly, but nothing that justified the membership cost. The strategies are basic credit building advice you can find elsewhere. The loan broker training is decent, but building a client base is much harder than they make it seem. Used the guarantee to get my money back.',
      date: '2024-03-18',
      verified: true
    }
  ],
  'adsense-pirate': [
    {
      id: '1',
      userName: 'BloggerMike2024',
      rating: 4.5,
      title: 'Amazing Value for $3.95',
      content: 'I was skeptical about a $4 eBook, but AdSense Pirate delivered way more than expected. Barry\'s strategies helped me go from $12/day to $180/day in about 3 months. Yes, some techniques are dated, but the core principles are solid gold. The ad placement tips alone were worth 10x the price. Best ROI I\'ve ever gotten from any course.',
      date: '2024-03-20',
      verified: true
    },
    {
      id: '2',
      userName: 'WebsiteOwner',
      rating: 3.5,
      title: 'Good Foundation, Needs Updates',
      content: 'The book provides excellent foundational knowledge about AdSense optimization. I learned a lot about niche selection and avoiding common mistakes. However, being from 2009, some strategies don\'t work with current Google policies. I had to research current best practices to adapt the advice. Still worth it for the price though.',
      date: '2024-03-15',
      verified: true
    },
    {
      id: '3',
      userName: 'AdSenseNewbie',
      rating: 4,
      title: 'Perfect for Beginners',
      content: 'As someone completely new to AdSense, this guide was exactly what I needed. Barry explains everything in simple terms and shares his actual mistakes so you can avoid them. My CTR improved from 0.8% to 2.1% after implementing his placement strategies. The 56-day guarantee made it risk-free to try.',
      date: '2024-03-12',
      verified: true
    },
    {
      id: '4',
      userName: 'SkepticalPublisher',
      rating: 2.5,
      title: 'Outdated but Cheap',
      content: 'The strategies are definitely showing their age - some things Barry recommends could actually get you penalized now. The core concepts about user experience and ad relevance are still valid, but you need to be careful about implementation. For $4 it\'s not a huge loss, but don\'t expect it to be a complete solution.',
      date: '2024-03-08',
      verified: true
    },
    {
      id: '5',
      userName: 'ContentCreator',
      rating: 4.5,
      title: 'Solid Principles, Great Price',
      content: 'I\'ve read dozens of AdSense guides, and this one cuts through the fluff. Barry\'s honest about his failures and successes, which builds credibility. The niche research section helped me identify better content opportunities. My monthly AdSense went from $45 to $320 in 4 months. You just need to adapt the 2009 tactics to current standards.',
      date: '2024-02-28',
      verified: true
    },
    {
      id: '6',
      userName: 'DigitalMarketer',
      rating: 3,
      title: 'Good Starting Point',
      content: 'AdSense Pirate is a decent introduction to AdSense optimization, especially for the price. The mistake avoidance section saved me from several potential issues. However, experienced publishers won\'t find much new information here. It\'s best viewed as a foundational resource that needs to be supplemented with current strategies.',
      date: '2024-02-20',
      verified: true
    }
  ],
  'birddogbot': [
    {
      id: '1',
      userName: 'RealEstateInvestor2024',
      rating: 4.5,
      title: 'Game Changer for Deal Flow',
      content: 'I\'ve been using BirdDogBot for 6 months and it\'s completely transformed my deal sourcing. I went from manually checking 5-6 sites daily to getting 3-4 quality leads delivered to my inbox every week. The price drop alerts helped me negotiate a $15K reduction on a duplex last month. At $47/month, it pays for itself with just one deal.',
      date: '2024-03-15',
      verified: true
    },
    {
      id: '2',
      userName: 'WholesaleKing',
      rating: 4,
      title: 'Perfect for Wholesaling',
      content: 'The collaboration features are fantastic for my wholesaling business. I can share deals with my buyer list while keeping my margins private. The automated analysis saves me hours of spreadsheet work. I\'ve closed 3 deals in 4 months that I found through BirdDogBot alerts. The ROI is incredible.',
      date: '2024-02-28',
      verified: true
    },
    {
      id: '3',
      userName: 'SkepticalNewbie',
      rating: 3.5,
      title: 'Good Tool, Learning Curve',
      content: 'As someone new to real estate investing, BirdDogBot helped me understand what to look for in deals. The proforma calculations are educational. However, I found the setup more complex than advertised - took me about an hour to configure properly. The $7 trial was worth it to test my local market coverage.',
      date: '2024-03-08',
      verified: true
    },
    {
      id: '4',
      userName: 'BusyProfessional',
      rating: 4.5,
      title: 'Time Saver for Part-Time Investors',
      content: 'I work full-time and can only invest on weekends. BirdDogBot keeps working while I\'m at my day job. The email alerts let me quickly review deals during lunch breaks. I\'ve found 2 solid rental properties in 5 months that I never would have discovered manually. The time savings alone justify the cost.',
      date: '2024-02-15',
      verified: true
    },
    {
      id: '5',
      userName: 'ExperiencedInvestor',
      rating: 4,
      title: 'Great Supplement to Existing Strategy',
      content: 'I\'ve been investing for 8 years and use BirdDogBot to supplement my existing deal sources. It\'s particularly good at catching off-market Craigslist deals I might miss. The historical price tracking helps with due diligence. Not a magic bullet, but a solid tool in the arsenal. The Pro plan features are worth the upgrade.',
      date: '2024-01-22',
      verified: true
    },
    {
      id: '6',
      userName: 'DisappointedUser',
      rating: 2.5,
      title: 'Limited Results in My Market',
      content: 'I tried BirdDogBot for 3 months in a smaller market and didn\'t see much value. Most alerts were for properties I\'d already seen on MLS or Zillow. The repair estimates seemed generic and often inaccurate for my area. Might work better in larger markets, but wasn\'t worth the monthly fee for me. Used the trial to test before committing.',
      date: '2024-03-01',
      verified: true
    }
  ],
  'septifix': [
    {
      id: '1',
      userName: 'RuralHomeowner2024',
      rating: 4.5,
      title: 'Finally Solved Our Odor Problem',
      content: 'We\'ve had septic odor issues for over a year and tried everything. Within 4 days of using SEPTIFIX, the smell was completely gone. It\'s been 3 months now and no odors have returned. The monthly tablet routine is so easy - just flush and forget. At $69 for 6 months, it\'s way cheaper than the $400 pumping we were quoted.',
      date: '2024-03-18',
      verified: true
    },
    {
      id: '2',
      userName: 'SkepticalBuyer',
      rating: 3.5,
      title: 'Works But Takes Time',
      content: 'I was skeptical about the claims but decided to try it. The odor elimination was quick as promised, but I didn\'t see significant sludge reduction until month 3. My septic guy said the tank looked much cleaner during our recent inspection. The price is reasonable, but you need patience for the full benefits.',
      date: '2024-02-28',
      verified: true
    },
    {
      id: '3',
      userName: 'EcoConsciousFamily',
      rating: 4.8,
      title: 'Love the Environmental Approach',
      content: 'As a family focused on eco-friendly solutions, SEPTIFIX was perfect. No harsh chemicals, just beneficial bacteria doing what nature intended. Our system has been running smoothly for 6 months now. We skipped our annual pumping this year and saved $450. The kids can play in the yard again without worrying about smells.',
      date: '2024-03-10',
      verified: true
    },
    {
      id: '4',
      userName: 'MaintenanceManager',
      rating: 4,
      title: 'Great for Preventive Care',
      content: 'I manage several rental properties with septic systems. SEPTIFIX has been a game-changer for maintenance. Tenants report no odor issues, and we\'ve extended pumping intervals from yearly to every 18 months. The cost savings across multiple properties add up quickly. Easy to implement and track.',
      date: '2024-02-15',
      verified: true
    },
    {
      id: '5',
      userName: 'BudgetConsciousOwner',
      rating: 3,
      title: 'Decent Results, Wish It Was Cheaper',
      content: 'SEPTIFIX does work - odors are gone and the system seems healthier. However, at $69 for 6 months, it\'s still a significant expense for our tight budget. I\'ve been buying the larger packages to get better pricing. Results are good enough that I\'ll continue, but I wish there were more affordable options.',
      date: '2024-03-05',
      verified: true
    },
    {
      id: '6',
      userName: 'NewHomeowner',
      rating: 4.2,
      title: 'Perfect for First-Time Septic Owners',
      content: 'We bought our first house with a septic system and had no idea how to maintain it. SEPTIFIX made it simple - one tablet per month and we\'re covered. The educational materials helped us understand how septic systems work. No issues in 8 months of use, and our neighbors with similar systems have had multiple problems.',
      date: '2024-01-20',
      verified: true
    }
  ],
  'energy-revolution-system': [
    {
      id: '1',
      userName: 'DIYEnthusiast2024',
      rating: 2.5,
      title: 'Interesting Project, No Real Power',
      content: 'I bought this out of curiosity and spent about $80 total on parts. The instructions are clear and I was able to build the coil in about 3 hours. It\'s actually a pretty cool Tesla coil replica. However, despite following everything exactly, I\'m not generating any measurable power. Good educational project, but don\'t expect to reduce your electric bill.',
      date: '2024-03-20',
      verified: true
    },
    {
      id: '2',
      userName: 'SkepticalEngineer',
      rating: 1.5,
      title: 'Physics Doesn\'t Work That Way',
      content: 'As an electrical engineer, I knew this was too good to be true but tried it anyway. The device is basically a fancy Tesla coil that can\'t generate usable power. The "overunity" claims violate basic thermodynamics. Save your money and invest in proven energy solutions like LED bulbs or a programmable thermostat.',
      date: '2024-03-15',
      verified: true
    },
    {
      id: '3',
      userName: 'CuriousHobbyist',
      rating: 3,
      title: 'Fun Build, Zero Savings',
      content: 'I enjoyed building this as a weekend project with my son. The coil looks impressive and we learned about electromagnetic principles. However, after 2 months of having it "running," our electric bill hasn\'t changed at all. It\'s a neat conversation piece but definitely not an energy solution.',
      date: '2024-03-10',
      verified: true
    },
    {
      id: '4',
      userName: 'DisappointedBuyer',
      rating: 1,
      title: 'Complete Waste of Money',
      content: 'I was desperate to reduce my $300/month electric bill and fell for the marketing. After spending $120 total and weeks of trying to make it work, I\'ve seen zero results. The "customer support" just keeps telling me to adjust the coil positioning. This is clearly a scam preying on people\'s energy bill frustrations.',
      date: '2024-03-05',
      verified: true
    },
    {
      id: '5',
      userName: 'AlternativeEnergySeeker',
      rating: 2,
      title: 'Educational Value Only',
      content: 'I\'m interested in alternative energy and thought this might be worth trying. The build process taught me about coils and basic electrical concepts, which was valuable. However, the energy generation claims are completely false. If you want to learn about Tesla coils, it\'s okay. If you want to save on electricity, look elsewhere.',
      date: '2024-02-28',
      verified: true
    },
    {
      id: '6',
      userName: 'RegretfulCustomer',
      rating: 1.5,
      title: 'Should Have Read the Reviews First',
      content: 'I ignored the negative reviews and bought this hoping for even a small reduction in my electric bill. Three months later, absolutely nothing has changed. The device sits in my garage collecting dust. The 60-day guarantee is misleading because they claim you need to "optimize" it for months. Learn from my mistake and skip this.',
      date: '2024-02-20',
      verified: true
    }
  ],
  'ultimate-off-grid-generator': [
    {
      id: '1',
      userName: 'OffGridDreamer2024',
      rating: 2,
      title: 'Interesting Concept, Questionable Results',
      content: 'I bought this hoping to reduce my cabin\'s reliance on the grid. The blueprints are detailed and I was able to source most components for about $180. Building took me 6 hours (I\'m not very handy). The device does produce some electrical output, but nowhere near the 3000W claimed. Maybe 200-300W on a good day. The atmospheric energy concept is fascinating but the practical results are disappointing.',
      date: '2024-03-25',
      verified: true
    },
    {
      id: '2',
      userName: 'SkepticalEngineer',
      rating: 1.5,
      title: 'Tesla Coil, Not a Generator',
      content: 'As an electrical engineer, I knew this was questionable but tried it anyway. What you\'re building is essentially a Tesla coil that can light up some LEDs or charge small devices very slowly. The "atmospheric energy" claims are not scientifically sound. The 80% bill reduction is pure fantasy. Save your money and invest in real solar panels.',
      date: '2024-03-20',
      verified: true
    },
    {
      id: '3',
      userName: 'DIYHobbyist',
      rating: 3,
      title: 'Good Learning Project',
      content: 'I approached this as an educational project rather than expecting to power my house. The instructions are clear and building it taught me about coils and electromagnetic principles. It\'s a cool conversation piece and does generate some power - enough to charge my phone slowly. For $49 plus parts, it\'s an interesting experiment if you have realistic expectations.',
      date: '2024-03-15',
      verified: true
    },
    {
      id: '4',
      userName: 'DisappointedCustomer',
      rating: 1,
      title: 'Complete Waste of Time and Money',
      content: 'I spent $220 total and two weekends building this thing hoping to reduce my $400/month electric bill. After 3 months, my bill hasn\'t changed at all. The device barely powers a small LED light. Customer support just tells you to "adjust the positioning" when it doesn\'t work. This is clearly a scam targeting people desperate to save on energy costs.',
      date: '2024-03-10',
      verified: true
    },
    {
      id: '5',
      userName: 'AlternativeEnergySeeker',
      rating: 2.5,
      title: 'Modest Results, Overhyped Claims',
      content: 'I\'ve been experimenting with alternative energy for years and decided to try this. The build process was straightforward and I did get some power output - enough to run a small radio or charge devices very slowly. However, the claims of powering household appliances are completely false. It\'s an interesting proof of concept but not a practical energy solution.',
      date: '2024-03-05',
      verified: true
    },
    {
      id: '6',
      userName: 'CuriousTinkerer',
      rating: 3.5,
      title: 'Fun Project, Manage Expectations',
      content: 'I bought this more out of curiosity about Tesla\'s work than expecting to power my house. The blueprints are well-written and the build was enjoyable. The device does work - I can power small electronics and it\'s great for demonstrating electromagnetic principles to my kids. Just don\'t expect the dramatic energy savings advertised. Worth it as a hobby project.',
      date: '2024-02-28',
      verified: true
    }
  ],
  'children-learning-reading': [
    {
      id: '1',
      userName: 'HomeschoolMom2024',
      rating: 4.8,
      title: 'Amazing Results with My 4-Year-Old',
      content: 'I started using Children Learning Reading with my 4-year-old daughter who was showing interest in letters. Within 6 weeks, she was reading simple sentences! The step-by-step approach is perfect for young children, and the short lessons keep her engaged. The video demonstrations helped me understand how to teach phonics properly. Worth every penny.',
      date: '2024-03-20',
      verified: true
    },
    {
      id: '2',
      userName: 'SkepticalDad',
      rating: 4.2,
      title: 'Actually Works Despite My Doubts',
      content: 'I was skeptical about teaching my 3-year-old to read, but my wife convinced me to try this program. I\'m amazed at the results! Our son is now reading basic books and loves showing off to grandparents. The phonics method really works, and the materials are well-organized. My only complaint is that some videos could be more polished.',
      date: '2024-03-15',
      verified: true
    },
    {
      id: '3',
      userName: 'FirstTimeTeacher',
      rating: 4.5,
      title: 'Perfect for Non-Educators',
      content: 'As someone with no teaching background, I was nervous about teaching my child to read. This program made it so easy! The instructions are clear, and the video demonstrations show exactly how to present each lesson. My 5-year-old went from knowing just a few letters to reading chapter books in 4 months. The confidence boost for both of us has been incredible.',
      date: '2024-03-10',
      verified: true
    },
    {
      id: '4',
      userName: 'BusyWorkingMom',
      rating: 4.0,
      title: 'Great Results with Consistent Use',
      content: 'The 10-15 minute lessons fit perfectly into our busy schedule. My daughter looks forward to our daily reading time, and I\'ve seen steady progress over 3 months. She\'s now reading signs when we\'re out and about, which makes me so proud. The program requires consistency, but the results are worth the daily commitment.',
      date: '2024-03-05',
      verified: true
    },
    {
      id: '5',
      userName: 'GrandpaTeacher',
      rating: 3.8,
      title: 'Helped My Struggling Grandson',
      content: 'My 6-year-old grandson was falling behind in reading at school. We used this program over the summer, and he caught up to his classmates by fall. The systematic phonics approach filled in the gaps he had missed. His teacher noticed the improvement immediately. The program works, but it does require patience and daily practice.',
      date: '2024-02-28',
      verified: true
    },
    {
      id: '6',
      userName: 'EarlyLearningAdvocate',
      rating: 4.6,
      title: 'Excellent Foundation for Future Learning',
      content: 'I\'ve used this program with both my children (ages 3 and 5). The phonics foundation it provides has made all subsequent learning easier. My older child is now excelling in school, and my younger one is already reading at a first-grade level. The investment in early reading skills pays dividends for years. Highly recommend for any parent serious about their child\'s education.',
      date: '2024-02-20',
      verified: true
    }
  ],
  'pregnancy-miracle': [
    {
      id: '1',
      userName: 'HopefulMom2024',
      rating: 4.5,
      title: 'Finally Pregnant After 3 Years!',
      content: 'After 3 years of trying and multiple failed IVF attempts, I was desperate. I found Pregnancy Miracle and decided to give it a try. I followed Lisa\'s program religiously for 4 months - the diet changes, supplements, and stress management techniques. I\'m now 6 months pregnant! While I can\'t say it was definitely the program, the timing was remarkable. The holistic approach really helped me feel healthier overall.',
      date: '2024-03-25',
      verified: true
    },
    {
      id: '2',
      userName: 'NaturalHealthAdvocate',
      rating: 4.2,
      title: 'Comprehensive Approach That Works',
      content: 'I\'ve always preferred natural approaches to health issues. Pregnancy Miracle provided exactly what I was looking for - a complete system addressing nutrition, stress, and hormonal balance. The 250+ pages are packed with useful information. It took about 5 months, but I conceived naturally at age 38 after being told my chances were low. The personal counseling was incredibly supportive.',
      date: '2024-03-18',
      verified: true
    },
    {
      id: '3',
      userName: 'SkepticalButHopeful',
      rating: 3.5,
      title: 'Good Information, Mixed Results',
      content: 'I was skeptical about the claims but desperate enough to try anything. The program is very thorough and well-researched. I learned a lot about fertility and made significant lifestyle changes. While I haven\'t conceived yet after 6 months, my overall health has improved dramatically. My cycles are more regular, and I have more energy. Still hopeful it will work.',
      date: '2024-03-12',
      verified: true
    },
    {
      id: '4',
      userName: 'CouplesTogether',
      rating: 4.8,
      title: 'Helped Both of Us',
      content: 'My husband and I both followed the program together. It addresses male fertility issues too, which was important since we both had some challenges. The diet and lifestyle changes were significant but manageable with the step-by-step guidance. We conceived after 3 months of following the program. The community support and counseling sessions were invaluable during our journey.',
      date: '2024-03-08',
      verified: true
    },
    {
      id: '5',
      userName: 'BudgetConsciousMom',
      rating: 4.0,
      title: 'Affordable Alternative to IVF',
      content: 'At $47, this was so much more affordable than another round of IVF. The program required dedication and lifestyle changes, but the cost was manageable. I appreciated the 60-day guarantee - it showed confidence in the program. The bonus materials were helpful, especially the stress management techniques. Took 4 months, but I\'m now pregnant with my first child at 35.',
      date: '2024-03-05',
      verified: true
    },
    {
      id: '6',
      userName: 'PCOSWarrior',
      rating: 4.3,
      title: 'Helped with PCOS-Related Infertility',
      content: 'I have PCOS and was told my chances of natural conception were very low. Pregnancy Miracle\'s approach to hormonal balance really resonated with me. The dietary recommendations and supplement protocols specifically helped with my PCOS symptoms. My cycles became regular for the first time in years, and I conceived naturally after 5 months. The program gave me hope when doctors couldn\'t.',
      date: '2024-02-28',
      verified: true
    },
    {
      id: '7',
      userName: 'SecondTimeAround',
      rating: 3.8,
      title: 'Worked for Secondary Infertility',
      content: 'After having my first child easily, I struggled for 2 years trying to conceive again. Secondary infertility is real and frustrating. The program helped me understand what might have changed in my body. The stress management component was particularly helpful since I was so anxious about not conceiving. It took 6 months of following the program, but I\'m now expecting my second child.',
      date: '2024-02-22',
      verified: true
    },
    {
      id: '8',
      userName: 'OverFortyMom',
      rating: 4.6,
      title: 'Success at 42!',
      content: 'Everyone told me I was too old to conceive naturally at 42. Pregnancy Miracle gave me hope and a concrete plan. The age-specific recommendations were particularly helpful. I followed the program for 7 months, making significant changes to my diet and lifestyle. I\'m now 4 months pregnant with a healthy baby. The program works even for "older" mothers like me!',
      date: '2024-02-15',
      verified: true
    }
  ],
  'genius-wave': [
    {
      id: '1',
      userName: 'CuriousSkeptic2024',
      rating: 2.5,
      title: 'Mild Relaxation, No Genius Activation',
      content: 'I bought The Genius Wave out of curiosity about theta brainwave technology. After using it daily for 6 weeks, I can say it does provide some relaxation benefits - similar to any calming audio track. However, the claims about awakening inner genius or dramatic cognitive enhancement are completely overblown. It\'s basically a 7-minute meditation aid with pseudoscientific marketing.',
      date: '2024-03-28',
      verified: true
    },
    {
      id: '2',
      userName: 'BrainwaveExplorer',
      rating: 3,
      title: 'Decent Audio, Questionable Science',
      content: 'I\'ve tried various binaural beats and brainwave entrainment products. The Genius Wave audio quality is fine and I do feel more relaxed after listening. Some mornings I feel slightly more focused, but this could easily be placebo effect. The "NASA-trained neuroscientist" claims are suspicious - I couldn\'t find any verification of Dr. James Rivers. For $39, it\'s not a huge loss, but don\'t expect miracles.',
      date: '2024-03-25',
      verified: true
    },
    {
      id: '3',
      userName: 'DisappointedBuyer',
      rating: 1.5,
      title: 'Overhyped Scam Product',
      content: 'I fell for the marketing about manifesting wealth and genius activation. After 3 months of daily use, absolutely nothing has changed in my cognitive abilities or financial situation. The refund process was a nightmare - they kept asking for "proof" that it didn\'t work and eventually stopped responding to my emails. Save your money and use free meditation apps instead.',
      date: '2024-03-22',
      verified: true
    },
    {
      id: '4',
      userName: 'MeditationPractitioner',
      rating: 2.8,
      title: 'Overpriced Meditation Audio',
      content: 'As someone who meditates regularly, I can say The Genius Wave is just a basic relaxation track with theta wave frequencies. It might help beginners get into a meditative state, but the claims about cognitive enhancement are nonsense. You can find similar (and often better) theta wave tracks on YouTube for free. The 7-minute format is convenient, but not worth $39.',
      date: '2024-03-20',
      verified: true
    },
    {
      id: '5',
      userName: 'PlaceboResponder',
      rating: 3.5,
      title: 'Works If You Believe It Will',
      content: 'I went into this with an open mind and did notice some improvements in my mood and stress levels. Whether it\'s the theta waves or just taking 7 minutes daily to relax, I can\'t say. The audio is pleasant and I\'ve made it part of my morning routine. I wouldn\'t call it genius activation, but it\'s a nice way to start the day. Just manage your expectations.',
      date: '2024-03-18',
      verified: true
    },
    {
      id: '6',
      userName: 'NeuroscienceStudent',
      rating: 1.8,
      title: 'Pseudoscience at Its Worst',
      content: 'As a neuroscience graduate student, I\'m appalled by the false claims in this product. Theta waves are real, but you can\'t "activate genius" with a 7-minute audio track. The references to NASA and MIT are completely unsubstantiated. The mysterious Dr. James Rivers doesn\'t exist in any scientific literature. This is pure pseudoscience preying on people\'s desire for self-improvement.',
      date: '2024-03-15',
      verified: true
    },
    {
      id: '7',
      userName: 'StressedExecutive',
      rating: 2.2,
      title: 'Minor Stress Relief, Major Disappointment',
      content: 'I bought this hoping it would help with work stress and improve my focus during important meetings. While I do feel slightly more relaxed after listening, there\'s been no improvement in my cognitive performance or decision-making abilities. The marketing promised so much more. It\'s basically an expensive relaxation track that you could replace with any meditation app.',
      date: '2024-03-12',
      verified: true
    },
    {
      id: '8',
      userName: 'RefundSeeker',
      rating: 1,
      title: 'Good Luck Getting Your Money Back',
      content: 'The product itself is mediocre at best, but the real problem is trying to get a refund. Despite their 60-day guarantee, they make it nearly impossible to actually get your money back. They require "proof" that it didn\'t work and keep asking for more documentation. After 2 months of back-and-forth emails, I gave up. This feels like a deliberate scam to keep people\'s money.',
      date: '2024-03-10',
      verified: true
    }
  ],
  'hepato-burn': [
  {
    id: '1',
    userName: 'WellnessWatcher',
    rating: 3,
    title: 'Some Digestive Improvement, But Slow Results',
    content: 'I started taking HepatoBurn for better liver support and to help with stubborn belly fat. After 5 weeks, I noticed mild improvements in digestion and slightly less bloating, but no significant weight change. The herbal ingredients seem legit, but don’t expect miracles overnight.',
    date: '2024-04-18',
    verified: true
  },
  {
    id: '2',
    userName: 'SkepticalBuyer42',
    rating: 2.5,
    title: 'Not Worth the Hype',
    content: 'The sales page made it sound like HepatoBurn would melt away belly fat effortlessly. After taking it as directed for 6 weeks, I haven’t seen any real fat loss. Maybe it works better with a strict diet, but on its own it’s just an overpriced supplement.',
    date: '2024-04-12',
    verified: true
  },
  {
    id: '3',
    userName: 'LiverHealthFan',
    rating: 4,
    title: 'Improved Energy and Less Bloating',
    content: 'I bought this mainly for liver support, and I have to say I feel more energetic and less sluggish after meals. Haven’t lost much weight yet, but my digestion feels smoother and I wake up feeling more refreshed. I’ll keep using it.',
    date: '2024-04-08',
    verified: true
  },
  {
    id: '4',
    userName: 'DetoxDevotee',
    rating: 3.2,
    title: 'Decent Supplement, Nothing Special',
    content: 'It’s a decent formula with milk thistle and other detox ingredients. I’ve taken similar supplements before and this one’s okay. Didn’t upset my stomach, and I noticed slightly better regularity. But don’t buy this expecting dramatic fat loss unless you change your diet too.',
    date: '2024-04-04',
    verified: true
  },
  {
    id: '5',
    userName: 'AngryCustomer99',
    rating: 1.5,
    title: 'No Results and Terrible Refund Policy',
    content: 'Used HepatoBurn for nearly two months with zero noticeable difference. I tried to get a refund but they kept delaying and asking for documentation. Complete waste of money and very disappointing customer service.',
    date: '2024-03-28',
    verified: true
  },
  {
    id: '6',
    userName: 'NaturalHealthSeeker',
    rating: 4.2,
    title: 'Solid Natural Formula for Liver Support',
    content: 'I appreciate the natural ingredients like dandelion root and artichoke extract. My digestion and skin have both improved a bit since starting HepatoBurn. I’m not sure about fat-burning claims, but as a liver supplement it works well.',
    date: '2024-03-22',
    verified: true
  },
  {
    id: '7',
    userName: 'HopefulButLetDown',
    rating: 2,
    title: 'Just Another Weight Loss Gimmick',
    content: 'Fell for the marketing about “liver switch” fat burning. I’ve been consistent with usage, diet, and light exercise, but saw no significant change. Maybe works for some people, but not for me. Wish I had saved my money.',
    date: '2024-03-18',
    verified: true
  },
  {
    id: '8',
    userName: 'SatisfiedUser01',
    rating: 3.8,
    title: 'Good Support, Modest Results',
    content: 'I didn’t buy HepatoBurn expecting a miracle, and that’s probably why I’m not disappointed. It helps with digestion and I feel a bit less puffy around the waist. It’s not a magic pill, but it’s a helpful tool when combined with a healthy lifestyle.',
    date: '2024-03-15',
    verified: true
  }
],
'hepatoburn': [
  {
    id: '1',
    userName: 'WellnessWatcher',
    rating: 3,
    title: 'Some Digestive Improvement, But Slow Results',
    content: 'I started taking HepatoBurn for better liver support and to help with stubborn belly fat. After 5 weeks, I noticed mild improvements in digestion and slightly less bloating, but no significant weight change. The herbal ingredients seem legit, but don’t expect miracles overnight.',
    date: '2024-04-18',
    verified: true
  },
  {
    id: '2',
    userName: 'SkepticalBuyer42',
    rating: 2.5,
    title: 'Not Worth the Hype',
    content: 'The sales page made it sound like HepatoBurn would melt away belly fat effortlessly. After taking it as directed for 6 weeks, I haven’t seen any real fat loss. Maybe it works better with a strict diet, but on its own it’s just an overpriced supplement.',
    date: '2024-04-12',
    verified: true
  },
  {
    id: '3',
    userName: 'LiverHealthFan',
    rating: 4,
    title: 'Improved Energy and Less Bloating',
    content: 'I bought this mainly for liver support, and I have to say I feel more energetic and less sluggish after meals. Haven’t lost much weight yet, but my digestion feels smoother and I wake up feeling more refreshed. I’ll keep using it.',
    date: '2024-04-08',
    verified: true
  },
  {
    id: '4',
    userName: 'DetoxDevotee',
    rating: 3.2,
    title: 'Decent Supplement, Nothing Special',
    content: 'It’s a decent formula with milk thistle and other detox ingredients. I’ve taken similar supplements before and this one’s okay. Didn’t upset my stomach, and I noticed slightly better regularity. But don’t buy this expecting dramatic fat loss unless you change your diet too.',
    date: '2024-04-04',
    verified: true
  },
  {
    id: '5',
    userName: 'AngryCustomer99',
    rating: 1.5,
    title: 'No Results and Terrible Refund Policy',
    content: 'Used HepatoBurn for nearly two months with zero noticeable difference. I tried to get a refund but they kept delaying and asking for documentation. Complete waste of money and very disappointing customer service.',
    date: '2024-03-28',
    verified: true
  },
  {
    id: '6',
    userName: 'NaturalHealthSeeker',
    rating: 4.2,
    title: 'Solid Natural Formula for Liver Support',
    content: 'I appreciate the natural ingredients like dandelion root and artichoke extract. My digestion and skin have both improved a bit since starting HepatoBurn. I’m not sure about fat-burning claims, but as a liver supplement it works well.',
    date: '2024-03-22',
    verified: true
  },
  {
    id: '7',
    userName: 'HopefulButLetDown',
    rating: 2,
    title: 'Just Another Weight Loss Gimmick',
    content: 'Fell for the marketing about “liver switch” fat burning. I’ve been consistent with usage, diet, and light exercise, but saw no significant change. Maybe works for some people, but not for me. Wish I had saved my money.',
    date: '2024-03-18',
    verified: true
  },
  {
    id: '8',
    userName: 'SatisfiedUser01',
    rating: 3.8,
    title: 'Good Support, Modest Results',
    content: 'I didn’t buy HepatoBurn expecting a miracle, and that’s probably why I’m not disappointed. It helps with digestion and I feel a bit less puffy around the waist. It’s not a magic pill, but it’s a helpful tool when combined with a healthy lifestyle.',
    date: '2024-03-15',
    verified: true
  }
],
  'prodentim': [
  {
    id: '1',
    userName: 'FreshBreathFan',
    rating: 4.5,
    title: 'My Breath Has Never Been Fresher!',
    content: 'After about 3 weeks of using ProDentim, I noticed a real difference in my breath and how clean my mouth feels. The chewable format makes it easy to use daily, and it actually tastes pretty good. I’ll definitely reorder!',
    date: '2024-05-22',
    verified: true
  },
  {
    id: '2',
    userName: 'GumSaver123',
    rating: 4.2,
    title: 'Stronger Gums and Less Bleeding',
    content: 'I used to have bleeding gums almost every time I brushed, but since starting ProDentim, that’s stopped completely. I feel like it’s working from the inside out. Love that it uses probiotics instead of chemicals.',
    date: '2024-06-01',
    verified: true
  },
  {
    id: '3',
    userName: 'MintyMouth',
    rating: 4.7,
    title: 'Noticeable Whitening and Freshness',
    content: 'Didn’t expect it to help with teeth whitening, but I’ve definitely seen a brighter smile since I began. The peppermint makes my mouth feel super fresh and clean throughout the day.',
    date: '2024-05-10',
    verified: true
  },
  {
    id: '4',
    userName: 'HealthNerd88',
    rating: 4.8,
    title: 'Probiotics That Actually Work!',
    content: 'As someone who takes probiotics for gut health, I was excited to find one focused on oral health. After a month, my mouth feels healthier, no more dryness or bad taste in the morning. Highly recommend for anyone serious about dental wellness.',
    date: '2024-06-12',
    verified: true
  },
  {
    id: '5',
    userName: 'NaturalSmile',
    rating: 4.3,
    title: 'Loving The Natural Ingredients',
    content: 'I love that ProDentim uses strains like L. reuteri and inulin instead of harsh synthetic stuff. My gums are less inflamed, and I haven’t had any mouth ulcers since I started. Clean, gentle, and effective.',
    date: '2024-06-05',
    verified: true
  }
],

'fast-wealth': [
  {
    id: '1',
    userName: 'OnlineHustler',
    rating: 4,
    title: 'Practical Insights for Beginners',
    content: 'Fast Wealth lays out solid strategies for building passive income online. I appreciated the beginner-friendly approach and examples. Some parts feel basic if you’ve already done affiliate marketing, but great for newbies.',
    date: '2024-04-19',
    verified: true
  },
  {
    id: '2',
    userName: 'SkepticToBeliever',
    rating: 4.5,
    title: 'Surprisingly Helpful Content',
    content: 'I bought Fast Wealth expecting another rehashed course, but I was pleasantly surprised. The modules on audience targeting and traffic strategies gave me real, actionable steps. ROI already coming in.',
    date: '2024-04-12',
    verified: true
  },
  {
    id: '3',
    userName: 'PassiveIncomeDreamer',
    rating: 3.2,
    title: 'Useful But Needs More Depth',
    content: 'The training is clear and well-paced, but I found myself wanting more detailed case studies and examples. Still, it’s a good jumpstart for someone looking to monetize online content.',
    date: '2024-04-06',
    verified: true
  },
  {
    id: '4',
    userName: 'NoFluffMarketer',
    rating: 2.5,
    title: 'Too Much Hype, Not Enough Value',
    content: 'The sales page was full of hype, but the actual course felt shallow in places. It brushes over advanced strategies and focuses mostly on basics. Might work for absolute beginners, but not seasoned marketers.',
    date: '2024-04-02',
    verified: true
  },
  {
    id: '5',
    userName: 'RealUser22',
    rating: 4.7,
    title: 'Earned My First $100!',
    content: 'Thanks to Fast Wealth, I made my first affiliate commission ever. The blueprint is simple, but if you follow the steps, it works. Not a get-rich-quick scheme, but a solid system if you put in the effort.',
    date: '2024-03-28',
    verified: true
  },
  {
    id: '6',
    userName: 'BusyParent',
    rating: 3.5,
    title: 'Good Info, But Time Commitment Needed',
    content: 'The concepts are easy to grasp, but implementing them takes time and consistency. Not ideal for someone looking for instant results, but I can see the long-term potential.',
    date: '2024-03-22',
    verified: true
  },
  {
    id: '7',
    userName: 'DisappointedBuyer',
    rating: 2,
    title: 'Didn’t Live Up to Expectations',
    content: 'The Fast Wealth course promised too much. The training is okay, but didn’t give me any new insights I couldn’t find for free on YouTube. Not worth the price in my opinion.',
    date: '2024-03-18',
    verified: true
  },
  {
    id: '8',
    userName: 'MotivatedMarketer',
    rating: 4.3,
    title: 'Solid Foundation for Side Hustlers',
    content: 'I’ve gone through multiple digital income courses, and Fast Wealth has one of the better roadmaps for building income from scratch. Especially useful if you’re starting a side hustle with limited time.',
    date: '2024-03-11',
    verified: true
  }
],
  'vert-shock': [
  {
    id: '1',
    userName: 'DunkDreamer23',
    rating: 4.7,
    title: 'Gained 9 Inches on My Vertical!',
    content: 'I’ve tried a bunch of jump programs before, but Vert Shock is the first one that actually delivered real results. After 8 weeks, I added 9 inches to my vertical and finally dunked for the first time!',
    date: '2024-04-20',
    verified: true
  },
  {
    id: '2',
    userName: 'AthleteNextDoor',
    rating: 4.2,
    title: 'Challenging but Worth It',
    content: 'This isn’t some lazy shortcut—Vert Shock makes you work. But if you stick with it, you’ll see serious improvements. My explosiveness on the court is way better now.',
    date: '2024-04-16',
    verified: true
  },
  {
    id: '3',
    userName: 'VerticalRise88',
    rating: 5,
    title: 'Best Vertical Training Out There',
    content: 'Hands down the best plyometric program I’ve ever used. The layout is clear, the phases build perfectly, and the progress is measurable. I recommend it to every serious hooper I know.',
    date: '2024-04-10',
    verified: true
  },
  {
    id: '4',
    userName: 'CoachMason',
    rating: 4.5,
    title: 'Great for Young Athletes',
    content: 'I used Vert Shock with my high school basketball team and saw huge gains across the board. Safe, science-backed, and no weights required. Great addition to off-season training.',
    date: '2024-04-06',
    verified: true
  },
  {
    id: '5',
    userName: 'HardworkingGuard',
    rating: 3.8,
    title: 'Improved My First Step and Vertical',
    content: 'Even though I didn’t get a crazy 10-inch jump, I still gained about 5 inches and feel way more explosive when driving to the basket. Totally worth it for overall athleticism.',
    date: '2024-04-01',
    verified: true
  },
  {
    id: '6',
    userName: 'JumpManiac',
    rating: 4.9,
    title: 'From Layups to Slam Dunks!',
    content: 'Never thought I’d be dunking at 5’10”, but here I am thanks to Vert Shock. This program flat-out works if you commit to the routine and push yourself each session.',
    date: '2024-03-28',
    verified: true
  },
  {
    id: '7',
    userName: 'QuickFeet14',
    rating: 4,
    title: 'Speed and Explosiveness Improved',
    content: 'I play soccer, not basketball, but Vert Shock helped me a lot with speed and acceleration. My 10-yard sprint and agility are better. Great for multi-sport athletes too.',
    date: '2024-03-22',
    verified: true
  },
  {
    id: '8',
    userName: 'RelentlessHooper',
    rating: 4.6,
    title: 'Program That Delivers',
    content: 'I was skeptical at first but followed it to the letter and saw legit gains by week 4. Just make sure you don’t skip recovery days—those are key. Worth every penny.',
    date: '2024-03-17',
    verified: true
  }
]

};