import Image from "next/image";
import styles from "./Intraday.module.css";
import backgroundImage3 from "../../../public/image/about/bg-3.png";
import backgroundImage1 from "../../../public/image/about/bg-1.png";
import backgroundImage2 from "../../../public/image/about/bg-2.png";
import backgroundImage4 from "../../../public/image/about/bg-4.png";
import backgroundImage5 from "../../../public/image/about/bg-5.png";
import { Ri24HoursLine } from "react-icons/ri";
import { FaThumbsUp } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const Intraday = () => {
  return (
    <div>
      <div>
        <p className={styles.text}>
          --- We Execute ---
        </p>
      </div>

      {/* Equity Intraday Strategies */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage3.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          // height: "100vh",
        }}
      >
        <p className={styles.head}>Equity Intraday Strategies</p>
        <div className={styles.main1}>
          <p className={styles.para}>
            Algorithmic trading is the future of fintech, and with Reliable Technologiess,
            you can get in on the action! Our platform allows you to execute
            trades automatically according to predefined strategies, so you can
            rest easy knowing your money is in good hands.
          </p>
          <div>
            <Image
              src={"/image/about/equity.png"}
              width={500}
              height={500}
              alt=""
            ></Image>
          </div>
        </div>
      </div>

      {/* Delta neutral strategies: */}
      <div className={styles.delta}>
        <div className={styles.parad}>
          <p className="text-5xl font-semibold mb-5">
            Delta neutral strategies:
          </p>
          <p>
            Delta neutral strategies are all the rage these days. Everyone&apos;s
            looking for a way to balance out the ups and downs of the market,
            and stay delta neutral. But what does that really mean?
            <br />
            <br />
            At its core, delta neutrality means that your portfolio is immune to
            market movements. Whether the market goes up or down, your portfolio
            stays the same. You might think this would be boring, but it&apos;s
            actually quite exciting!
            <br />
            <br />
            You see, by using delta-neutral strategies, you can take on more
            risk in some areas of your portfolio while reducing risk in others.
            This allow yoy to profit from market movements while still staying
            safe. It&apos;s a great yay to maximize your returns while minimizing
            your risk.
            <br />
            <br />
            When it comes to the stock market, delta is king. In order to make
            money, you have to understand how delta works and use it to your
            advantage. For instance, if you&apos;re delta neutral, then you&apos;re immune
            to market movements. You can sit back and watch the market go up and
            down all day and your portfolio will remain unchanged.
            <br />
            <br />
            Now, there are a few ways to become delta neutral. One way is to buy
            and sell stocks at the same time so that your net change is zero.
            Another way is to use options contracts to balance out your positive
            and negative deltas. But whatever method you choose, beinde neutral
            is key to success in today&apos;s markets.
          </p>
        </div>
        <div>
          <Image
            src={"/image/about/delta.png"}
            width={600}
            height={600}
            alt=""
          ></Image>
        </div>
      </div>

      {/* Trend following Strategies: */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage1.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className={styles.trend}>
          <p className="text-5xl font-semibold mb-5 text-white">
            Trend following <br /> Strategies:
          </p>
          <p className={styles.para}>
            Algo strategies have been around for a while now, and they continue
            to be one of the most popular ways to trade. Many people are
            hesitant to use them, but they can be a great way to identify the
            trend or early reversal of the trend. Strategies on algo are based
            on price, volume, support, resistance or any other concept which the
            Investor has confidence on and is comfortable with. Trading
            strategies, trading plaforms, trading account. strategy, algo, algo
            trading, average price, trading platforms, market, stock, stock
            market, trading strategies, moving average, bank, brokerage
            calculator, demat account Sinch algo uses technology and data, it
            has more chances to detect the correct trend. Also it is Impossible
            for an investor to analyze large chunks of data and act on it in a
            timely manner manually - this is where algo comes in!
            <br />
            <br />
            You&apos;ve been trading stocks for a while now and you&apos;ve been hearing
            about algo strategies. You&apos;re not sure what they are, but you&apos;re
            curious. You do some research and find that algo strategies are
            based on price, volume, support, resistance or any other concept
            which the investor has confidence on and is comfortable with. After
            reading more about algo strategies, you decide to give them a try.
            <br />
            <br />
            You open an account with an online broker that offers algo trading
            and start testing different strategies. After some trial and error,
            you find one or two strategies that work well for you. You continue
            to use these strategies as your foundation and make tweaks as
            needed.
            <br />
            <br />
            Over time, your algo trading becomes more successful.
          </p>
        </div>
      </div>

      {/* Stochastic oscillator trading strategy */}
      <div className={styles.delta}>
        <div>
          <Image
            src={"/image/about/stochastic.png"}
            width={600}
            height={600}
            alt=""
          ></Image>
        </div>
        <div className={styles.parad}>
          <p className="text-5xl font-semibold mb-5">
            Stochastic oscillator trading strategy
          </p>
          <p>
            I&apos;m sure you&apos;re wondering what in the world scalping has to do with
            stochastics. Well, let me explain.
            <br />
            <br />
            When most people think of scalping, they think of high-frequency
            trading ad fast profits. But that&apos;s not the only way to scalp the
            market. In fact, you can use a stochastic oscillator to help
            identify potential turning points where you can enter and exit a
            trade at a profit
            <br />
            <br />
            A stochastic measures the point of the current price in relation to
            its range over a recent period of time. By comparing the price of a
            security to its recent range, a stochastic attempts to provide
            potential turning points. This makes it an ideal tool for
            identifying short-term. I was reading an article the other day about
            scalping and how it can be done using a stochastic oscillator had
            never heard of this before, but it sounded really interesting!
            <br />
            <br />
            Basically, a stochastic compares the price of a security to its
            recent range in order to try and identify potential turning points.
            By doing this, you can scalp trades for quick profits. This sounds
            like a great way to make some extra money, so I decided to give it a
            try!
            <br />
            <br />I started by looking at some charts and trying to find some
            stocks that were near their highs or lows. Once I found a stock that
            looked like it was ready to turn, I would place my order and wait
            for the stock to
          </p>
        </div>
      </div>

      {/* Moving average strategy */}
      <div
        className={styles.trend}
        style={{
          backgroundImage: `url(${backgroundImage2.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className={styles.parad}>
          <p className="text-5xl font-semibold mb-5 ">
            Moving average strategy
          </p>
          <p>
            I&apos;m here to talk to you about something that can be really helpful
            when trading Forex: moving averages. Specifically, we&apos;re going to
            focus on the 200-period MA, which can act as a strong support or
            resistance level.
            <br />
            <br />
            In the chart below, you can see that the 200-period MA was acting as
            a strong resistance level. The five period MA crossed above the 20
            period MA, indicating that the trend was bullish, and traders who
            acted accordingly made some nice profits!
            <br />
            <br />
            if you&apos;re So ever feeling uncertain about what direction to trade
            in, take at the longer-term MA and see where it&apos;s trending. It
            profilesome could prov headed valuable insight into where prices are
            likely headed
          </p>
        </div>
        <div>
          <Image
            src={"/image/about/movingavg.png"}
            width={600}
            height={600}
            alt=""
          ></Image>
        </div>
      </div>

      {/* Parabolic SAR indicator strategy */}
      <div className={styles.delta}>
        <div>
          <Image
            src={"/image/about/parabolic.png"}
            width={600}
            height={600}
            alt=""
          ></Image>
        </div>
        <div className={styles.parad}>
          <p className="text-5xl font-semibold mb-5 ">
            Parabolic SAR indicator strategy
          </p>
          <p>
            The parabolic SAR indicator is one of my favourites because it&apos;s so
            simple to use but can be really effective in helping to identify the
            direction of a market. It&apos;s made up of a series of dots one below
            the price is bullish, and one above is bearish - and provides both
            entry and exit points. I find it particularly helpful when markets
            are ranging as it can help me to stay on the right side of the
            trade.
            <br />
            <br />
            SAR is a great tool for helping traders stay on the right side of
            the market. By identifying the direction of the trend, SAR can help
            traders enter and exit trades with greater accuracy.
            <br />
            <br />
            One thing to keep in mind when using SAR, however, is that it is not
            always accurate. The indicator should be used in conjunction with
            other tools to get a more complete picture of what&apos;s going on in the
            market
          </p>
        </div>
      </div>

      {/* RSI based scalping strategy */}
      <div
        className={styles.trend}
        style={{
          backgroundImage: `url(${backgroundImage2.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className={styles.parad}>
          <p className="text-5xl font-semibold mb-5 ">
            RSI based scalping strategy
          </p>
          <p>
            When the RSI drops to 30 and then moves above this line, a possible
            entry point is created. By contrast, when the RSI moves to 70 and
            then begins to decline within a downtrend, a chance to sell the
            rally is created. Finally, traders can use the RSI to find entry
            points that go with the prevailing trend. In the first example
            below, we can see how buying dips in the trend leads to profits,
            while selling railies in a downtrend results in losses.
            <br />
            <br />
            Dips in the trend are to be bought, so when the RSI drops to 30 and
            then moves above this line, a possible entry point is created By
            contrast, when the RSI moves to 70 and then begins to decline within
            a downtrend, a chance to sell the rally is created, as we have seen
            in the example below. Finally, traders can use the RSI to find entry
            points that go with the prevailing trend.
          </p>
        </div>
        <div>
          <Image src={"/image/about/rsi.png"} width={600} height={600} alt=""></Image>
        </div>
      </div>

      {/* Equity Intraday Strategies */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage4.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          // height: "100vh",
        }}
      >
        <p className={styles.head}>Equity Intraday Strategies</p>
        <div className={styles.main1}>
          <p className={styles.parad}>
            Algorithmic trading is the future of fintech, and with Reliable Technologiess,
            you can get in on the action! Our platform allows you to execute
            trades automatically according to predefined strategies, so you can
            rest easy knowing your money is in good hands.
          </p>
          <div>
            <Image
              src={"/image/about/robo-image2.png"}
              width={500}
              height={500}
              alt=""
            ></Image>
          </div>
        </div>
      </div>

      {/* Long call butterfly */}
      <div className={styles.delta2}>
        <div className={styles.parad}>
          <p className="text-5xl font-semibold mb-5 ">Long call butterfly </p>
          <p>
            The investor is looking for a low-cost, low-risk strategy that
            offers good potential rewards. A long butterfly is similar to a
            short straddle, except your losses are limited. This can be a great
            way to make money in a volatile market without taking on too much
            risk. By selling 2 ATM calls and buying 1 ITM call and 1 OTM call,
            the investor can benefit from price movement in either direction.
            <br />
            <br />
            After doing some research, he found a strategy that offered a good
            risk / reward ratio, as well as low cost. A long butterfly, similar
            to a short straddle, could give him the profits he was looking for.
            He sold 2 ATM calls, bought 1 ITM call, and bought 1 OTM call
            options (with equidistance between the strike prices). This would
            limit his losses if the stock price stayed stagnant or decreased
            slightly. And if the stock price increased past the strike prices of
            any of the options he had sold, he would make a profit
          </p>
        </div>
        <div>
          <Image src={"/image/about/lcbs.png"} width={600} height={600} alt=""></Image>
        </div>
      </div>

      {/* Short call butterfly*/}
      <div
        className={styles.trend2}
        style={{
          backgroundImage: `url(${backgroundImage2.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div>
          <Image src={"/image/about/scbs.png"} width={600} height={600} alt=""></Image>
        </div>
        <div className={styles.parad}>
          <p className="text-5xl font-semibold mb-5 ">Short call butterfly</p>
          <p>
            I&apos;m a trader who specializes in the Short Call Butterfly. It&apos;s a
            great strategy that can be profitable in case of a big move in the
            stock or index.
            <br />
            <br />
            Recently, I was approached by one of my clients with an interesting
            opportunity. He had noticed that his company&apos;s stock was starting to
            move higher, and he wanted to take advantage of it.
            <br />
            <br />
            He asked me to construct a Short Call Butterfly for him. I was happy
            to oblige! We agreed on strike prices that would give us a net
            credit, and I got to work.
            <br />
            <br />
            The trade went through without any problems, and we were able to
            profit from the stock&apos;s upward movement. Thanks for giving me the
            chance to share my trading strategy with
            <br />
            <br />
            You&apos;ve probably heard of the butterfly trade before, but what you
            may not know is that there&apos;s a special kind of butterfly trade
            called the short call butterfly. This strategy can be profitable in
            case of a big move in the stock or index, and it&apos;s surprisingly easy
            to set up.
            <br />
            <br />
            Here&apos;s how it works: you sell one lower striking in-the-money call,
            buy two at-the-money calls, and sell another higher strike
            out-of-the- money call. This gives you a net credit (meaning you
            earn money upfront), and as long as the stock or index moves in the
            right direction, you&apos;ll make a profit
            <br />
            <br />
            So why not give this strategy a try? It could be just what
          </p>
        </div>
      </div>

      {/* Long call condor */}
      <div className={styles.delta2}>
        <div className={styles.parad}>
          <p className="text-5xl font-semibold mb-5 ">Long call condor </p>
          <p>
            BUY 1 ITM CALL OPTION (LOWER STRIKE), SELL 1 ITM CALL OPTION (LOWER
            MIDDLE), SELL I OTM CALL OPTION (HIGHER MIDDLE), BUY 1 OTM CALL
            OPTION (HIGHER STRIKE)
            <br />
            <br />
            The strategy is perfect for a range-bound market. The Long Call
            Condor involves buying an ITM call, selling an ITM call, selling an
            OTM call, and buying an OTM call. This setup ensures that the risk
            is capped on both sides, making it a safe bet in today&apos;s market. And
            the best part? The position is profitable if the stock or index
            remains range-bound. So why wait? Try out this strategy today!
            <br />
            <br />
            You&apos;re sitting at your computer, scrolling through your options
            trading screen when you see a long call condor. You&apos;ve heard about
            this strategy before, but you&apos;re not quite sure what it is. After
            reading through the description, you decide to give it a try
            <br />
            <br />
            You buy an ITM call option with a lower strike price, and then sell
            an ITM call option with a lower middle strike price. You also sell
            an OTM call option with a higher middle strike price, and finally
            buy an OTM call option with a higher strike price.
            <br />
            <br />
            The goal of this strategy is to profit if the stock or index remains
            range bound If the stock moves out of the range, however, your
            limited
          </p>
        </div>
        <div>
          <Image src={"/image/about/lccs.png"} width={600} height={600} alt=""></Image>
        </div>
      </div>

      {/* Short call condor*/}
      <div
        className={styles.trend2}
        style={{
          backgroundImage: `url(${backgroundImage2.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div>
          <Image src={"/image/about/sccs.png"} width={600} height={600} alt=""></Image>
        </div>
        <div className={styles.parad}>
          <p className="text-5xl font-semibold mb-5 ">Short call condor</p>
          <p>
            SHORT 1 ITM CALL OPTION (LOWER STRIKE), LONG 1 ITM CALL OPTION
            (LOWER MIDDLE), LONG 1 OTM CALL OPTION (HIGHER MIDDLE), SHORT 1 OTM
            CALL OPTION (HIGHER STRIKE).
            <br />
            <br />
            When it comes to volatile markets, there&apos;s no strategy as versatile
            as the Short Call Condor. This approach involves selling a lower
            strike call option, buying a lower middle strike call option, buying
            a higher middle strike call option, and selling a higher strike call
            option. As you can imagine, this setup is profitable if the stock or
            index experiences big moves in either direction.
            <br />
            <br />
            Of course, with any strategy there are risks involved. But if you&apos;re
            comfortable with volatility and are confident in your analysis of
            the market, then the Short Call Condor could be right for you!
            <br />
            <br />
            When volatility is high, this strategy can be very profitable. By
            selling an ITM call and buying two OTM calls, you create a position
            that profits from a big move in the stock or index. If the market
            moves in the right direction, this strategy can make you a lot of
            money. So if you&apos;re looking to make some serious profits in a
            volatile market, then -Short Call Condor is the strategy for you!
          </p>
        </div>
      </div>

      {/* Mcx Intraday Strategies */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage5.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          // height: "100vh",
        }}
      >
        <p className={styles.head}>Mcx Intraday Strategies</p>
        <div className={styles.main1}>
          <p className={styles.para}>
            Algorithmic trading is the future of fintech, and with Reliable Technologiess,
            you can get in on the action! Our platform allows you to execute
            trades automatically according to predefined strategies, so you can
            rest easy knowing your money is in good hands.
          </p>
          <div>
            <Image
              src={"/image/about/robo-image8.png"}
              width={600}
              height={600}
              alt=""
            ></Image>
          </div>
        </div>
      </div>

      {/* Mcx Intraday Strategies */}
      <div className={styles.delta2}>
        <div className={styles.parad}>
          <p className="text-5xl font-semibold mb-5 ">
            Mcx Intraday Strategies{" "}
          </p>
          <p>
            When I first started trading, I was focused on the fundamentals. I
            would read all of the financial reports, listen to earnings calls,
            and try to understand what a company was doing and why their stock
            price was going up or down.
            <br />
            <br />
            But I quickly realized that wasn&apos;t enough. Even if you understood a
            company&apos;s business model and thought they were doing well, there was
            no guarantee their stock price would move in the right direction.
            <br />
            <br />
            So I started learning about technical analysis and momentum trading
            doin This is a strategy where you don&apos;t care what a company is
            whether they are making money or not. Instead, you focus on how to
            clock is moving.
            <br />
            <br />
            If you see a stock that is moving in one direction. I love momentum
            trading. There&apos;s just something about it that gets my blood pumping.
            I feel like a kid in a candy store when I&apos;m looking at stocks that
            are moving in a single direction.
            <br />
            <br />
            Of course, it&apos;s not all easy sailing. You have to be careful not to
            get caught up in the hype and invest in a stock that&apos;s going to tank
            soon afterwards. But if you pick your stocks wisely, the profits can
            be pretty sweet
            <br />
            <br />I usually hold onto my stocks for minutes or hours, but
            sometimes I&apos;ll hold them for days if the trend is strong enough. And
            as long as the profit to loss ratio is 21 or better. I&apos;m happy.
          </p>
        </div>
        <div>
          <Image src={"/image/about/mcx.png"} width={600} height={600} alt=""></Image>
        </div>
      </div>

      {/* Reversal trading Strategy*/}
      <div
        className={styles.trend2}
        style={{
          backgroundImage: `url(${backgroundImage2.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div>
          <Image src={"/image/about/lccs.png"} width={400} height={400} alt=""></Image>
        </div>
        <div className={styles.parad}>
          <p className="text-5xl font-semibold mb-5 ">
            Reversal trading Strategy
          </p>
          <p>
            When it comes to trading, there are a lot of different strategies
            that you can use. One of the most popular is the reversal intraday
            strategy. This strategy is based on the idea that stocks that are at
            extreme highs or lows have a good chance of reversing their
            direction.
            <br />
            <br />
            As soon as the movement of a security reverses, a stop is marked and
            traders wait for the security to hit its maximum fluctuation. A
            trade is executed when the reversal value hits the trader&apos;s
            estimated limit
            <br />
            <br />
            This can be a very profitable strategy, but it can also be risky if
            you don&apos;t know what you&apos;re doing. That&apos;s why it&apos;s important to do
            your research and it was the middle of the day and the stock market
            was in full swing. Traders were buying and selling stocks left and
            right, making a fortune on some and losing it all on others
            <br />
            <br />
            Jimmy was one of those traders. He had been in the business for
            years, and he had learned how to play the markets like a pro. He
            knew when to buy and when to sell, and he always managed to come out
            ahead.
            <br />
            <br />
            But today, things were different. Jimmy was struggling. He kept
            buying stocks that kept going down, and he was quickly losing money.
            <br />
            <br />
            He needed to make a move fast if he wanted to stay in the game. So
            he decided to try something new: reversal intraday.
          </p>
        </div>
      </div>

      {/* Breakout Trading Strategy */}
      <div className={styles.delta2}>
        <div className={styles.parad}>
          <p className="text-5xl font-semibold mb-5 ">
            Breakout Trading Strategy{" "}
          </p>
          <p>
            In a breakout market strategy, a trader enters the market when the
            price goes beyond its own resistance and support. Technical
            indicator volume is used by the traders to search such a pattern in
            the market. Breakouts need quick entries and exit. It does not
            involve waiting. The traders first calculate the breakout price
            level and wait for the breakout. This is a risky method of trading
            because after all, it&apos;s a break out - but it can be very profitable
            if timed correctly!
            <br />
            <br />
            In a breakout market strategy, a trader enters the market when the
            price goes beyond its own resistance and support. Technical
            Indicator volume is used by the traders to search such a pattern in
            the market. Breakouts need quick entries and exit. it does not
            involve waiting. The traders first calculate the breakout price
            level and wait for the breakout. This is a risky method of trading
            because after all, you&apos;re betting that the stock will continue to
            move in your chosen direction! However, if timed correctly, it can
            be extremely profitable.
          </p>
        </div>
        <div>
          <Image
            src={"/image/about/stochastic.png"}
            width={400}
            height={400}
            alt=""
          ></Image>
        </div>
      </div>

      {/* Moving average crossover Strategy*/}
      <div
        className={styles.trend2}
        style={{
          backgroundImage: `url(${backgroundImage2.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div>
          <Image src={"/image/about/sccs.png"} width={400} height={400} alt=""></Image>
        </div>
        <div className={styles.parad}>
          <p className="text-5xl font-semibold mb-5 ">
            Moving average crossover Strategy
          </p>
          <p>
            You&apos;re probably familiar with the saying that &quot;the trend is your
            friend.&quot; Well, that&apos;s certainly true when it comes to investing. By
            using a price crossover strategy, you can spot changes in momentum
            and get an early indication of which way the market is moving.
            <br />
            <br />
            This strategy relies on two things: the price of a stock and its
            moving average. When the stock&apos;s price crosses above or below the
            moving average, it gives you a signal of which way the market is
            heading. A crossover below the moving average shows a downtrend
            while a crossover above indicates an uptrend.
            <br />
            <br />
            Of course, no strategy is perfect and this one is no exception. But
            by using this method, you can get an early indication.
          </p>
        </div>
      </div>

      {/* Pivot Point strategy */}
      <div className={styles.delta2}>
        <div className={styles.parad}>
          <p className="text-5xl font-semibold mb-5 ">Pivot Point strategy </p>
          <p>
            When it comes to trading, there are a million different strategies
            out there that you can use. But if you&apos;re looking for a strategy
            that&apos;s both effective and easy to use, the pivot point strategy is
            definitely worth considering.
            <br />
            <br />
            This strategy is based on support and resistance levels, which are
            essential for any successful trader. By understanding these levels,
            you can make better decisions about when to enter and exit trades.
            <br />
            <br />
            The pivot point strategy is especially useful in situations where
            the market is range-bound If prices are stuck in a certain range,
            this strategy can help you break out of that pattern and start
            making profitante trades.
            <br />
            <br />
            Breakout traders will also find this strategy useful, as it
            identities key breakout levels.
            <br />
            <br />
            In the forex market, there are two types of traders: those who trade
            ranges and those who trade breakouts. The pivot point strategy is a
            great way for both groups to enter into trades.
            <br />
            <br />
            For range traders, the pivot point strategy is an entry method. They
            wait for the price to bounce off of the support or resistance level
            and then enter into a trade. This helps them stay in trades with
            minimal risk.
            <br />
            <br />
            For breakout traders, the pivot point strategy can help them
            understand where breakout levels are. They can use this information
            to get into trades early and maximize their profits.
          </p>
        </div>
        <div>
          <Image src={"/image/about/mcx.png"} width={400} height={400} alt=""></Image>
        </div>
      </div>

      {/* Scalping strategy*/}
      <div
        className={styles.trend2}
        style={{
          backgroundImage: `url(${backgroundImage2.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div>
          <Image src={"/image/about/sccs.png"} width={400} height={400} alt=""></Image>
        </div>
        <div className={styles.parad}>
          <p className="text-5xl font-semibold mb-5 ">Scalping strategy</p>
          <p>
            Scalping is a famous strategy in the stock market. This strategy
            focuses on minor price changes. You need to be accurate on timings
            as the trade duration is small. It is a risk-oriented strategy, but
            it can be very profitable if done correctly.
            <br />
            <br />
            I remember when I first started trading, I was always intrigued by
            scalping techniques. I would watch videos of traders making quick
            profits in minutes, and it looked so exciting! I was definitely
            hesitant to try it out myself, though it seemed like such a
            high-risk move.
            <br />
            <br />
            But after some research and practice, I eventually became confident
            enough to give scalping a try. And boy, was I glad that did! In just
            a few short.
          </p>
        </div>
      </div>

      {/* Forex algorithmic Trading Strategies */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage3.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <p className={styles.head}>Forex algorithmic Trading Strategies</p>
        <div className={styles.main1}>
          <p className={styles.para}>
            No one trader can win every trade. To be successful in Forex
            trading, you need to have a range of strategies that you can use
            depending on the market conditions.
          </p>
          <div>
            <Image
              src={"/image/about/robo-image3.png"}
              width={500}
              height={500}
              alt=""
            ></Image>
          </div>
        </div>
      </div>

      {/* Forex Trend Trading Strategy */}
      <div className={styles.delta2}>
        <div className={styles.parad}>
          <p className="text-5xl font-semibold mb-5 ">
            Forex Trend Trading Strategy{" "}
          </p>
          <p>
            When it comes to trading, it&apos;s important to know the trend of the
            market. After all, that&apos;s what all the technical analysis tools are
            for! But what is foreign exchange market trend? In a nutshell, it
            simply means the direction in which the market moves, it can be a
            little more complicated than that, but basically, if you understand
            trend you&apos;re on your way to understanding forex Trading.
          </p>
        </div>
        <div>
          <Image
            src={"/image/about/robo-image1.png"}
            width={400}
            height={400}
            alt=""
          ></Image>
        </div>
      </div>

      {/* Support and Resistance Trading Strategy */}
      <div
        className={styles.trend2}
        style={{
          backgroundImage: `url(${backgroundImage2.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div>
          <Image src={"/image/about/sccs.png"} width={400} height={400} alt=""></Image>
        </div>
        <div className={styles.parad}>
          <p className="text-5xl font-semibold mb-5 ">
            Support and Resistance Trading Strategy{" "}
          </p>
          <p>
            In order to understand support and resistance trading, you first
            need to know what horizontal levels are. Horizontal levels are price
            levels that indicate either a support or resistance in the market.
            The support and resistance in technical analysis are the terms for
            price lows and highs respectively. The term support indicates the
            area on the chart where buyers are likely to enter the market and
            prop up prices, while resistance is where sellers typically
            congregate and push prices lower.
            <br />
            <br />
            The concept behind support and resistance trading is still the same
            buying a security when we expect it to increase in price and sell
            when expecting its price to go down. Thus, when the price falls to
            the support level, traders decide to buy creating demand and driving
            the price up. In the same way, when the price rises to a resistance
            tevel, traders decide to sell, creating a downward pressure and
            driving the price down...
          </p>
        </div>
      </div>

      {/* Technical indicators in Forex Trading Strategies */}
      <div className={styles.delta2}>
        <div className={styles.parad}>
          <p className="text-5xl font-semibold mb-5 ">
            Technical indicators in Forex Trading Strategies{" "}
          </p>
          <p>
            Traders love technical analysis indicators because they can form buy
            and sell signals through crossovers and divergence. Crossovers are
            reflected when price moves through the moving average or when two
            different moving averages cross each other. Divergence happens when
            the price trend and the indicator trend move in opposite directions
            indicating that the direction of price trend is weakening.
            <br />
            <br />
            But I have to be honest with you, they&apos;re not always right! In fact,
            sometimes they give false signals. For example, a bullish crossover
            can happen when prices are actually dropping, or a bearish
            divergence can form when prices are heading higher. So it&apos;s
            important to use them in conjunction with other indicators and tools
            to get better idea of what&apos;s going on in the market.
            <br />
            <br />
            Moving Average Bollinger Bands,
            <br />
            Relative Strength Index (RSI)
            <br />
            Stochastic Oscillator
            <br />
            Moving Average Convergence/Divergence (MACD)
            <br />
            RSI-Bars
            <br />
            ADX Momentum
            <br />
            You can easily learn how to use each indicator and develop trading
            strategies by indicators
          </p>
        </div>
        <div>
          <Image
            src={"/image/about/stochastic.png"}
            width={400}
            height={400}
            alt=""
          ></Image>
        </div>
      </div>

      {/* Forex Range Trading Strategy */}
      <div
        className={styles.trend2}
        style={{
          backgroundImage: `url(${backgroundImage2.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div>
          <Image
            src={"/image/about/robo-image8.png"}
            width={400}
            height={400}
            alt=""
          ></Image>
        </div>
        <div className={styles.parad}>
          <p className="text-5xl font-semibold mb-5 ">
            Forex Range Trading Strategy{" "}
          </p>
          <p>
            I wanted to talk a little bit about range trading, which is also
            called channel trading. This is a strategy that&apos;s generally used
            during the absence of a trend, and it involves identifying currency
            price movement in channels. The first task is to find the range, and
            this can be done by connecting a series of highs and lows with a
            horizontal trendline. Once you&apos;ve done that, the next step is to
            wait for the market to break out of the range. If it does, you&apos;ll
            want to get into a short position; if it doesn&apos;t, then you&apos;ll want
            to go long. Thanks for listening!
            <br />
            <br />
            In range trading it&apos;s quite easy to find the areas to take profit.
            You can buy at support and sell at resistance as long as the
            security hasn&apos;t broken out of the channel. Otherwise, if the
            breakout direction is not favorable for your position, you may
            undergo huge losses
          </p>
        </div>
      </div>
      <div className={styles.stripe}>
        <div className={styles.schild}>
          <div>
            <Ri24HoursLine className="text-3xl text-white" />
          </div>
          <div>
            <p className="text-2xl font-semibold">24/7 Support Team</p>
            <p className="text-white">
              Our Support Team Always Ready To Help You.
            </p>
          </div>
        </div>
        <div className={styles.schild}>
          <div>
            <FaThumbsUp className="text-3xl text-white" />
          </div>
          <div>
            <p className="text-2xl font-semibold">Quality Services</p>
            <p className="text-white">
              Fully Automated Mechanical Functionally
            </p>
          </div>
        </div>
        <div className={styles.schild}>
          <div>
            <FaMoneyBillTrendUp className="text-3xl text-white" />
          </div>
          <div>
            <p className="text-2xl font-semibold">Budget Friendly</p>
            <p className="text-white">
              Trades executed at the best possible price.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intraday;
