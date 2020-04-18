import * as React from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {LocalizationContext, localizedStrings } from './App.context';

 
function App() {
  //const useLang = () => React.useContext(LocalizationContext);

  const [value, setValue] = React.useState('fr');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event.target.value=",event.target.value)
    setValue((event.target as HTMLInputElement).value);
  };

  const LangPicker = () => {
    return (
      <LocalizationContext.Consumer>
        { 
          (_lang) => { console.log("_lang=",_lang, _lang.value, localizedStrings[_lang.value] );
            const ls = localizedStrings[_lang.value]
            const localize = (v: string) => { return ls[v] ? ls[v] : ls['StringMissing']; };
            return (
            <Paper>
            <FormControl component="fieldset">
              <FormLabel component="legend">{ ls['PickLang'] }</FormLabel>
              <RadioGroup aria-label="lang" name="lang1" value={value} onChange={handleChange}>
                <FormControlLabel value="en" control={<Radio />} label={ localize('English') } />
                <FormControlLabel value="fr" control={<Radio />} label={ localize('French') } />
                <FormControlLabel value="el" control={<Radio />} label={ localize('Greek') } />
                <FormControlLabel value="en" control={<Radio />} label={ localize('Other') } />
              </RadioGroup>
            </FormControl>
            </Paper>
          )}
        }
      </LocalizationContext.Consumer>
    )
  };
  
  return (
    <LocalizationContext.Provider value={{ value }}>
      <LangPicker />
  </LocalizationContext.Provider>

  );
}

export default App;

/*

const Header = () => {
  return <AppContext.Consumer>
  {
    ({authenticated}) => {
      if(authenticated) {
        return <h1>Logged in!</h1>
      }
      return <h1>You need to sign in</h1>
    }
  }
  </AppContext.Consumer>
}

*/
