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
  
    // Display the result
    if (zodiacSign) {
      document.getElementById("result").innerHTML = "Your zodiac sign is: " + zodiacSign;
    } else {
      document.getElementById("result").innerHTML = "Unable to determine your zodiac sign.";
    }
  }
  