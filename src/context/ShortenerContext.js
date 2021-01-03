import { createContext, useState } from 'react';

export const ShortenerContext = createContext();

const formValidation = value => {
  if (value.trim() === '') {
    return true;
  }
  return false;
};

const ShortenerProvider = ({ children }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => setValue(e.target.value);

  const getShorterUrl = async () => {
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${value}`
      );
      const data = await response.json();
      if (data.ok) {
        const { full_short_link, original_link } = data.result;

        setIsLoading(false);
        setResults(prev => [
          {
            id: Math.floor(Math.random() * 1234),
            full_short_link,
            original_link,
            copied: false,
          },
          ...prev,
        ]);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validate = formValidation(value);

    if (validate) {
      return setError(true);
    }
    setResults(prev => {
      if (prev.length === 5) {
        prev.pop();
      } else {
        return prev;
      }
    });
    setIsLoading(true);
    setError(false);
    getShorterUrl();
    setValue('');
  };

  const toggleCopyButton = id => {
    setResults(prev =>
      prev.map(item =>
        item.id === id ? { ...item, copied: true } : { ...item, copied: false }
      )
    );
  };

  const contextValue = {
    value,
    error,
    results,
    isLoading,
    handleChange,
    handleSubmit,
    toggleCopyButton,
  };

  return (
    <ShortenerContext.Provider value={contextValue}>
      {children}
    </ShortenerContext.Provider>
  );
};

export default ShortenerProvider;
