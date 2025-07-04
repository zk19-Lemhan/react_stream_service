/**
 * Data processing module
 */

const config = {
  apiUrl: process.env.API_URL || 'http://localhost:3000',
  timeout: 5000,
  maxRetries: 3
};

function processData(data) {
  if (!Array.isArray(data)) {
    throw new TypeError('Input must be an array');
  }
  
  const results = data.map((item, index) => ({
    id: index,
    value: item,
    processed: true,
    timestamp: new Date().toISOString()
  }));
  
  return {
    count: results.length,
    data: results,
    status: 'success'
  };
}

async function fetchData(endpoint) {
  try {
    const response = await fetch(`${config.apiUrl}${endpoint}`, {
      timeout: config.timeout
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

module.exports = { processData, fetchData, config };

// Update: commit #4

// Update: commit #12

// Update: commit #17

// Update: commit #22

// Update: commit #23

// Update: commit #27

// Update: commit #31

// Update: commit #43

// Update: commit #45
