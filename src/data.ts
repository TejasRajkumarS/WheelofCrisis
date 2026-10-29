import { Sector } from './types';

export const SECTORS: Sector[] = [
  {
    id: 'tech-ai',
    name: 'Technology, Software, & AI Sector',
    description: 'Manage regulatory clampdowns, out-of-control recommendation algorithms, cloud infrastructure failures, and deepfake boardroom sabotage.',
    iconName: 'Cpu',
    themeColor: 'cyan',
    colors: {
      primary: '#06b6d4',      // cyan-500
      secondary: '#0891b2',    // cyan-600
      accent: '#22d3ee',       // cyan-400
      border: 'rgba(6, 182, 212, 0.3)',
      bgGlow: 'rgba(6, 182, 212, 0.15)'
    },
    crises: [
      {
        id: 'tech-a',
        letter: 'A',
        title: 'The Privacy & Compliance Hammer',
        context: 'A major system audit reveals your core software platform accidentally logged and exposed sensitive user profiles online. A strict regulatory body (like the DPDP Act) is launching an immediate investigation, threatening a massive fine that could wipe out your annual profit.',
        challenge: 'How does the board handle the legal panic? Do you come clean immediately to protect your brand, or do you fix it quietly behind the scenes?',
        options: [
          {
            label: 'Proactive Disclosure & Cooperation',
            action: 'Self-report the breach to the regulator immediately, issue a public apology, and establish an automated compensation portal for affected users.',
            consequence: 'The regulatory body reduces the potential fine by 60% due to honest self-reporting. However, competitors seize the opportunity for smear campaigns, and stock prices dip in the short term.',
            riskLevel: 'Low',
            financialImpact: '-$8.5M (Mitigated fine + user claims)',
            reputationImpact: 'Trust preserved; praised for gold-standard transparency.'
          },
          {
            label: 'Silent Hotfix & Defensive Litigation',
            action: 'Silently deploy a hotfix to seal the data leak, and hire an elite corporate defense firm to handle regulatory inquiries only if they formally file charges.',
            consequence: 'You avoid immediate public panic, but the regulator discovers you concealed the breach. They levy the maximum possible statutory fine, and a whistleblower leaks the internal cover-up memo to the press.',
            riskLevel: 'High',
            financialImpact: '-$26.0M (Maximum statutory fine + legal defense fees)',
            reputationImpact: 'Severe; catastrophic loss of enterprise clients.'
          }
        ]
      },
      {
        id: 'tech-b',
        letter: 'B',
        title: 'The Rogue AI / Algorithm Glitch',
        context: 'A newly deployed automated feature or recommendation algorithm goes rogue, displaying highly offensive content or blocking legitimate user accounts en masse. It goes viral on tech blogs within hours.',
        challenge: 'How do the developers and the PR lead coordinate? Do you shut down the entire platform for maintenance (losing millions) or patch it live while taking heavy public criticism?',
        options: [
          {
            label: 'Emergency Platform Blackout',
            action: 'Take the entire platform offline immediately for emergency maintenance to isolate the toxic code and protect users, while running an honest status page.',
            consequence: 'The offensive content is safely neutralized, protecting brand safety. However, taking the site down causes a $1.8M loss in immediate ad revenue, and active users are left frustrated.',
            riskLevel: 'Medium',
            financialImpact: '-$1.8M (Ad revenue loss + offline overhead)',
            reputationImpact: 'Slightly dented tech reliability, but praised for safety integrity.'
          },
          {
            label: 'Live Production Hotpatching',
            action: 'Keep the platform fully operational to avoid revenue loss while senior engineers race to deploy a hotfix directly into live production.',
            consequence: 'The rogue algorithm continues to malfunction for 5 hours under active load. Screenshot evidence of the glitch goes viral, trending #1 worldwide, before the hotpatch finally takes hold.',
            riskLevel: 'High',
            financialImpact: '-$4.5M (Brand boycotts + advertiser withdrawal)',
            reputationImpact: 'Highly damaged; labeled as profit-over-safety by major media.'
          }
        ]
      },
      {
        id: 'tech-c',
        letter: 'C',
        title: 'The Cloud Infrastructure Blackout',
        context: 'Your primary cloud service provider suffers a catastrophic hardware failure. Your enterprise software goes completely offline for 14 hours straight during peak global business hours. Corporate clients are threatening to sue for breach of contract.',
        challenge: 'How do you compensate furious business clients without bankrupting the company? What is your immediate backup infrastructure plan?',
        options: [
          {
            label: 'Proactive Service Credits & Multi-Cloud Pivot',
            action: 'Auto-credit all affected enterprise accounts with one month of free service as goodwill, and sign a contract with a secondary cloud provider for redundant failover.',
            consequence: 'Clients appreciate the immediate ownership of the issue and drop threat of litigation. However, the credits and emergency multi-cloud configuration wipe out this quarter’s operating margins.',
            riskLevel: 'Low',
            financialImpact: '-$5.2M (SLA credits + emergency cloud architecture)',
            reputationImpact: 'Enhanced; clients respect the accountability and resilience upgrades.'
          },
          {
            label: 'Force Majeure Claim & Technical Defense',
            action: 'Decline automatic refunds, pointing to the standard third-party hardware exclusion clauses in your SLA, and fight client breach-of-contract lawsuits in court.',
            consequence: 'You protect immediate cash flow, but several anchor enterprise clients are outraged by the corporate rigidity. They decline renewal, shifting to competitors, resulting in long-term churn.',
            riskLevel: 'High',
            financialImpact: '-$11.8M (Enterprise churn + legal representation fees)',
            reputationImpact: 'Damaged; seen as a rigid and untrustworthy business partner.'
          }
        ]
      },
      {
        id: 'tech-d',
        letter: 'D',
        title: 'The Deepfake Sabotage',
        context: 'A highly realistic, AI-generated deepfake video of your CEO announcing a fake bankruptcy or major corporate scandal goes viral on social media, causing your company’s valuation or stock market confidence to plummet 15% in a morning.',
        challenge: 'How do you prove it’s fake to a skeptical public quickly enough to stop the financial bleeding?',
        options: [
          {
            label: 'Live Press Conference & Q&A',
            action: 'Convene a live, physically authenticated press conference with major media networks within 45 minutes, with the real CEO and CFO verifying banking balances live.',
            consequence: 'The immediate visual proof completely refutes the deepfake. The stock market recovers 12% by close of business, halting panic before it solidifies.',
            riskLevel: 'Low',
            financialImpact: '-$0.2M (Emergency PR agency retainer)',
            reputationImpact: 'Extremely strong; hailed as an exemplary model for combating digital sabotage.'
          },
          {
            label: 'Cryptographic Verification & Platform Take-down',
            action: 'Rely on forensic algorithms to generate a synthetic media report, submit take-down notices to social networks, and file John Doe defamation lawsuits.',
            consequence: 'Take-downs are slow, taking 24 hours to propagate. During this time, trading algorithms execute automated stop-losses, crystallizing paper losses into permanent market cap damage.',
            riskLevel: 'Medium',
            financialImpact: '-$9.5M (Solidified equity drop + long-term investor suit)',
            reputationImpact: 'Perceived as slow, bureaucratic, and technically outmatched.'
          }
        ]
      }
    ]
  },
  {
    id: 'gaming-stream',
    name: 'Gaming, Streaming, & Entertainment Tech',
    description: 'Navigate predatory market disruptions, toxic user communities, DRM hacks, and sudden App Store bans by mobile duopolies.',
    iconName: 'Gamepad2',
    themeColor: 'fuchsia',
    colors: {
      primary: '#d946ef',      // fuchsia-500
      secondary: '#c026d3',    // fuchsia-600
      accent: '#f5d0fe',       // fuchsia-100 or lighter
      border: 'rgba(217, 70, 239, 0.3)',
      bgGlow: 'rgba(217, 70, 239, 0.15)'
    },
    crises: [
      {
        id: 'gaming-a',
        letter: 'A',
        title: 'The Free-to-Play Killer Competitor',
        context: 'A massive tech giant suddenly launches a completely free, open-source version of your flagship streaming or gaming platform. Prominent creators and influencers are jumping ship because the rival platform offers zero platform fees and better monetization.',
        challenge: 'Your user engagement is dropping rapidly. Do you slash your own subscription prices, offer exclusive creator contracts, or pivot to a completely new feature set?',
        options: [
          {
            label: 'Zero-Fee Creator Matching & Grants',
            action: 'Abolish your platform cut for the top 300 creators and issue a $15M creator retention fund backed by equity grants.',
            consequence: 'Stops the creator exodus immediately and locks down your most valuable brands. However, it completely dry-shaves your platform profit margins, forcing a delay in critical core R&D.',
            riskLevel: 'Medium',
            financialImpact: '-$15.0M (Retention fund payouts + zero margin fee)',
            reputationImpact: 'Celebrated by creators; investors express serious concern over long-term profitability.'
          },
          {
            label: 'Premium Feature Pivot & AR/VR Integration',
            action: 'Ignore the fee war. Maintain your premium subscription model but rapidly integrate advanced multiplayer interaction features and exclusive interactive camera tools.',
            consequence: 'Retains your core tech-enthusiast user base, but the massive, casual user base continues migrating to the free rival. Your platform becomes a premium but highly specialized niche.',
            riskLevel: 'High',
            financialImpact: '-$6.0M (R&D acceleration costs + lost casual subscription revenue)',
            reputationImpact: 'Seen as an innovative industry leader, but losing mass market relevance.'
          }
        ]
      },
      {
        id: 'gaming-b',
        letter: 'B',
        title: 'The Severe Toxic Community Backlash',
        context: 'Your platform is accused by mainstream media of failing to curb toxic behavior and cyberbullying. Advertisers are pulling out their sponsorships overnight, claiming your platform is unsafe for youth brands.',
        challenge: 'How does the board balance community freedom with intense advertiser pressure? What immediate moderation policies do you implement to win back sponsors?',
        options: [
          {
            label: 'Automated AI Moderation & Real-Name Verification',
            action: 'Deploy a zero-tolerance automated word filter, shadowban toxic players, and mandate optional real-name ID verification for premium match lobbies.',
            consequence: 'Advertisers are pacified and slowly return their sponsorship dollars. However, the core player base launches a fierce backlash against "excessive censorship", and daily active users decrease by 12%.',
            riskLevel: 'Medium',
            financialImpact: '-$2.2M (Slight user monetization drop + moderation software licenses)',
            reputationImpact: 'Acclaimed by mainstream media; heavily criticized as "sanitized" by hardcore gamers.'
          },
          {
            label: 'Peer-to-Peer Community Councils',
            action: 'Establish democratic player tribunals and community-appointed moderators to self-govern toxicity organically, maintaining open communication channels.',
            consequence: 'Players love the self-governance model, but advertisers view it as a weak and slow response. Sponsorships remain frozen, forcing you to shift your core business model to direct-to-consumer microtransactions.',
            riskLevel: 'High',
            financialImpact: '-$12.5M (Loss of major corporate ad contracts)',
            reputationImpact: 'Admired for free speech and trust; financially starved by corporate boycotts.'
          }
        ]
      },
      {
        id: 'gaming-c',
        letter: 'C',
        title: 'The Anti-Cheat / Security Hack Disaster',
        context: 'A major security breach allows malicious hackers to completely bypass your application\'s anti-cheat or DRM security. The platform is flooded with exploiters, destroying the fair-play environment for regular users.',
        challenge: 'Do you delay a massive upcoming software update to focus entirely on security, or do you push forward and risk alienating your player base?',
        options: [
          {
            label: 'Code Freeze & Core Anti-Cheat Reconstruction',
            action: 'Institute a mandatory 3-week general software freeze. Reassign all designers and programmers to completely rebuild the kernel-level anti-cheat system.',
            consequence: 'The hackers are neutralized, and fair-play metrics rebound to 99%. However, delaying the highly-anticipated Seasonal Expansion Pack angers marketing partners and delays quarterly billing.',
            riskLevel: 'Low',
            financialImpact: '-$3.5M (Delayed expansion billing + emergency engineering hours)',
            reputationImpact: 'Massive recovery of competitive player trust; seen as technically competent.'
          },
          {
            label: 'Release seasonal expansion & Patch on-the-fly',
            action: 'Release the seasonal expansion on schedule to meet critical sales targets, while a small background taskforce attempts to patch security gaps in parallel.',
            consequence: 'The new expansion is immediately compromised by hackers on day one. Normal players encounter exploiters within minutes, causing a wave of toxic reviews and viral rage videos.',
            riskLevel: 'High',
            financialImpact: '-$14.0M (Uninstalls + chargebacks + long-term player churn)',
            reputationImpact: 'Severely damaged; labeled an "unplayable disaster" by mainstream gaming outlets.'
          }
        ]
      },
      {
        id: 'gaming-d',
        letter: 'D',
        title: 'The App Store Ban Pitfall',
        context: 'Due to a sudden policy disagreement over in-app payment processing fees, both Apple and Google completely pull your application from their app stores, cutting off 70% of your mobile download and revenue pipeline.',
        challenge: 'How do you sustain mobile user growth and handle payments when your primary distribution networks are completely blocked?',
        options: [
          {
            label: 'Independent Progressive Web App (PWA) Pivot',
            action: 'Launch an optimized mobile web version with a 15% discount for users who register and pay directly via your own payment gateway.',
            consequence: 'Loyal players migrate and you completely bypass the 30% store tax, increasing margins per user. However, new user organic discovery drops by 75% without store presence.',
            riskLevel: 'Medium',
            financialImpact: '-$5.0M (Decline in new organic installations, offset by better checkout margins)',
            reputationImpact: 'Praised as an anti-monopoly rebel; admired by tech and financial journals.'
          },
          {
            label: 'Full Capitulation & Surcharge Pass-through',
            action: 'Accept the store policies, sign the standard platform distributor agreements, and raise your in-game purchase prices by 30% to transfer the store tax to the consumer.',
            consequence: 'Your app is restored to the app stores within 12 hours. However, your community is furious about the sudden pricing markups, resulting in an immediate 40% drop in transaction volume.',
            riskLevel: 'Low',
            financialImpact: '-$9.2M (Loss in microtransaction transaction volume)',
            reputationImpact: 'Perceived as weak, bowing to tech giants at the expense of player wallets.'
          }
        ]
      }
    ]
  },
  {
    id: 'fitness-health',
    name: 'Fitness, Health Tech, & Wearables',
    description: 'Protect biometric integrity, address safety hazards, manage subscription model backlashes, and resolve dark-web health data leaks.',
    iconName: 'HeartPulse',
    themeColor: 'emerald',
    colors: {
      primary: '#10b981',      // emerald-500
      secondary: '#059669',    // emerald-600
      accent: '#a7f3d0',       // emerald-200
      border: 'rgba(16, 185, 129, 0.3)',
      bgGlow: 'rgba(16, 185, 129, 0.15)'
    },
    crises: [
      {
        id: 'health-a',
        letter: 'A',
        title: 'The Inaccurate Algorithm Exposure',
        context: 'A popular tech YouTuber runs a strict laboratory test and proves that your premium health-tracking wearable gives completely inaccurate health data (e.g., miscalculating heart rates by 25%). The video gets millions of views, and users are demanding mass refunds.',
        challenge: 'How does the product lead defend the company’s engineering? Do you issue a costly product recall or try to patch it via a remote software update?',
        options: [
          {
            label: 'Voluntary Global Recall & Exchange',
            action: 'Formally apologize, halt current retail sales, and issue a voluntary product recall offering cash refunds or free upgraded sensor modules to all owners.',
            consequence: 'Saves your scientific credibility and proves the brand puts health over profits. However, the hardware recall logistics completely bankrupts your immediate cash reserves, requiring emergency venture debt.',
            riskLevel: 'Medium',
            financialImpact: '-$28.5M (Recall logistics + refunds + inventory write-downs)',
            reputationImpact: 'Excellent; long-term clinical and consumer trust completely saved.'
          },
          {
            label: 'Remote OTA Firmware Re-calibration',
            action: 'Release a detailed whitepaper defending your raw sensor technology as a lifestyle tool, while rolling out an overnight OTA calibration firmware patch.',
            consequence: 'You avoid the massive expense of a hardware recall. However, elite fitness reviewers conduct follow-up tests and find the patch merely smooths the data curve, creating ongoing media skepticism.',
            riskLevel: 'High',
            financialImpact: '-$3.5M (PR campaign + urgent engineering team deployment)',
            reputationImpact: 'Damaged; labeled as "pseudo-scientific" by medical journals and pro athletes.'
          }
        ]
      },
      {
        id: 'health-b',
        letter: 'B',
        title: 'The Subscription Paywall Rebellion',
        context: 'To increase profit margins, your executive team decides to lock previously free hardware features behind a monthly premium subscription. The community throws a massive internet rebellion, flooding app stores with 1-star reviews.',
        challenge: 'Your app rating drops from 4.7 to 1.8 stars in 48 hours. Do you double down on the revenue strategy or surrender to user demands and reverse the decision?',
        options: [
          {
            label: 'Full Policy Reversal & Peace Offering',
            action: 'Immediately dismantle the hardware paywall, make the basic metrics free forever, and give all active users 3 months of premium coaching content as an apology.',
            consequence: 'The community celebrates. App store ratings climb back to 4.3 stars within a week. However, the board cancels the CEO\'s financial bonuses due to the loss of millions in projected recurring revenues.',
            riskLevel: 'Low',
            financialImpact: '-$7.5M (Lost projected Annual Recurring Revenue)',
            reputationImpact: 'Superb; praised as a customer-first brand that listens to its community.'
          },
          {
            label: 'Hybrid Feature Tier & Executive Defense',
            action: 'Maintain the subscription tier, but launch a public campaign explaining that subscription fees fund expensive ongoing server processing and high-end security.',
            consequence: 'Saves about 40% of the projected recurring revenue from dedicated power-users. However, casual users abandon the ecosystem for competitors, leaving the app store rating permanently stalled at 3.1.',
            riskLevel: 'Medium',
            financialImpact: '+$2.5M (Captured recurring revenue minus lost customer lifetime value)',
            reputationImpact: 'Slightly tarnished; seen as a standard, profit-hungry corporate player.'
          }
        ]
      },
      {
        id: 'health-c',
        letter: 'C',
        title: 'The Smart Band Battery Hazard',
        context: 'Three isolated reports emerge on social media showing that your company’s latest smart band model overheated and caused minor skin burns to users while they slept. Government consumer safety boards are beginning to investigate.',
        challenge: 'Do you pull the entire product line from shelves based on just three reports, or do you wait for official lab results while risking a larger PR disaster?',
        options: [
          {
            label: 'Precautionary Quarantine & Investigation',
            action: 'Immediately halt global sales of the model, pull inventory from shelves, and publicly urge users to stop wearing the band during sleep while an independent lab conducts tests.',
            consequence: 'Ensures absolute consumer safety and shields you from product liability lawsuits. The lab test reveals a rare chemical adhesive reaction under specific humidity conditions, which you easily fix in next-gen batches.',
            riskLevel: 'Low',
            financialImpact: '-$5.8M (Paused retail sales + laboratory testing fees)',
            reputationImpact: 'Acclaimed for prioritizing health safety; corporate ethics rating rises.'
          },
          {
            label: 'Observe Market & Maintain Distribution',
            action: 'Issue a basic safety tip notice on your website, but keep the product actively selling in stores while conducting a quiet, internal, non-public investigation.',
            consequence: 'A fourth, much more severe burn incident is reported, involving a child. The consumer safety board issues an involuntary, high-profile seizure of your retail goods and files massive punitive lawsuits.',
            riskLevel: 'High',
            financialImpact: '-$24.5M (Government penalties + class-action lawsuits + forced recall)',
            reputationImpact: 'Disastrous; branded as negligent and unsafe. Retailers terminate distribution contracts.'
          }
        ]
      },
      {
        id: 'health-d',
        letter: 'D',
        title: 'The Biometric Data Leak Auction',
        context: 'Cybercriminals successfully breach your fitness database and threaten to sell the private biometric health data, location history, and sleep cycles of 2 million users on the dark web unless you pay a massive multi-million-dollar ransom.',
        challenge: 'Do you pay the ransom illegally to protect user privacy, or do you refuse to negotiate with terrorists, face the data leak, and deal with the public fallout?',
        options: [
          {
            label: 'Refuse Ransom & Full Public Disclosure',
            action: 'Refuse the ransom payment, report the attack immediately to the FBI and GDPR regulators, and trigger forced password resets for all 2 million users with a sincere warning.',
            consequence: 'The criminals release the data, leading to intense regulatory scrutiny and class-action lawsuits. However, you maintain absolute compliance with federal anti-terrorism laws and avoid paying blackmailers.',
            riskLevel: 'Medium',
            financialImpact: '-$14.0M (Regulatory compliance penalties + cybersecurity audit)',
            reputationImpact: 'Severely shaken in the short term, but recognized for ethical and legal compliance.'
          },
          {
            label: 'Secret Ransom Settlement',
            action: 'Pay the $2.5M cryptocurrency ransom quietly via an intermediary, and obtain a certificate of data destruction from the hacker cartel.',
            consequence: 'The hackers take your money. However, three weeks later, they sell the database anyway to an anonymous bidder on the dark web. Regulators discover the secret payment, doubling your statutory fines for non-disclosure.',
            riskLevel: 'High',
            financialImpact: '-$21.5M ($2.5M ransom lost + double GDPR fines for concealment)',
            reputationImpact: 'Catastrophic; labeled as both incompetent in security and deceptive to users.'
          }
        ]
      }
    ]
  },
  {
    id: 'ev-mobility',
    name: 'EV & Smart Mobility (Automotive Tech)',
    description: 'Navigate global supply chain embargoes, dangerous OTA firmware bugs, massive price wars, and high-profile autopilot safety reviews.',
    iconName: 'Car',
    themeColor: 'amber',
    colors: {
      primary: '#f59e0b',      // amber-500
      secondary: '#d97706',    // amber-600
      accent: '#fde68a',       // amber-200
      border: 'rgba(245, 158, 11, 0.3)',
      bgGlow: 'rgba(245, 158, 11, 0.15)'
    },
    crises: [
      {
        id: 'ev-a',
        letter: 'A',
        title: 'The Raw Material Gridlock',
        context: 'A sudden geopolitical conflict or strict trade embargo halts the export of a critical rare earth metal needed to manufacture your EV batteries. Your global factory production line is forced to pause for an indefinite period.',
        challenge: 'Thousands of customers have pre-ordered your vehicles and paid deposits. How does the operations lead pivot the supply chain, and how does the CEO stop customers from canceling their orders?',
        options: [
          {
            label: 'Secure Domestic Supply & Offer Loyalty Credits',
            action: 'Procure high-cost raw materials from a domestic recycling plant at a 45% premium, and give all pre-order clients $1,500 in free charging credits to maintain their orders.',
            consequence: 'Production resumes in just 3 weeks. Although the battery premium completely wipes out your gross margins on this model, customer cancellation rates remain under 4%.',
            riskLevel: 'Low',
            financialImpact: '-$16.5M (Increased battery raw material costs + customer credits)',
            reputationImpact: 'Hailed as a resilient, customer-focused champion of local supply chains.'
          },
          {
            label: 'Issue Delay Notices & Pay Deposit Interest',
            action: 'Keep production on hold indefinitely while lobbying to resolve the trade dispute, sending waitlists 8-month delay letters with a 4% annual interest payment on their deposits.',
            consequence: 'Fearing the company might face insolvency, 55% of your pre-order customers cancel their deposits immediately, causing an acute cash liquidity crisis.',
            riskLevel: 'High',
            financialImpact: '-$38.0M (Mass cash refunds + factory idle overhead)',
            reputationImpact: 'Perceived as structurally vulnerable and financially unstable.'
          }
        ]
      },
      {
        id: 'ev-b',
        letter: 'B',
        title: 'The Over-the-Air (OTA) Software Brick',
        context: 'A routine overnight wireless software update accidentally "bricks" (completely freezes) the navigation and charging systems of 10,000 vehicles parked in customer garages. The cars cannot be driven, and customer support lines are crashing.',
        challenge: 'How do you deploy physical technical help to thousands of stranded customers simultaneously? How do you repair your reputation for software reliability?',
        options: [
          {
            label: 'Mobile Technician Armada & Rideshare Credits',
            action: 'Deploy all field technicians and certified third-party mechanics to customer homes with USB manual recovery keys, and issue $150 rideshare vouchers.',
            consequence: 'Every single bricked vehicle is successfully recovered within 48 hours. The proactive door-to-door service and rideshare vouchers turn customer frustration into viral positive PR.',
            riskLevel: 'Low',
            financialImpact: '-$3.8M (Field technician labor + customer rideshare credits)',
            reputationImpact: 'Pristine; praised as a spectacular masterclass in modern customer service.'
          },
          {
            label: 'Service Center Routing & Standard Towing',
            action: 'Instruct customers to arrange towing to the nearest official dealership or service center, handling claims through standard insurance reimbursement.',
            consequence: 'Local towing networks are completely overwhelmed, blocking highway lanes. Stranded vehicles sit in driveways for up to 12 days, resulting in national ridicule and consumer litigation.',
            riskLevel: 'High',
            financialImpact: '-$9.5M (Towing reimbursements + dealer backlog penalties + lost buyers)',
            reputationImpact: 'Highly damaged; labeled as technically incompetent and structurally unprepared.'
          }
        ]
      },
      {
        id: 'ev-c',
        letter: 'C',
        title: 'The Competitor’s Price-War Shock',
        context: 'The undisputed market leader in the EV space suddenly cuts their vehicle prices by a massive 25%, making their premium models significantly cheaper than your entry-level vehicle. Your new sales completely flatline.',
        challenge: 'Your profit margins are already razor-thin. Do you lower your prices and take a massive financial loss, or do you try to convince consumers that your technology is worth the premium price?',
        options: [
          {
            label: 'Value-Add Software & Supercharging Bundling',
            action: 'Keep your vehicle prices firm, but include your $8,000 autonomous driving package and 5 years of supercharging for free for all new buyers.',
            consequence: 'You preserve your brand\'s premium luxury positioning and appeal to tech-forward buyers. Vehicle margins remain healthy, and sales climb back to 85% of targets.',
            riskLevel: 'Medium',
            financialImpact: '-$2.5M (Marginal software licensing opportunity cost)',
            reputationImpact: 'Seen as an innovative, premium market player that refuses to participate in race-to-the-bottom pricing.'
          },
          {
            label: 'Immediate 25% Price-Cut Matching',
            action: 'Slash your vehicle prices by 25% across the board immediately, taking an operating loss on every car sold.',
            consequence: 'Sales volume temporarily surges, but you burn through cash reserves at an alarming, unsustainable rate, risking bankruptcy within 10 months without immediate external financing.',
            riskLevel: 'High',
            financialImpact: '-$22.0M (Direct operating loss on vehicle sales)',
            reputationImpact: 'Perceived as desperate, with diminished luxury brand status.'
          }
        ]
      },
      {
        id: 'ev-d',
        letter: 'D',
        title: 'The Autopilot/Smart Navigation Investigation',
        context: 'A high-profile accident involving your vehicle’s smart driving or driving-assist feature hits national news headlines. Government transport authorities order an immediate freeze on your smart driving features until a full safety review is completed.',
        challenge: 'Your core selling point has just been legally disabled. How do you market and sell your vehicle when its most advanced tech feature is temporarily banned?',
        options: [
          {
            label: 'Analog Safety & Craftsmanship Marketing',
            action: 'Immediately comply with the freeze, pivot your advertising campaign to highlight the structural safety, luxury cabin, and manual driving performance, while cooperating with authorities.',
            consequence: 'Complying with the freeze protects the company from additional liability. The federal safety review is completed in 6 weeks, resulting in a minor software patch, and your features are restored.',
            riskLevel: 'Low',
            financialImpact: '-$1.5M (Repurposed ad campaign costs)',
            reputationImpact: 'Highly praised as a transparent, safety-focused, and collaborative company.'
          },
          {
            label: 'Aggressive PR Pushback & Crash Log Disclosure',
            action: 'Publicly blame the driver for driver negligence, aggressively release telemetry crash logs to social media, and legally appeal the regulator\'s freeze order in court.',
            consequence: 'Regulators view this as a hostile attempt to influence a safety investigation. They extend the ban indefinitely, expand the scope of the probe, and public confidence collapses.',
            riskLevel: 'High',
            financialImpact: '-$16.0M (Extended ban sales drop + intense regulatory legal fees)',
            reputationImpact: 'Perceived as combative, arrogant, and negligent regarding public safety.'
          }
        ]
      }
    ]
  }
];
