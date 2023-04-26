// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
// Array of API URLs to fetch da
const fetchData = async (url) => {
  const startTime = performance.now();
  await fetch(url);
  const endTime = performance.now();
  return endTime - startTime;
};

// Function to compare performance of Promise.all and Promise.any
const comparePerformance = async () => {
  try {
    const allStartTime = performance.now();
    await Promise.all(apiUrls.map(url => fetchData(url)));
    const allEndTime = performance.now();
    const allTimeTaken = allEndTime - allStartTime;
    document.getElementById('output-all').textContent = allTimeTaken.toFixed(2);
  } catch (error) {
    document.getElementById('output-all').textContent = 'Error';
  }

  try {
    const anyStartTime = performance.now();
    await Promise.any(apiUrls.map(url => fetchData(url)));
    const anyEndTime = performance.now();
    const anyTimeTaken = anyEndTime - anyStartTime;
    document.getElementById('output-any').textContent = anyTimeTaken.toFixed(2);
  } catch (error) {
    document.getElementById('output-any').textContent = 'Error';
  }
};

// Call the function to compare performance on page load
window.onload = comparePerformance;
