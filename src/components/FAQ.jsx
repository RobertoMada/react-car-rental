import React, { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const FAQ = () => {
  const [displayAnswer, setDisplayAnswer] = useState(null);

  const keyShowAnswer = (e) => {
    if (e.keyCode === 13) {
      setDisplayAnswer(e.target.id);
    }
  };

  const showAnswer = (id) => {
    if (displayAnswer !== id) {
      setDisplayAnswer(id);
    } else {
      setDisplayAnswer(null);
    }
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-content">
          <div className="faq-content__title">
            <h3>FAQ</h3>
            <h2>Frequently Asked Questions</h2>
            <p>
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>
          <div className="faq-content__questions-box">
            <div
              onKeyDown={keyShowAnswer}
              tabIndex={0}
              className="faq-content__questions-box__question"
              id="q1"
              onClick={() => showAnswer("q1")}
              aria-expanded={displayAnswer === "q1" ? true : false}
            >
              <div>
                <h4>1. What is special about comparing rental car deals?</h4>
                {displayAnswer === "q1" ? (
                  <IconChevronUp />
                ) : (
                  <IconChevronDown />
                )}
              </div>
              <p
                className={
                  displayAnswer === "q1" ? "active-answer" : "close-answer"
                }
              >
                Comparing rental car deals is important as it helps find the
                best deal that fits your budget and requirements, ensuring you
                get the most value for your money. By comparing various options,
                you can find deals that offer lower prices, additional services,
                or better car models. You can find car rental deals by
                researching online and comparing prices from different rental
                companies.
              </p>
            </div>
            <div
              onKeyDown={keyShowAnswer}
              tabIndex={0}
              className={`faq-content__questions-box__question`}
              id="q2"
              onClick={() => showAnswer("q2")}
              aria-expanded={displayAnswer === "q2" ? true : false}
            >
              <div>
                <h4>2. How do I find the car rental deals?</h4>
                {displayAnswer === "q2" ? (
                  <IconChevronUp />
                ) : (
                  <IconChevronDown />
                )}
              </div>

              <p
                className={
                  displayAnswer === "q2" ? "active-answer" : "close-answer"
                }
              >
                You can find car rental deals by researching online and
                comparing prices from different rental companies. Websites such
                as Expedia, Kayak, and Travelocity allow you to compare prices
                and view available rental options. It is also recommended to
                sign up for email newsletters and follow rental car companies on
                social media to be informed of any special deals or promotions.
              </p>
            </div>
            <div
              onKeyDown={keyShowAnswer}
              tabIndex={0}
              className="faq-content__questions-box__question"
              id="q3"
              onClick={() => showAnswer("q3")}
              aria-expanded={displayAnswer === "q3" ? true : false}
            >
              <div>
                <h4>3. How do I find such low rental car prices?</h4>
                {displayAnswer === "q3" ? (
                  <IconChevronUp />
                ) : (
                  <IconChevronDown />
                )}
              </div>

              <p
                className={
                  displayAnswer === "q3" ? "active-answer" : "close-answer"
                }
              >
                Book in advance: Booking your rental car ahead of time can often
                result in lower prices. Compare prices from multiple companies:
                Use websites like Kayak, Expedia, or Travelocity to compare
                prices from multiple rental car companies. Look for discount
                codes and coupons: Search for discount codes and coupons that
                you can use to lower the rental price. Renting from an
                off-airport location can sometimes result in lower prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
