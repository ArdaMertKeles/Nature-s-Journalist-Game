import { useEffect, useState } from "react";
import bartender from '../images/bartender.jpg'
import carlaImg from '../images/carla.webp'
import harryImg from '../images/harry.webp'
import jewelry from '../images/jewelry.webp'
import josefImg from '../images/josef.webp'
import margaretImg from '../images/margaret.webp'
import miners from '../images/miners.webp'
import oldman from '../images/oldman.webp'
import oldjack from '../images/oldjack.webp'
import sherrif from '../images/sheriff.webp'
import youngboy from '../images/youngboy.webp'

export default function Story({ setStory }) {

    const [knife, setKnife] = useState(false)
    const [carla, setCarla] = useState(false)
    const [josef, setJosef] = useState(false)
    const [wilson, setWilson] = useState(false)
    const [margaret, setMargaret] = useState(false)
    const [harry, setHarry] = useState(false)

    const storyDots = {
        start: {
            profilePicture: bartender,
            cpName: 'Main',
            text: 'You are a journalist who are going to research about multiple killing and missing cases in a village.',
            choices: [
                { text: 'Next', next: 'start2' },
            ]
        },
        start2: {
            profilePicture: bartender,
            cpName: 'Main',
            text: 'Your case is trying to find who is the killer and where are all those people went',
            choices: [
                { text: 'Next', next: 'start3' }
            ]
        },
        start3: {
            profilePicture: bartender,
            cpName: 'Main',
            text: "Now, if you are ready we're going to send you to that village",
            choices: [
                { text: "Yes, i'm ready...", next: 'start4' },
                { text: "Hell nah, i don't have any other choices...", next: 'start4' }
            ]
        },
        start4: {
            profilePicture: bartender,
            cpName: 'Main',
            text: "Your choices may effect the storyline...",
            choices: [
                { text: "Okey", next: 'firstEncounter' }
            ]
        },
        firstEncounter: {
            profilePicture: bartender,
            cpName: 'Town',
            text: "You entered the town. First thing you encounter is mayor. He is here to inform you about cases.",
            choices: [
                { text: "Next", next: 'firstEncounter2' }
            ]
        },
        firstEncounter2: {
            profilePicture: bartender,
            cpName: 'Mayor',
            text: "Welcome to our town Mr. Sullivan... I assume yo're a little aware of things going on here. In last few months there was a lot of missing and killing cases.",
            choices: [
                { text: "May i ask for main suspect's list?", next: 'firstEncounter2Answer1' },
                { text: "Can you get me to the my cabin Mr. Mayor", next: 'firstEncounter3' }
            ]
        },
        firstEncounter2Answer1: {
            profilePicture: bartender,
            cpName: 'Mayor',
            text: "I'm afraid i don't have that list... You have to go and ask it from town's sheriff. But don't worry Mr. Sullivan, you'll meet him eventually.",
            choices: [
                { text: "Well then...", next: 'firstEncounter2' }
            ]
        },
        firstEncounter3: {
            profilePicture: bartender,
            cpName: 'Woods',
            text: "Mayor is taking you to the cabin where you will stay while investigating this case.",
            choices: [
                { text: "Take a calm walk in woods...", next: 'cabinPart' }
            ]
        },
        cabinPart: {
            profilePicture: bartender,
            cpName: 'Woods',
            text: "While you are walking to the cabin you can see melancholy, fear and despair on the faces of town people ",
            choices: [
                { text: "Poor people, i must help them.", next: 'cabinPart2' }
            ]
        },
        cabinPart2: {
            profilePicture: bartender,
            cpName: 'Mayor',
            text: "You arrived to the cabin, before you go inside Mayor warned you about locking your door all the night.",
            choices: [
                { text: "I dont have any fear Mr Mayor... But i will use your advice.", next: 'cabinPart3' }
            ]
        },
        cabinPart3: {
            profilePicture: bartender,
            cpName: 'Cabinate',
            text: "You're in inside of the cabinate, you can see it's a dark, old and moisty place.",
            choices: [
                { text: "Investigate the place.", next: 'cabinPart3Answer1' },
                { text: "Get some sleep.", next: 'cabinPart4' }
            ]
        },
        cabinPart3Answer1: {
            profilePicture: bartender,
            cpName: 'Cabinate',
            text: "While your investigation, you found a few things",
            choices: [
                { text: "You found an old note", next: 'cabinPart3Answer1a' }
            ]
        },
        cabinPart3Answer1a: {
            profilePicture: bartender,
            cpName: 'Cabinate',
            text: "If you are reading this and im not with you there, just knew im lost too. Im too scared about what im going through and what i will... There is no valid explanation at the things going on here. Just take the knife i left here, it will help you on defending yourself. I mean i hope so.",
            choices: [
                { text: "Take the knife with you.", next: 'cabinPart4', action: () => setKnife(true) }
            ]
        },
        cabinPart4: {
            profilePicture: bartender,
            cpName: 'Cabinate',
            text: "'Rise and shine Mr. Sullivan'. You woke up from your sleep with roosters crowing. It should'a be shiny but it is still dark and melancholic here. You think you can start your investigation with people from town hall.",
            choices: [
                { text: "Go to the town hall.", next: 'townHall' }
            ]
        },
        townHall: {
            profilePicture: oldman,
            cpName: 'Old man',
            text: "While you leaving your cabin you saw an old man with a contemptuous smile in his face towards you. Look like you found your first man to talk...",
            choices: [
                { text: "Good morning sir. I am Mr. Sullivan, the Journalist. I'm assuming you know about things going on this town. I'm here to investigate it. May be you can help me.", next: 'townHall2' }
            ]
        },
        townHall2: {
            profilePicture: oldman,
            cpName: 'Old man',
            text: "Old man said 'Do you think you're the first person coming here? Do you know what happened to the previous person in that cabin before you?' with a contemptuous smile. He gets inside of his house before finishing his sentence.",
            choices: [
                { text: "I'm giving i to his old age. He probably affected bad with those bad events.", next: 'townHall3' }
            ]
        },
        townHall3: {
            profilePicture: youngboy,
            cpName: 'Young Boy',
            text: "You came acrossa young man in town hall.",
            choices: [
                { text: "Talk to him.", next: 'townHall4' }
            ]
        },
        townHall4: {
            profilePicture: youngboy,
            cpName: 'Young Boy',
            text: "Hello young man, i'm Sullivan the Journalist. Can you inform me about events happening in town lately?",
            choices: [
                { text: "Next", next: 'townHall5' }
            ]
        },
        townHall5: {
            profilePicture: youngboy,
            cpName: 'Young Boy',
            text: "It's all started 3 months ago... A young lady lost in our town. At first everybody thought she flee with someone. But 1 week later another person got lost. And his body was found hanging from a tree.",
            choices: [
                { text: "Next", next: 'townHall6' }
            ]
        },
        townHall6: {
            profilePicture: youngboy,
            cpName: 'Young Boy',
            text: "Every week someone started dying and disappearing like this. As town people we tried to prepare some defence, town's sheriff took a lot of prevention but none of those worked...",
            choices: [
                { text: "Next", next: 'townHall7' }
            ]
        },
        townHall7: {
            profilePicture: youngboy,
            cpName: 'Young Boy',
            text: "As village people, we started to break down day by day. Our desperation kept growing. Maybe we're waiting to get killed or disappear at the moment.",
            choices: [
                { text: "Can you take me to the woods where the kidnapped person is?", next: 'townHall7WoodsQuestion' },
                { text: "Have you ask help from mayor?", next: 'townHall7MayorQuestion' },
            ]
        },
        townHall7WoodsQuestion: {
            profilePicture: youngboy,
            cpName: 'Young Boy',
            text: "I'm afraid i can't.",
            choices: [
                { text: "Back", next: 'townHall7' }
            ]
        },
        townHall7MayorQuestion: {
            profilePicture: youngboy,
            cpName: 'Young Boy',
            text: "Mayor? He does'nt even care about us. His only concern is mine deposits near town. Village Elder Jack thinks mayor has a mine company.",
            choices: [
                { text: "Where does that Old Jack lives?", next: 'townHall7MayorQuestionAnswer' }
            ]
        },
        townHall7MayorQuestionAnswer: {
            profilePicture: youngboy,
            cpName: 'Young Boy',
            text: "He lives lives in the old building at the end of the street.",
            choices: [
                { text: "Thank you for your help.", next: 'oldJack' }
            ]
        },
        oldJack: {
            profilePicture: oldjack,
            cpName: 'Old Jack',
            text: "You went to the Jack's place and knocked the door. An old man with a old barreled gun in his hands opened the door. 'Are you looking for trouble son?' Jack asked.",
            choices: [
                { text: "I am Mr. Sullivan good sir. I'm a journalist. I came here for talking about events happened in town.", next: 'oldJack2' },
                { text: "Pardon me sir, i just wanted to ask some questions. I'm a journalist.", next: 'oldJack2' }
            ]
        },
        oldJack2: {
            profilePicture: oldjack,
            cpName: 'Old Jack',
            text: "Old jack invites you to inside. Lights a cigar and says 'I'm listening kid, better take it short.'.",
            choices: [
                { text: "I'm investigating this case. I heard about your thoughts from a young man in town. Can you tell me more clearly what you think about the president?", next: 'oldJack3' }
            ]
        },
        oldJack3: {
            profilePicture: oldjack,
            cpName: 'Old Jack',
            text: "That bastard is not concerning about town. He does'nt give a shit about those events. His only concern is our mine deposits.",
            choices: [
                { text: "How do you know that?", next: 'oldJack3Question1' },
                { text: "What do you think about missing events?", next: 'oldJack3Question2' }
            ]
        },
        oldJack3Question1: {
            profilePicture: oldjack,
            cpName: 'Old Jack',
            text: "Damn you son! Can't you see how old i am? I spend my whole life in this town.",
            choices: [
                { text: "I'm sorry kind sir.", next: 'oldJack3' }
            ]
        },
        oldJack3Question2: {
            profilePicture: oldjack,
            cpName: 'Old Jack',
            text: "People in the village make up mystical superstitions, but I am a rational man. Sometimes stylishly dressed men stop by the village. They are trying to process and sell our own minerals to us. I think they have a hand in this. Who knows, maybe the others are right (While laughing)",
            choices: [
                { text: "May be you're right kind sir. Can you tell me where does sherrif lives?", next: 'oldJack3SherrifQuestion' }
            ]
        },
        oldJack3SherrifQuestion: {
            profilePicture: oldjack,
            cpName: 'Old Jack',
            text: "His barrack is near mine deposit. You can find him there.",
            choices: [
                { text: "Go visit Sherrif.", next: 'sherrif' }
            ]
        },
        sherrif: {
            profilePicture: bartender,
            cpName: 'Woods',
            text: "It started to get dark. As you walked towards the sheriff's building, you saw a young girl dressed in white among the trees, just standing there looking towards you.",
            choices: [
                { text: "Next", next: 'sherrif2' }
            ]
        },
        sherrif2: {
            profilePicture: sherrif,
            cpName: 'Sherrif',
            text: "The sheriff came out the door and called out to you. While you are distracted, you turned to the sheriff. When you looked at the tree again, you couldn't see the girl. You walked towards the sheriff.",
            choices: [
                { text: "Good evening! I'm Sullivan, the Journ-", next: 'sherrif3' }
            ]
        },
        sherrif3: {
            profilePicture: sherrif,
            cpName: 'Sherrif',
            text: "I know who you are... Mayor talked about you.",
            choices: [
                { text: "Good. So i assume you know why i'm here. What did you do about missing events in town? May i take list about main suspects?", next: 'sherrif4' }
            ]
        },
        sherrif4: {
            profilePicture: sherrif,
            cpName: 'Sherrif',
            text: "What did i do? Well i questioned some people... But beside that we did'nt do anything else. We can't use our limited resources for few superstition...",
            choices: [
                { text: "Superstition? People are dying you're aware of that, is'nt you sherrif!?", next: 'sherrif5' }
            ]
        },
        sherrif5: {
            profilePicture: sherrif,
            cpName: 'Sherrif',
            text: "Don't exceed your limits journalist! Do your work and get out of the village.",
            choices: [
                { text: "Can i make some investigating in mines?", next: 'sherrif5Question1' },
                { text: "Can i take the list of main suspects?", next: 'sherrif5Question2' },
            ]
        },
        sherrif5Question1: {
            profilePicture: sherrif,
            cpName: 'Sherrif',
            text: "Absolutely no! It's extremely dangerous and forbidden for civilans to enter mines.",
            choices: [
                { text: "Well then...", next: 'sherrif5' }
            ]
        },
        sherrif5Question2: {
            profilePicture: sherrif,
            cpName: 'Sherrif',
            text: "Sherrif hands you the list.",
            choices: [
                { text: "Next", next: 'sherrif6' }
            ]
        },
        sherrif6: {
            profilePicture: sherrif,
            cpName: 'Sherrif',
            text: "If there is anything else, I'd be happy to help Mr...",
            choices: [
                { text: "Thanks for your help sherrif...", next: 'suspects' }
            ]
        },
        suspects: {
            profilePicture: bartender,
            cpName: 'Suspects',
            text: "By looking to the list that sherrif gave you. You can see few names...",
            choices: [
                ...(!carla ? [{ text: "Go to the Carla's place.", next: 'carla' }] : []),
                ...(!josef ? [{ text: "Go to the Josef's place.", next: 'josef' }] : []),
                ...(!wilson ? [{ text: "Go to the Wilson's place.", next: 'wilson' }] : []),
                ...(!margaret ? [{ text: "Go to the Margaret's place.", next: 'margaret' }] : []),
                ...(!harry ? [{ text: "Go to the Harry's place.", next: 'harry' }] : []),
                ...(carla && josef && wilson && margaret && harry ? [{ text: "Look like there is no any suspects left. Get back to the cabinate", next: 'cabinate' }] : [])
            ]
        },
        carla: {
            profilePicture: carlaImg,
            cpName: 'Carla',
            text: "You knocked Carla's door. Even though there was no sound from inside and no one opened the door, you saw movement at the window.",
            choices: [
                { text: "I wont' hurt you Mrs. I just want to ask some questions.", next: 'carla2' }
            ]
        },
        carla2: {
            profilePicture: carlaImg,
            cpName: 'Carla',
            text: "Few minutes passed and nobody opened the door. You decided to visit other suspects. Just while you turned your back, you heard somebody opened the door. 'I want to help as much as i can. For my ex husband.'",
            choices: [
                { text: "What do you know about missing people?", next: 'carlaQuestion1' },
                { text: "I heard one of first missing case was your ex husband. Can you tell me more about that?", next: 'carlaQuestion2' },
                { text: "What do you know about mayor?", next: 'carlaQuestion3' },
                ...(carla ? [{ text: "Thanks for your help Mrs. Carla, i hope you get well soon...", next: 'suspects' }] : [])
            ]
        },
        carlaQuestion1: {
            profilePicture: carlaImg,
            cpName: 'Carla',
            text: "It's all started 3 months ago and my ex husband was one of the first. Everyone questioned me because we couldn't get well along. But when missings and deads came one after one all the pressure on me got away.",
            choices: [
                { text: 'What kind of man was you husband?', next: 'carlaQuestion1Answer1' }
            ]
        },
        carlaQuestion1Answer1: {
            profilePicture: carlaImg,
            cpName: 'Carla',
            text: "He constantly drank alcohol and left no peace at home. I was constantly saying to the people around me that I hope he dies. But his death affected me very badly.",
            choices: [
                { text: "I see...", next: 'carla2' }
            ]
        },
        carlaQuestion2: {
            profilePicture: carlaImg,
            cpName: 'Carla',
            text: "My husband and I had divorced, but his drinking continued to bother me. One day this came to an end and did not come for a long time. I thought he'd finally left me alone. Until his body was found in the woods.",
            choices: [
                { text: "Alright...", next: 'carla2', action: () => setCarla(true) }
            ]
        },
        carlaQuestion3: {
            profilePicture: carla,
            cpName: 'Carla',
            text: "I don't know much.",
            choices: [
                { text: "Well then...", next: 'carla2' }
            ]
        },
        josef: {
            profilePicture: josefImg,
            cpName: 'Josef',
            text: "You knocked knocked Josef's door. Josef looked at you from window then opened the door for you. 'How can i help you Mr. Sullivan?'",
            choices: [
                { text: "How do you know who i am?", next: 'josefQuestion1' },
                { text: "What do you think about events going on in the town?", next: 'josefQuestion2' }
            ]
        },
        josefQuestion1: {
            profilePicture: josefImg,
            cpName: 'Josef',
            text: "Everybody in town knows who you are. Desperate people believing you can solve this.",
            choices: [
                { text: "Can you tell me about mines?", next: 'josefQuestion1a' }
            ]
        },
        josefQuestion1a: {
            profilePicture: josefImg,
            cpName: 'Josef',
            text: "Our mine deposits are very rich. Before mayor showed up, i was the most share holder. With village people we were mining our mines in peace, and trying to develop our village. Until that bastard showed up.",
            choices: [
                { text: "What can you tell me about mayor?", next: 'josefQuestion1a1' },
                { text: "Why civillians not allowed to enter mines?", next: 'josefQuestion1a2' },
                { text: "Why did your partnership with mayor ended?", next: 'josefQuestion1a3' }
            ]
        },
        josefQuestion1a1: {
            profilePicture: josefImg,
            cpName: 'Josef',
            text: "That bastards only concern is money. When he firstly arrived at town, he tricked people with false promises. He had all the lies until he got enough power over mines.",
            choices: [
                { text: "Well, thats explain a lot...", next: 'josefQuestion1a' }
            ]
        },
        josefQuestion1a2: {
            profilePicture: josefImg,
            cpName: 'Josef',
            text: "There was no ban like this at my time. No one knows why did he something like that. Everyday some foreing workers arrive at town, works without talk to anybody then leave the town. Nobody knows what the hell they are doing there.",
            choices: [
                { text: "The pieces starting to fall into place...", next: 'josefQuestion1a' }
            ]
        },
        josefQuestion1a3: {
            profilePicture: josefImg,
            cpName: 'Josef',
            text: "He framed me... He made a work accident in mines then framed me.",
            choices: [
                { text: "Thanks for your help Mr. Josef, see you soon...", next: 'suspects', action: () => setJosef(true) }
            ]
        },
        josefQuestion2: {
            profilePicture: josefImg,
            cpName: 'Josef',
            text: "I think mayor has a hand in this. Whatever happening in this town, it comes from that bastard",
            choices: [
                { text: "I see Mr. Josef...", next: 'josefQuestion1a' }
            ]
        },
        wilson: {
            profilePicture: jewelry,
            cpName: 'Wilson',
            text: "You walked into Wilson's shop. 'Welcome Mr.Sullivan, how can i help you?'",
            choices: [
                { text: "Look like im getting famous here, how did you start this jewelry", next: 'wilsonQuestion1' },
                { text: "What do you think about events going on here?", next: 'wilsonQuestion2' },
            ]
        },
        wilsonQuestion1: {
            profilePicture: jewelry,
            cpName: 'Wilson',
            text: "I was working on mines long ago... I was depositing some special stones and process them.",
            choices: [
                { text: "Can you inform me more about those stones?", next: 'wilsonQuestion1a' }
            ]
        },
        wilsonQuestion1a: {
            profilePicture: jewelry,
            cpName: 'Wilson',
            text: "Sapphire and ametyhst Mr. Sullivan. Sapphire and ametyhst",
            choices: [
                { text: "But ain't heavy chemicals used when mining these mines?", next: 'wilsonQuestion1a1' }
            ]
        },
        wilsonQuestion1a1: {
            profilePicture: jewelry,
            cpName: 'Wilson',
            text: "I wasn't thinking about that those times. I was only concerning about my profit. But one time i saw a dream... Because of that dream i told mayor i want to quit then we had a huge arguement. He even tried to close my shop few time.",
            choices: [
                { text: "What dream?", next: 'wilsonQuestion1a1a' }
            ]
        },
        wilsonQuestion1a1a: {
            profilePicture: jewelry,
            cpName: 'Wilson',
            text: "I don't want to talk about this Mr.Sullivan.",
            choices: [
                { text: "I insist Mr. Wilson.", next: 'wilsonQuestion1a1b' },
                { text: "Well then... See you soon Mr. Wilson", next: 'suspects', action: () => setWilson(true) }
            ]
        },
        wilsonQuestion1a1b: {
            profilePicture: jewelry,
            cpName: 'Wilson',
            text: "Please don't make this harder journalist. Just do your business.",
            choices: [
                { text: "Well...", next: 'suspects', action: () => setWilson(true) }
            ]
        },
        wilsonQuestion2: {
            profilePicture: jewelry,
            cpName: 'Wilson',
            text: "Nature Mr.Sullivan... Some should fall so other can survive...",
            choices: [
                { text: "I can't understand...", next: 'wilsonQuestion2a' }
            ]
        },
        wilsonQuestion2a: {
            profilePicture: jewelry,
            cpName: 'Wilson',
            text: "You will understand when time comes.",
            choices: [
                { text: "We'll see then...", next: 'wilson' }
            ]
        },
        margaret: {
            profilePicture: margaretImg,
            cpName: 'Margaret',
            text: "While you walking towards Margaret's house, you saw that girl dressed in white again. But this time she seems older. She just standing there and watching you.",
            choices: [
                { text: "Next", next: 'margaret2' }
            ]
        },
        margaret2: {
            profilePicture: margaretImg,
            cpName: 'Margaret',
            text: "With Margaret's yelling you got distracted. When you turned back girl in whites weren't there. Margaret was yelling you to come inside. You got there quickly.",
            choices: [
                { text: "Just calm down Mrs. Margaret. Why are you yelling?", next: 'margaretQuestion1' }
            ]
        },
        margaretQuestion1: {
            profilePicture: margaretImg,
            cpName: 'Margaret',
            text: "It's not safe there!",
            choices: [
                { text: "Okay Margaret. We can talk calmly and fix this. Take it from beginning. Do you know what happened to your husband?", next: 'margaretQuestion1a' }
            ]
        },
        margaretQuestion1a: {
            profilePicture: margaretImg,
            cpName: 'Margaret',
            text: "My husband was helping to mayor with paper-work for mines. But suddenly one night he found dead in woods.",
            choices: [
                { text: "So who do you think is responsible for this?", next: 'margaretQuestion1a1' }
            ]
        },
        margaretQuestion1a1: {
            profilePicture: margaretImg,
            cpName: 'Margaret',
            text: "Them.",
            choices: [
                { text: "Who are they?", next: 'margaretQuestion1a2' }
            ]
        },
        margaretQuestion1a2: {
            profilePicture: margaretImg,
            cpName: 'Margaret',
            text: "Them Mr. Sullivan. You will meet them soon...",
            choices: [
                { text: "Meet with who??", next: 'margaretQuestion1a3' }
            ]
        },
        margaretQuestion1a3: {
            profilePicture: margaretImg,
            cpName: 'Margaret',
            text: "I will ask you to leave.",
            choices: [
                { text: 'Well', next: 'suspects', action: () => setMargaret(true) }
            ]
        },
        harry: {
            profilePicture: harryImg,
            cpName: 'Harry',
            text: "You knocked Harry's door. A man opened the door with a gun and cigaratte in his mouth.",
            choices: [
                { text: "Good evening Mr.Harry, i have some questions to ask. Can you please put that gun away?", next: 'harryQuestion1' }
            ]
        },
        harryQuestion1: {
            profilePicture: harryImg,
            cpName: 'Harry',
            text: "I didn't even put it aside for 20 years kiddo. When i left my gun i belive that day is my death day.",
            choices: [
                { text: "What do you think about events going on?", next: 'harryQuestion1a' },
                { text: "What do you know about mines?", next: 'harryQuestion1b' }
            ]
        },
        harryQuestion1a: {
            profilePicture: harryImg,
            cpName: 'Harry',
            text: "I don't know, son. There are many accusations and slanders about me. But my age can't handle things anymore. All I remember is that the town used to be much nicer. There was sincerity, you see.",
            choices: [
                { text: "I can guess that.", next: 'harryQuestion1a1' }
            ]
        },
        harryQuestion1a1: {
            profilePicture: harryImg,
            cpName: 'Harry',
            text: "Every public holiday, we would gather in the squares and hold celebrations and festivals. Nothing has been the same since that president came.",
            choices: [
                { text: "I guess you don't like him.", next: 'harryQuestion1a2' }
            ]
        },
        harryQuestion1a2: {
            profilePicture: harryImg,
            cpName: 'Harry',
            text: "None of us likes him kiddo.",
            choices: [
                { text: "Thank you for your help kind sir.", next: 'suspects', action: () => setHarry(true) }
            ]
        },
        harryQuestion1b: {
            profilePicture: harryImg,
            cpName: 'Harry',
            text: "The only reason the president is here. Those fake smiles, fake promises. The reason for it all is those mines.",
            choices: [
                { text: "I see.", next: 'harryQuestion1' }
            ]
        },
        cabinate: {
            profilePicture: bartender,
            cpName: 'Woods',
            text: "You started walking towards the cabin given to you. While walking, she bumped into the girl in white in the trees to the left of his eye. She was watching you at this time of night.",
            choices: [
                { text: "What is she doing at this hour?", next: 'cabinate2' }
            ]
        },
        cabinate2: {
            profilePicture: bartender,
            cpName: 'Woods',
            text: "She turned around and started walking, slowly disappearing from sight.",
            choices: [
                { text: 'Run after her.', next: 'girlInWhite' },
                { text: 'Get back to the cabinate.', next: 'cabinateEnding' }
            ]
        },
        girlInWhite: {
            profilePicture: bartender,
            cpName: 'Woods',
            text: "No matter how hard you ran after her, she had disappeared and you couldn't catch up with her. But you started to see traces of blood on the ground.",
            choices: [
                { text: "Follow the track.", next: 'girlInWhite2' },
                { text: "Get back to the cabinate!", next: 'cabinateEnding' }
            ]
        },
        girlInWhite2: {
            profilePicture: bartender,
            cpName: 'Woods',
            text: "You followed the blood trail. Trails of blood led you to the mine. You found the mine. Are you sure you want to enter the mine? Civilians are prohibited from entering the mine.",
            choices: [
                { text: "Enter the mine.", next: 'mine' },
                { text: "Get back to the cabinate!!!!", next: 'cabinateEnding' }
            ]
        },
        mine: {
            profilePicture: bartender,
            cpName: 'Mine',
            text: "As you slowly start moving through the mine, you see the chemicals used. As the mine got deeper, chemicals also increased. Maybe these chemicals made you hallucinate, maybe the girl in white wasn't real.",
            choices: [
                { text: "I'm pretty sure she's real.", next: 'mine2' },
                { text: "May be she is indeed not real.", next: 'mine2' }
            ]
        },
        mine2: {
            profilePicture: bartender,
            cpName: 'Mine',
            text: "While you continued walking in your thoughts, you heard a voice. A miner was talking to the president. You hid in place and eavesdropped.",
            choices: [
                { text: "Keep listening.", next: 'mine3' }
            ]
        },
        mine3: {
            profilePicture: bartender,
            cpName: 'Mine',
            text: "They were talking about heavier chemicals being brought in 3 days later. After they left, you came out from your hiding place and run to the exit.",
            choices: [
                { text: "Keep running.", next: 'mine4' }
            ]
        },
        mine4: {
            profilePicture: sherrif,
            cpName: 'Mine',
            text: "You saw the sheriff a little far from the cave, looking around with a flashlight in his hand. One hand was on his gun. It was obvious he was looking for you.",
            choices: [
                { text: "Run back to the cave.", next: 'mainCaveEnding' },
                { text: "Go to the sherrif.", next: 'sherrifEnding' }
            ]
        },
        mainCaveEnding: {
            profilePicture: bartender,
            cpName: 'Mine',
            text: "When you turned around, you saw the girl in white in the distance. She looked older this time. She was heading towards the mine.",
            choices: [
                { text: "Run after her.", next: 'mainCaveEnding2' }
            ]
        },
        mainCaveEnding2: {
            profilePicture: bartender,
            cpName: 'Mine',
            text: "You followed the girl to the mine. You couldn't see her when you entered the mine. But the mayor was still there, alone, doing paperwork.",
            choices: [
                { text: "Go to the mayor.", next: 'mainCaveEnding3' }
            ]
        },
        mainCaveEnding3: {
            profilePicture: bartender,
            cpName: 'Mayor',
            text: "It's like the mayor knew your were coming. He said 'I've been waiting for you too, Mr Sullivan. You've learned too much. You had to do some fake research and get out of here. But you have exceeded your limits.'",
            choices: [
                { text: "You are poisoning this place! You are poisoning the village! You are destroying innocent people's home for your own interests!", next: 'mainCaveEnding4' },
                { text: "You are a devil mayor. A pure devil.", next: 'mainCaveEnding4' }
            ]
        },
        mainCaveEnding4: {
            profilePicture: bartender,
            cpName: 'Mayor',
            text: "They're just a few pawns, Mr. Sullivan. They are just a few pawns on the way to the end. I see you care a lot about the lives of these villagers.",
            choices: [
                { text: "You are also responsible for disappearances and deaths", next: 'mainCaveEnding5' },
                { text: "They are innocent people you devil!", next: 'mainCaveEnding5' }
            ]
        },
        mainCaveEnding5: {
            profilePicture: bartender,
            cpName: 'Mayor',
            text: "No, Mr. Sullivan, I'm a businessman, not a murderer. I have some principles. Of course, there were a few people we needed to get rid of, but the sheriff handles them, not me.",
            choices: [
                { text: "Does your conscience leave you alone?", next: 'mainCaveEnding6' },
                { text: "Does sherrif also included in this bullshit?", next: 'mainCaveEnding6' }
            ]
        },
        mainCaveEnding6: {
            profilePicture: bartender,
            cpName: 'Mayor',
            text: "He was supposed to take care of you too, but somehow you found this place. Not a big deal, let's wait here together for the arrival of the sheriff and his death.",
            choices: [
                { text: "What do you mean take care of me?! Don't you think government will find about those?", next: 'mainCaveEnding7' }
            ]
        },
        mainCaveEnding7: {
            profilePicture: bartender,
            cpName: 'Mayor',
            text: "Why would anyone will care a pawn like you Mr. Sullivan? Let me call sherrif. (Mayor proceeds to reach his phone)",
            choices: [
                ...(knife ? [{ text: "Stab the mayor.", next: 'mainCaveEnding8' }] : []),
                { text: "Don't do this mayor. We can talk and handle this.", next: 'sideCaveEnding' }
            ]
        },
        mainCaveEnding8: {
            profilePicture: bartender,
            cpName: 'Mayor',
            text: "While mayor tried to contact sherrif you stabbed the mayor. Mayor is dying from blood loss but sherrif got the call. He is probably coming here right now.",
            choices: [
                { text: "Run outside", next: 'mainEnding' },
            ]
        },
        mainEnding: {
            profilePicture: miners,
            cpName: 'Mine',
            text: "While you trying to run outside, a few miners saw you. They started to chasing you while yelling behind you.",
            choices: [
                { text: "Keep running outside", next: 'mainEnding2' },
                { text: "Go deeper into the mine.", next: 'caveEnding' }
            ]
        },
        mainEnding2: {
            profilePicture: bartender,
            cpName: 'Mine',
            text: "You can see the light coming from cave entrance. You saw the girl in whites standing there. Like she was waiting for you.",
            choices: [
                { text: "Keep running", next: 'mainEnding3' }
            ]
        },
        mainEnding3: {
            profilePicture: bartender,
            cpName: 'Woods',
            text: "When you left the cave, you saw girl in the whites running towards the woods",
            choices: [
                { text: "Run after her.", next: 'mainEnding4' }
            ]
        },
        mainEnding4: {
            profilePicture: bartender,
            cpName: 'Woods',
            text: "You couldn't hear the miners anymore. Look like you overcome the miners.",
            choices: [
                { text: "Keep walking", next: 'mainEnding5' }
            ]
        },
        mainEnding5: {
            profilePicture: bartender,
            cpName: 'Woods',
            text: "You couldn't see girl in the whites anymore. You felt like you lost completely.",
            choices: [
                { text: "Next.", next: 'mainEnding6' }
            ]
        },
        mainEnding6: {
            profilePicture: bartender,
            cpName: 'Mother',
            text: "Just when you're in despair, you saw the girl in the whites. She was walking towards you slowly. But something was different. She was looking very old.",
            choices: [
                { text: "Who are you?", next: 'mainEnding7' },
                { text: "Why are you keep following me?", next: 'mainEnding7' },
                { text: "What do you want from me?", next: 'mainEnding7' }
            ]
        },
        mainEnding7: {
            profilePicture: bartender,
            cpName: 'Mother',
            text: "I know you have a lot of question my child... Can't you see this is keep happening for centuries?",
            choices: [
                { text: "What do you mean a circle?", next: 'mainEnding8' }
            ]
        },
        mainEnding8: {
            profilePicture: bartender,
            cpName: 'Mother',
            text: "It's all about a circle my child, its all about nature cleaning itself. You were the mankind who cant understand the laws of the nature. You are just greedy. You won't be able to break the circle, neither the next journalist. It will keep contiune until one day nature cleanse itselfs.",
            choices: [
                { text: "But... I can't understand. Who are you?", next: 'mainEnding9' }
            ]
        },
        mainEnding9: {
            profilePicture: bartender,
            cpName: 'Mother',
            text: "The girl in whites were the natures siluet. She was there all the time watching you. Every step of yours, every step of sherrifs, every step of everybody in village. Mankind will be determinated one day. But she will be standing there and watching you. Till you destroy yourself. Till you die in the way trying to climb in a stupid rat race.",
            choices: [
                { text: "What do you mean a rat race?", next: 'mainEnding10' }
            ]
        },
        mainEnding10: {
            profilePicture: bartender,
            cpName: 'Mother',
            text: "Why does mankind care about power that much my child?",
            choices: [
                { text: "Because nobody wants to die miserable. Everybody wants more power.", next: 'mainEnding11' }
            ]
        },
        mainEnding11: {
            profilePicture: bartender,
            cpName: 'Mother',
            text: "It was alreay shared equally to you my child. You were the one made this order.",
            choices: [
                { text: "So you punishing man kind?", next: 'mainEnding12' }
            ]
        },
        mainEnding12: {
            profilePicture: bartender,
            cpName: 'Mother',
            text: "Mankind is punishing itself...",
            choices: [
                { text: "You said i was a part of that circle. Where am i? Am i dead?", next: 'mainEnding13' }
            ]
        },
        mainEnding13: {
            profilePicture: bartender,
            cpName: 'Mother',
            text: "I don't call that death my child. Your life just beginning now...",
            choices: [
                { text: "I feel at peace...", next: 'mainEnding14' }
                // Main Ending
            ]
        },
        mainEnding14:{
            text: "You just realized mankinds greedness. We're the one who did this. It was all same at the start. But remember nature will always cleanse itself. Thanks for playing my game."
        },
        sideCaveEnding: {
            profilePicture: bartender,
            cpName: 'Mayor',
            text: "There is nothing to talk Mr. Sullivan...",
            choices: [
                { text: "Please don't make this i can cooperate.", next: 'sideCaveEnding2' }
            ]
        },
        sideCaveEnding2: {
            profilePicture: bartender,
            cpName: 'Mayor',
            text: "Why should i trust you Mr. Sullivan? I'm a rational bussinesman. And i see no profit on you.",
            choices: [
                { text: "I can make false news about you. I can clear you.", next: 'sideCaveEnding3' }
            ]
        },
        sideCaveEnding3: {
            profilePicture: bartender,
            cpName: 'Mayor',
            text: "Interesting... Go on Mr. Sullivan.",
            choices: [
                { text: "I can go to the city with sherrif and make news about thanks to sherrifs and yours help i solve the case.", next: 'sideCaveEnding4' }
            ]
        },
        sideCaveEnding4: {
            profilePicture: bartender,
            cpName: 'Mayor',
            text: "I belive we can work together Mr. Sullivan. But at your first wrong move, i would have to eliminate you.",
            choices: [
                { text: "You can count on me i swear to you.", next: 'sideCaveEnding5' }
            ]
        },
        sideCaveEnding5: {
            profilePicture: bartender,
            cpName: 'Mayor',
            text: "As you started to walk out from cave together, you saw the girl in the whites at far. She was standing there and staring at you.",
            choices: [
                { text: "Excuse me mayor. I have to investigate one last thing.", next: 'sideCaveEnding6' }
            ]
        },
        sideCaveEnding6: {
            profilePicture: bartender,
            cpName: 'Woods',
            text: "You walkted towards woods. As you come closer the girl in the whites was dissappearing.",
            choices: [
                { text: "Keep chasing her.", next: 'sideCaveEnding7' }
            ]
        },
        sideCaveEnding7: {
            profilePicture: bartender,
            cpName: 'Woods',
            text: "Just when you lost hope she appeared from trees.",
            choices: [
                { text: "Who are you?", next: 'sideCaveEnding8' }
            ]
        },
        sideCaveEnding8: {
            profilePicture: bartender,
            cpName: 'Mother',
            text: "I'm nature's itself my child... You're seeing my siluet.",
            choices: [
                { text: "But everytime i see you, you're getting older and older.", next: 'sideCaveEnding9' }
            ]
        },
        sideCaveEnding9: {
            profilePicture: bartender,
            cpName: 'Mother',
            text: "You're the one killing me my child...",
            choices: [
                { text: "I just wanted to live.", next: 'sideCaveEnding10' }
            ]
        },
        sideCaveEnding10: {
            profilePicture: bartender,
            cpName: 'Mother',
            text: "Do you think this is living, my child?",
            choices: [
                { text: "What will happen after this?" }
            ]
        },
        sideCaveEnding11: {
            profilePicture: bartender,
            cpName: 'Mother',
            text: "Nature remembers... 'Girl in the whites disappears walking among the trees.'",
            choices: [
                { text: "I might regret this.", next: 'sideCaveEnding13'}
            ]
            // Side Cave Ending
        },
        sideCaveEnding12: {
            text: "Your decision might make you live longer, but at what cost?"
        },
        caveEnding: {
            profilePicture: miners,
            cpName: 'Mine',
            text: "While you running towards deeper to the mine, you saw it is dead end and miners voices getting closer and closer.",
            choices: [
                { text: "Hide behind big rocks.", next: 'caveEnding2' }
            ]
        },
        caveEnding2: {
            profilePicture: bartender,
            cpName: 'Mine',
            text: "You hid behind some big rocks. Miners are very close to you. You saw some dynamite explosives.",
            choices: [
                { text: "Run to the explosives", next: 'caveEnding3' }
            ]
        },
        caveEnding3: {
            profilePicture: bartender,
            cpName: 'Mine',
            text: "Miners noticed you while you're running. But they stopped to coming towards you right after you reached the explosives.",
            choices: [
                { text: "Leave this mine! I know you have families waiting for you behind you.", next: 'caveEnding4' }
            ]
        },
        caveEnding4: {
            profilePicture: sherrif,
            cpName: 'Sherrif',
            text: "Suddenly sherrif appeared. 'Leave those explosives Mr. Sullivan!' he said.",
            choices: [
                { text: "I don't want to do this. But if you don't leave me any choice... I won't even think twice...", next: 'caveEndin5' }
            ]
        },
        caveEnding5: {
            profilePicture: sherrif,
            cpName: 'Mine',
            text: "While sherrif yelling to you, you saw the girl in the whites behind him. It was like she was approving you.",
            choices: [
                { text: "Blow the mine.", next: 'caveEnding6' },
                { text: "Surrender.", next: 'caveEndingSideEnd' }
            ]
        },
        caveEndingSideEnd: {
            text: "You surrendered. The girl in the whites dissapeared suddenly. You got killed and burried deep down to the mines right after that. Thanks for playing my game."
            // Cave Ending Side End
        },
        caveEnding6: {
            profilePicture: bartender,
            cpName: 'Mine',
            text: "You pulled the trigger... Nothing happened.",
            choices: [
                { text: "What?", next: 'caveEnding7' }
            ]
        },
        caveEnding7: {
            profilePicture: bartender,
            cpName: 'Mine',
            text: "Nothing exploded but everything and everyone stoped moving. The girl in the whites started to walking towards you.",
            choices: [
                { text: "What happened?", next: 'caveEnding8' }
            ]
        },
        caveEnding8: {
            profilePicture: bartender,
            cpName: 'Mother',
            text: "Nothing happened and a lot of things happened my child...",
            choices: [
                { text: "Did i die?", next: 'caveEnding9' }
            ]
        },
        caveEnding9: {
            profilePicture: bartender,
            cpName: 'Mother',
            text: "No my child... Your life just starts now...",
        },
        sherrifEnding: {
            profilePicture: sherrif,
            cpName: 'Sherrif',
            text: "You ran towards sherrif. He noticed you right before you attack him. He shot you twice.",
            choices: [
                { text: "Why sherrif?", next: 'sherrifEnding2' }
            ]
        },
        sherrifEnding2: {
            profilePicture: sherrif,
            cpName: 'Sherrif',
            text: "You still progressed well Mr. Sullivan...",
            choices: [
                { text: "'Sherrif kills you.'", next: 'sherrifEnding3' }
                // End
            ]
        },
        sherrifEnding3: {
            text: "You might got killed but you were on the right path. Your remorese is clean. Thanks for playing my game."
        },
        cabinateEnding: {
            profilePicture: bartender,
            cpName: 'Cabinate',
            text: "You came to your cabin. When you got inside, you saw sherrif was sitting there.",
            choices: [
                { text: "Sherrif?", next: 'cabinateEnding2' }
            ]
        },
        cabinateEnding2: {
            profilePicture: sherrif,
            cpName: 'Sherrif',
            text: "Are we responsible for what happens to us? or is it just destiny Mr. Sullivan?",
            choices: [
                { text: "Sometimes it's just destiny sherrif. May i ask what are you doing here?", next: 'cabinateEnding3' }
            ]
        },
        cabinateEnding3: {
            profilePicture: sherrif,
            cpName: 'Sherrif',
            text: "I think you are not that smart Mr. Sullivan... You know too much.",
            choices: [
                { text: "What do you mean?", next: 'cabinateEnding4' }
            ]
        },
        cabinateEnding4: {
            profilePicture: sherrif,
            cpName: 'Sherrif',
            text: "I'm sorry for what happens next. It's in my destiny i guess.",
            choices: [
                { text: "What?", next: 'cabinateEnding5' }
            ]
        },
        cabinateEnding5: {
            text: "Sherrif kills you. The last thing you saw is the girl in the whites staring at you from window at distance. Thanks for playing my game.",
            // End
        }

    }

    useEffect(() => {
        setStory(storyDots)
    }, [carla, josef, wilson, margaret, harry])

}