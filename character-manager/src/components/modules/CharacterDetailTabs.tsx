import React, { useState, ReactNode } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

type TabInfo = {
  Name: string;
  Contents: ReactNode;
};
type Props = {
  dInfo: TabInfo[];
};

function TabPanel({ children, value, index }: { children: ReactNode; value: number; index: number }) {
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

const StyledTabs = styled(Tabs)({
    borderTop: "3px solid #8c7851",
    borderLeft: "3px solid #8c7851",
    borderRight: "3px solid #8c7851",
    borderBottom: "3px solid #8c7851",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
});

const StyledTab = styled(Tab)({
    "&.Mui-selected": {
        backgroundColor: "#f9f4ef",
        borderBottom: "none",
    },
});

const CharacterDetailTabs: React.FC<Props> = ({ dInfo }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
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
            {dInfo.map((tab, index) => (
                <TabPanel key={index} value={value} index={index}>
                    {tab.Contents}
                </TabPanel>
            ))}
        </Box>
    );
};

export default CharacterDetailTabs;