// Import the Layout component
import Layout from '../src/components/Layout';
import { SetStateAction, useState } from 'react';
import axios from 'axios';

const CreateQuiz = () => {
  const [quiz, setQuiz] = useState([]);
  const [error, setError] = useState(null);
  const [question, setQuestion] = useState('');

  // håndtere endringer i input
  const handleQuestionChange = (event: { target: { value: SetStateAction<string> } }) => {
    setQuestion(event.target.value);
  }

  // trigger sending av data til API
  const createQuiz = async () => {
    try {
      const response = await axios.post('/api/quiz', { question });

      if (response?.data?.success) {
        setQuiz(response.data.data);
      }
    } catch (err) {
      // Check if err object has a response property
      if (err?.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        // Handle other types of errors or display a generic error message
        setError("An error occurred while communicating with the server.");
      }
    }
  }

  // håndtere sending av skjema
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    // forhindre default adferd
    event.preventDefault();
    // trigge funksjonen som sender data til API
    await createQuiz();
  }

  // Hvis feil gi beskjed om dette til brukeren
  // Vi skal håndtere denne bedre i fremtidig leksjoner
  if (error) {
    return <p>Noe gikk galt: {error}</p>;
  }

  return (
    <Layout> {/* Wrap your content with the Layout component */}
      <h1>Create Quiz</h1>
      <form style={{ marginBottom: '2rem' }} onSubmit={handleSubmit}>
        <label htmlFor="question">Lag nytt spørsmål</label>
        <input
          id="question"
          type="text"
          name="question"
          value={question}
          onChange={handleQuestionChange}
        />
        <button type="submit">Send</button>
      </form>
      <section>{JSON.stringify(quiz)}</section>
    </Layout>
  );
}

export default CreateQuiz;