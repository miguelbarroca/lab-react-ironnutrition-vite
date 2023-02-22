// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';

// Iteration 5
function Search({search, setSearch}) {
  const handleChange = (event) => {
    setSearch(event.target.value);
  }
    

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" placeholder="Search here" onChange={handleChange} />
    </>
  );
}

export default Search;