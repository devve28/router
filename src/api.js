
export const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
      throw error;
    }
  };
  