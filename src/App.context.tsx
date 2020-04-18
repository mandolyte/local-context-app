import * as React from 'react';

interface localizedStringsIF {
    [key: string]: string
}
export const localizedStrings: {[langid:string]: localizedStringsIF} = {
    en:{
        English:"English",
        French:"French",
        Greek: "Greek",
        Other:"Other",
        PickLang:"Pick a Language",
        /* do not remove these two */
        StringMissing:"String Id missing",
        LangNotSupported: "Language not supported"
    },
    fr: {
      English:"anglais",
      French:"français",
      Greek: "grec",
      Other:"autre",
      PickLang: "Choisissez une langue",
      /* do not remove these two */
      StringMissing:"Identifiant de chaîne manquant",
      LangNotSupported: "Langue non prise en charge"
  },
  el: {
    English:"Αγγλικά",
    French:"γαλλική γλώσσα",
    Greek: "Ελληνικά",
    Other:"άλλα",
    PickLang: "Διαλέξτε μια γλώσσα",
    /* do not remove these two */
    StringMissing:"Identifiant de chaîne manquant",
    LangNotSupported: "Langue non prise en charge"
}
};
const langDefault: localizedStringsIF = localizedStrings.en;

export const LocalizationContext = React.createContext(langDefault);

type Props = {
    children: React.ReactNode;
};

/*
export const LocalizationProvider = ({ children }: Props) => {
    const [lang, setLang] = React.useState(langDefault);
  
    React.useEffect(() => {
      setLang(lang);
    }, [lang]);
    return (
      <LocalizationContext.Provider value={lang}>{children}</LocalizationContext.Provider>
    );
};
*/