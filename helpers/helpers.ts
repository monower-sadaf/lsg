import AddBanglaCalendar from '../_utils/banglaCalenderUtils.js';


export const imagePath = 'http://lsg-portal-api.mysoftheaven.com/storage/';


 const banglaMonthNames = [
      "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
      "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
    ];


    export function en2bn(englishNumber: any) {
      const englishToBanglaMap:any = {
          '0': '০',
          '1': '১',
          '2': '২',
          '3': '৩',
          '4': '৪',
          '5': '৫',
          '6': '৬',
          '7': '৭',
          '8': '৮',
          '9': '৯',
      };
  
      const convertedNumber = englishNumber.toString()
          .split('')
          .map((digit: any) => englishToBanglaMap[digit] || digit)
          .join('');
  
      return convertedNumber;
  }

export const bangla_month = (date: any) => {
  const split_data = date.split('/');
  const day = split_data[0];
  const month = split_data[1];
  const year = split_data[2];

  return `${ en2bn(day)} ${banglaMonthNames[parseInt(month) - 1]}, ${en2bn(year)}`;
}

export function baseUrl() {
      return process.env.NEXT_PUBLIC_ENV_BASE_URL
}

export const relative_image_path = (imageName: string) => {
  return `/images/`+ imageName;
}

export const convertEnglishDateToBangla = ($d: Date) => {
      const date = new Date($d);
    
      const options:any = { weekday: 'long', locale: 'bn-BD' };
      const dayNameInBangla = date.toLocaleDateString('bn-BD', options);
      const englishDay = date.getDate();
      const englishMonth = date.getMonth();
      const englishYear = date.getFullYear();
    
      const banglaDay = englishDay; // In most cases, the day remains the same
      const banglaMonth = banglaMonthNames[englishMonth];
      // const banglaYear = (englishYear - 593) // Assuming the English year 2023 is 1430 in Bangla year
      const banglaYear = (englishYear)
      return `${en2bn(banglaDay)} ${banglaMonth}, ${en2bn(banglaYear)}`;
  };

  export function dDate ($d: Date) {
      const myDate = AddBanglaCalendar(new Date($d));
      let banglaMonth = myDate.banglaMonth; // জ্যৈষ্ঠ   
      let banglaYear = myDate.banglaYear;   // ১৪২৯    
      let banglaDate = myDate.banglaDate;   // ২৩   
      let banglaCalendar = myDate.bangla;   // {month:1, year:1429, date: 23};   
      let dDate = `${banglaDate}, ${banglaMonth} ${banglaYear}`;
      return dDate;
    };

    export const dateName = ($d: Date) => {
      const date = new Date($d);
      const options:any = { weekday: 'long', locale: 'bn-BD' };
      const dayNameInBangla = date.toLocaleDateString('bn-BD', options);
      return `${dayNameInBangla}`;
    }


export const num_en_to_bn = (english_number: any) => {

  const toEn = (n: any) => n.toString().replace(/\d/g, (d: any) => "০১২৩৪৫৬৭৮৯"[d]);
  return toEn(english_number);
}

export const formateDate = (d:any) => {
  const Dt = new Date(d);
  const yyyy = Dt.getFullYear();
  let mm:any = Dt.getMonth() + 1; // Months start at 0!
  let dd:any = Dt.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  // const formattedDt = dd + '/' + mm + '/' + yyyy;
  const formattedDt = dd + '/' + mm + '/' +yyyy;

  return formattedDt;
}

export const PhoneValidate = (number: any) => {
  
  const data = number.split('');

  const firstNumber = data[0];
  const secondNumber = data[1];
  const thirdNumber = data[2];

  if(data.length != 11){
    return {
      status: false,
      message: 'ফোন নাম্বারটি 11 ডিজিট হতে হবে।'
    }
  }else if(firstNumber != 0 || secondNumber != 1 || (thirdNumber == 0 || thirdNumber == 1 || thirdNumber == 2)){
    return {
      status: false,
      message: 'ফোন নাম্বারের প্রথম তিন ডিজিট 013,014,015....019 এরকম হতে হবে।'
    }
  }else{
    return {
      status: true,
      message: 'আপনার জিজ্ঞাসাটি সঠিকভাবে গৃহীত হয়েছে।'
    }
  }



  

  /* if(number.length != 11){
    return false;
  }else if(){

  } */
}