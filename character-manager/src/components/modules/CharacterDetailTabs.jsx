import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

// TabPanel コンポーネント
function TabPanel({ children, value, index }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
        >
            {value === index && (
                <Box
                    sx={{
                        p: 3,
                        borderBottom: "3px solid #8c7851",
                        borderLeft: "3px solid #8c7851",
                        borderRight: "3px solid #8c7851",
                        borderBottomLeftRadius: "4px",
                        borderBottomRightRadius: "4px",
                    }}
                >
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

// StyledTabs コンポーネント
const StyledTabs = styled(Tabs)({
    borderTop: "3px solid #8c7851",
    borderLeft: "3px solid #8c7851",
    borderRight: "3px solid #8c7851",
    borderBottom: "3px solid #8c7851",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
});

// StyledTab コンポーネント
const StyledTab = styled(Tab)({
    "&.Mui-selected": {
        backgroundColor: "#f9f4ef",
        borderBottom: "none",
    },
});

// CharacterDetailTabs コンポーネント
export default function CharacterDetailTabs({ dInfo }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            {/* タブのヘッダー部分 */}
            <StyledTabs value={value} onChange={handleChange} aria-label="Character Detail Tabs">
                {dInfo.map((tab, index) => (
                    <StyledTab
                        key={index}
                        label={tab.Name}
                        id={`tab-${index}`}
                        aria-controls={`tabpanel-${index}`}
                    />
                ))}
            </StyledTabs>

            {/* タブの内容 */}
            {dInfo.map((tab, index) => (
                <TabPanel key={index} value={value} index={index}>
                    {tab.Contents}
                </TabPanel>
            ))}
        </Box>
    );
}