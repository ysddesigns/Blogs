// Ever struggled with form validation?
// Here's a neat React code snippet that solves it!

const validateForm = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }
  return errors;
};
// Yusuff smart

//  useEffect
// It allows you to perform side effects in function components.
// It runs after render and can depend on variables to rerun
// the effect when those variables change.
// #ReactHooks #CodeNewbie #WebDevelopment";

useEffect(() => {
  // Code to run on component mount/unmount
  return () => {
    // Cleanup function
  };
}, [dependencies]); //Dependency array

// Use it to fetch data, update the DOM,
// and more efficiently handle lifecycle events

// Yusuff Smart

const [theme, setTheme] = useState("light");
const toggleTheme = () => {
  setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
};
// Share your solutions in the comments!
// Yusuff Smart

https://github.com/ysddesigns/Tracker-App