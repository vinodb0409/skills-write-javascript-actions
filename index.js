<<<<<<< HEAD
name: Fetch Dad Jokes

on:
  workflow_dispatch:

jobs:
  fetch_jokes:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Fetch Dad Jokes
        id: fetch_jokes
        run: |
          npm install axios
          const axios = require('axios');
          async function getJoke() {
            const response = await axios.get('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } });
            return response.data.joke;
          }
          getJoke().then(joke => {
            console.log(`::set-output name=joke::${joke}`);
          });
=======
import core from '@actions/core';
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
>>>>>>> 1aeb389 (Add ncc build script and bundled dist/index.js)
