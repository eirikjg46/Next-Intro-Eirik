// Import the Layout component
import Layout from '../src/components/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Quiz = () => {
  const [quiz, setQuiz] = useState([]);

  const getQuizzes = async () => {
    try {
      // GET-request til /api/quiz
      const response = await axios.get("/api/quiz");

      // response.data kommer fra axios
      // success er noe som jeg har laget i responsen
      if (response?.data?.success) {
        // oppdaterer state med data fra API
        setQuiz(response.data.data);
      }
    } catch (error) {
      // console.log av feilen
      console.log(error?.response?.data);
    }
  };

  // trigger henting av data når komponenten lages
  useEffect(() => {
    getQuizzes();
  }, []);

  return (
    <Layout> {/* Wrap your content with the Layout component */}
      <h1>Quiz</h1>
      {/* Kun for å debugge å se hva som kommer tilbake */}
      <section>{JSON.stringify(quiz)}</section>
    </Layout>
  );
};

export default Quiz;
