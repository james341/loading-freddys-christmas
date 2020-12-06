/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.08
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "sleekLoad 2";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format 
(Put the files in the backgrounds/videos folder)*/
var l_background = "glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Put the files in the backgrounds/images folder)*/
var l_bgImages = [
	"image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
        "image12.jpg",
        "image13.jpg",
	"image14.jpg",
	"image15.jpg",
	"image16.jpg",
	"image17.jpg",
	"image18.jpg",
	"image19.jpg",
	"image20.jpg",
	"image21.jpg",
	"image22.jpg",
	"image23.jpg",
	"image24.jpg",
	"image25.jpg",
	"image26.jpg",
	"image27.jpg",
	"image28.jpg",
	"image29.jpg",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much .ogg songs you want
(Put the files in the songs folder)*/
var l_musicPlaylist = [
	{youtube: "5VO3w8na3CA", name: "Nations - Installation Music"},
	{youtube: "vAwDyMz2j5I", name: "Nations - Installation Music"},
        {youtube: "9QPQI5QUs74", name: "Nations - Installation Music"},
        {youtube: "jj-oTtHTwVY", name: "Nations - Installation Music"},
        {youtube: "oLgoshZeA8Q", name: "Nations - Installation Music"},
        {youtube: "3k-YIt2p5AU", name: "Nations - Installation Music"},
	{youtube: "9QPQI5QUs74", name: "Nations - Installation Music"},

];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 18;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"Its forbidden to leave the Basement of the pizzeria and the sewer during the day (being near the door / on the stairs is equivalent to a violation) [Punishment: warn / Ban 10-20min] It is forbidden to attack immediately, first the broken animatronic must intimidate the victim (excl. Attack on the animatronic) [Punishment: warn / Ban 10-20min]!",
	"FearRP is basicly a value for your life, as in real life. If held at gunpoint and is mugged for $1000, you want to drop the money because if you don't- you will die. This works for Raids, Mugs, Kidnappings, Hostage Situations, Etc!",
	"User & message content sent in this server must comply to the Community Guidelines. Any content violating this will be removed, and any users violating this will be removed from this Gmod server!",
        "Disconnect, suicide, change jobs, Change names, Etc. to get out of a roleplay/staff situation. This will result in a harsher or additional punishment!",
        "Animatronics can KOS you from 12:00 am to 5:00 am in-game time They are allowed to kill you at this time since it is after closing if you are in the Restaurant!",
        "Advertising a platform/service can risk in punishment if done too much (ie: continuos attempts to advertise any service/platform which you own and/or are a high-ranking member!",
        "Do not PowerGame - You are not a superman. You cannot attack a group of people that is 2 times the size of your group. Example: 1 by 2, 2 by 4, and so on. (excl. self-defense) [Punishment: warn / Ban 10-20min!", 
        "Golden Freddy Plush, Freddy Plush, Plushtrap. They are obliged to sit in the pizzeria / in the basement during the day (For example: On the table, without moving on the floor. Minor movements are not considered a violation). [Punishment: warn / Ban 10-20min] They can escape to the sewers, but cannot surface. [Punishment: warn / Ban 10-20min] They can attack people at night. [Punishment: warn / Ban 10-20min!",
        "Animatronics can KOS you from 12:00 am to 5:00 am in-game time. - They are allowed to kill you at this time since it is after closing if you are in the Restaurant!",
        "It's forbidden to stay in the back rooms of the pizzeria during the day (excl. Broken animatronics and plush toys in the basement) [Punishment: warn / Ban 10-20min]!",
        "Doxxing is the posting of identifying information about yourself or someone else. Doxxing is against the rules on Model. Even if you are an adult, doxxing yourself may encourage younger members of the model to do the same, so all forms of it are banned. There are several things that constitute doxxing!",
        "Animatronics can KOS you from 12:00 am to 5:00 am in-game time. They are allowed to kill you at this time since it is after closing if you are in the restaurant!",
        "Profanity is allowed but explicit language and adult themes/content is strictly forbidden!",
        "Don't spam SWEPs.  Don't rapidly click your SWEPs because it gets really annoying and hurts people's ears!",
        "Animatronics cannot exit the Restaurant. They cannot chase players outside the restaurant, but they can do /me grabs the child before they leave the restaurant!",
        "Anyone caught baiting or encouraging others to violate rules will have an equal or greater punishment to the rule violation!",
        "KOS signs most are clearly placed at the entrance of a KOS area it must be sized and colored clearly any attempts to bait people into areas with obscure KOS signs will result in punishment from staff!",
        "Fear RP is in effect - respond to situations like you would in real life. For example, if someone pulls a gun on you and you are unarmed, you must follow their commands!",
        "RP is acting out the role of your character within the game. Behave as you would in your character's place in the context of the situation!",
        "You may not destroy your valuables in a raid to prevent them from being stolen. Leaving and then rejoining within 20 minutes to avoid printer loss and get them back is considered FailRP!",
        "NLR - After your death, you forget everything: those who killed you, whom you knew, the orders that were given to you and where you were. After you have died in a certain location, you can return there after 3 minutes. It is FORBIDDEN to return to the raid / capture / robbery after death. [Punishment: warn / Ban 10-20min]!",
        "Moderators reserve the right to punish/warn a user even if something isn't on the rules. (As long as it is fair, obviously!",
        "Parties may advert PARTY then the action they are making ie( RAID, MUG, KIDNAP, ETC ) letting all party members participate in that action together. Anyone involved is Placed under cooldown for said action!",
        "Harassment or any type of abuse isn't tolerated here, this includes verbal abuse, Biased critique, and other types of abuse/harassment!",
        "Animatronics cannot exit the restaurant They cannot chase players outside the restaurant, but they can do /me grabs child before they leave the restaurant!",
        "Unless an administrator asks of you if you're applying for staff, do not state your age. Thank you!",
        "Baited NSFW is also not allowed (Fake NSFW used to trick people into things like rick rolls!",
        "It Is forbidden to attack with a splash through props, walls, outside the territory of the pizzeria. It is also forbidden to intentionally attack animatronics and plush toys while outside the territory of the pizzeria. It is forbidden to climb stairs (excl. Purple Guy in the guise of a security guard. Punishment: warn / Ban 10-20min!",
        "No jokes about mental illnesses, sexualities, or religions/political stuff. (Ex. Cancer, Autism, Gay, etc!",
        "Speaking in non-English languages is allowed but discouraged!",
        "It is forbidden to Prop Abuse, Fly on a prop / object, or to Lift, push someone, spam with a prop / object, as well as climb props that do not obey the laws of physics (you CAN build stairs) and build non-physical structures. It is also forbidden to build near the fountain and in the pizzeria. [Punishment: warn / Ban 10-20min!",
        "Using offensive humor is NOT okay. With everything going on, with racism and other problems around the world, we (as staff) will be more strict if we need to be!",
        "You cannot take over places. If you raid a place, you must leave after you have accomplished your goal. Do NOT stay to prevent people from returning for an extended period of time!",
        "Users should not specifically target or harass another player, With malicious intentions!",
        "If you are handcuffed, you must comply with the officer. Not doing so can be considered FailRP. If the police officer gets distracted and leaves you alone, you may attempt an escape!",
        "If somebody is wanted you may AOS/KOS the person. In order to KOS, you must warn the criminal at least 3 times to stop Moving. If they comply, you must arrest them instead!",
        "Hate speech, predatory behaviour, graphic violence, malicious attacks, and content that promotes harmful or dangerous behaviour isn't allowed!",
        "You must have a gun store open Self-supplying, Is not allowed. You may set your own prices for the shipments!"

];
/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
