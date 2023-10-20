const newsData = [
    {
    id: "012",
    picture: "./images/image12finance.jpg",
    title: "European Central Bank Hints at Policy Shift",
    text: "Amid changing global economic landscapes, the European Central Bank is hinting at a major policy shift. Financial experts predict this could involve interest rate adjustments and strategies to combat inflation. Markets are closely watching the developments, anticipating ripple effects.",
    location: "Frankfurt, Germany",
    published: "Today, 2:00PM",
    author: "Matthias Vogel",
    },
    {
    id: "009",
    picture: "./images/image09healthcare.jpg",
    title: "Africa Launches Massive Vaccination Drive",
    text: "A pan-African vaccination drive, the largest of its kind, has been initiated to combat various diseases, including COVID-19. Supported by international donors, this initiative aims to achieve 70% vaccination across the continent by end of the year. Challenges remain, but the momentum is positive.",
    location: "Nairobi, Kenya",
    published: "Yesterday, 10:22AM",
    author: "Grace Wanjiru",
    },
    {
    id: "008",
    picture: "./images/image08australia.jpg",
    title: "Australian PM Proposes New Climate Bill",
    text: "In light of global climate change discussions, the Australian Prime Minister has proposed a comprehensive climate bill. The legislation aims to cut down emissions by 50% by 2030. Environmentalists are hopeful, but the mining industry warns of economic repercussions.",
    location: "Canberra, Australia",
    published: "5 days ago",
    author: "Ethan Brown",
    },  
    {
    id: "005",
    picture: "./images/image05army.jpg",
    title: "Tensions Escalate on Korean Peninsula",
    text: "As military exercises continue near the border, tensions between North and South Korea have reached a new peak. International observers are closely monitoring the situation, urging diplomacy. The UN Security Council is slated to have an emergency meeting regarding the escalation, with several nations calling for restraint.",
    location: "Seoul, South Korea",
    published: "4 days ago",
    author: "Min-Jae Kim",
    },
    {
    id: "003",
    picture: "./images/image03bush.jpg",
    title: "Bush Announces New Green Initiative",
    text: "In a landmark address, ex-US President George Bush has unveiled an ambitious green initiative aimed at transforming the nation's energy landscape. The multi-billion dollar plan focuses on solar and wind energy, with the goal of achieving carbon neutrality by 2045. Environmentalists have praised the move, though it faces opposition from traditional energy sectors and certain congressional members.",
    location: "Washington D.C., USA",
    published: "Just Now",
    author: "Rebecca Sanchez",
    },
    {
    id: "006",
    picture: "./images/image06tech.jpg",
    title: "AI Tech Transforms European Industries",
    text: "Europe is witnessing a revolution in its industries, thanks to the adoption of cutting-edge AI technologies. From healthcare to manufacturing, AI-driven solutions are paving the way for increased efficiency and innovative products. However, with the tech boom comes concerns about data privacy and job displacement.",
    location: "Berlin, Germany",
    published: "Today, 8:15AM",
    author: "Lukas Müller",
    },
    {
    id: "004",
    picture: "./images/image04virus.jpg",
    title: "WHO Reports Major Breakthrough in Malaria Fight",
    text: "The World Health Organization announced today a significant advancement in the fight against malaria. A new vaccine, developed after decades of research, has shown a high efficacy rate in initial trials. Health experts believe this could be a game-changer in eradicating the disease, especially in sub-Saharan Africa where malaria is prevalent. International donors are already pledging support to facilitate the vaccine's distribution.",
    location: "Geneva, Switzerland",
    published: "3 days ago",
    author: "Françoise Dubois",
    },  
    {
    id: "007",
    picture: "./images/image07latin.jpg",
    title: "Latin America Faces Financial Crunch",
    text: "Amidst global economic shifts, several countries in Latin America are grappling with a financial downturn. International monetary bodies are stepping in with aid packages, but local economists argue for structural reforms. Protests have erupted in some areas, with citizens demanding economic justice and transparency.",
    location: "Buenos Aires, Argentina",
    published: "2 days ago",
    author: "Sofia Rodriguez",
    },
    {
    id: "001",
    picture: "./images/image01johannesbourg.jpg",
    title: "Johannesburg hosting BRICS Summit with major topics",
    text: "In a significant move to bolster international relations, Xi Jinping, the President of China, made his way to South Africa for the latest BRICS summit. The event drew significant attention as several countries from various continents expressed interest in joining the organization. Notably, Russian President Vladimir Putin was absent from the event, with Foreign Minister Sergey Lavrov taking his place. This development suggests a potential shift in the political dynamics of the group.",
    location: "Johannesburg, RSA",
    published: "Yesterday, 2:43AM",
    author: "Dylan El-Ratón",
    },
    {
    id: "010",
    picture: "./images/image10war.jpg",
    title: "Middle East Peace Talks Resume in Cairo",
    text: "In a bid to bring stability to the Middle East, peace talks have resumed in Cairo. Several nations are participating, seeking a resolution to ongoing conflicts. The international community is optimistic, though past negotiations have seen multiple setbacks.",
    location: "Cairo, Egypt",
    published: "3 days ago",
    author: "Ahmed Faisal",
    },
    {
    id: "002",
    picture: "./images/image02cryptoB.jpg",
    title: "Crypto Market Faces Unprecedented Surge",
    text: "The global cryptocurrency market is experiencing a historic surge as Bitcoin and Ethereum reach all-time highs. Financial analysts attribute this growth to increased adoption in retail and institutional sectors. Several countries have also hinted at introducing national digital currencies, further cementing the crypto industry's position in the global economy. These developments come amidst regulatory concerns and debates on crypto's environmental impact.",
    location: "Tokyo, Japan",
    published: "Today, 1:30PM",
    author: "Hiroshi Nakamura",
    },
    {
    id: "011",
    picture: "./images/image11tech.jpg",
    title: "Tech Giants Collaborate on Quantum Computing",
    text: "Leading technology companies from around the world are coming together to advance quantum computing research. The collaboration seeks to make quantum technology more accessible and commercially viable. This unprecedented partnership has the potential to usher in a new era of computing.",
    location: "Silicon Valley, USA",
    published: "Just Now",
    author: "Natalie Turner",
    },
];

const galleryData = [
    {
        ref: "p001",
        image: "./images/pic01.jpg",
        text: "Algeria Triumphs with Independence - A jubilant celebration sweeps the nation as Algeria breaks free from France's colonial grasp.",
        year: "1962"
    },
    {
        ref: "p002",
        image: "./images/pic02.jpg",
        text: "End of the Colosseum's Gladiatorial Contests - The iconic Colosseum of Rome witnesses its final gladiatorial battle as changing social and political climates evolve.",
        year: "435"
    },
    {
        ref: "p003",
        image: "./images/pic03.jpg",
        text: "Nelson Mandela Released - After 27 years of imprisonment, Mandela walks free, becoming a beacon of hope and resilience.",
        year: "1990"
    },
    {
        ref: "p004",
        image: "./images/pic04.jpg",
        text: "Moon Landing Achieved - Humanity takes its first steps on an alien world as Armstrong utters the immortal words, 'That's one small step for man, one giant leap for mankind'.",
        year: "1969"
    },
    {
        ref: "p005",
        image: "./images/pic05.jpg",
        text: "India Embraces Freedom - The dawn of a new era begins as India sheds the chains of British colonial rule.",
        year: "1947"
    },
    {
        ref: "p006",
        image: "./images/pic06.jpg",
        text: "Cuban Missile Crisis Ends - A sigh of relief echoes around the world as the U.S. and the Soviet Union pull back from the brink of nuclear war.",
        year: "1962"
    },
    {
        ref: "p007",
        image: "./images/pic07.jpg",
        text: "First World War Concludes - The 'war to end all wars' reaches its somber conclusion, reshaping global politics and borders.",
        year: "1918"
    },
    {
        ref: "p008",
        image: "./images/pic08.jpg",
        text: "Birmingham Triumphs Over Plagues - Birmingham demonstrates resilience and adaptability as the city successfully navigates the challenges of 18th-century plagues.",
        year: "1700s"
    }
];
  
export { newsData, galleryData };
