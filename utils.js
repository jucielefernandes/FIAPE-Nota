export const formatDate = (date) => 
Intl.DateTimeFormat(navigator.language,{dateStyle:"short",timeStyle: "short"}).format(date);