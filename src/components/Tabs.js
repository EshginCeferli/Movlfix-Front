import { Box, Tab, Tabs, Typography } from '@material-ui/core';
import { useState } from 'react';

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box>
      <Box>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Box>
            <Typography>The first tab</Typography>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <Typography>The second tab</Typography>
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <Typography>The third tab</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default App;