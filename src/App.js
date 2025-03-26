import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [userId, setUserId] = useState('');
  const [recommendations, setRecommendations] = useState([]);
const getRecommendations = async () => {
 try {
 const response = await axios.get(`http://localhost:5000/recommend?user_id=${userId}`);
 setRecommendations(response.data);
 } catch (error) {
 console.error("There was an error fetching the recommendations!", error);
 }
 };
return (
 <div className="App">
 <h1>Movie Recommendation System</h1>
 <input
 type="number"
 placeholder="Enter User ID"
 value={userId}
 onChange={(e) => setUserId(e.target.value)}
 />
 <button onClick={getRecommendations}>Get Recommendations</button>
 <ul>
 {recommendations.map((movie, index) => (
 <li key={index}>{movie}</li>
 ))}
 </ul>
 </div>
 );
 }
export default App;