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

export const date_valid_formatter = (date:Date) => {
  const currenDate = new Date(date);

  var day = currenDate.getDate();
  // var tempday = day<10 ? `0${day}`:  day;
  var tempday = day;
  // 23
  
  var month = currenDate.getMonth() + 1; // month is 0 as january and 11 as december so plus 1 to get actual month;
  // var tempmonth = month<10 ? `0${month}`:  month;
  var tempmonth = month;
  // 8

  var year = currenDate.getFullYear();
  // 2022

  // format is "2014-01-29"
  const newDate = year + "-" + tempmonth + "-" + tempday;

  return date !==null ? newDate : date;
}


export const onlyNumbers = (e:any) => {
  // setSignup({...signup, mobile: e.detail.value!.replace(/\D/g, '')});
  return e.detail ?  e.detail.value!.replace(/\D/g, '') : e.target.value.replace(/\D/g, '') ;
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
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
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

export const PasswordPreview = (type:any, setType:any) => {
  type === "password" ? setType("text") : setType("password");
}

// Convert a Base64-encoded string to a File object
export function base64StringtoFile (base64String:any, filename:any) {
  var arr = base64String.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, {type: mime})
}

// Extract an Base64 Image's File Extension
export function extractImageFileExtensionFromBase64 (base64Data:any) {
  return base64Data.substring('data:image/'.length, base64Data.indexOf(';base64'))
}

export function truncate (source:any, size:any) {
  return source.length > size ? source.slice(0, size - 1) + "…" : source;
}


