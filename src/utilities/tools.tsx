import axios from 'axios';


export const date_formatter = (date:any) => {
    const today = new Date();
    var givenDate;
    if(typeof date == "undefined" || date==="")
    {
      givenDate = new Date();
    } else {
      givenDate = new Date(date);
    }
    
    if(today.toDateString() == givenDate.toDateString())
    {
      return "Today";
    }
    else if(
        today.getFullYear() === givenDate.getFullYear() &&
        today.getMonth() === givenDate.getMonth() &&
        (today.getDate() - givenDate.getDate() == 1)
        )
    {
      return "Yesterday";
    }
    else if(
      today.getFullYear() === givenDate.getFullYear() &&
      today.getMonth() === givenDate.getMonth() &&
      ((today.getDate() - givenDate.getDate() >= 1) && (today.getDate() - givenDate.getDate() <= 6))
      )
    {
      const options :Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
    };
    const createDate = givenDate;
    const newDate = new Intl.DateTimeFormat("en", options).format(createDate);
    return newDate;
    }
    else
    {
      const options :Intl.DateTimeFormatOptions = { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric', 
      };
      const createDate = givenDate;
      const newDate = new Intl.DateTimeFormat("en", options).format(createDate);
      return newDate;
    }
  }

export const time_formatter = (date:Date) => {
  const options :Intl.DateTimeFormatOptions = { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: true
  };
  const createDate = new Date(date);
  const newDate = new Intl.DateTimeFormat("en", options).format(createDate);
  return newDate;
}

export const date_converter = (date:any) => {
  return new Date(date);
}

export const onlyNumbers = (e:any) => {
  // setSignup({...signup, mobile: e.detail.value!.replace(/\D/g, '')});
  return e.detail.value!.replace(/\D/g, '');
};

export const ValidateEmail = (input:any) => {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {

  //   alert("Valid email address!");

    return true;

  } else {

  //   alert("Invalid email address!");
    return false;

  }

};

export const PasswordValidator = (inputtxt:any) => { 
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  if(inputtxt.match(passw)) 
  { 
      // alert('Correct, try another...')
      return true;
  }
  else
  { 
      // alert('Wrong...!')
      return false;
  }
}

export const MobileCleaner = (inputNumber:any) => { 
  for (var i = 0; i < inputNumber.length; i++) {
 
    // check for the first non-zero character
    if (inputNumber.charAt(i) != '0') {
        // return the remaining string
        let res = inputNumber.substr(i);
        return res;
    }
  }

  // If the entire string is traversed
  // that means it didn't have a single
  // non-zero character, hence return "0"
  return "0";
}

export const MobileCombiner = (area:any, number:any) => {
  const phone = "+"+area + number;
  return phone;
}

export const GetViewPortSize = () => {
  return `${window.innerHeight}px`;
}

export const LetterCount = (text:any) => {
  var cleaned_text = text.split('');
  var final_text = cleaned_text.filter( (item:any) => {
		return (item != ' ');
	}).length;

  return final_text;
}




