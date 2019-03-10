/**
 * Dates
 *
 */
const getCurrentDate = () => {
  const today = new Date();

  return {
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear(),
    display: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
  }
}

const getMaxBirthYear = () => {
  return getCurrentDate().year - 18;
}

const birthYears = () => {
  let years = [];
  for(let i = 1950; i <= getMaxBirthYear(); i++) {
    years.push(i);
  }
  return years.reverse();
}

const onlyAlphaSpaces = (val) => /^[a-z][a-z\s]*$/i.test(val);

const isInt = (val) => val && Number.isInteger(parseInt(val)) || false;

const hasOnlySpaces = (val) => !val.replace(/\s/g, '').length;

const intBetween = (val, min, max) => {
  const v = parseInt(val);
  return isInt(v) && v >= min && v <= max || false;
}

const activities = [
  { label: 'Καθόλου', val: 1.2 },
  { label: 'Ελάχιστη', val: 1.375 },
  { label: 'Μέτρια', val: 1.55 },
  { label: 'Υψηλή', val: 1.725 },
  { label: 'Πολύ Υψηλή', val: 1.9 }
];

const alergyList = [
  { label: 'Ξηροί Καρποί', val: 'nuts' },
  { label: 'Γάλα ή  / και Γαλακτοκομικά', val: 'dairy' },
  { label: 'Αυγά', val: 'eggs' },
  { label: 'Σιτάρι / Σιτηρά', val: 'wheat' },
  { label: 'Σόγια', val: 'soy' },
  { label: 'Ψάρια', val: 'fish' },
  { label: 'Καταναλώνω τρόφιμα χωρίς γλουτένη', val: 'gluten' },
  { label: 'Καταναλώνω τρόφιμα χωρίς λακτόζη', val: 'lactose' }
];

const dietTypeList = [
  { label: 'Τρώω τα πάντα', val: 'omnivore'},
  { label: 'Δεν τρώω κόκκινο κρέας (μοσχάρι, χοιρινό, αρνί)', val: 'no_red_meat'},
  { label: 'Τρώω μόνο ψάρια (όχι κρέας / όχι κοτόπουλο)', val: 'only_fish'},
  { label: 'Vegetarian – Δεν τρώω κρέας, θαλασσινά, κοτόπουλο κ.λπ.', val: 'vegeterian'},
  // { label: 'Vegan – Δεν τρώω προϊόντα ζώων.', val: 'vegan'},
];

const carbTypeList = [
  { label: 'Τρώω τροφές με υδατάνθρακα', val: 'all_carb'},
  { label: 'Τρώω ελάχιστη ποσότητα υδατάνθρακα', val: 'min_carb'},
  { label: 'Κετογονική – Χαμηλή σε υδατάνθρακα, υψηλή σε λιπαρά', val: 'keto'},
  { label: 'Χαμηλού Γλυκαιμικού δείκτη ( διαβητικός / προδιαβητικός )', val: 'low_gi'},
];

const dietSituationals = [
  { label: 'Νηστεύω (κάθε Τετάρτη & Παρασκευή)', val: 'fast_wed_fri'},
  { label: 'Καταναλώνω μικρή ποσότητα αλατιού', val: 'low_salt'},
  { label: 'Καταναλώνω τρόφιμα για χαμηλή χοληστερίνη', val: 'low_cholest'},
  { label: 'Καταναλώνω τρόφιμα για χαμηλά τριγλυκερίδια', val: 'low_triglyc'},
];

const mealTimes = [
  { label: 'Πρωινό', val: 'breakfast'},
  { label: 'Δεκατιανό', val: 'brunch'},
  { label: 'Μεσημεριανό', val: 'lunch'},
  { label: 'Απογευματινό σνακ', val: 'snack'},
  { label: 'Βραδινό', val: 'dinner'},
];

const validateEmail = (email) => {
  // eslint-disable-next-line
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}

export {
  birthYears,
  onlyAlphaSpaces,
  isInt,
  hasOnlySpaces,
  intBetween,
  activities,
  alergyList,
  dietTypeList,
  carbTypeList,
  dietSituationals,
  mealTimes,
  getCurrentDate,
  getMaxBirthYear,
  validateEmail
}
