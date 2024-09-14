// Multiple Api call with promise==========================(1st Method)=====================================

const api1 = 'https://jsonplaceholder.typicode.com/posts/1';
const api2 = 'https://jsonplaceholder.typicode.com/posts/2';
const api3 = 'https://jsonplaceholder.typicode.com/posts/3';

const fetchData = url => {
  return fetch(url).then(response => response.json());
};

// Call multiple APIs
Promise.all([fetchData(api1), fetchData(api2), fetchData(api3)])
  .then(([data1, data2, data3]) => {
    // console.log('Data from API 1:', data1);
    // console.log('Data from API 2:', data2);
    // console.log('Data from API 3:', data3);
    console.log([data1, data2, data3]);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Multiple Api call with promise==========================(2nd Method)=====================================

// Function to fetch data from a given URL
const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

// Async function to call multiple APIs
const fetchAllData = async () => {
  try {
    const [data1, data2, data3] = await Promise.all([
      fetchData(api1),
      fetchData(api2),
      fetchData(api3)
    ]);

    console.log('Data from API 1:', data1);
    console.log('Data from API 2:', data2);
    console.log('Data from API 3:', data3);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Multiple Api call with promise==========================(3rd Method)=====================================

// Function to fetch data from a given URL
const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

// Async function to call APIs sequentially
const fetchSequentialData = async () => {
  try {
    const data1 = await fetchData(api1);
    console.log('Data from API 1:', data1);
    
    const data2 = await fetchData(api2);
    console.log('Data from API 2:', data2);
    
    const data3 = await fetchData(api3);
    console.log('Data from API 3:', data3);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Call the async function
fetchSequentialData();
