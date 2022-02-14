import { useState, useEffect } from "react";
import classes from "./GitLanguages.module.css";

function GitLanguages(props) {
  const [langs, setLangs] = useState([]);

  let url = "";

  //   manipulating the gitUrl enterd in the form in order to
  //   use the gihub api and get the languages used in the repo
  if (props.gitUrl) {
    url = props.gitUrl.replace("github.com/", "api.github.com/repos/");
    url = url.concat("/languages");
    console.log(url);
  }

  useEffect(() => {
    if (url !== "") {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const languages = [];
          for (var key in data) {
            languages.push(key);
          }
          setLangs(languages);
        });
    }
  }, [setLangs, url]);

  return (
    <div className={classes.list}>
      {langs.map(element => (
        <div className={classes.langs} key={element}>
          {element}
        </div>
      ))}
    </div>
  );
}

export default GitLanguages;
