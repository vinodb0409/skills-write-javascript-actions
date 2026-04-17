const core = require('@actions/core');
import axios from 'axios';

async function run() {
  try {
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    });
    
    const joke = response.data.joke;
    console.log('🎭 Dad Joke:', joke);
    
    core.setOutput('joke', joke);
  } catch (error) {
    core.setFailed(`Failed to fetch a dad joke: ${error.message}`);
  }
}

run();

