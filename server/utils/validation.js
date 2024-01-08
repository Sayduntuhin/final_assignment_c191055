const Validation = function (title, amount, type, cat){
    const errors = [];
    if (title.length < 5) {
        errors.push("Title is too short");
    }
    if (amount < 0) {
        errors.push("Value must be positive");
    }
    if (!["income", "expense"].includes(type)) {
        errors.push("Invalid type - please use expense or income");
    }
    if(cat === "category"){
        errors.push("Category was not selected properly");
    }

    if (errors.length > 0) {
        console.log(errors);
        return true;
    }else{
        return false;
    }
  }

  module.exports = Validation;