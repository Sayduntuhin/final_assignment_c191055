export function FormInputValidation(desc,value, cat){
  const errors = [];
  if (desc.length === 0) {
    errors.push("Please enter the description");
  }
  if (value.length === 0) {
    errors.push("Please enter the value");
  }
  if (cat === "category"){
    errors.push("Please select a category");
  }
  if (errors.length > 0) {
    alert(errors);
    return false;
  }else{
    return true;
  }
}