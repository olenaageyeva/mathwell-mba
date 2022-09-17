export const lessons = [{
    title: "Fund life cycle",
    overview: ["Describe the fund life cycle", "Analyze how the fund life cycle affects enterpreneurs"],
    content: [
        {
            type: "plain", image: "/4-1.jpg",
            text: [
                {
                    type: "paragraph",
                    text: "Amusement park rides are fun while they last, but eventually you're ready for the ride to end."
                },
                {
                    type: "paragraph",
                    text: "VCs feel the way about their investments. Let's find out why and how it affects Koastr"
                }
            ]
        },
        {
            type: "plain", image: "/4-2.png",
            text: [
                {
                    type: "plain",
                    text: "As you recall. VC firms don't make investments themselves. Instead, they manage separate"
                },
                { type: "select", text: ["venture funds", "management companies"] },
                { type: "plain", text: [", each of which invests in between 5 and 40 startups"] }
            ]
        },
        {
            type: "side", image: "",
            text: [
                {
                    type: "paragraph",
                    text: "Venture funds are similar to other investment pools, such as mutual funds, in that they allow investors to buy a stake in several companies at once."
                },
                {
                    type: "paragraph",
                    text: "However, whereas mutual funds invest in publicly-traded companies, venture funds invest in provate companies."
                },
            ]
        },
        {
            type: "plain", image: "",
            text: [
                {
                    type: "paragraph",
                    text: "Because they're available on the stock market with constantly updated prices, publicly-traded stocks can be sold "
                },
                {
                    type: "select",
                    text: ["very easily", "only with great difficulty"]
                },
                {
                    type: "paragraph",
                    text: "Because VC funds invest in startups that "
                },
                {
                    type: "select",
                    text: ["are not yet", "are already"]
                },
                {
                    type: "plain",
                    text: " publicly traded, LPs "
                },
                {
                    type: "select",
                    text: ["canot", "can"],
                    explanation: ["There's no open market for the shares and no generally agreed-upon price", ""]
                },
                {
                    type: "plain",
                    text: " easily sell their stake in the fund."
                },
            ]
        },
        {
            type: "plain", image: "",
            text: [
                {
                    type: "paragraph",
                    text: "This is a risky position for a venture fund's LPs. With no easy way to sell their stakes in the fund, how can they get thir money back, let alone turn a profit?"
                },
                {
                    type: "question",
                    text: ["VCs can promise to sell the fund's equity and return the proceeds to the LPs within a specified time frame.", "Investors can wait until each funded startup goes public."],
                    explanation: ["This means VCs work to get the startups to exit events by a set date."]
                },
            ]
        },
        {
            type: "plain", image: "4-3.png",
            text: [
                {
                    type: "paragraph",
                    place: "top",
                    text: "This is why most VCs funds last just 8-12 years: it's about as long as LPs are willing to wait to get their money back."
                },
                {
                    type: "paragraph",
                    place: "top",
                    text: "During that time, venture funds follow the same basic life cycle:"
                },
            ]
        },
        {
            type: "plain", image: "",
            text: [
                {
                    type: "paragraph",
                    text: "First, the GPs raise a fund by "
                },
                {
                    type: "select",
                    text: [ "recruiting LPs to commit capital to the fund","offering the fund on a public exchange"],
                    explanation: ["The VCs set a goal and them keep recruiting investors until they meet it. This article describes Sequola's process of rasing $8 billio for a global growth fund.",""],
                    link: "https://techcrunch.com/2018/06/26/confirmed-sequoia-has-already-secured-three-quarters-of-what-will-be-an-8-billion-global-fund/"
                },
                {
                    type: "paragraph",
                    text: "Once a fund has been raised, it enters the "
                },
                {
                    type: "bold",
                    text: "commitment period "
                },
                {
                    type: "plain",
                    text: ", or investment perios, which lasts around 5 years."
                },
            ]
        },
        {
            type: "side", image: "",
            text: [
                {
                    type: "paragraph",
                    text: "During the commitment period, the GPs scout out new startups and make their initial investments in them."
                },
                {
                    type: "paragraph",
                    text: "This is the time that Anthony should pitch Koastr. Only VCs who have a fund in the commitment period will be able to make an investment" 
                },
                {
                    type: "definition",
                    text: "worth Anthony's while.",
                    definition: "It's important that Anthony conduct due dilligence to find out whether a VC he's reaching out to has a fund in the commitment period. For more, theck out this article from BetaKit.",
                    link: "https://betakit.com/ask-an-investor-how-do-i-handle-vcs-at-the-end-of-their-investment-period/"
                }
            ]
        },        
        {
            type: "plain", image: "",
            text: [
                {
                    type: "paragraph",                   
                    text: "The entire venture fund isn't invested during the commitment period, however. A ",                    
                },
                {
                    type: "bold",                    
                    text: "reserve"
                },
                {
                    type: "plain",                    
                    text: " is set aside specifically for follow-on investments in portfolio companies in "
                },
                {
                    type: "definition",                    
                    text: "later funding rounds",
                    definition: "Usually, VCs invest pro rata in later rounds. meaning if the fun bought 15% of a startup's stock in its initial investment, it'll buy 15% of each future issue of stock. We'll talk more about this in the next course. The Term Sheet."
                },                
                {
                    type: "paragraph",                    
                    text: "What strategic purposes does a reserve serve?"
                },
                {
                    type: "multiple",
                    text: ["Ensuring future funding makes portfolio companies more likely to succeed.", "VCs need to keep some money set aside in case a hot new startup appears.", "It allows the fund to continue to own the same persentage of its portfolio companies, even after later rounds of funding."],
                    ansvers: [1,3],
                    definition:["If a startup needs more funding to make it to a successful exit, the VC wants to make sure it gets that funding.", "If a fund can invest at the same rate - i.e. pro rata - in each round, its ownership persentage of a startup won't drop even when new shares are issued."]
                }
            ]
        },
        {
            type: "plain", image: "/4-6.jpg",
            text: [
                {
                    type: "paragraph",
                    place: "top",
                    text: "We've labeled the capital available for new investments below. Can you label the initial investments, reserve, and follow-on investments?"
                },
                {
                    type: "match",                    
                    text: ["red", "blue", "navy", "yellow"],
                    labels: ["initial investments", "reserve", "follow-on investments", "available capital" ]
                },
            ]
        },
        {
            type: "plain", image: "",
            text: [
                {
                    type: "paragraph",
                    text: "Toward the end of a fund's life, its sturtups hopefully reach their exit events and the fund has a chance to "
                },
                {
                    type: "definition",
                    text: "sell its equity.",
                    definition: "In the case of an IPO, the equity is usually sold over time so as not to flood the murket and crash the stock price."
                },
                {
                    type: "paragraph",
                    text: "As these exits are achieved, the original investments, or principals, and most of the profits - of any - are ",                    
                },
                {
                    type: "select",
                    text: ["paid out to the LPs", "reinvested in the fund"],
                    definition: ["Unfortunatelu for LPs, it's possible that money won't even get back the entirety of their original investment",""]                    
                }
            ]
        },
        {
            type: "plain", image: "",
            text: [
                {
                    type: "paragraph",
                    text: "Through the life cycle of a fund is around 10 years, most VCs raise a new fund every 3-5 years. That way, they always have a fund that is still in its commetment period."
                },
                {
                    type: "paragraph",
                    text: "Why might that be important?"
                },
                {
                    type: "question",
                    text: ["VPs who keep raising new funds wont miss out on new investment opportunities.", "VCs who keep raising funds will give more guidance to portfolio companies."],
                    definition: ["If they don't raise a new fund and the next Facebook comes along, the VCs won't have any money to invest in it.",""]                    
                }
            ]
        },
        {
            type: "match", 
            text: ["Year 0: fundraising", "Year 1-5: commitment period", "Years 3-8: follow-on rounds", "Year 7-10: exit events"],
            labels: ["GPs recruit LPs to invest in the fund", "GPs identify and invest in new startups for their portfolios", "GPs invest more money in successful portfolio companies", "GPs help portfolio companies sell or go public."]
        },
        {
            type: "sort", 
            task: "The fund life cycle has impoertant implications for Koastr. Can you answer the following questions about how the fund life cycle might affect Anthony and his company?",
            text: [ 
                {
                    type: "right",
                    text:  ["A VC raised a $100M fun two years ago. He's invested $85M in startups already, and he wants to offer Koastr $5M. Anthony plans on raising at least two more rounds of funding. Is this VC likely to participate in those later rounds?"],
                    explanation: ["This VC isn't keeping much of a reserve. This means Koastr might have a hard time getting the funds it needs in later rounds."]
                },
                {
                    type: "left",
                    text: ["A GP's fund is in Year 4, but she has some unallocated funds left to invest in one final startup. Given that Anthony wnats to sell Koasrt to an amusement part chain in about 4 years, is this a good match?"]
                },
                {
                    type: "labels",
                    labels: ["Yes", "No"]
                }

            ]
        },
        {
            type: "plain", image: "/4-7.jpg",
            text: [
                {
                    type: "paragraph",                     
                    text: "Thanks to your help. Anthony now has a good idea of how the fund life cycle might affect the Koastr team."
                },
                {
                    type: "paragraph",
                    text: "Next up, let's help Anthony raise some funding."
                }                
            ]
        },
    ],
    keyTerms: ["Commitment period", "Reserve"]
}]