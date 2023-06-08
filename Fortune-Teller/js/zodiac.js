/**
 * findZodiacSign function - calculates the user's zodiac sign based on their inputted date of birth.
 * It displays the zodiac sign's name, type and description in an HTML element with the ID "result".
 *
 * @function findZodiacSign
 * @returns {void} This function doesn't return anything. It modifies the innerHTML property of an HTML element with the ID "result".
 *
 */
function findZodiacSign() {
    // Get the birth date value entered by the user
    var birthDateInput = document.getElementById("birth-date");
    var birthDate = new Date(birthDateInput.value);
  
    // Check if a valid date was entered
    if (isNaN(birthDate)) {
      document.getElementById("result").innerHTML = "Please enter a valid birth date.";
      return;
    }
  
    // Extract the birth date and month
    var birthDay = birthDate.getDate();
    var birthMonth = birthDate.getMonth() + 1; // Adding 1 since months are zero-based
  
    // Define the zodiac sign start and end dates
    var zodiacSigns = [
      { name: "Aquarius", startMonth: 1, startDate: 20, endMonth: 2, endDate: 18 },
      { name: "Pisces", startMonth: 2, startDate: 19, endMonth: 3, endDate: 20 },
      { name: "Aries", startMonth: 3, startDate: 21, endMonth: 4, endDate: 19 },
      { name: "Taurus", startMonth: 4, startDate: 20, endMonth: 5, endDate: 20 },
      { name: "Gemini", startMonth: 5, startDate: 21, endMonth: 6, endDate: 20 },
      { name: "Cancer", startMonth: 6, startDate: 21, endMonth: 7, endDate: 22 },
      { name: "Leo", startMonth: 7, startDate: 23, endMonth: 8, endDate: 22 },
      { name: "Virgo", startMonth: 8, startDate: 23, endMonth: 9, endDate: 22 },
      { name: "Libra", startMonth: 9, startDate: 23, endMonth: 10, endDate: 22 },
      { name: "Scorpio", startMonth: 10, startDate: 23, endMonth: 11, endDate: 21 },
      { name: "Sagittarius", startMonth: 11, startDate: 22, endMonth: 12, endDate: 21 },
      { name: "Capricorn", startMonth: 12, startDate: 22, endMonth: 12, endDate: 31 },
      { name: "Capricorn", startMonth: 1, startDate: 1, endMonth: 1, endDate: 19 } // Capricorn for December 22 - December 31
    ];
  
    // Find the corresponding zodiac sign based on the birth date and month
    var zodiacSign = null;
    var zodiacImage = null;
    var zodiacSignType = null;
    var zodiacSignDescription = null;
    for (var i = 0; i < zodiacSigns.length; i++) {
      var sign = zodiacSigns[i];
      if (
        (birthMonth === sign.startMonth && birthDay >= sign.startDate) ||
        (birthMonth === sign.endMonth && birthDay <= sign.endDate)
      ) {
        zodiacSign = sign.name;
        break;
      }
    }
    //Set Zodiac Sign Types + Descriptions
    if(zodiacSign == "Capricorn"){
      zodiacImage = 12;
      zodiacSignType = 'Sign Type: Earth \u{1F30D}';
      zodiacSignDescription = 'Capricorns are masters of discipline. The wringing of the hands, the constant reminders, the exacting structure, the ever-increasing goals, the tidal wave of self-criticism that lasts forever. They are the ultimate perfectionists. They can be so absorbed in their own internal monologue that it becomes impossible to get them to look away from themselves. Capricorns are often called “workaholics."';
    }
    if(zodiacSign == "Aquarius"){
      zodiacImage = 1;
      zodiacSignType = "Sign Type: Air \u{1F32C}";
      zodiacSignDescription = "Aquarians are archetypal outcasts. This doesn't mean they're loners. In fact, they thrive in large groups—charming you with their peculiar senses of humor, intriguing you with fun facts about the history of disposable straws, or convincing you to join their reading groups. The alienation they feel is often self-imposed—a result of their knee-jerk contrarianism, rather than a lack of social intelligence. They try to be weird. Aquarians hang grapefruit rinds from the wall and call it art, they pretend to actually like noise music, they saturate their internal monologues with SAT words.";
    }
    if(zodiacSign == "Pisces"){
      zodiacImage = 2;
      zodiacSignType = "Sign Type: Water \u{1F30A}";
      zodiacSignDescription = "Describing a Pisces' personality can be difficult because Pisces tend to evade distinction. Their behavior changes significantly based on who they're around. Pisces are just permeable membranes that pensively let things flow through them. They are cerebral sea sponges. They are boundless, diluting themselves with larger personalities to avoid having to form coherent identities.";
    }
    if(zodiacSign == "Aries"){
      zodiacImage = 3;
      zodiacSignType = "Sign Type: Fire \u{1F525}";
      zodiacSignDescription = "At their core, Aries do things their own way. They are unafraid of conflict, highly competitive, and honest. They throw themselves at the world eagerly and without fear. Aries are driven by a desire to prove themselves and their strength. They have high energy, and are competitive and ambitious. They naturally take charge because they are good at initiating new projects. They can also be impatient, but are naturally active and don't like to waste time.";
    }
    if(zodiacSign == "Taurus"){
      zodiacImage = 4;
      zodiacSignType = "Sign Type: Earth \u{1F30D}";
      zodiacSignDescription = "Tauruses are the human equivalent of moss. A handmade wooden chair. They are normally satisfied with the way things are. They embody stability. Sitting in a patch of grass admiring the breeze. When everything else seems to be falling apart, Tauruses are a rock of dependability in an oasis of calm. Practical knowledge and experience is their modus operandi.";
    }
    if(zodiacSign == "Gemini"){
      zodiacImage = 5;
      zodiacSignType = "Sign Type: Air \u{1F32C}";
      zodiacSignDescription = "Geminis are very intelligent and pick up knowledge quickly. They are perceptive, analytical, and often very funny. They have an unreserved, childlike curiosity, always asking new questions.Geminis have an uncanny ability to size up a person's character in a matter of seconds, even if they only just met them. If someone's bluffing, they'll be the first to notice. They are great communicators because they tend to be very responsive and sensitive listeners.";
    }
    if(zodiacSign == "Cancer"){
      zodiacImage = 6;
      zodiacSignType = "Sign Type: Water \u{1F30A}";
      zodiacSignDescription = "A Cancer's personality is like wading chest deep in a lake of warm water. It feels sparkling and cool while you're in the shallow end, but you know that if you were to dive in, it would feel warm. The self-awareness of a Cancer is like the tides-constantly moving in and out of focus. Their personalities are layered. Cancers have many moods, some of which are contradictory, but they also have a deep, core self that persists.";
    }
    if(zodiacSign == "Leo"){
      zodiacImage = 7;
      zodiacSignType = "Sign Type: Fire \u{1F525}";
      zodiacSignDescription = "Leos are bold, warm, and loving. They are also the ultimate performers. They can dazzle with the theatrical flair of a Broadway star and the charisma of a politician. They are captivating personalities. No matter how quickly they've just been introduced to a topic, they can speak eloquently about almost anything because they have such a way with words.";
    }
    if(zodiacSign == "Virgo"){
      zodiacImage = 8;
      zodiacSignType = "Sign Type: Earth \u{1F30D}";
      zodiacSignDescription = "Virgos are known for being perfectionists. They are known for their attention to detail, which helps them find patterns where there are none. At times, Virgos can be finicky and critical to a fault.It's true that Virgos are very particular, but that doesn't necessarily mean that they keep neat spaces. Their particularities and habits don't necessarily line up with traditional views of cleanliness. They could live in what looks like a Tasmanian devil-style dust storm ruin, but still impose a “no shoes in the house” or “no outside clothes on the bed” rule. Maybe their house looks cluttered, but they still know where everything is. Everything has its place.";
    }
    if(zodiacSign == "Libra"){
      zodiacImage = 9;
      zodiacSignType = "Sign Type: Air \u{1F32C}";
      zodiacSignDescription = "Libras are difficult to really understand because they seem so contradictory. They're simultaneously extroverted and introverted, strategic and spontaneous, focused and intuitive. This variability makes it difficult to pin down their true character. They are an entire constellation of personalities. Libras are different depending on who they're around. This is because they value empathy and want to be receptive. They can be other people's mirrors. While they have strong opinions about other people, it can take a long time for them to understand themselves.";
    }
    if(zodiacSign == "Scorpio"){
      zodiacImage = 10;
      zodiacSignType = "Sign Type: Water \u{1F30A}";
      zodiacSignDescription = "A Scorpio's personality is a chasm of infinite complexity (or at least how they project themselves). They are difficult people to get to know because they are psychological trap doors."
    }
    if(zodiacSign == "Sagittarius"){
      zodiacImage = 11;
      zodiacSignType = "Sign Type: Fire \u{1F525}";
      zodiacSignDescription = "Sagittarians are the ultimate empiricists. They will always choose principles over feelings and will often question who they are. They move from job to job, philosophy to philosophy, belief to belief. They are explorers of the human condition and are unafraid of change. Sagittarians feel like the world is their playground. They love to explore the unknown. At their core, they want to understand how the world works.";
    }
  
    // Display the result
    if (zodiacSign) {
      // Render Signs
      var imageElement1 = document.createElement("img");
      imageElement1.src = "images/signs/" + zodiacImage + ".png";
      imageElement1.width = 50;
      imageElement1.height = 50;

      // Render Stars
      var imageElement2 = document.createElement("img");
      imageElement2.src = "images/stars/" + zodiacImage + ".png";
      imageElement2.width = 50;
      imageElement2.height = 50;

      var resultElement = document.getElementById("result");
      resultElement.innerHTML = "Your zodiac is: " + zodiacSign + "<br>" +
                                zodiacSignType + "<br><br>";

      var descriptionElement = document.createElement("p");
      descriptionElement.textContent = zodiacSignDescription;
      resultElement.appendChild(descriptionElement);
      descriptionElement.style.fontSize = "14px";

      resultElement.append(imageElement1);
      resultElement.append(imageElement2);
    }
     else {
      document.getElementById("result").innerHTML = "Unable to determine your zodiac sign.";
    }
}
  