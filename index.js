function introduction(name) {
    if (name === "Josh") return "Hi, my name is Josh.";
    else if (name === "Nancy") return "Hi, my name is Nancy.";
}
function introductionWithLanguage(name, language) {
    if (name === "Josh" && language === "Ember.js") return "Hi, my name is Josh and I am learning to program in Ember.js.";
    else if (name === "Nancy" && language === "React") return "Hi, my name is Nancy and I am learning to program in React.";
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    if (language === "JavaScript") return "Hi, my name is Gracie and I am learning to program in JavaScript.";
    else if (language === "Python") return "Hi, my name is Gracie and I am learning to program in Python.";
}